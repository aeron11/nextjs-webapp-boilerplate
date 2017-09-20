/**
 * Created by zhangheng on 2017/9/15.
 */
import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import HeaderTop from '../components/Common/HeaderTop'
import Meta from '../components/Common/Meta'

export default class Main extends React.Component {
  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div>
        <Meta />
        <HeaderTop session={this.props.session}/>
        <Header />
        <div style={{width:"100%",height:"5px",backgroundColor:"orange"}}></div>
        <div className="innerBox">
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}
