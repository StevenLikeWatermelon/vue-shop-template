<template>
  <div class="order-header">
      <div class="left">
          <div class="left-item">
              <div class="number">
                  <span>订单号：1000001232133435</span>
              </div>
              <div class="status">
                  <span>完成</span>
              </div>
              <div class="view-detail">
                  <span>查看发票详情</span>
              </div>
              <div class="print">
                 <div>
                     <img src="@/assets/print.png" alt="">
                 </div>
                 <div>
                     <span>打印订单</span>
                 </div>
              </div>
          </div>
          <div class="sperate"></div>
      </div>
      <div class="right">
          <div class="title">
              <span>订单已经完成，感谢您在中影光锋商城购物</span>
          </div>
          <div class="progress">
              <div class="progress-item active">
                  <span>下单</span>
              </div>
              <div class="progress-item">
                  <span>付款</span>
              </div>
              <div class="progress-item">
                  <span>出库</span>
              </div>
              <div class="progress-item">
                  <span>收货</span>
              </div>
              <div class="progress-item">
                  <span>交易完成</span>
              </div>
          </div>
          <div class="time">
              <span>2020年10月18日 19:08</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.order-header {
    width: 100%;
    background-color: #ffffff;
    height: 200px;
    position: relative;
    display: flex;
    .left {
        width: 289px;
        position: relative;
        .left-item {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .number {
                color: #999999;
                font-size: 14px;
                margin-top: 17px;
            }
            .status {
                color: #7ABD53;
                font-size: 34px;
                margin-top: 26px;
            }
            .view-detail {
                width: 130px;
                height: 30px;
                border: 1px solid #E1E1E1;
                border-radius: 2px;
                font-size: 14px;
                text-align:center;
                line-height:30px;
                margin-top: 18px;
                color: #333333;
            }
            .print {
                margin-top: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:14px;
                color: #666666;
            }
        }
        .sperate {
            position: absolute;
            width: 1px;
            height: 200px;
            background: linear-gradient(#ffffff, #E1E1E1, #ffffff);
            right: 0;
            top: 0;
        }
    }
    .right {
        width: 936px;
        height: 100%;
        padding-left: 55px;
        box-sizing: border-box;
        .title {
            font-size: 14px;
            color: #999999;
            margin-top: 19px;
            text-align:left;
        }
        .progress {
            margin-top: 48px;
            display: flex;
            height: 22px;
            background: #F5F5F5;
            width: 750px;
            border-radius: 11px;
            .progress-item {
                width: 150px;
                text-align:center;
                line-height:22px;
                font-size: 12px;
                color: #333333;
                &.active {
                    color: white;
                    background: #84C44F;
                    border-radius: 11px;
                }
            }
        }
        .time {
            width: 91px;
            font-size: 12px;
            color: #333333;
            margin-top: 18px;
            margin-left: 30px;
        }
    }
}
</style>
