<template>
  <div class="myOwnOrder">
      <!-- 搜索层 -->
    <search-part></search-part>
    <bread-crumbs :crumbs="breadCrumbs"></bread-crumbs>
    <contentWrap>
        <myOwnPage></myOwnPage>
      </contentWrap>
  </div>
</template>

<script>
import searchPart from '@/components/searchPart'
import breadCrumbs from '@/components/breadCrumbs'
import contentWrap from '@/components/contentWrap'
import myOwnPage from './components/myOwnPage'
export default {
  components: {
    searchPart,
    contentWrap,
    myOwnPage,
    breadCrumbs
  },
  data () {
    return {
      breadCrumbs: [{
        label: '首页'
      }, {
        label: '个人中心'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.myOwnOrder {
    width: 100%;
}
</style>
