<template>
  <div class="orderList">
    <div class="title">
      <span>我的订单</span>
    </div>
    <div class="div-1">
      <div class="left">
        <div class="all">
          <span>全部订单</span>
        </div>
        <div class="get">
          <span>待付款</span>
        </div>
        <div class="not-get">
          <span>待收货</span>
          <div class="top">
            <span>99+</span>
          </div>
        </div>
        <div class="sperate"></div>
        <div class="delete">
          <span>订单回收站</span>
        </div>
      </div>
      <div class="right">
        <el-input placeholder="商品名称/商品编号/订单号">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="div-2">
      <div class="son-1">
        <div class="son-1-1">
          <div class="son-1-1-1">
            <span>近三个月订单</span>
          </div>
          <div class="son-1-1-2">
            <img src="@/assets/arrow2.png" alt="">
          </div>
        </div>
        <div class="son-1-2">
          <span>订单详情</span>
        </div>
      </div>
      <div class="son-2">
        <span>金额</span>
      </div>
      <div class="son-3">
        <div class="son-3-1">
          <span>全部状态</span>
        </div>
        <div class="son-3-2">
            <img src="@/assets/arrow2.png" alt="">
        </div>
      </div>
    </div>
    <tableStatus color="orange"></tableStatus>
    <simpleTable color="orange" class="mg-top-ne-1"></simpleTable>
    <simpleTable color="orange" class="mg-top-ne-1"></simpleTable>
    <div class="mg-top-20">
      <tableStatus color="orange"></tableStatus>
      <simpleTable color="orange" class="mg-top-ne-1"></simpleTable>
    </div>
    <div class="mg-top-20">
      <tableStatus></tableStatus>
      <simpleTable class="mg-top-ne-1"></simpleTable>
    </div>
    <div class="mg-top-20">
      <tableStatus></tableStatus>
      <simpleTable class="mg-top-ne-1"></simpleTable>
      <tableStatus class="mg-top-ne-1"></tableStatus>
      <simpleTable class="mg-top-ne-1"></simpleTable>
      <tableStatus class="mg-top-ne-1"></tableStatus>
      <simpleTable class="mg-top-ne-1"></simpleTable>
    </div>
  </div>
</template>

<script>
import tableStatus from '@/components/tableStatus'
import simpleTable from '@/components/simpleTable'
export default {
  components: {
    tableStatus,
    simpleTable
  }
}
</script>

<style lang="scss" scoped>
.orderList {
  text-align: left;
  width: 982px;
  box-sizing: border-box;
  background-color: white;
  padding: 38px 40px 110px 40px;
  .title {
    color: #333333;
    font-size: 24px;
  }
  .div-1 {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-top: 27px;
    .left {
      display: flex;
      align-items: center;
      color: #333333;
      font-size: 16px;
      .all {
        color: #FF5B22;
        margin-right: 40px;
      }
      .get {
        margin-right: 40px;
      }
      .not-get {
        margin-right: 40px;
        position: relative;
        .top {
            background: #FF5B22;
            border-radius: 3px;
            font-size: 10px;
            color: #ffffff;
            padding: 0 1px;
            position: absolute;
            right: -20px;
            top: -12px;
        }
      }
      .sperate {
        width: 1px;
        height: 19px;
        background-color: #dcd9d9;
        margin-right: 40px;
      }
      .delete {
        color: #999999;
        font-size: 14px;
      }
    }
    .right {
      width: 260px;
      height: 32px;
    }
  }
  .div-2 {
    margin-top: 20px;
    height: 40px;
    background: #F5F5F5;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #333333;
    font-size: 14px;
    .son-1 {
      display: flex;
      align-items: center;
      flex: 1;
      .son-1-1 {
        display: flex;
        align-items: center;
        margin-left: 20px;
        .son-1-1-2 {
          padding-left: 10px;
          height: 17px;
        }
      }
      .son-1-2 {
        margin-left: 190px;
      }
    }
    .son-2 {
      width: 160px;
    }
    .son-3 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      .son-3-2 {
          padding-left: 10px;
          height: 17px;
        }
    }
  }
}
</style>

<style lang="scss">
.orderList {
  .el-input__inner {
    height: 32px;
    line-height: 32px;
  }
}
</style>
