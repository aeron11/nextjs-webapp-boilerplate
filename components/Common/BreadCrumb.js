/**
 * Created by zhangheng on 2017/8/21.
 */

export default ()=>(
  <div className="breadcrumb">
    <div className="innerBox bg">
      <h1 className="breadcrumb-title">Personal</h1>&nbsp;&gt;&nbsp;
      <h2 className="breadcrumb-title">My Account</h2>
    </div>
    <style jsx>{`
      .breadcrumb {
        height: 32px;
        background: orange;
        color: #fff;
        line-height: 32px;
        margin-top: -2px;
      }
      .breadcrumb-right{
        float: right;
        display: inline-block;
        width: 120px;
        height: 32px;
        text-align: center;
        background: #429ff2;
        color: #fff;
        margin-left: 700px;
        width: 160px;
      }
      .breadcrumb a{
        color: #fff;
      }
      .breadcrumb h1, .breadcrumb h2, .breadcrumb h3 {
        display: inline;
        font-size: 12px;
        font-weight: normal;
      }
      .bg{
        background: orange!important;
      }
    `}</style>
  </div>
)
