<template>
    <div class="shop-wrap">
        <div class="recommend-img">
            <img :src="recommendImg" alt="大促">
        </div>
        <div class="header-wrap">
            <Header></Header>
        </div>
        <div class="main-wrap">
            <router-view></router-view>
        </div>
        <div class="footer-wrap">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
export default {
  data () {
    return {
      recommendImg: require('@/assets/recommend.png')
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.shop-wrap {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #f4f4f4;
    position: relative;
    .recommend-img {
        width: 100%;
        img {
            width: 100%;
            display: block;
        }
    }
}
</style>
