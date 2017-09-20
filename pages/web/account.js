/**
 * Created by zhangheng on 2017/8/21.
 */
import Layout from '../../layouts/Layout.js'
import React from 'react'
import {Modal, Button, Form, Input, Upload, Icon,Alert} from 'antd'
import BasePage from '../../components/BasePage'

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: {span: 5},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 5},
    sm: {span: 8},
  },
};
const picProps = {
  action: 'http://api.yourdomain.com/api/upload',
  listType: 'picture',
  className: 'upload-list-inline'
}

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  constructor(props) {
    super(props)
    this.state = {
      nameStatus: 'validating',
      nameMsg: '',
      idCardStatus: 'validating',
      idCardMsg: '',
      nickVisible: false,
      nickName: 'test',
      email: '',
      emailVisible: false
    }
  }

  uploadAvatar = () => {

  }
  editNickName = () => {
    this.setState({
      nickVisible: true
    })
  }
  setEmail = () => {
    this.setState({
      emailVisible: true
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  hideNickModal = () => {
    this.setState({
      nickVisible: false
    })
  }
  hideEmailModal = () => {
    this.setState({
      emailVisible: false
    })
  }

  render() {
    return (
      <Layout session={this.props.session} curPath={this.props.curPath}>
        <div className="common-box clearfix">
          <div className="account-info">
            <h2>My Available:</h2>
            <p><Icon type="pay-circle-o"/>100,000,000,000</p>
          </div>
          <div className="gray-line"></div>
          <div className="up-photos" style={{width: "500px"}}>
            <div className="avatar">
              <p>
                <img src="../static/images/kgLogo.jpeg"/>
              </p>
              <Upload {...picProps}>
                <Button>
                  <Icon type="upload"/>Upload
                </Button>
              </Upload>
            </div>
            <div className="av-information">
              <p>Account：135****8008</p>
              <p>Nickname：Test123&nbsp;&nbsp;<Button type="primary" onClick={this.editNickName}>Change</Button></p>
              <p>Bind Email：
                Not Exists&nbsp;&nbsp;<Button type="primary" onClick={this.setEmail}>Input Email</Button>
              </p>
              <p>Your Phone：135****8008</p>
              <p>Register Date：2016-03-15</p>
            </div>
          </div>
          <div className="gray-line"></div>
          <div>
            <Alert
              message="Kindly Notice"
              description="these are totally testing data, so you can ignore it"
              type="warning"
              showIcon
            />
          </div>
          <div style={{clear: "both", textAlign: "center"}}>
            <Modal
              title="Change Nickname"
              visible={this.state.nickVisible}
              onOk={this.hideNickModal}
              onCancel={this.hideNickModal}
              okText="OK"
              cancelText="Cancel"
            >
              <FormItem
                label="Nickname"
                {...formItemLayout}
              >
                <Input placeholder="type nickname" defaultValue={this.state.nickName}/>
              </FormItem>
              <div style={{textAlign: "center"}}>
                Letters,Number,'-' or '_'
              </div>
            </Modal>
            <Modal
              title="Bind Email"
              visible={this.state.emailVisible}
              onOk={this.hideEmailModal}
              onCancel={this.hideEmailModal}
              okText="OK"
              cancelText="Cancel"
            >
              <p style={{textAlign: "left", height: "60px"}}>
                you have not bound your mail yet, please do it in order to sometimes to use, thanks!
              </p>
              <FormItem
                label="email"
                {...formItemLayout}
              >
                <Input placeholder="type email" type="email" defaultValue={this.state.email}/>
              </FormItem>
            </Modal>
          </div>
        </div>
        <style jsx>{`
        .account-info{
          padding-left:50px;
        }
        .account-info p{
          text-align:center;
          color:orange;
          font-size:22px;
        }
.up-photos {
    overflow: hidden;
    width: 451px;
    margin: 50px auto 0;
}
.avatar {
    padding: 20px;
    width: 130px;
    overflow: hidden;
    float:left;
}
.avatar p {
    text-align: center;
}
.av-information p, .avatar p, .has_passed p {
    padding-bottom: 13px;
}
.avatar img {
    width: 92px;
    height: 92px;
    border: 4px solid #e2e2e2;
}
.av-information {
    padding-top: 18px;
    width: 298px;
    overflow: hidden;
}
.av-information p {
    color: #414141;
}
.av_information p a {
    padding-right: 70px;
}
.gray-line {
    width: 700px;
    margin: 20px auto;
    height: 1px;
    background-color: #dfdfdf;
    _overflow: hidden;
}

    `}</style>
      </Layout>
    )
  }
}

