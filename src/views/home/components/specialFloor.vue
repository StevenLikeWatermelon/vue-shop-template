<template>
  <div class="special-floor">
      <div class="left card">
          <div class="title-with-sub">
              <div class="left">
                <span>每日特价</span>
              </div>
          </div>
          <div class="card-content">
              <div class="special-card-wrapper">
                  <default-special-card
                    :name="productDefault.name"
                    :originPrice="productDefault.originPrice"
                    :specialPrice="productDefault.specialPrice"
                    background-color="#F5F5F5"
                  ></default-special-card>
                  <div class="card-cheapest-label">
                    <img src="@/assets/cheapestToday.png" alt="">
                  </div>
              </div>
              <div class="special-card-small">
                  <small-special-card
                    v-for="item in productsSmallArr"
                    :key="item.id"
                    :name="item.name"
                    :originPrice="item.originPrice"
                    :specialPrice="item.specialPrice"
                  ></small-special-card>
              </div>
          </div>
      </div>
      <div class="right card">
          <div class="title-with-sub">
              <div class="left">
                <span>排行榜</span>
              </div>
              <div class="right">
                <div class="switch-item active">
                  <span>光源产品</span>
                </div>
                <div class="switch-item">
                  <span>幕布</span>
                </div>
                <div class="switch-item">
                  <span>音响</span>
                </div>
                <div class="switch-item">
                  <span>座椅</span>
                </div>
              </div>
          </div>
          <div class="card-content">
            <div class="special-card-wrapper"  v-for="(item, index) in productsDefaultArr" :key="item.id">
              <default-special-card
                :name="item.name"
                :originPrice="item.originPrice"
                :specialPrice="item.specialPrice"
                :backgroundColor="item.backgroundColor"
              ></default-special-card>
              <div class="top-label">
                <img v-if="index == 0" src="@/assets/top1.png" alt="">
                <img v-if="index == 1" src="@/assets/top2.png" alt="">
                <img v-if="index == 2" src="@/assets/top3.png" alt="">
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import defaultSpecialCard from '@/components/specialCard/default'
import smallSpecialCard from '@/components/specialCard/small'
export default {
  components: {
    defaultSpecialCard,
    smallSpecialCard
  },
  data () {
    return {
      productDefault: {
        name: 'DP4K-36BLP- 2',
        originPrice: '￥99999',
        specialPrice: '￥5655'
      },
      productsSmallArr: [
        {
          id: 1,
          name: 'DP4K-36BLP- 3',
          originPrice: '￥99999',
          specialPrice: '￥56676'
        }, {
          id: 2,
          name: 'DP4K-36BLP- 22',
          originPrice: '￥99099',
          specialPrice: '￥56866'
        }, {
          id: 3,
          name: 'DP4K-36BLP- 5',
          originPrice: '￥99999',
          specialPrice: '￥56666'
        }, {
          id: 4,
          name: 'DP4K-36BLP- 6',
          originPrice: '￥99999',
          specialPrice: '￥56666'
        }
      ],
      productsDefaultArr: [
        {
          id: 1,
          name: 'DP4K-36BLP- 3',
          originPrice: '￥99999',
          specialPrice: '￥56676',
          backgroundColor: '#EBF7F4'
        }, {
          id: 2,
          name: 'DP4K-36BLP- 22',
          originPrice: '￥99099',
          specialPrice: '￥56866',
          backgroundColor: '#F1F5F9'
        }, {
          id: 3,
          name: 'DP4K-36BLP- 5',
          originPrice: '￥99999',
          specialPrice: '￥56666',
          backgroundColor: '#F9F8F1'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.special-floor {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 340px;
    .card {
        width: 603px;
        height: 100%;
        background-color: #fff;
        padding: 23px 20px 20px 20px;
        position: relative;
         box-sizing: border-box;
        .title-with-sub {
            display: flex;
            align-items: flex-end;
            .left {
              color: #000000;
              font-size: 24px;
              font-weight: 600;
              text-align: left;
            }
            .right {
              margin-left: 20px;
              display: flex;
              align-items: flex-end;
              .switch-item {
                width: 103px;
                height: 29px;
                background: #F6F6F6;
                border-radius: 15px;
                margin-right: 6px;
                text-align: center;
                line-height: 29px;
                &.active {
                  background-color: #FF5B22;
                  font-size: 14px;
                  font-weight: 400;
                  color: #FFFFFF;
                }
              }
            }

        }
        .card-content {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            height: 254px;
            width: 100%;
            .special-card-wrapper {
                width: 174px;
                height: 254px;
                position: relative;
                .card-cheapest-label {
                  position: absolute;
                  top: 21px;
                  left: 0;
                  width: 106px;
                  img {
                    display: block;
                    width: 100%;
                  }
                }
                .top-label {
                  position: absolute;
                  top: 0;
                  left: 20px;
                  width: 33px;
                  height: 38px;
                  img {
                    display: block;
                    width: 100%;
                  }
                }
            }
            .special-card-small {
                display: grid;
                grid-template-columns: 184px 184px;
                grid-template-rows: 121px 121px;
                grid-row-gap: 11px;
                grid-column-gap: 11px;
            }
        }
    }
}
</style>
