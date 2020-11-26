<template>
  <div class="buy-card-item" :style="{'background-color': backgroundColor}">
      <div class="buy-card-top">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="buy-card-center">
          <span>{{name}}</span>
      </div>
      <div class="buy-card-tips">
          <span>{{tips}}</span>
      </div>
      <div class="buy-card-bottom">
          <div class="half left">
              <span>{{discountPrice}}</span>
          </div>
          <div class="half delete">
              <span>{{originPrice}}</span>
          </div>
      </div>
      <div class="buy-card-add">
          <div class="item left">
              <div class="icon">
                  <img src="@/assets/car.png" alt="">
              </div>
              <div class="text">
                  <span>加入购物车</span>
              </div>
          </div>
          <div class="item right">
              <div>
                  <span>立即购买</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    },
    originPrice: {
      type: String,
      default: ''
    },
    discountPrice: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss" scoped>
.buy-card-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .buy-card-top {
        padding-top: 30px;
        img {
            display: block;
            width: 209px;
            height: 139px;
        }
    }
    .buy-card-center {
        font-size: 14px;
        color: #111111;
        margin-top: 53px;
    }
    .buy-card-tips {
      color: #999999;
    }
    .buy-card-bottom {
        width: 90%;
        height: 27px;
        display: flex;
        margin-top: 13px;
        align-items: center;
        justify-content:center;
        position: relative;
        .half {
            &.left {
                color: #F30012;
                font-size: 14px;
                margin-right: 9px;
            }
            &.delete {
                font-size:12px;
                color: #999999;
                text-decoration:line-through;
            }
        }
    }
    .buy-card-add {
        width:90%;
        margin-top: 20px;
        position: relative;
        height: 28px;
        display: flex;
        align-items:center;
        justify-content:center;
        border: 1px solid #E1E1E1;
        .item {
            width:50%;
            display: flex;
            justify-content:center;
            align-items: center;
            font-size: 12px;
            height: 100%;
            &.left {
                border-right: 1px solid #E1E1E1;
                color: #666666;
                .icon {
                    margin-right: 8px;
                    height: 17px;
                }
            }
            &.right {
                color: #FF5B22;
            }
        }
    }
}
</style>
