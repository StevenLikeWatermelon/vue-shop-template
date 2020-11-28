<template>
  <div class="orderList">
    <div class="title">
      <div class="left">
        <span>公司信息</span>
      </div>
    </div>
    <div class="list">
      <p>所属公司名称：北京金币在线电子商务有限公司</p>
      <p>操作员1：江南</p>
      <p>操作员2：河南</p>
      <p>操作员3：江北</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
    line-height: 40px;
  }

}
</style>
