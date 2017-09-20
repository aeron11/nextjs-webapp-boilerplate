/**
 * Created by zhangheng on 2017/8/21.
 */
import React from 'react'
import Session from '../utils/Session'
import {changePathToKey} from '../utils/utils'

export default class extends React.Component {
  // Expose session to all pages
  static async getInitialProps({req}) {
    const session = new Session({req})
    return {session: await session.getSession(),curPath:req && req.path && changePathToKey(req.path) || ''}
  }
}
