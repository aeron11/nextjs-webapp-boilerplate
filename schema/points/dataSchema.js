import React from 'react';
import moment from 'moment';

module.exports = [
  {
    key: 'id',
    title: 'ID',
    dataType: 'int',
    primary: true,
    visible: false,
  },
  {
    key: 'createdTime',
    title: 'Created Time',
    visible: true,
    render: (text, record)=> {
      return text ? moment(text).format('YYYY-MM-DD HH:mm'): '';
    }
  },
  {
    key: 'incomeType',
    title: 'Income Type',
    visible: true,
    render: (text, record)=> {
      let res = 'game';
      switch (text) {
        case 1:
          res = 'book';
          break;
        case 2:
          res = 'clothes';
          break;
        case 3:
          res = 'food';
          break;
      }
      return res;
    }
  },
  {
    key: 'description',
    title: 'Description',
    visible: true
  },
  {
    key: 'incomeAmount',
    title: 'Income',
    visible: true
  },
  {
    key: 'outcomeAmount',
    title: 'Outcome',
    visible: true
  }
];
