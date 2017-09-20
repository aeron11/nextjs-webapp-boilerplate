/**
 * Created by zhangheng on 2017/9/7.
 */
import React from 'react';
import {
  Table
} from 'antd';

class TableWithBorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newCols = [];
    let primaryKey=false;
    this.props.schema.forEach((field) => {
      const col = {};
      col.key =  field.key;
      col.dataIndex = field.key;
      col.title = field.title;
      if (field.render) {
       col.render = field.render;
      }

      if (field.visible) //whether render this column
        newCols.push(col);

      if (field.primary) {
       primaryKey = field.key;
      }
    });

    const newData = [];
    let i = 0;
    this.props.data.forEach((obj) => {
      const newObj = Object.assign({}, obj);
      if (primaryKey) {
        newObj.key = obj[primaryKey];
      } else {
        newObj.key = i;
        i++;
      }
      newData.push(newObj);
    });

    return (
      <div>
        <Table columns={newCols} dataSource={newData} pagination={false}
               bordered
               title={() => this.props.headerMsg}
               loading={this.props.tableLoading}/>
      </div>
    );
  }
}

export default TableWithBorder;
