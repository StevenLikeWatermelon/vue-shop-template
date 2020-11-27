<template>
  <div class="coupon-img" :class="{'disabled': disabled}">
    <span class="coupon-img-title">￥ 5000</span>
    <span>满10000元可用</span>
  </div>
</template>

<script>
export default {
  props: ['disabled']
}
</script>

<style lang="scss" scoped>
.coupon-img {
  height: 69px;
  width: 137px;
  background: url("../../assets/coupon.png");
  &.disabled {
      background: url("../../assets/coupon2.png");
        background-size: 137px 69px;
  }
background-size: 137px 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: #f5f5f5;
  .coupon-img-title {
    font-size: 18px;
  }
}
</style>
