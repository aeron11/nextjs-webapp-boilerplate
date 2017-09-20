/**
 * Created by zhangheng on 2017/8/21.
 */

import Link from 'next/link'
import Nav from './Nav'

export default () => (
  <div className="header-container">
    <div className="header">
      <Link href="/">
        <a><img src="../static/images/logo.jpg" height={100} width={200}/></a>
      </Link>
      <Nav />
    </div>
    <style jsx>{`
    .header-container{
      width:100%;
      height:120px;
      background-color:#eee;
      line-height: 120px;
    }
      .header{
        margin: 0 auto;
        width: 1024px;
      }
      .header a{
        margin-top:1px;
        display:inline-block;
      }
    `}</style>
  </div>
)
