<template>
    <div :class="$style.head">
        <div id="anchor"></div>
        <div class="comWidth clearfix">
            <ul :class="$style.leftArea">
                <li v-for="(item, index) in items" :key="index">
                    <a :href=item.url>{{item.name}}</a>
                    <span>|</span>
                </li>
            </ul>
            <div :class="$style.rightArea">
                <div :class="$style.login">
                    <a href="">登录</a>
                    <span>|</span>
                    <a href="">注册</a>
                </div>
                <div :class="$style.buy_car" @mouseover="changebg()" @mouseout="changebg()">
                    <img :src=imgurl alt="">
                    <transition name="fade" @after-enter="afterEnter" @after-leave='afterLeave'>
                        <div :class="$style.buy_car_spec" v-show="showdesc">
                            <p v-show="showtip">{{desc}}</p>
                        </div>
                    </transition>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {name: '小米网', url: 'https://www.baidu.com'},
                    {name: 'MIUI', url: 'https://www.baidu.com'},
                    {name: '米聊', url: 'https://www.baidu.com'},
                    {name: '游戏', url: 'https://www.baidu.com'},
                    {name: '多看阅读', url: 'https://www.baidu.com'},
                    {name: '云服务', url: 'https://www.baidu.com'},
                    {name: '小米网移动版', url: 'https://www.baidu.com'},
                    {name: '问题反馈', url: 'https://www.baidu.com'},
                    {name:'SelectRegion', url: 'https://www.baidu.com'}
                ],
                imgurl: '/static/shopcar.png',
                showdesc: false,
                showtip: false,
                desc: '购物车中还没有商品,赶紧选购吧~'
            }
        },
        methods: {
            changebg () {
                if (this.imgurl === '/static/shopcar.png') {
                    this.imgurl = '/static/shopcarhover.png'
                    this.showdesc = true
                    return
                }
                this.imgurl = '/static/shopcar.png'
                this.showdesc = false
            },
            afterEnter () {
                this.showtip = true
            },
            afterLeave () {
                this.showtip = false
            }
        }
        
    }
</script>
<style lang="scss" module>
    .head{
        background: #333;
        height: 40px;
        margin-bottom: 10px;
        .leftArea{
            margin: 0;
            padding: 0;
            width: 800px;
            float: left;
            li{
                float: left;
                a{
                    color: #b0b0b0;
                    font-size: 12px;
                    line-height: 40px;
                }
                a:hover{
                    color: #fff;
                }
                span{
                    line-height: 35px;
                    color: #424242;
                    width: 16px;
                    display: inline-block;
                    margin: 0 auto;
                    text-align: center;
                }
            }
        }
        .rightArea{
            float: right;
            position: relative;    
            .login{
                float: left;
                a{
                    color: #b0b0b0;
                    font-size: 12px;
                    line-height: 40px;
                    display: inline-block;
                }
                a:hover{
                    color: #fff;
                }
                span{
                    line-height: 35px;
                    color: #424242;
                    width: 10px;
                    text-align: center;
                }
            }
            .buy_car{
                margin-left: 20px;
                overflow: hidden;
                float: left;
            }
        }
        .buy_car_spec{
            width: 320px;
            height: 100px;
            background: #fff;
            position: absolute;
            left: -120px;
            top: 40px;
            z-index: 3;
            box-shadow: 0 2px 10px rgba(0,0,0,0.15);
            p{
                text-align: center;
                line-height: 100px;
                font-size: 12px;
                color: #424242;
            }
        }
    }
</style>

<style>
    .comWidth{
        width: 1226px;
        margin: 0 auto;
    }
    .fade-enter-active{
        animation: slide .2s
    }
    .fade-leave-active{
        animation: slide .2s reverse
    }
    .fade-enter, .fade-leave-to{
        height: 0px;
    }
    @keyframes slide {
        0% {
            height: 0px;
        }
        100% {
            height: 100px;
        }
    }
</style>


