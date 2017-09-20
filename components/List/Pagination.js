/**
 * Created by zhangheng on 2017/9/5.
 */
import React from 'react';
import {Pagination, Select} from 'antd';

class MyPagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <Pagination
          selectComponentClass={Select}
          total={this.props.total}
          showTotal={(total) => `Each Page${this.props.pageSize} Items, Total ${total} Records`}
          pageSize={this.props.pageSize} defaultCurrent={1}
          current={this.props.currentPage}
          onChange={this.props.parentHandlePageChange}
        />
        <style>{`
          .pagination{
            float:right;
          }
        `}</style>
      </div>
    );
  }
}

export default MyPagination;
