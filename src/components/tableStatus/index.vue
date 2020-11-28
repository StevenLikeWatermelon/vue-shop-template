<template>
  <div class="tableStatus" :class="color">
      <div class="text">
          <span>2020年11月15日 19:08 订单号：5201115560905733</span>
          <span style="color: #FF5B22;padding-left: 7px;padding-right: 15px;text-decoration: underline;">订单详情</span>
          <span style="padding-right: 15px;">收货人：陈晓磊</span>
          <span>订单状态：未付款</span>
          <span style="color: #FF5B22;padding-left: 7px;padding-right: 15px;text-decoration: underline;">付款信息</span>
          <span>金额：</span>
          <span style="color: #FF5B22;">¥54680.00</span>
      </div>
      <div class="right">
          <img src="@/assets/msg.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style lang="scss" scoped>
.tableStatus {
    height: 40px;
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
    &.orange {
        background: #FDF5EF;
        border: 1px solid #FF5B22;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    color: #333333;
    font-size: 12px;
}
</style>
