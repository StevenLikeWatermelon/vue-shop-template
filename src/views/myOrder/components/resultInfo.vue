<template>
  <div class="resultInfo">
      <div class="item">
          <p>实付款：¥ 999999.90 </p>
          <p>已付金额：<span class="large">¥ 999999.90</span> </p>
          <p>剩余付款金额：¥ 50000.00</p>
          <p class="under-line">已申请开票金额：¥ 150000000.00</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.resultInfo {
    margin-top: 1px;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
  background: white;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #333333;
  .item {
      text-align: right;
      line-height: 30px;
      .under-line {
          text-decoration: underline;
      }
      .large {
        color: #F30012;
        font-size: 26px;
      }
  }
}
</style>
