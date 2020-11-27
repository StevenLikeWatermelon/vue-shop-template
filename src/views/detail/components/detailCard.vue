<template>
  <div class="detail-card">
      <div class="content">
          <div class="left">
              <div class="large-img">
                  <img src="@/assets/detail.png" alt="">
              </div>
              <div class="small-img">
                  <div class="item active">
                      <img src="@/assets/detail.png" alt="">
                  </div>
                  <div class="item">
                      <img src="@/assets/detail.png" alt="">
                  </div>
                  <div class="item">
                      <img src="@/assets/detail.png" alt="">
                  </div>
                  <div class="item">
                      <img src="@/assets/detail.png" alt="">
                  </div>
              </div>
          </div>
          <div class="right">
              <div class="title">
                  <span>X24-B223B 中影光峰ALPD®激光荧光粉放映机</span>
              </div>
              <div class="sub-title">
                  <span>1080P精致影院！900ANSI家用高亮！上线钜惠推出</span>
              </div>
              <div class="price">
                  <div class="price-cheap">
                      <div class="price-1">
                          <span>市场价:</span>
                      </div>
                      <div class="price-2">
                          <span>¥94680.00</span>
                      </div>
                      <div class="price-3">
                          <span>¥54680.00</span>
                      </div>
                  </div>
                  <div class="price-coupon">
                      <div class="price-1">
                          <span>优惠券:</span>
                      </div>
                      <div class="coupon">
                          <coupon></coupon>
                          <coupon class="mg-lf-12"></coupon>
                      </div>
                  </div>
              </div>
              <div class="weight">
                  <span>净重量：</span>
                  <span class="large">不计重量</span>
              </div>
              <div class="version">
                  <span>选择版本</span>
              </div>
              <div class="select">
                  <div class="version-btn active">
                      <span>版本一</span>
                  </div>
                  <div class="version-btn">
                      <span>版本二</span>
                  </div>
                  <div class="version-btn disabled">
                      <span>版本三(缺货)</span>
                  </div>
                  <div class="version-btn">
                      <span>版本四</span>
                  </div>
                  <div class="version-btn">
                      <span>版本五</span>
                  </div>
              </div>
              <div class="buy">
                  <div class="input-number">
                      <el-input-number controls-position="right" :min="1" :max="10"></el-input-number>
                  </div>
                  <div class="buy-btn car-fisrt">
                      <span>加入购物车</span>
                  </div>
                  <div class="buy-btn buy-immiate">
                      <span>立即购买</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import coupon from '@/components/coupon'
export default {
  components: {
    coupon
  }
}
</script>

<style lang="scss" scoped>
.detail-card {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    .content {
        width: 1226px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        .left {
            width: 430px;
            .large-img {
                width: 430px;
                height: 430px;
                border: 1px solid #E1E1E1;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .small-img {
                margin-top: 10px;
                display: flex;
                justify-content:space-between;
                align-items: center;
                .item {
                    width: 100px;
                    height: 80px;
                    position: relative;
                    border: 1px solid #E1E1E1;
                    &.active {
                        border: 1px solid #FF5B22;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .right {
            width: 747px;
            text-align: left;
            .title {
                font-size: 24px;
                color: #333333;
                margin-top: 19px;
            }
            .sub-title {
                font-size: 14px;
                color: #F30012;
                margin-top: 18px;
            }
            .price {
                width: 747px;
                height: 160px;
                box-sizing: border-box;
                background: #F5F5F5;
                margin-top: 20px;
                padding: 28px 21px 0 21px;
                .price-cheap {
                    display: flex;
                    align-items: center;
                    .price-1 {
                        font-size: 14px;
                        color: #333333;
                    }
                    .price-2 {
                        font-size: 16px;
                        color: #999999;
                        text-decoration:line-through;
                        padding-left: 25px;
                    }
                    .price-3 {
                        font-size: 26px;
                        color: #F30012;
                        padding-left: 14px;
                    }
                }
                .price-coupon {
                    display: flex;
                    .price-1 {
                        font-size: 14px;
                        color: #333333;
                        padding-top: 25px;
                    }
                    .coupon {
                        height: 69px;
                        display: flex;
                        margin-left: 18px;
                        margin-top: 20px;
                        .mg-lf-12 {
                            margin-left: 12px;
                        }
                    }
                }
            }
            .weight {
                margin-top: 25px;
                font-size: 14px;
                margin-left: 21px;
                color: #999999;
                .large {
                    color: #333333;
                }
            }
            .version {
                margin-top: 18px;
                font-size: 14px;
                color: #999999;
                margin-left: 21px;
            }
            .select {
                margin-top: 16px;
                display: grid;
                margin-left: 21px;
                grid-template-columns: 185px 185px 185px;
                grid-template-rows: 37px 37px;
                grid-column-gap: 14px;
                grid-row-gap: 14px;
                .version-btn {
                    width: 185px;
                    height: 37px;
                    border: 1px solid #E1E1E1;
                    color: #333333;
                    text-align: center;
                    line-height: 37px;
                    font-size: 14px;
                    &.active {
                        border: 1px solid #FF5B22;
                        color: #FF5B22;
                    }
                    &.disabled {
                        background-color: #F5F5F5;
                    }
                }
            }
            .buy {
                margin-top: 30px;
                display: flex;
                margin-left: 21px;
                .input-number {
                    width: 180px;
                    height: 60px;
                }
                .buy-btn {
                    width: 288px;
                    height: 60px;
                    border: 1px solid #E1E1E1;
                    font-size: 20px;
                    text-align: center;
                    color: #666666;
                    line-height:60px;
                    margin-left: 20px;
                    &.buy-immiate {
                        background-color: #FF5B22;
                        border:none;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}
</style>

<style lang="scss">
.detail-card {
    .el-input__inner {
        height: 60px;
        line-height: 60px;
    }
    .el-input-number.is-controls-right .el-input-number__decrease, .el-input-number.is-controls-right .el-input-number__increase {
        height: 30px;
        line-height: 30px;
    }
}
</style>
