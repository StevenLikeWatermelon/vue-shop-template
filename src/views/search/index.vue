<template>
  <div class="search-wrap">
     <!-- 搜索层 -->
    <search-part></search-part>
    <bread-crumbs :crumbs="breadCrumbs"></bread-crumbs>
    <searchPanel></searchPanel>
    <productList></productList>
  </div>
</template>

<script>
import searchPart from '@/components/searchPart'
import breadCrumbs from '@/components/breadCrumbs'
import searchPanel from './components/searchPanel'
import productList from './components/productList'
export default {
  components: {
    searchPart,
    searchPanel,
    productList,
    breadCrumbs
  },
  data () {
    return {
      breadCrumbs: [{
        label: '首页'
      }, {
        label: '搜索结果'
      }, {
        label: '"放映机"'
      }]
    }
  }
}
</script>

<style>

</style>
