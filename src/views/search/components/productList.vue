
<template>
  <div class="product-list">
      <div class="product-content">
          <div class="product-filter">
              <div class="sort">
                  <div class="text active">
                      <div class="left">
                          <span>综合</span>
                      </div>
                  </div>
                  <div class="sperate"></div>
              </div>
              <div class="sort">
                  <div class="text">
                      <div class="left">
                          <span>综合</span>
                      </div>
                      <div class="right">
                          <img src="@/assets/arrow3.png" alt="">
                      </div>
                  </div>
                  <div class="sperate"></div>
              </div>
              <div class="sort">
                  <div class="text">
                      <div class="left">
                          <span>综合</span>
                      </div>
                      <div class="right">
                          <img src="@/assets/arrow3.png" alt="">
                      </div>
                  </div>
                  <div class="sperate"></div>
              </div>
              <div class="input">
                  <div class="input-item">
                      <el-input />
                  </div>
                  <div class="input-sperate">
                      <span>-</span>
                  </div>
                  <div class="input-item">
                      <el-input />
                  </div>
              </div>
          </div>
          <div class="product-card">
              <buyCard
                v-for="item in list"
                :key="item.id"
                :name="item.name"
                :originPrice="item.originPrice"
                :tips="item.tips"
                :discountPrice="item.discountPrice"
              ></buyCard>
          </div>
          <div class="product-page">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="990">
            </el-pagination>
          </div>
      </div>
  </div>
</template>

<script>
import buyCard from '@/components/buyCard'
export default {
  components: {
    buyCard
  },
  data () {
    return {
      list: [
        {
          id: 0,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥5655'
        },
        {
          id: 1,
          name: 'DP4K-36BLP- 3',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56676'
        }, {
          id: 2,
          name: 'DP4K-36BLP- 22',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99099',
          discountPrice: '￥56866'
        }, {
          id: 3,
          name: 'DP4K-36BLP- 5',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 4,
          name: 'DP4K-36BLP- 6',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 5,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥9939',
          discountPrice: '￥56666'
        }, {
          id: 6,
          name: 'DP4K-36BLP- 8',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 7,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 9,
          name: 'DP4K-36BLP- 09',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 8,
          name: 'DP4K-36BLP- 76',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 10,
          name: 'DP4K-36BLP- 454',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 20,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        },
        {
          id: 30,
          name: 'DP4K-36BLP- 65',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 40,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 50,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 51,
          name: 'DP4K-36BLP- 454',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 52,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        },
        {
          id: 530,
          name: 'DP4K-36BLP- 65',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 540,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 550,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .product-content {
        width: 1226px;
        padding-top: 24px;
        .product-filter {
            display: flex;
            align-items: center;
            .sort {
                padding-right: 19px;
                margin-right: 19px;
                height: 13px;
                position: relative;
                height: 20px;
                .text {
                    font-size: 14px;
                    color: #333333;
                    display: flex;
                    align-items: center;
                    .right {
                        padding-left: 7px;
                    }
                    &.active {
                        background: #FF5B22;
                        border-radius: 2px;
                        padding: 0 1px;
                        color: #FFFFFF;
                    }
                }
                .sperate {
                    position: absolute;
                    top: 4px;
                    right: 0;
                    width: 1px;
                    height: 13px;
                    background: #C1C1C1;
                }
            }
            .input {
                display: flex;
                align-items: center;
                .input-item {
                    width: 88px;
                    height: 26px;
                }
                .input-sperate {
                    padding: 0 7px;
                }
            }
        }
        .product-card {
            padding-top: 18px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(5, 234px);
            grid-template-rows: repeat(4, 370px);
            grid-column-gap: 14px;
            grid-row-gap: 14px;
        }
        .product-page {
          margin-top: 60px;
        }
    }
}
</style>

<style lang="scss">
.product-list {
    .el-input__inner {
        height: 26px;
    }
}
</style>
