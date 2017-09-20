/**
 * Created by zhangheng on 2017/9/5.
 */
import React from 'react'
import {
  Table
} from 'antd';

class GridList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newCols = [];
    let primaryKey = '';
    let expandedRowRender = null
    this.props.schema.forEach((field) => {
      const col = {};
      col.key = field.key;
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

    if (this.props.hasRowRender) {
      expandedRowRender = record => <p>{record.description}</p>;
    }

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
        <Table expandedRowRender={expandedRowRender} columns={newCols}
               dataSource={newData} pagination={false}
               loading={this.props.tableLoading}/>
      </div>
    );
  }
}

export default GridList;
