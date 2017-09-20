/**
 * Created by zhangheng on 2017/8/21.
 */

/**
 * A class to handle signing in and out and caching session data in sessionStore
 *
 * Note: We use XMLHttpRequest() here rather than fetch because fetch() uses
 * Service Workers and they cannot share cookies with the browser session
 * yet (!) so if we tried to get or pass the CSRF token it would mismatch.
 */
import axios from 'axios'
import { setCookie } from './utils'

export default class Session {

  constructor({req} = {}) {
    this._session = {}
    try {
      if (req) {
        // If running on server we can access the server side environment
        this._session = {
          csrfToken: req.connection._httpMessage.locals._csrf
        }

        if(req.decoded){
          this._session.user={
            email:req.decoded.email,
            name:req.decoded.name,
            verified:true
          }
        }
      } else {
        // If running on client, attempt to load session from localStorage
        this._session = Session._getLocalStore('session')
      }
    } catch (err) {
      // Handle if error reading from localStorage or server state is safe to
      // ignore (will just cause session data to be fetched by ajax)
      console.log(err)
    }
  }

  static async getCsrfToken() {
    return new Promise(async (resolve, reject) => {
      if (typeof window === 'undefined') {
        return reject(Error('This method should only be called on the client'))
      }

      try {
        const res = await axios.get(window.location.origin + '/auth/csrf')
        if (res.data.success) {
          resolve(res.data.csrfToken)
        }else{
          reject(Error('Unexpected response when trying to get CSRF token'))
        }
      } catch (error) {
        reject(Error('XMLHttpRequest error: Unable to get CSRF token'))
      }
    })
  }

  // We can't do async requests in the constructor so access is via async method
  // This allows us to use XMLHttpRequest when running on the client to fetch it
  // Note: We use XMLHttpRequest instead of fetch so auth cookies are passed
  async getSession(forceUpdate) {

    // If running on the server, return session as will be loaded in constructor
    return new Promise(async (resolve,reject)=>{
      if (typeof window === 'undefined') {
         return resolve(this._session)
      }

      // If force update is set, clear data from store
      if (forceUpdate === true) {
        this._session = {}
        Session._removeLocalStore('session')
      }

      // Attempt to load session data from sessionStore on every call
      this._session = Session._getLocalStore('session')

      // If session data exists, has not expired AND forceUpdate is not set then
      // return the stored session we already have.
      if (this._session && Object.keys(this._session).length > 0 && this._session.expires && this._session.expires > Date.now()) {
         return resolve(this._session)
      }

      try {
        const res = await axios.get(window.location.origin + '/auth/session')
        if (res.data.success) {
          this._session = res.data.session
          this._session.expires = Date.now() + this._session.clientMaxAge
          Session._saveLocalStore('session', this._session)

          resolve(this._session)
        }else{
          reject(Error('XMLHttpRequest error: Unable to get session'))
        }
      } catch (error) {
        reject(Error('XMLHttpRequest error: Unable to get session'))
      }
    })
  }

  async signin(email,password) {
    // Sign in to the server
    return new Promise(async (resolve, reject) => {
      if (typeof window === 'undefined') {
        return reject(Error('This method should only be called on the client'))
      }

      // Make sure we have session in memory
      this._session = await this.getSession()

      // Make sure we have the latest CSRF Token in our session
      this._session.csrfToken = await Session.getCsrfToken()

      try {
        const res = await axios.post(window.location.origin + '/authenticate', {email,password})
        if (res.data.success) {
          setCookie('x-access-token', res.data.token)

          this._session.user = res.data.user
          this._session.expires = Date.now() + this._session.clientMaxAge
          Session._saveLocalStore('session', this._session)

          resolve(this._session)
        }
      } catch (error) {
        console.log('error=',error);
      }
    })
  }

  async signOut() {
    // signOut from the server
    return new Promise(async (resolve, reject) => {
      if (typeof window === 'undefined') {
        return reject(Error('This method should only be called on the client'))
      }

      try {
        setCookie('x-access-token', '',-1)
        Session._removeLocalStore('session')
        const res = await axios.post(window.location.origin + '/signOut')
        if (res.data.success) {
          resolve(true)
        }
      } catch (error) {
        console.log('error: Unable to signOut,',error)
        reject(false)
      }
    })
  }

  // The Web Storage API is widely supported, but not always available (e.g.
  // it can be restricted in private browsing mode, triggering an exception).
  // We handle that silently by just returning null here.
  static _getLocalStore(name) {
    try {
      return JSON.parse(localStorage.getItem(name))
    } catch (err) {
      return null
    }
  }
  static _saveLocalStore(name, data) {
    try {
      localStorage.setItem(name, JSON.stringify(data))
      return true
    } catch (err) {
      return false
    }
  }
  static _removeLocalStore(name) {
    try {
      localStorage.removeItem(name)
      return true
    } catch (err) {
      return false
    }
  }

}
