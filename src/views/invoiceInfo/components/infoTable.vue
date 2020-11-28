<template>
  <div class="orderList">
    <div class="title">
      <span>发票信息</span>
    </div>
    <div class="sub-title">
      <span  class="h1">开增值税发票</span>
      <span class="h2">全部申请订单</span>
      <span class="h2">异常申请订单</span>
      <span class="h2">已开票申请单</span>
      <span class="h2 orange">企业发票</span>
    </div>
    <div class="table mg-top-20">
      <el-table :data="tableData" style="width: 100%" header-row-class-name="gray-bg">
        <el-table-column type="index" label="序号" :index="indexMethod" width="128">
        </el-table-column>
        <el-table-column prop="type" label="发票类型"> </el-table-column>
        <el-table-column prop="money" label="发票金额"> </el-table-column>
        <el-table-column prop="address" label="接收地址" width="200"> </el-table-column>
        <el-table-column prop="invoiceTime" label="开票时间"> </el-table-column>
        <el-table-column prop="applyTime" label="申请时间"> </el-table-column>
        <el-table-column prop="view" label="查看" width="110">
          <template v-slot="scope">
            <span v-for="(item, index) in scope.row.view" :key="index" class="view-span">{{item}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="990">
      </el-pagination>
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
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['下载', '详情'],
          status: '已开具'
        }, {
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['下载', '详情'],
          status: '已开具'
        }, {
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['下载', '详情'],
          status: '已开具'
        }, {
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['下载', '详情'],
          status: '已开具'
        }, {
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['下载', '详情'],
          status: '已开具'
        }, {
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['下载', '详情'],
          status: '已开具'
        }, {
          type: '电子普票',
          money: '¥54680.00',
          address: 'houzhiming@dfhc.com.cn',
          invoiceTime: '2020-11-10',
          applyTime: '2020-11-10',
          view: ['邮寄跟踪'],
          status: '已开具'
        }
      ]
    }
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
  .sub-title {
    margin-top: 30px;
    span {
      margin-right: 20px;
    }
    .h1 {
      color: #333333;
      font-size: 16px;
    }
    .h2 {
      font-size: 12px;
      color: #999999;
      &.orange {
        color: #FF5B22;
      }
    }
  }
  .page {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }
}
</style>
<style lang="scss">
.orderList .view-span {
  padding-right: 10px;
  color: #ff5b22;
  text-decoration: underline;
}
</style>
