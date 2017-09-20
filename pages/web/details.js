/**
 * Created by zhangheng on 2017/8/31.
 */
import React from 'react'
import Layout from '../../layouts/Layout'
import BasePage from '../../components/BasePage'
import {Steps, Icon,Collapse} from 'antd';
const Step = Steps.Step;
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  render() {
    return (
      <Layout session={this.props.session}>
        <div className="container">
          <div>
          <h3 className="title_h3">Steps</h3>
          <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user"/>}/>
            <Step status="finish" title="Verification" icon={<Icon type="solution"/>}/>
            <Step status="process" title="Pay" icon={<Icon type="credit-card"/>}/>
            <Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
          </Steps>
          </div>
          <div>
            <h3 className="title_h3">Detail Information</h3>
            <Collapse bordered={false} defaultActiveKey={['1']}>
              <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
        <style>{`
          .container {
              margin: 2px auto;
              width: 800px;
          }

        `}</style>
      </Layout>
    )
  }
}
