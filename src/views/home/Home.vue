<template>
  <div class="index-wrap">
    <search-part></search-part>
    <content-wrap>
      <!-- 轮播层 -->
      <swipper-floor></swipper-floor>
      <!-- 折扣层 -->
      <discount-floor></discount-floor>
      <!-- 特价层 -->
      <special-floor></special-floor>
    </content-wrap>
  </div>
</template>

<script>
import searchPart from '@/components/searchPart'
import contentWrap from '@/components/contentWrap'
import swipperFloor from './components/swipperFloor'
import discountFloor from './components/discountFloor'
import specialFloor from './components/specialFloor'
export default {
  components: {
    searchPart,
    swipperFloor,
    discountFloor,
    specialFloor,
    contentWrap
  }
}
</script>

<style lang="scss" scoped>

</style>
