<template>
  <div class="special-card">
      <div class="discount-card-top">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="discount-card-center">
          <span>{{name}}</span>
      </div>
      <div class="discount-card-bottom">
          <div class="half left">
              <span>{{discountPrice}}</span>
          </div>
          <div class="half delete">
              <span>{{originPrice}}</span>
          </div>
      </div>
      <div class="sperate-horizontal-line" v-if="hasLine"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    originPrice: {
      type: String,
      default: ''
    },
    discountPrice: {
      type: String,
      default: ''
    }

  }
}
</script>

<style lang="scss" scoped>
.special-card {
    width: 174px;
    height: 254px;
    background-color: #F8F8F9;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
}
</style>
