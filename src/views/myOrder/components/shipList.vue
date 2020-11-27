<template>
  <div class="shipList">
      <shipCard :title="title1" :list="list1"></shipCard>
      <shipCard :title="title2" :list="list2"></shipCard>
      <shipCard :title="title3" :list="list3" :noSperate="true"></shipCard>
  </div>
</template>

<script>
import shipCard from './shipCard'
export default {
  components: {
    shipCard
  },
  data () {
    return {
      title1: '收货人信息',
      list1: ['内容收 货 人： 张先生', '地 址： 北京 北京市 东城区 安定门街道XXXX', '手机号码： 138****0324'],
      title2: '配送信息',
      list2: ['发货单号： 111100002323211111', '发货单号： 111100002323211111'],
      title3: '付款信息',
      list3: ['付款方式： 公司转账', '付款状态：部分付款', '付款时间： 2020-11-19 17:31:51']
    }
  }
}
</script>

<style lang="scss" scoped>
.shipList {
    margin-top: 20px;
    padding: 30px 0 30px 0;
    width: 100%;
    box-sizing: border-box;
    background: white;
    display: flex;
}
</style>
