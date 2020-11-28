<template>
  <el-table :data="tableData" border style="width: 100%" header-row-class-name="gray-bg">
    <el-table-column type="index" label="序号" :index="indexMethod" width="128">
    </el-table-column>
    <el-table-column prop="date" label="日期"> </el-table-column>
    <el-table-column prop="yewu" label="业务" width="250"> </el-table-column>
    <el-table-column prop="hdsl" label="获得数量"> </el-table-column>
    <el-table-column prop="dqsy" label="当前剩余"> </el-table-column>
    <el-table-column prop="dqrq" label="到期日期"> </el-table-column>
    <el-table-column prop="czy" label="操作员"> </el-table-column>
    </el-table>
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
          date: '2020-11-01',
          yewu: '电商订单 0102000101100-23',
          hdsl: '999999',
          dqsy: '999999',
          dqrq: '2020-11-02',
          czy: '张帆'
        },
        {
          date: '2020-11-01',
          yewu: '电商订单 0102000101100-23',
          hdsl: '999999',
          dqsy: '999999',
          dqrq: '2020-11-02',
          czy: '张帆'
        },
        {
          date: '2020-11-01',
          yewu: '电商订单 0102000101100-23',
          hdsl: '999999',
          dqsy: '999999',
          dqrq: '2020-11-02',
          czy: '张帆'
        },
        {
          date: '2020-11-01',
          yewu: '电商订单 0102000101100-23',
          hdsl: '999999',
          dqsy: '999999',
          dqrq: '2020-11-02',
          czy: '张帆'
        }
      ]
    }
  }
}
</script>

<style>

</style>
