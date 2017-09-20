/**
 * Created by zhangheng on 2017/9/1.
 */
import React from 'react'
import Layout from '../../layouts/Layout'
import {Icon} from 'antd'
import BasePage from '../../components/BasePage'

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  render() {
    return (
      <Layout session={this.props.session} curPath={this.props.curPath}>
        <div className="message">
          <div className="message-title"><Icon type="message" /><span>Message Center</span></div>

          <div className="no-message" style={{display: "block"}}>no unread message for now</div>
        </div>
        <style jsx>{`
          .message{
            min-height:550px;
          }
          .message-title{
            height:50px;
            font-size:24px;
            border-bottom:1px solid grey;
          }
          .no-message{
            text-align:center;
            padding:50px;
          }
        `}</style>
      </Layout>
    )
  }
}
