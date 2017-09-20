/**
 * Created by zhangheng on 2017/9/1.
 */
import React from 'react'
import {Icon,Tabs,Checkbox,DatePicker,Alert} from 'antd'
import Layout from '../../layouts/Layout.js'
import GridList from '../../components/List/GridList'
import Pagination from '../../components/List/Pagination'
import BasePage from '../../components/BasePage'

const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  constructor(props){
    super(props)
    this.state = {
      mode: 'top',
      indeterminate: true,
      checkAll: false,
      dataSchema:[],
      rowsData:[]
    };
    this.changeTab = this.changeTab.bind(this)
  }
  componentDidMount(){
    this.initSchema()
    this.getData()
  }
  initSchema(){
    let dataSchema = require('../../schema/points/dataSchema.js')
    this.setState({
      dataSchema
    })
  }
  getData(){
    this.setState({
      rowsData:[
        {
          id:1,
          createdTime:'2019-10-10',
          incomeType:'3',
          description:'some desc',
          incomeAmount:'3000',
          outcomeAmount:'5000',
          remark:'what the hell'
        }
      ]
    })
  }
  changeTab(evt){

  }
  changeDate=(date, dateString)=>{
    console.log(date, dateString);
  }
  handlePageChange=()=>{

  }
  render(){
    const { mode } = this.state;
    let desc = (<p style={{marginBottom:"10px",clear:"both"}}>these are totally testing data, so if you have any questions please contact me:
      <a href="mailto:zhaeng11@163.cn">Aeron Zhang</a>and I will check and give some feedback, thank you.</p>)
    return (
      <Layout session={this.props.session} curPath={this.props.curPath}>
        <div className="title clearfix">
          <ul className="clearfix">
            <li className="clearfix"><h3><Icon type="pay-circle-o" />My Total Points:</h3><p>210000</p></li>
          </ul>
        </div>
        <div>
          <Tabs type="card" tabPosition={mode} onChange={this.changeTab}>
            <TabPane tab="All Points" key="1">
              <div>Date:
                <RangePicker onChange={this.changeDate} />
              </div>
              <div style={{marginTop:'10px'}}>
                <GridList data={this.state.rowsData} schema={this.state.dataSchema} tableLoading={false} hasOpt={true}/>
                <br/>
                <Pagination pageSize={10} total={2} currentPage={1} parentHandlePageChange={this.handlePageChange}/>
              </div>
              <br/>
              <br/>
              <br/>
              <div style={{clear:"both"}}>
                <Alert
                message=""
                description={desc}
                type="info"
              />
                <Alert
                  message="Kindly Notice"
                  description="these are totally testing data, so you can ignore it"
                  type="warning"
                  showIcon
                />
              </div>
            </TabPane>
            <TabPane tab="Consuming" key="2">
              <div className="yrb-date-area">Date:
                <RangePicker onChange={this.changeDate} />
              </div>
              <div style={{marginTop:'10px'}}>
                <GridList data={this.state.rowsData} schema={this.state.dataSchema} tableLoading={false} hasOpt={true}/>
                <br/>
                <Pagination pageSize={10} total={5} currentPage={1} parentHandlePageChange={this.handlePageChange}/>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <style jsx>{`
.title {
    padding-left: 10px;
    height: 60px
}
.title ul {
    padding: 5px 0;
}
.title ul li {
    float: left;
    padding: 0 20px;
    line-height: 45px;
    height: 45px;
}
.title ul li h3 {
    padding-left: 30px;
    font-family: "microsoft yahei";
    float: left;
}
.title ul li p {
    font-size: 26px;
    color: #ff7640;
    text-indent: .5em;
    float: left;
}
.title ul li.second {
    border-left: 1px solid #ddd;
    margin-left: 20px;
    _display: inline;
}
`}</style>
      </Layout>
    )
  }
}
