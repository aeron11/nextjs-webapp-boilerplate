/**
 * Created by zhangheng on 2017/9/18.
 */
/**
 * Created by zhangheng on 2017/8/21.
 */
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="expires" content="10800" />
      <meta name="generator" content="Company website" />
      <link rel="shortcut icon" href="../../static/favicon.ico" />
      <link rel='stylesheet' href='../../static/style/main.css' />
      <link rel='stylesheet' href='../../static/style/antd.min.css' />
      <title>KG valley</title>
    </Head>
  </div>
)
