<template>
  <div class="successContent">
    <div class="part-1">
      <div class="qr">
        <img src="@/assets/qr.png" alt="" />
      </div>
      <div class="info">
        <p class="text-1">提交订单成功，请尽快付款！订单号：1100001132443</p>
        <p class="text-2">
          <span>请您在</span>
          <span style="color: #f30012">23时53分01秒</span>
          <span>内完成支付，否则订单会自动取消</span>
        </p>
      </div>
    </div>
    <div class="sperate"></div>
    <div class="part-2">
      <p>北京市 朝阳区 十八里店乡 张家店东街273号 收货人：张先生 139****111</p>
      <p>
        商品名称：激光T1投影仪家用办公 激光电商
        微型迷你便携投影仪（激光自动对焦内置电池防尘盖）桌面支架三脚架
        小白T1专用支架通用支架（赠品）
      </p>
    </div>
    <div class="sperate"></div>
    <div class="part-3">
      <p class="h1">付款信息：</p>
      <p>收款单位：中影光峰激光影院技术(北京)有限公司</p>
      <p>开户行：民生银行北京首体支行</p>
      <p>银行账号：691906234</p>
      <p>付款备注码：132375468244</p>
    </div>
    <div class="sperate"></div>
    <div class="part-4">
      <div class="btn">
        <span>下载付款结算单</span>
      </div>
      <div class="table-part">
        <div class="header">
          <span>中影光峰采购结算单</span>
        </div>
        <div class="title">
          <div>
            <span>收货地址：北京市昌平区龙旗广场保利剧院三层 霍值明 13501392511</span>
          </div>
          <div>
            <span>下单时间：2020-09-11</span>
          </div>
        </div>
        <div class="table">
          <el-table :data="tableData" border style="width: 100%" header-row-class-name="gray-bg">
            <el-table-column type="index" label="序号" :index="indexMethod" width="128">
            </el-table-column>
            <el-table-column prop="name" label="商品名称" width="360">
            </el-table-column>
            <el-table-column prop="number" label="数量">
            </el-table-column>
            <el-table-column prop="unit" label="单价"> </el-table-column>
            <el-table-column prop="price" label="金额"> </el-table-column>
          </el-table>
        </div>
        <div class="summy">
            <div class="money">
                <span>订单金额：<span class="red-color">30000元</span></span>
                <span>折扣金额：<span class="red-color">300元 </span></span>
            </div>
            <div class="operate">
                <span>操作员：霍值明</span>
            </div>
        </div>
        <div class="sperate dotted"></div>
        <div class="china-money">
            <span>实际付款金额：</span>
            <span class="red-color">29700元</span>
            <span>（贰万玖仟柒佰元整）</span>
        </div>
        <div class="supply">
            <span>采购单位：东方(北京)有限公司</span>
            <span>供应商：中影光峰激光影院技术(北京)有限公司</span>
        </div>
        <div class="componey">
            <div class="left">
                <p>收款单位：中影光峰激光影院技术(北京)有限公司</p>
                <p>开户行：民生银行北京首体支行</p>
                <p>银行账号：691906234</p>
                <p>付款备注码：132375468244</p>
            </div>
            <div class="right">
                <span>备注：为了不影响您的发货请支付，款项时，务必备注付款备 注码信息</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    indexMethod (index) {
      return index + 1
    }
  },
  data () {
    return {
      tableData: [
        {
          name: '放映机2223',
          number: '999999',
          unit: '¥ 999999.00',
          price: '¥ 999999.00'
        },
        {
          name: '放映机2223',
          number: '999999',
          unit: '¥ 999999.00',
          price: '¥ 999999.00'
        }, {
          name: '放映机2223',
          number: '999999',
          unit: '¥ 999999.00',
          price: '¥ 999999.00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.successContent {
    .red-color {
        color: #F30012;
    }
  margin-top: 20px;
  width: 100%;
  padding: 30px;
  background-color: white;
  text-align: left;
  .part-1 {
    display: flex;
    align-items: center;
    .qr {
      width: 100px;
      height: 100px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      color: #333333;
      margin-left: 30px;
      .text-1 {
        font-size: 20px;
        margin-bottom: 19px;
      }
      .text-2 {
        font-size: 14px;
      }
    }
  }
  .sperate {
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
    margin-top: 30px;
    &.dotted {
        height: 0;
        border-bottom: 1px dotted #C1C1C1;
    }
  }
  .part-2 {
    color: #333333;
    font-size: 14px;
    line-height: 30px;
    margin-top: 30px;
  }
  .part-3 {
    color: #333333;
    font-size: 14px;
    line-height: 30px;
    margin-top: 30px;
    .h1 {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .part-4 {
    margin-top: 30px;
    .btn {
      width: 187px;
      height: 42px;
      border: 1px solid #ff5b22;
      border-radius: 2px;
      color: #ff5b22;
      line-height: 42px;
      text-align: center;
    }
    .table-part {
      width: 1166px;
      border: 1px dotted #c1c1c1;
      margin-top: 30px;
      padding: 61px 82px;
      box-sizing: border-box;
      .header {
          color: #333333;
          font-size: 34px;
          text-align: center;
          margin-bottom: 30px;
      }
      .title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          color: #333333;
          font-size: 14px;
          margin-bottom: 14px;
      }

      .summy {
          display: flex;
          justify-content: space-between;
          color: #333333;
          margin-top: 13px;
          font-size: 14px;
          .money span {
              padding-right: 60px;
          }
      }
      .china-money {
            color: #000000;
            font-size: 20px;
            margin-top: 30px;
      }
      .supply {
          color: #333333;
          font-size: 14px;
          margin-top: 18px;
          span {
              padding-right: 60px;
          }
      }
      .componey {
          margin-top: 38px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
            font-size: 14px;
          .left {
              color: #000000;
            line-height: 24px;
          }
          .right {
              color: #999999
          }
      }
    }
  }
}
</style>
