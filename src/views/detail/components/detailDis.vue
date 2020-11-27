<template>
  <div class="detail-dis">
      <div class="content">
          <div class="title">
              <span>商品详情</span>
          </div>
          <div class="img-and-recommend">
              <div class="img">
                  <div class="item">
                      <img src="@/assets/detailDis.png" alt="">
                  </div>
                  <div class="item">
                      <img src="@/assets/detailDis.png" alt="">
                  </div>
                  <div class="item">
                      <img src="@/assets/detailDis.png" alt="">
                  </div>
              </div>
              <div class="reocommend">
                  <div class="close">
                      <div class="text">
                          <span>相关推荐</span>
                      </div>
                      <div class="icon">
                          <img src="@/assets/close.png" alt="">
                      </div>
                  </div>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
                  <smallCard></smallCard>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import smallCard from './smallCard'
export default {
  components: {
    smallCard
  }
}
</script>

<style lang="scss" scoped>
.detail-dis {
    width: 100%;
    display: flex;
    justify-content: center;
    .content {
        width: 1226px;
        padding-top: 34px;
        text-align: left;
        overflow: visible;
        .title {
            color: #333333;
            font-size: 24px;
        }
        .img-and-recommend {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            width: 1450px;
            .img {
                width: 1226px;
                position: relative;
                .item {
                    width: 100%;
                    margin-bottom: 15px;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
            }
            .reocommend {
                width: 200px;
                border: 1px solid #E1E1E1;
                box-shadow: 0px 9px 16px 0px rgba(181, 181, 181, 0.06);
                .close {
                    height: 46px;
                    background: #F7F7F7;
                    border-bottom: 1px solid #E1E1E1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 15px;
                    box-sizing: border-box;
                    .text {
                        font-size: 16px;
                        color: #333333;
                    }
                }
            }
        }
    }
}
</style>
