/**
 * Created by zhangheng on 2017/9/1.
 */
import React from 'react'
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const Divider = Menu.Divider;

const pathMap = {
  'web.account': 1,
  'web.details': 3,
  'web.orders': 2,
  'list.records': 4,
  'list.fans': 5,
  'user.basicinfo': 6,
  'user.messages': 7,
  'user.reset': 8,
  'user.points': 9
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: String(pathMap[props.currentPath]) || '0',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div style={{marginTop: '5px'}}>
        <Menu
          theme='dark'
          onClick={this.handleClick}
          style={{width: 200, float: 'left'}}
          defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="solution"/><span>Privacy</span></span>}>
            <Menu.Item key="1"><a href="/web/account">My Account</a></Menu.Item>
            <Menu.Item key="2"><a href="/web/orders">My Orders</a></Menu.Item>
            <Menu.Item key="3"><a href="/web/details">My Details</a></Menu.Item>
          </SubMenu>
          <Divider/>
          <SubMenu key="sub2" title={<span><Icon type="team"/><span>List</span></span>}>
            <Menu.Item key="4"><a href="/list/records">Records</a></Menu.Item>
            <Menu.Item key="5"><a href="/list/fans">Fans</a></Menu.Item>
          </SubMenu>
          <Divider/>
          <SubMenu key="sub3" title={<span><Icon type="contacts"/><span>Personal</span></span>}>
            <Menu.Item key="6"><a href="/user/basicinfo">Basic Info</a></Menu.Item>
            <Menu.Item key="7"><a href="/user/messages">Messages</a></Menu.Item>
            <Menu.Item key="8"><a href="/user/reset">Change Password</a></Menu.Item>
          </SubMenu>
          <Divider/>
          <SubMenu key="sub4" title={<span><Icon type="gift"/><span>Experience</span></span>}>
            <Menu.Item key="9"><a href="/user/points">My Points</a></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
