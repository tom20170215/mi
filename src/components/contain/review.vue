<template>
    <section :class="$style.review">
        <h2>热评产品</h2>
        <ul :class="[$style.list, 'clearfix']">
            <li v-for="(item, index) in items" :key="index" class="box_shadow">
                <router-link :to="{name: 'index'}"><img :src=item.img alt=""></router-link>
                <p>{{item.desc}}</p>
                <p>来自于{{item.uid}}的评价</p>
                <span>{{item.name}}</span>
                <span>|</span>
                <span>{{item.price}}元</span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                items:[{
                    img: '/static/hot_comment1.jpg',
                    desc: '当我收到第一眼看到它的时候 让我回想起童年的美好时...',
                    uid: 10002815,
                    name: '小米随身风扇',
                    price: 19.8
                },{
                    img: '/static/hot_comment2.jpg',
                    desc: '外形简洁大方,大爱小米！全家人都在用小米的产品,真心不错,最主要的是性价比高~',
                    uid: 100051,
                    name: '小米移动充',
                    price: 481
                },{
                    img: '/static/hot_comment3.jpg',
                    desc: '安装简介方便,信号不错!!!',
                    uid: 12815,
                    name: '小米音箱',
                    price: 233
                },{
                    img: '/static/hot_comment4.jpg',
                    desc: '先五星好评。再来说说小米空气进化器,北方的天气雾霾越来越常态',
                    uid: 1032315,
                    name: '小米Air',
                    price: 4666
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    .review{
        margin-top: 50px;
        h2{
            font-size: 22px;
            margin-bottom: 30px;
        }
        .list{
            li{
                float: left;
                width: 296px;
                height: 349px;
                background: #fff;
                margin-right: 14px;
                margin-bottom: 20px;
                padding-bottom: 20px;
                p:nth-child(2){
                    width: 236px;
                    height: 50px;
                    margin: 28px auto 5px;
                    font-size: 14px;
                }
                p:nth-child(3){
                   width: 236px;
                   margin: 20px auto 5px;
                   font-size: 12px;
                   color: #b0b0b0;
                }
                &:last-child{
                    margin-right: 0;
                }
                span{
                    font-size: 14px;
                }
                span:nth-child(4){
                    display: inline-block;
                    margin-left: 30px;
                }
                span:nth-child(6){
                    color: #ff6700;
                }
            }
        }
    }
</style>

