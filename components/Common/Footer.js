/**
 * Created by zhangheng on 2017/8/21.
 */
import React from 'react'
const YEAR = new Date().getFullYear()

export default() => (
  <footer className="footer">
    <div className="innerBox">
      <p className="footer-link">
        <a rel="nofollow" title="" target="_blank" href="https://www.google.com">Google</a>|
        <a rel="nofollow" title="" target="_blank" href="https://www.facebook.com">Facebook</a>|
        <a rel="nofollow" title="" target="_blank" href="https://www.twitter.com">Twitter</a>|
        <a rel="nofollow" title="" target="_blank" href="https://www.github.com">Github</a>|
        <a rel="nofollow" target="_blank"  href="https://www.stackoverflow.com">StackOverflow</a>|
      </p>
      <p className="footer-cont innerBox">
        <a className="footer-link-a" href="/about" target="_blank">Company's</a> Copyright ©{YEAR}</p>
    </div>
    <style jsx>{`
        .footer{
          border-top: 1px solid #e9e9e9;
          text-align: center;
          padding-bottom: 30px;
          background: #fff;
          font-size:12px;
          clear:both;
        }
        .footer .footer-link {
          line-height: 22px;
          color: #696969;
          padding: 24px 0 6px;
        }
        .footer .footer-link a {
          padding: 0 9px;
          color: #696969;
        }
      `}</style>
  </footer>
)
