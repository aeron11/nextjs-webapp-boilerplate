/**
 * Created by zhangheng on 2017/9/1.
 */
import Layout from '../../layouts/Layout.js'
import React from 'react'
import {Row, Col, Button, Form, Input} from 'antd'
import BasePage from '../../components/BasePage'

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: {span: 6},
    sm: {span: 6},
  },
  wrapperCol: {
    xs: {span: 6},
    sm: {span: 10},
  },
};

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  constructor(props) {
    super(props)
    this.state = {
      oldPswStatus:'validating',
      oldPswMsg:'',
      newPswStatus:'validating',
      newPswMsg:'',
      confirmStatus:'validating',
      confirmMsg:''
    }
  }
  handleSubmit=()=>{
    alert('submitted')
  }
  render(){
    return (
      <Layout session={this.props.session} curPath={this.props.curPath}>
        <div style={{padding:"50px"}}>
        <Row>
          <Col span={18} push={6}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label="Current Password"
                  validateStatus={this.state.oldPswStatus}
                  help={this.state.oldPswMsg}
                >
                  <Input placeholder="please type current password"/>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="New Password"
                  validateStatus={this.state.newPswStatus}
                  help={this.state.newPswMsg}
                >
                  <Input placeholder="please type new password"/>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Confirm Password"
                  validateStatus={this.state.confirmStatus}
                  help={this.state.confirmMsg}
                >
                  <Input placeholder="please type confirm password"/>
                </FormItem>
                <FormItem
                  wrapperCol={{span: 12, offset: 6}}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </FormItem>
              </Form>
          </Col>
          <Col span={6} pull={18}><div className="change-pass-img png"></div></Col>
        </Row>
        </div>
        <style jsx>{`
            .change-pass-img {
                margin: 3px 0 0 16px;
                background-position: 0 -300px;
                width: 63px;
                height: 70px;
            }
        `}</style>
      </Layout>
    )
  }
}
