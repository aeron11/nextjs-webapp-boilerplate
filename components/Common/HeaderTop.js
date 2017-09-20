/**
 * Created by zhangheng on 2017/8/22.
 */
import React from 'react'
import Session from '../../utils/Session'
import Router from 'next/router'
import {Icon} from 'antd'

export default class HeaderTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msgCount: 1
    }
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
    }
  }

  async handleSignOut(evt) {
    evt.preventDefault()
    const session = new Session()
    let res = await session.signOut()

    if (res) {
      Router.push('/auth/login')
    } else {
      alert('some errors happened when logout！')
    }
  }

  render() {
    const session = this.props.session || null
    let loginMessage = (
      <li>
        <span>welcome to KG valley!</span>
        <span><a href="/auth/login"><Icon type="login" />SignIn</a></span>
      </li>
    )

    let regMsg = (
      <li>
        <a href="/auth/register" className="orange">SignUp</a>
      </li>
    )

    if (session && session.user) {
      loginMessage = (
        <li>
          <span>Welcome </span>
          <span title="">
            <a className="orange" href="/web/account">{session.user.name}</a>
          </span>
          <span className="gray">|</span>
          <span>
          <a onClick={this.handleSignOut}><Icon type="logout" />SignOut</a>
          </span>
        </li>
      )

      regMsg = (
        <li>
          <a href="/user/messages" className="unread"><Icon type="message" />Messages({this.state.msgCount})</a>
        </li>
      )
    }

    return (
      <div className="header-top">
        <div className="innerBox">
          <ul className="header-contact">
            <li><a href="http://m.yourdomain.com" target="_blank"><Icon type="laptop" />Mobile Web</a></li>
            <li className="gray">|</li>
            <li><a target="_blank" href="http://apps.yourdomain.com/"><Icon type="mobile" />Mobile Apps</a></li>
          </ul>
          <ul className="header-login">
            {loginMessage}
            <li className="gray">|</li>
            {regMsg}
          </ul>
        </div>
      </div>
    )
  }
}
