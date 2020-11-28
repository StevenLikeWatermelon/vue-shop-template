<template>
  <div class="table">
    <el-table
      header-row-class-name="white-header"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column type="selection" label="全选" width="55">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="400px">
        <template slot-scope="scope">
          <pro-info :name="scope.row.name"></pro-info>
        </template>
      </el-table-column>
      <el-table-column prop="price3" label="单价"> </el-table-column>
      <el-table-column prop="number" label="数量"> </el-table-column>
      <el-table-column prop="price" label="小计">
          <template slot-scope="scope">
              <span style="color: #ff5b22">{{scope.row.price}}</span>
          </template>
      </el-table-column>
      <el-table-column prop="operate" label="操作">
          <template>
              <span style="color: #333333">删除</span>
          </template>
      </el-table-column>
    </el-table>
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
          price: '¥54680.00'
        },
        {
          number: 'x1',
          name: 'DP4K-36BLP- 2',
          number2: '1',
          index: '000122434311111',
          price3: '¥54680.00',
          price: '¥54680.00'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.table {
  background-color: white;
}
</style>
