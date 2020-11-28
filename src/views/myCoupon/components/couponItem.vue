<template>
  <div class="couponItem">
      <coupon :disabled="disabled" />
      <div class="coupon-tips mg-top-20">
          <span>限品类：仅可购买幕布部分商品</span>
      </div>
      <div class="coupon-tips mg-top-10">
          <span>有效期：2020.11.01-2020.11.30</span>
      </div>
      <div class="btn" :class="{'disabled': disabled}">
          <span v-if="!disabled">立即使用</span>
          <span v-else>已过期</span>
      </div>
  </div>
</template>

<script>
import coupon from '@/components/coupon'
export default {
  props: ['disabled'],
  components: {
    coupon
  }
}
</script>

<style lang="scss" scoped>
.couponItem {
  width: 218px;
  height: 270px;
  border: 1px solid #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .coupon-tips {
      color: #999999;
      font-size: 12px;
  }
  .btn {
      width: 130px;
        height: 36px;
        border: 1px solid #FF5B22;
        border-radius: 2px;
        color: #FF5B22;
        text-align: center;
        line-height: 36px;
        margin-top: 28px;
        &.disabled {
            border: none;
            background-color:#F5F5F5;
            color: #999999;
        }
  }
}
</style>
