/**
 * Created by zhangheng on 2017/8/21.
 */
import Link from 'next/link'
export default () => (
  <ul className="header-nav">
    <ItemLink href="/index">Home</ItemLink>
    <Item href="/web/account">My Account</Item>
    <Item href="/list/records">Records</Item>
    <Item href="/list/fans">Fans</Item>
    <ItemLink href="/about">About</ItemLink>
    <ItemLink href="/contact">Contact Us</ItemLink>
    <style jsx>{`
      .header-nav{
        float: right;
        font-size: 18px;
        margin-right: 21px;
      }
      .header-nav li {
        float: left;
        margin-left: 16px;
        height: 25px;
        line-height: 25px;
        margin-top: 35px;
      }
      .header-nav a.live, .header-nav a:hover {
        color: #0098e0;
        text-decoration: none;
      }

    `}</style>
  </ul>
)

const ItemLink = ({href, children}) => (
  <li>
    <Link href={href}>
      <a>{ children }</a>
    </Link>
    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 20px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      a:hover {
        color: #0098e0;
      }
`}</style>
  </li>
)

const Item = ({href, children}) => (
  <li>
    <a href={href}>{ children }</a>
    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 20px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      a:hover {
        color: #0098e0;
      }
`}</style>
  </li>
)
