<template>
  <div class="payContent">
    <div class="h1">
      <span>填写并核对订单信息</span>
    </div>
    <div class="package">
      <div class="top">
        <div class="left">
          <span>收货人信息：</span>
        </div>
        <div class="right">
          <span>+新增收货地址</span>
        </div>
      </div>
      <div class="address-list mg-tp-20">
        <div class="list-item">
          <div class="left">
            <div class="btn">
              <span>张先生</span>
            </div>
            <div class="address">
              <span>张先生</span>
              <span>北京市 </span>
              <span>海淀区</span>
              <span>农大南路</span>
              <span>树村西街</span>
              <span>甲6</span>
            </div>
          </div>
        </div>
      </div>
      <div class="address-list mg-tp-10">
        <div class="list-item">
          <div class="left">
            <div class="btn active">
              <span>张先生</span>
              <img src="@/assets/check.png" alt="" />
            </div>
            <div class="address">
              <span>张先生</span>
              <span>北京市 </span>
              <span>海淀区</span>
              <span>农大南路</span>
              <span>树村西街</span>
              <span>甲6</span>
            </div>
            <div class="default">
              <span>默认</span>
            </div>
          </div>
        </div>
      </div>
      <div class="address-list mg-tp-10">
        <div class="list-item">
          <div class="left">
            <div class="btn">
              <span>张先生</span>
            </div>
            <div class="address active">
              <span>张先生</span>
              <span>北京市 </span>
              <span>海淀区</span>
              <span>农大南路</span>
              <span>树村西街</span>
              <span>甲6</span>
            </div>
          </div>
          <div class="right active">
            <span>设为默认地址</span>
            <span>编辑</span>
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="toggle-address">
        <div>
          <span>收起地址</span>
        </div>
        <div class="right">
          <img src="@/assets/sq.png" alt="" />
        </div>
      </div>
      <div class="sperate"></div>
      <div class="dilivery-h1">
        <span class="type">配送方式：</span>
        <span class="weight">总重量：</span>
        <span class="number">14.09KG</span>
      </div>
      <div class="check-type">
        <div class="left btn active">
          <span>第三方物流</span>
          <img src="@/assets/check.png" alt="" />
        </div>
        <div class="right btn">
          <span>上门自体</span>
        </div>
      </div>
      <div class="sperate"></div>
      <div class="dilivery-h1">
        <span class="type">支付方式：</span>
      </div>
      <div class="check-type">
        <div class="left btn active">
          <span>公司转账</span>
          <img src="@/assets/check.png" alt="" />
        </div>
      </div>
    </div>
    <div class="package">
      <div class="top">
        <div class="left">
          <span>送货清单：</span>
        </div>
        <div class="right">
          <div style="margin-right: 10px">
            <img src="@/assets/jgsm.png" alt="" />
          </div>
          <div><span style="padding-right: 10px">价格说明</span></div>
          <div><span>返回购物车修改</span></div>
        </div>
      </div>
      <div class="prd-list mg-tp-20">
        <div class="img">
          <img src="@/assets/product1.png" alt="" />
        </div>
        <div class="text1">
          <span>DP4K-36BLP- 2</span>
        </div>
        <div class="text2">
          <span>荧光粉激光23米，支持银屏18米</span>
        </div>
        <div class="price">
          <span>¥54680.00</span>
        </div>
        <div class="num">
          <span>x1</span>
        </div>
        <div class="price1">
          <span>¥54680.00</span>
        </div>
      </div>
      <div class="sperate mg-top-20"></div>
      <div class="prd-list mg-tp-20">
        <div class="img">
          <img src="@/assets/product1.png" alt="" />
        </div>
        <div class="text1">
          <span>DP4K-36BLP- 2</span>
        </div>
        <div class="text2">
          <span>荧光粉激光23米，支持银屏18米</span>
        </div>
        <div class="price">
          <span>¥54680.00</span>
        </div>
        <div class="num">
          <span>x1</span>
        </div>
        <div class="price1">
          <span>¥54680.00</span>
        </div>
      </div>
      <div class="sperate mg-top-20"></div>
      <div class="prd-list mg-tp-20">
        <div class="img">
          <img src="@/assets/product1.png" alt="" />
        </div>
        <div class="text1">
          <span>DP4K-36BLP- 2</span>
        </div>
        <div class="text2">
          <span>荧光粉激光23米，支持银屏18米</span>
        </div>
        <div class="price">
          <span>¥54680.00</span>
        </div>
        <div class="num">
          <span>x1</span>
        </div>
        <div class="price1">
          <span>¥54680.00</span>
        </div>
      </div>
    </div>
    <div class="package">
      <div class="top-start">
        <div class="left">
          <span>发票信息：</span>
        </div>
        <div class="right">
          <span>开企业抬头发票须填写纳税人识别号，以免影响报销</span>
        </div>
      </div>
      <div class="radio-check">
        <el-radio v-model="radio" label="1">
          <span style="padding-right: 15px">电子普通发票</span>
          <span style="padding-right: 15px">个人</span>
          <span style="padding-right: 15px">商品明细</span>
          <span style="padding-right: 15px; color: #ff5b22">修改</span>
        </el-radio>
        <el-radio v-model="radio" label="2">
          <span>分批或延后的发票请到发票中心处理</span>
        </el-radio>
      </div>
    </div>
    <div class="package">
      <div class="top">
        <div class="left">
          <span>使用优惠券：</span>
        </div>
      </div>
      <div class="coupon-list">
        <div class="coupon-item">
          <div class="card active">
            <coupon></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
            <img src="@/assets/check.png" alt="" />
          </div>
          <div class="tips">

          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon :disabled="true"></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">
            <span>所结算商品中没有符合条件对商品</span>
          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">

          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">
            <span></span>
          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon :disabled="true"></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">
            <span>所结算商品中没有符合条件对商品</span>
          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">
            <span></span>
          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">
            <span></span>
          </div>
        </div>
        <div class="coupon-item">
          <div class="card">
            <coupon></coupon>
            <div class="text">
              <span>有效日期至：2020.11.01</span>
            </div>
          </div>
          <div class="tips">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="all-cpupon">
        <span>金额抵用：</span>
        <span style="color:#F30012">¥500.00</span>
    </div>
    <div class="div-zgb">
        <div class="left">
            <div class="text">
                <span>中光币：</span>
                <span style="color:#F30012;">200</span>
                <span>，本单可使用</span>
                <span style="color:#F30012;">20</span>
            </div>
            <div class="checkbox">
                <el-checkbox></el-checkbox>
            </div>
            <div class="sy">
                <span>使用</span>
            </div>
            <div class="input">
                <el-input v-model="input" />
            </div>
        </div>
        <div class="right">
            <p><span style="color: #ff5b22">3</span>件商品，总商品金额：¥50000.00</p>
            <p>优惠券抵扣：-¥0.00</p>
            <p>中光币抵扣： -¥0.00</p>
            <p>运费： ¥0.00</p>
        </div>
    </div>
  </div>
</template>

<script>
import coupon from '@/components/coupon'
export default {
  data () {
    return {
      radio: '1',
      input: '0'
    }
  },
  components: {
    coupon
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 166px;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  color: #333333;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  position: relative;
  &.active {
    border-color: #ff5b22;
    color: #ff5b22;
    img {
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
.payContent {
  .sperate {
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
    margin-top: 30px;
    &.dotted {
      height: 0;
      border-bottom: 1px dotted #c1c1c1;
    }
    &.mg-top-20 {
      margin-top: 20px;
    }
  }
  margin-top: 20px;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
  background: white;
  text-align: left;
  .mg-tp-10 {
    margin-top: 10px;
  }
  .mg-tp-20 {
    margin-top: 20px;
  }
  .h1 {
    color: #333333;
    font-size: 14px;
    font-weight: 700;
  }
  .package {
    padding: 30px;
    margin-top: 20px;
    border: 1px solid #e1e1e1;
    .top-start {
      display: flex;
      align-items: center;
      .left {
        color: #333333;
        font-size: 16px;
        font-weight: bold;
      }
      .right {
        width: 390px;
        height: 39px;
        background: url("../../../assets/fpxlsm.png");
        background-size: 390px 39px;
        line-height: 41px;
        color: #333333;
        font-size: 14px;
        span {
          padding-left: 40px;
        }
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        color: #333333;
        font-size: 16px;
        font-weight: bold;
      }
      .right {
        color: #ff5b22;
        display: flex;
        align-items: center;
      }
    }
    .address-list {
      padding-left: 20px;
      .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          height: 40px;
          line-height: 40px;
          display: flex;
          align-items: center;
          .address {
            &.active {
              background-color: #fff4f0;
            }
            margin-left: 10px;
            color: #333333;
            font-size: 14px;
            padding-left: 10px;
            span {
              padding-right: 20px;
            }
          }
          .default {
            width: 34px;
            height: 16px;
            background: #ff5b22;
            border-radius: 2px;
            font-size: 12px;
            color: #ffffff;
            padding: 0 1px;
            line-height: 16px;
            text-align: center;
          }
        }
        .right {
          color: #ff5b22;
          font-size: 14px;
          text-align: right;
          height: 40px;
          line-height: 40px;
          flex: 1;
          span {
            padding-right: 15px;
          }
          &.active {
            background-color: #fff4f0;
          }
        }
      }
    }
    .toggle-address {
      display: flex;
      align-items: center;
      color: #333333;
      font-size: 14px;
      margin-left: 20px;
      margin-top: 20px;
      .right {
        margin-left: 10px;
      }
    }
    .dilivery-h1 {
      color: #333333;
      font-size: 14px;
      margin-top: 30px;
      .type {
        font-size: 16px;
        font-weight: bold;
        padding-left: 10px;
      }
      .number {
        font-weight: bold;
        padding-left: 10px;
      }
    }
    .check-type {
      margin-left: 20px;
      margin-top: 20px;
      display: flex;
      .right {
        margin-left: 10px;
      }
    }
    .prd-list {
      display: flex;
      align-items: center;
      padding-left: 20px;
      .img {
        width: 60px;
        height: 60px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .text1 {
        color: #111111;
        font-size: 14px;
        padding-right: 10px;
        margin-left: 20px;
      }
      .text2 {
        color: #999999;
        font-size: 12px;
        padding-right: 10px;
      }
      .price {
        color: #333333;
        font-size: 14px;
        margin-left: 110px;
      }
      .num {
        color: #333333;
        font-size: 14px;
        margin-left: 118px;
      }
      .price1 {
        color: #333333;
        font-size: 14px;
        margin-left: 120px;
      }
    }
  }
  .radio-check {
    padding-left: 20px;
    margin-top: 27px;
  }
  .coupon-list {
    margin-left: 20px;
    margin-top: 22px;
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    grid-template-rows: 205px 205px;
    grid-column-gap: 20px;
    .coupon-item {
      .card {
        width: 250px;
        height: 164px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e1e1e1;
        &.active {
          border-color: #ff5b22;
          position: relative;
          img {
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
        flex-direction: column;
        .text {
          color: #999999;
          font-size: 14px;
          margin-top: 15px;
        }
      }
      .tips {
        height: 41px;
        color: #999999;
        font-size: 12px;
        line-height: 41px;
        text-align: center;
      }
    }
  }
  .all-cpupon {
        padding-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid #E1E1E1;
        border-top: none;
        background-color: #F5F5F5;
        line-height: 30px;
        color: #333333;
        font-size: 14px;
  }
}
.div-zgb {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 40px;
    .left {
        display: flex;
        align-items: center;
        .text {
            margin-right: 20px;
        }
        .checkbox {
            margin-right: 10px;
        }
        .sy {
            margin-right: 10px;
        }
        .input {
            width: 104px;
            height: 30px;
        }
    }
    .right {
        color: #333333;
        font-size: 14px;
        line-height:24px;
    }
}

</style>

<style lang="scss">
.payContent {
    .el-input__inner {
        height: 30px;
        line-height: 30px;
    }
}
</style>
