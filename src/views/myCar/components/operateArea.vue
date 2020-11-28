<template>
  <div class="operateArea mg-top-20">
      <div class="left">
          <span style="margin-right: 10px;">继续购物</span>
          <span>共 <span class="orange">2</span> 件商品，已选择 <span class="orange">1</span> 件</span>
      </div>
      <div class="right">
          <div class="price">
              <span style="margin-right: 15px;">优惠券：-600 元</span>
              <span>合计：<span class="orange" style="font-size: 24px;">54080</span> 元</span>
          </div>
          <div class="btn">
              <span>去结算</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.operateArea {
    display: flex;
    color: #333333;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: white;
    .left {
        padding-left: 20px;
    }
    .right {
        display: flex;
        align-items: center;
        .price {
            margin-right: 15px;
        }
        .btn {
            width: 223px;
            height: 60px;
            background: #ff5b22;
            line-height: 60px;
            text-align: center;
            color: white;

        }
    }
}
.orange {
            color: #ff5b22;
        }
</style>
