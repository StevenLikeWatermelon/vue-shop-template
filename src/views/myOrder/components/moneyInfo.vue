<template>
  <div class="moneyInfo">
      <div class="title">
          <span>付款信息</span>
      </div>
      <div class="content">
          <span>商品总数量：100</span>
          <span>已发货数量：100 </span>
          <span>商品总额：¥ 999999.90</span>
          <span>优惠券抵扣：-¥ 0.00</span>
          <span>中光币抵扣：-¥ 0.00</span>
          <span>运费：¥ 0.00</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.moneyInfo {
    margin-top: 20px;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    background: white;
    color: #333333;
    text-align:left;
    .title {
        font-size: 16px;
    }
    .content {
        font-size: 14px;
        margin-top: 26px;
        span {
            padding-right: 60px;
        }
    }
}
</style>
