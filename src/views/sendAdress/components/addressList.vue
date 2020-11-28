<template>
  <div class="orderList">
    <div class="title">
      <div class="left">
        <span>发票申请</span>
      </div>
      <div class="right">
        <span>+ 新增收货地址</span>
      </div>
    </div>
    <div class="list">
      <addressCard :isDefault="true"></addressCard>
      <addressCard></addressCard>
      <addressCard></addressCard>
      <addressCard></addressCard>
    </div>
  </div>
</template>

<script>
import addressCard from '@/components/addressCard'
export default {
  components: {
    addressCard
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      line-height: 42px;
    }
    .right {
      width: 148px;
      height: 36px;
      border: 1px solid #FF5B22;
      border-radius: 2px;
      line-height: 36px;
      text-align: center;
      color: #FF5B22;
      font-size: 14px;
    }
  }

}
</style>
