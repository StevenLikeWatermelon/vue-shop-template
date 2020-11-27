<template>
  <div class="steps">
    <div class="flex-wrap">
      <div class="item">
        <div class="circle active">
          <span>1</span>
        </div>
        <div class="text">
          <span>我的购物车</span>
        </div>
        <div class="line"></div>
      </div>
      <div class="item">
        <div class="circle active">
          <span>2</span>
        </div>
        <div class="text">
          <span>填写核对订单信息</span>
        </div>
        <div class="line process"></div>
      </div>
      <div class="item">
        <div class="circle">
          <span>3</span>
        </div>
        <div class="text">
          <span>成功提交订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.steps {
  width: 400px;
  position: relative;
  .flex-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        width: 180px;
        position: relative;
        .circle {
            width: 27px;
            height: 27px;
            border-radius: 27px;
            line-height: 27px;
            text-align: center;
            color: white;
            background-color: #e1e1e1;
            z-index: 99;
            &.active {
                background-color: #7abc53;
            }
        }
        .text {
            padding-top: 10px;
            color: #A2A2A2;
            font-size: 14px;
        }
        .line {
            width: 150px;
            height: 5px;
            background-color: #7abc53;
            position: absolute;
            z-index: 0;
            top: 11px;
            left: 60px;
            &.process {
                 background-color: #e1e1e1;
            }
        }
    }
  }
}
</style>
