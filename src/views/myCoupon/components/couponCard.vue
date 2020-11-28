<template>
  <div class="orderList">
    <div class="title">
      <div class="left">
        <span>我的优惠券</span>
      </div>
    </div>
    <div class="list">
      <span style="color: #ff5b22">可用优惠券</span>
      <span>最优惠</span>
      <span>即将过期</span>
      <span>已过期</span>
    </div>
    <div class="card-list mg-top-20">
      <couponItem></couponItem>
      <couponItem></couponItem>
      <couponItem :disabled="true"></couponItem>
      <couponItem></couponItem>
    </div>
  </div>
</template>

<script>
import couponItem from './couponItem'
export default {
  components: {
    couponItem
  }
}
</script>

<style lang="scss" scoped>
.orderList {
  text-align: left;
  width: 982px;
  box-sizing: border-box;
  background-color: white;
  padding: 38px 40px 38px 40px;
  height: 593px;
  box-sizing: border-box;
  .title {
    color: #333333;
    font-size: 24px;
  }
  .list {
    margin-top: 35px;
    color: #333333;
    font-size: 14px;
    span {
      margin-right: 25px;
    }
  }
  .card-list {
    display: flex;
    justify-content: space-between;
  }

}
</style>
