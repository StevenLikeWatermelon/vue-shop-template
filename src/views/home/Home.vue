<template>
  <div class="index-wrap">
    <!-- 搜索层 -->
    <search-part></search-part>
    <!-- 内容区 -->
    <content-wrap>
      <!-- 轮播层 -->
      <swipper-floor></swipper-floor>
      <!-- 折扣层 -->
      <discount-floor></discount-floor>
      <!-- 特价层 -->
      <special-floor></special-floor>
      <!-- 优惠层 -->
      <cheap-floor></cheap-floor>
      <!-- 精品促销层 -->
      <best-goods-floor></best-goods-floor>
    </content-wrap>
  </div>
</template>

<script>
import searchPart from '@/components/searchPart'
import contentWrap from '@/components/contentWrap'
import swipperFloor from './components/swipperFloor'
import discountFloor from './components/discountFloor'
import specialFloor from './components/specialFloor'
import cheapFloor from './components/cheapFloor'
import bestGoodsFloor from './components/bestGoodsFloor'
export default {
  components: {
    searchPart,
    swipperFloor,
    discountFloor,
    specialFloor,
    bestGoodsFloor,
    cheapFloor,
    contentWrap
  }
}
</script>

<style lang="scss" scoped>

</style>
