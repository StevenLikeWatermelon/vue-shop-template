<template>
  <div class="search-content">
      <div class="search-inner">
          <div class="search-left">
              <img src="@/assets/logo.png" alt="logo">
          </div>
          <div class="search-center">
              <div class="search-input">
                <div class="search-top">
                    <searchInput></searchInput>
                    <div class="search-car">
                        <div class="icon">
                            <img src="@/assets/car.png" alt="car">
                        </div>
                        <div class="text">
                            <span>我的购物车</span>
                        </div>
                        <div class="number">
                            <div class="top">
                                <span>99+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-tips">
                    <span>自由光 胶片放映机 影院放映机 激光放映机</span>
                </div>
              </div>
              <div class="search-ad">
                  <div class="search-ad-span special">秒杀</div>
                  <div class="search-ad-span special">中影会员</div>
                  <div class="search-ad-span">新人活动</div>
                  <div class="search-ad-span">品牌福利</div>
                  <div class="search-ad-span">优惠购</div>
              </div>
          </div>
          <div class="search-right">
              <div class="search-right-top">
                   <img src="@/assets/qr.png" alt="logo">
              </div>
              <div class="search-right-bottom">
                  <span>扫码，领福利</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import searchInput from '@/components/searchInput'
export default {
  components: {
    searchInput
  }
}
</script>

<style lang="scss" scoped>
.search-content {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    background-color: white;
    .search-inner {
        width: 1226px;
        padding: 20px 0 13px 0;
        display: flex;
        align-items: stretch;
        .search-left {
            display: flex;
            align-items:center;
            img {
                display: block;
            }
        }
        .search-center {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 40px;
            .search-input {
                .search-top {
                    display: flex;
                    align-items: center;
                    .search-car {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 155px;
                        height: 40px;
                        background: #ffffff;
                        border: 1px solid #E1E1E1;
                        margin-left: 20px;
                        .text {
                            padding-left: 7px;
                            padding-right: 2px;
                            color: #FF5B22;
                        }
                        .number {
                            height: 90%;
                            .top {
                                background: #FF5B22;
                                border-radius: 3px;
                                font-size: 10px;
                                color: #ffffff;
                                padding: 0 1px;
                            }
                        }
                    }
                }
            }
            .search-tips {
                font-size: 12px;
                color: #999999;
                text-align: left;
                margin-top: 9px;
            }
            .search-ad {
                width: 404px;
                display: flex;
                font-size: 16px;
                justify-content: space-between;
                .search-ad-span {
                    color: #333333;
                    &.special {
                        color: #E1251B;
                    }
                }
            }
        }
        .search-right-top {
            img {
                display: block;
                box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.14);
            }
        }
        .search-right-bottom {
            color: #666666;
            font-size: 12px;
            text-align: center;
            padding-top: 4px;
        }
    }
}
</style>
