# nextjs-webapp-boilerplate
  
  This is a WebApp boilerplate project based on Node.js platform, use Next.js,React.js,Express.js,ES6,webpack to build,using jest to do unit testing.
  This site includes some common components such as Header,Footer,Nav,BreadCrumb,Sidebar or GridList,and some pages
  which could be visit without login, and some other pages which could be visit after login.
  
  I made a simple login auth use express-session,all auth-based pages extends BasePage to validating session and user state, if not, 
  it will redirect to login page, you can login using ID: test@test.com with sixes 1 password.
  
```shell
  $ git clone it
  $ cd nextjs-webapp-boilerplate
  $ npm install
  $ npm run dev
  
```


## Run test for unit-test

```shell
  $ npm run test
```

## Run build for production 

```shell
  $ npm run build
  $ npm run start
```


## Related features
- [Node](https://nodejs.org/en/docs/)
- [Express](http://www.expressjs.com.cn/)
- [Next](https://zeit.co/blog/next)
- [express-session](https://github.com/expressjs/session)
- [connect-redis](https://github.com/tj/connect-redis)
- [React](https://facebook.github.io/react/)
- [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)
- [Sass](https://github.com/reactjs/redux)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.github.io/)
- [jest](http://facebook.github.io/jest/)
- [Istanbul](https://github.com/gotwarlost/istanbul)
- [enzyme](https://github.com/airbnb/enzyme)


### project structure
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .gitignore                # Tells git which files to be ignored
├── .next                     # Next.js built folder
├── README.md                 # This file.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── components                # components
│   ├── Common                # Common  components 
│   ├── List                  # List components  
│   ├── BasePage              # BasePage for auth session management
├── docs                      # related docs
├── layouts                   # page layout
│   ├── Layout                # user related layout  
│   ├── Main                  # home page layout  
├── pages                     # all page which can be visited
│   ├── auth                  # user auth related pages  
│   ├── list                  # list related pages  
│   ├── web                   # web pages  
│   ├── user                  # user information pages  
│   ├── _error.js             # error page
├── schema                    # data schema
├── services                  # contains all service logic and apis
├── static                    # static resources
│   ├── images                # for images
│   ├── style                 # for css
│   ├── favicon.ico           # site favicon.ico 
├── tests                     # unit test
│   ├── mocks                 # mock data folder
│   │   ├── data.json         # mock data file
│   ├── unit                  # unit test folder contains test files 
├── utils                     # utils
│   ├── Session               # manage session
├── evn-config.js             # evn config
├── next.config.js            # next.js config
└── server.js                 # app start file
```

## images

### system infrastructure
  ---------------------------------------------------------------------------------------
  ![Alt text](https://github.com/aeron11/nextjs-webapp-boilerplate/raw/master/docs/structure.png)
  
