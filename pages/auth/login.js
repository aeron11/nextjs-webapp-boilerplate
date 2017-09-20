/**
 * Created by zhangheng on 2017/8/28.
 */
import React from 'react'
import BasePage from '../../components/BasePage'
import Session from '../../utils/Session'
import Router from 'next/router'
import {Button} from 'antd'
import Meta from '../../components/Common/Meta'

export default class extends BasePage {
  static async getInitialProps({req}) {
    const session = new Session({req})
    return {session: await session.getSession(true)}
  }

  async componentDidMount() {
    // Get latest session data after rendering on client
    // Any page that is specified as the oauth callback should do this
    const session = new Session()
    this.state = {
      email: this.state.email,
      password: this.state.password,
      session: await session.getSession(true),
      errorMessage:''
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      session: this.props.session,
      errorMessage:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handlePasswordChange(evt){
    this.setState({
      password: evt.target.value.trim(),
      session: this.state.session
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value.trim(),
      session: this.state.session
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({
        errorMessage: 'email or password cannot be empty！'
      })
      return false
    }

    const session = new Session()
    session.signin(this.state.email,this.state.password)
      .then(() => {
        Router.push('/web/account')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { email, password , errorMessage } = this.state
    let signinForm = (
        <div className="login">
            <input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
            <p>
              <label htmlFor="email">Email</label><br/>
              <input name="email" type="email" placeholder="mail@example.com" id="email" value={email}
                     onChange={this.handleEmailChange}/>
            </p>
            <p>
              <label htmlFor="password">Password</label><br/>
              <input name="password" type="password" id="psw" value={password}
                     onChange={this.handlePasswordChange}/>
            </p>
            <p>
              <Button type="primary" onClick={this.handleSubmit}>Sign In</Button>
            </p>
            <p style={{color: 'red'}}>{errorMessage}</p>
        </div>
      )

    return (
      <div className="login-container">
        <Meta/>
        <h2 className="login-title">Log In Page</h2>
        <p className="login-signup">
          <span>Need a account?</span>
          <a href="/auth/register" title="signup for an account">Create an account</a>
        </p>
        {signinForm}
        <style>{`
            .login-container{
              margin-top:110px;
              width:100%;
              height:100%;
              text-align:center;
              color:#fff;
            }
            .login-title{
              height:60px;
              line-height:60px;
            }
            .login-signup{
              height:30px;
              line-height:30px;
            }
            .login-signup a{
              padding-left:15px;
            }
            .login{
              top:50%;
              left:50%;
              width: 300px;
              height: 260px;
              border: 1px solid grey;
              margin: 0 auto;
              border-radius: 5px;
            }
            .login p{
                height: 80px;
                margin: 10px 0;
            }
            .login input{
              padding-left: 10px;
              height: 40px;
              border-radius: 10px;
              width: 230px;
              margin-top: 10px;
            }

            .login button{
              width: 80px;
              height: 30px;
              border-radius: 5px;
              color: #fff;
              background-color: dodgerblue;
            }
          `}</style>
      </div>
    )
  }

}
