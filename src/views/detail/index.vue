<template>
  <div class="detail">
      <!-- 搜索层 -->
    <search-part></search-part>
    <bread-crumbs :crumbs="breadCrumbs"></bread-crumbs>
    <detailCard></detailCard>
    <detailDis></detailDis>
  </div>
</template>

<script>
import searchPart from '@/components/searchPart'
import breadCrumbs from '@/components/breadCrumbs'
import detailCard from './components/detailCard'
import detailDis from './components/detailDis'
export default {
  components: {
    searchPart,
    breadCrumbs,
    detailDis,
    detailCard
  },
  data () {
    return {
      breadCrumbs: [{
        label: '首页'
      }, {
        label: '光源产品'
      }, {
        label: '“ DP4K-36BLP- 2 ”'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
    width: 100%;
}
</style>
