<template>
  <div class="addressCard">
    <div class="name">
      <div class="text">
        <span>张先生</span>
      </div>
      <div class="icon" v-if="isDefault">
        <img src="@/assets/mr.png" alt="" />
      </div>
    </div>
    <div class="h2">
      <span>收货人：</span>
      <span>张先生</span>
    </div>
    <div class="h2">
      <span>所在地区：</span>
      <span>北京市海地区</span>
    </div>
    <div class="h2">
      <span>地址：</span>
      <span>农大南路树村西街甲6号XXXXXX</span>
    </div>
    <div class="h2">
      <span>手机：</span>
      <span>139****1121</span>
    </div>
    <div class="h2 operate">
      <span v-if="!isDefault" style="margin-right: 15px">设为默认</span>
      <span>编辑</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isDefault']
}
</script>

<style lang="scss" scoped>
.addressCard {
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding: 20px;
  margin-top: 20px;
  .name {
    display: flex;
    align-items: center;
    .text {
      color: #333333;
      font-size: 16px;
      margin-right: 10px;
    }
  }
  .h2 {
    color: #666666;
    font-size: 14px;
    margin-top: 15px;
    &.operate {
        text-align: right;
        color: #ff5b22;
    }
  }
}
</style>
