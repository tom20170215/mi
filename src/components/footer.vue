<template>
    <section :class="$style.footer">
        <div :class="$style.container">
            <ul :class="[$style.service,'clearfix']">
                <li>
                    <router-link :to="{name: 'index'}">1小时快修服务</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'index'}">7天无理由退货</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'index'}">15天免费换货</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'index'}">满150元包邮</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'index'}">520余家售后网点</router-link>
                </li>                                                                
            </ul>
            <div :class="$style.links">
                <ul>
                    <li>
                        <h4>帮助中心</h4>
                        <a href="">购物指南</a>
                        <a href="">支付方式</a>
                        <a href="">配送方式</a>
                    </li>
                    <li>
                        <h4>关注我们</h4>
                        <a href="">新浪微博</a>
                        <a href="">小米部署</a>
                        <a href="">官方微博</a>
                    </li>
                    <li>
                        <h4>服务支持</h4>
                        <a href="">售后政策</a>
                        <a href="">自助服务</a>
                        <a href="">相关下载</a>
                    </li>
                    <li>
                        <h4>小米之家</h4>
                        <a href="">小米之家</a>
                        <a href="">服务网点</a>
                        <a href="">预约亲临到店服务</a>
                    </li>
                    <li>
                        <h4>关于小米</h4>
                        <a href="">了解小米</a>
                        <a href="">加入小米</a>
                        <a href="">联系我们</a>
                    </li>                                                                                
                </ul>
                <div :class="$style.info">
                    <h4>400-100-5678</h4>
                    <p>周一至周日 8:00-18:00<br>(仅收市话费)</p>
                    <router-link :to="{name: 'index'}" target='_blank'>联系客服</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" module>
.footer {
  width: 100%;
  height: 300px;
  background-color: #fff;
  margin-top: 30px;
  .container {
    width: 1226px;
    margin: auto;
    .service {
      padding: 40px 0 0px;
      border-bottom: 1px solid #e0e0e0;
      li {
        float: left;
        width: 243px;
        a {
          display: block;
          height: 25px;
          font-size: 16px;
          color: #616161;
          padding-left: 30px;
          margin-bottom: 30px;
          text-align: center;
          border-right: 1px solid #e0e0e0;
          &:hover {
            color: #ff6700;
          }
        }
        &:nth-child(1) {
          a {
            background: url(/static/footer_service1.png) no-repeat 55px 0;
          }
        }
        &:nth-child(2) {
          a {
            background: url(/static/footer_service2.png) no-repeat 55px 0;
          }
        }
        &:nth-child(3) {
          a {
            background: url(/static/footer_service3.png) no-repeat 55px 0;
          }
        }
        &:nth-child(4) {
          a {
            background: url(/static/footer_service4.png) no-repeat 55px 0;
          }
        }
        &:nth-child(5) {
          a {
            background: url(/static/footer_service5.png) no-repeat 55px 0;
            border: none;
          }
        }
      }
    }
    .links {
      width: 1172px;
      float: left;
      padding: 40px 0 0;
      ul {
        float: left;
        li {
          float: left;
          width: 165px;
          h4 {
            font-size: 14px;
            margin-bottom: 23px;
          }
          a {
            display: block;
            font-size: 12px;
            color: #757575;
            margin-bottom: 10px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
      .info {
        float: right;
        text-align: center;
        h4 {
          color: #ff6700;
          font-weight: 800;
          font-size: 22px;
          margin-bottom: 5px;
        }
        p {
          font-size: 12px;
          text-align: center;
          margin-bottom: 16px;
        }
        a {
          display: inline-block;
          border: 1px solid #ff6700;
          font-size: 12px;
          color: #ff6700;
          width: 118px;
          height: 28px;
          text-align: center;
          line-height: 28px;
          transition: all 0.4s;
          &:hover {
            background: #ff6700;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

