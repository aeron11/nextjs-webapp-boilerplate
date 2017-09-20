/**
 * Created by zhangheng on 2017/8/21.
 */
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const next = require('next')
const sass = require('node-sass')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const certKey = 'authSecret'

app.prepare()
  .then(() => {
    const server = express()

    // Request body parsing middleware should be above methodOverride
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}));

    server.use(cookieParser())

    server.get('/auth/csrf', (req, res) => {
      return res.status(200).json(
        {
          success: true,
          message: 'success got csrf',
          csrfToken: res.locals._csrf
        })
    })

    server.get('/auth/session', (req, res) => {
      let session = {
        clientMaxAge: 60000,
        csrfToken: res.locals._csrf
      }

      // Add user object to session if logged in
      if (req.user) {
        session.user = req.user
      }

      return res.status(200).json({
        success: true,
        message: 'success got session',
        session: session
      })
    })

    // Verify username and password, if passed, we return jwt token for client
    // We also include xsrfToken for client, which will be used to prevent CSRF attack
    // and, you should use random complicated key (JWT Secret) to make brute forcing token very hard
    server.post('/authenticate', (req, res) => {
      const {email, password} = req.body
      if (email === 'test@test.com' || password === '111111') {
        let token = jwt.sign({
          email: email,
          name: 'test user',
          xsrfToken: crypto.createHash('md5').update(email).digest('hex')
        }, certKey, {
          expiresIn: 60 * 60
        });
        res.status(200).json({
          success: true,
          message: 'Enjoy your token',
          token: token,
          user: {
            email: email,
            name: 'test user',
            verify: true
          }
        })
      } else {
        res.status(400).json({
          success: false,
          message: 'Authentication failed'
        })
      }
    })

    server.post('/signOut', (req, res) => {
      res.status(200).json({
        success: true,
        message: 'sign out successfully',
      })
    })

    // Authenticate middleware
    server.use(unless(['/index', '/about', '/contact', '/auth/login', '/auth/register', '/_next'], (req, res, next) => {
      const token = req.cookies['x-access-token'];
      if (token) {
        jwt.verify(token, certKey, (err, decoded) => {
          if (err) {
            res.redirect('/auth/login');
          } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
          }
        })
      } else {
        res.redirect('/auth/login');
      }
    }))

    // Api example to prevent CRSF attack
    server.post('/api/preventCRSF', (req, res, next) => {
      if (req.decoded.xsrfToken === req.get('X-XSRF-TOKEN')) {
        res.status(200).json({
          success: true,
          message: 'Yes, this api is protected by CRSF attack'
        })
      } else {
        res.status(400).json({
          success: false,
          message: 'CRSF attack is useless'
        })
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

function unless(paths, middleware) {
  return function (req, res, next) {
    let isHave = false
    paths.forEach((path) => {
      if (req.path==='/' || path === req.path || req.path.includes(path)) {
        isHave = true
        return
      }
    })
    if(/\.(?:css|jpg|png|jpeg|ico)$/i.test(req.path)){
      isHave = true
    }
    if (isHave) {
      return next()
    } else {
      return middleware(req, res, next)
    }
  }
}
