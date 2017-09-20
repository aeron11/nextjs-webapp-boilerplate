/**
 * Created by zhangheng on 2017/8/21.
 */
import React from 'react'
import Layout from '../../layouts/Layout.js'
import GridList from '../../components/List/GridList'
import Pagination from '../../components/List/Pagination'
import BasePage from '../../components/BasePage'
import {Alert} from 'antd'

export default class extends BasePage{
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  constructor(props){
    super(props)
    this.state={
      dataSchema:[],
      dataRows:[],
      hasRowRender:true
    }
  }

  componentDidMount(){
    this.initSchema()
    this.getData()
  }
  initSchema(){
    let dataSchema = require('../../schema/orders/dataSchema.js')
    this.setState({
      dataSchema
    })
  }
  getData(){
    this.setState({
      dataRows:[
        {
          id: 1,
          orderId:'20170821888666',
          orderAmount:'500$',
          orderItem:'buying',
          orderTime:'2017-05-08',
          orderStatus:'2',
          description:'some description'
        },
        {
          id: 2,
          orderId:'20170821888888',
          orderAmount:'2300$',
          orderItem:'buying',
          orderTime:'2017-08-08',
          orderStatus:'0',
          description:'some description gtgtgt'
        },{
          id: 3,
          orderId:'20170821888999',
          orderAmount:'6000$',
          orderItem:'buying',
          orderTime:'2017-09-08',
          orderStatus:'1',
          description:'some description errreer'
        }
      ]
    })
  }
  handlePageChange=()=>{

  }

  render(){
    return (
      <Layout session={this.props.session} curPath={this.props.curPath}>
        <Alert
          message="Kindly notice"
          description="these all are testing data,no relations with any company, so you can ignore it ......"
          type="warning"
          showIcon
        />
        <br/>
        <GridList hasRowRender={false} schema={this.state.dataSchema} data={this.state.dataRows} tableLoading={false} />
        <br/>
        <Pagination pageSize={10} total={3} currentPage={1} parentHandlePageChange={this.handlePageChange}/>
        <br/>
      </Layout>
    )
  }
}
