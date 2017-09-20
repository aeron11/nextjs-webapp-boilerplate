/**
 * Created by zhangheng on 2017/8/21.
 */
import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import BreadCrumb from '../components/Common/BreadCrumb'
import HeaderTop from '../components/Common/HeaderTop'
import Sidebar from '../components/Common/SideBar'
import Meta from '../components/Common/Meta'

export default class Layout extends React.Component {
  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired,
      curPath: React.PropTypes.string.isRequired
    }
  }

  render() {
    return (
      <div>
        <Meta />
        <HeaderTop session={this.props.session}/>
        <Header />
        <BreadCrumb />
        <div className="innerBox">
          <Sidebar currentPath={this.props.curPath}/>
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

