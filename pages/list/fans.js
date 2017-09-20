/**
 * Created by zhangheng on 2017/8/21.
 */
import React from 'react'
import Layout from '../../layouts/Layout.js'
import BasePage from '../../components/BasePage'
import {getCustomers} from '../../services/getData'
import {Icon} from 'antd'

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  constructor(props) {
    super(props)
    this.state = {
      lists: props.lists && props.lists.results && props.lists.results || []
    }
  }

  async componentDidMount() {
    //fetch data here
    const lists = await getCustomers()
    this.setState({
      lists: lists.results
    })
  }

  render() {
    let prodLists=[];
    this.state.lists.forEach(function(item,i){
      prodLists.push(
        <li key={i}>
          <span><a><img src={item.avatar_url} width={120} height={80}/></a></span>
          <br/>
          <span>Name:{item.login}</span>
          <br/>
          <span>ID:{item.id}</span>
          <br/>
          <span><a href={item.html_url}>Home Page</a></span>
        </li>
      )
    });

    return (
      <Layout session={this.props.session} curPath={this.props.curPath}>
        <div className="list-container">
          <h2><Icon type="file-pdf" />Great Guys as testing data</h2>
          <ul>
            {prodLists}
          </ul>
        </div>
        <style>{
          `
          .list-container ul li{
            display:inline-block;
            width:165px;
            height:150px;
            float:left;
            margin:10px;
            border:1px solid grey;
          }

          .list-container ul li span{
            margin:10px;
          }
        `
        }</style>
      </Layout>
    )
  }

}
