<template>
  <div class="orderList">
    <div class="title">
      <div class="left">
        <span>我的中光币</span>
      </div>
    </div>
    <div class="list">
      <div class="div-1">
        <div class="img">
          <img src="@/assets/zgb.png" alt="">
        </div>
        <div class="text">
          <span class="number">99999</span>
          <span class="unit">个</span>
        </div>
      </div>
      <div class="sperate"></div>
      <div class="other-number">
        <p>999999</p>
        <p class="tip">累计获得数量</p>
      </div>
      <div class="sperate"></div>
      <div class="other-number">
        <p>999999</p>
        <p class="tip">累计消费数量</p>
      </div>
      <div class="sperate"></div>
      <div class="other-number">
        <p>999999</p>
        <p class="tip">当前剩余数量</p>
      </div>
    </div>
    <div class="select">
      <span style="color: #ff5b22;">我的获得记录</span>
      <span>我的消费记录</span>
      <span>近一个月到期</span>
    </div>
    <div class="mg-top-20">
      <tableDefault></tableDefault>
    </div>
    <div class="mg-top-20">
      <tableSmall></tableSmall>
    </div>
  </div>
</template>

<script>
import tableDefault from './tableDefault'
import tableSmall from './tableSmall'
export default {
  components: {
    tableDefault,
    tableSmall
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
  .title {
    color: #333333;
    font-size: 24px;
  }
  .sperate {
    width: 1px;
    height: 60px;
    background: linear-gradient(#ffffff, #E1E1E1, #ffffff);
    margin: 0 40px;
  }
  .list {
    margin-top: 28px;
    color: #333333;
    font-size: 14px;
    display: flex;
    .div-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        margin-right: 7px;
      }
      .text {
        .number {
          font-size: 54px;
          color: #ff5b22;
        }
        .unit {
          font-size: 14px;
          color: #333333;
        }
      }
    }
    .other-number {
      color: #333333;
      font-size: 16px;
      text-align: center;
      .tip {
        color: #999999;
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
  .select {
    color: #333333;
    margin-top: 50px;
    font-size: 14px;
    span {
      margin-right: 30px;
    }
  }
}
</style>
