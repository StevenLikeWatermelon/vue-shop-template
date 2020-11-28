<template>
  <div class="order-list">
    <div class="title">
      <span>商品列表</span>
    </div>
    <div class="table">
      <el-table header-row-class-name="center-text" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="商品信息" width="350px">
            <template slot-scope="scope">
                <pro-info :name="scope.row.name"></pro-info>
            </template>
        </el-table-column>
        <el-table-column prop="number" label="数量">
        </el-table-column>
        <el-table-column prop="index" label="商品编号"> </el-table-column>
        <el-table-column prop="price3" label="价格"> </el-table-column>
        <el-table-column prop="number2" label="已发货数量"> </el-table-column>
        <el-table-column prop="price" label="折扣金额"> </el-table-column>
        <el-table-column prop="price1" label="实付金额"> </el-table-column>
        <el-table-column prop="price2" label="已开票金额">
            <template slot-scope="scope">
                <span style="text-decoration: underline;">{{scope.row.price2}}</span>
            </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import proInfo from '@/components/proInfo'
export default {
  components: {
    proInfo
  },
  data () {
    return {
      tableData: [
        {
          number: 'x1',
          name: 'DP4K-36BLP- 2',
          number2: '1',
          index: '000122434311111',
          price3: '¥54680.00',
          price: '¥54680.00',
          price1: '¥54680.00',
          price2: '¥54680.00'
        },
        {
          number: 'x1',
          name: 'DP4K-36BLP- 2',
          number2: '1',
          index: '000122434311111',
          price3: '¥54680.00',
          price: '¥54680.00',
          price1: '¥54680.00',
          price2: '¥54680.00'
        }, {
          number: 'x1',
          name: 'DP4K-36BLP- 2',
          number2: '1',
          index: '000122434311111',
          price3: '¥54680.00',
          price: '¥54680.00',
          price1: '¥54680.00',
          price2: '¥54680.00'
        }, {
          number: 'x1',
          name: 'DP4K-36BLP- 2',
          number2: '1',
          index: '000122434311111',
          price3: '¥54680.00',
          price: '¥54680.00',
          price1: '¥54680.00',
          price2: '¥54680.00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  margin-top: 20px;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
  background: white;
  .title {
    color: #333333;
    font-size: 16px;
    text-align: left;
  }
  .table {
      margin-top: 10px;
  }
}
</style>
