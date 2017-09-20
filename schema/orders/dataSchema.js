import React from 'react';
import moment from 'moment';

module.exports = [
  {
    key: 'id',
    title: 'ID',
    dataType: 'int',
    primary: true,
    visible: false
  },
  {
    key: 'orderId',
    title: 'Order Id',
    visible: true
  },
  {
    key: 'orderAmount',
    title: 'Order Amount',
    visible: true
  },
  {
    key: 'orderItem',
    title: 'Order Item',
    visible: true
  },
  {
    key: 'orderTime',
    title: 'Ordered Time',
    visible: true,
    render: (text, record)=> {
      return text ? moment(text).format('YYYY-MM-DD HH:mm'): '';
    }
  },
  {
    key: 'orderStatus',
    title: 'Order Status',
    visible: true,
    render: (text, record)=> {
      let res = 'success';
      switch (text) {
        case 1:
          res = 'failure';
          break;
        case 2:
          res = 'pending';
          break;
      }
      return res;
    }
  },
  {
    key: 'description',
    title: 'Description',
    visible: false
  }
];
