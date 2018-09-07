<template>
    <div :class="$style.ad">
        <router-link :to="{name: 'index'}">
            <img :src=img alt="">
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props:{
            img: '',
            type: String
        }
    }
</script>

<style lang="scss" module>
    .ad{
        width: 1226px;
        margin: 28px 0 22px;
        img{
            width: 1226px;
            height: 120px;
        }
    }
</style>

