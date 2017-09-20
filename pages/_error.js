/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default class Error extends React.Component {

  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    }
  }

  static getInitialProps({res, xhr}) {
    const errorCode = res ? res.statusCode : '400'
    return {errorCode}
  }

  render() {
    const css = (
      <Head>
        <style>{`
          body {
            margin: 10px 20px;
            font-family: sans-serif;
            color: #444;
            background-color: #eee;
          }
          .error-container{
            width:500px;
            height:300px;
            margin:120px auto;
          }
        `}</style>
      </Head>
    )

    let response
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <div className="error-container">
            {css}
            <h1>404 Page Not Found</h1>
            <p>The page <strong>{ this.props.url.pathname }</strong> does not exist.</p>
            <p><Link href="/index"><a>Home</a></Link></p>
          </div>
        )
        break
      case 500:
        response = (
          <div className="error-container">
            {css}
            <h1>Internal Server Error</h1>
            <p>An internal server error occurred.</p>
          </div>
        )
        break
      default:
        response = (
          <div className="error-container">
            {css}
            <h1>HTTP { this.props.errorCode } Error</h1>
            <p>
              An <strong>HTTP { this.props.errorCode }</strong> error occurred while
              trying to access <strong>{ this.props.url.pathname }</strong>
            </p>
          </div>
        )
    }

    return response
  }

}
