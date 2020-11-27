<template>
  <div class="my-order">
      <onlySearchPart></onlySearchPart>
      <bread-crumbs :crumbs="breadCrumbs"></bread-crumbs>
      <contentWrap>
        <orderHeader></orderHeader>
        <orderList></orderList>
        <shipList></shipList>
        <moneyInfo></moneyInfo>
        <resultInfo></resultInfo>
      </contentWrap>
  </div>
</template>

<script>
import onlySearchPart from '@/components/onlySearchPart'
import breadCrumbs from '@/components/breadCrumbs'
import contentWrap from '@/components/contentWrap'
import orderHeader from './components/orderHeader'
import orderList from './components/orderList'
import shipList from './components/shipList'
import moneyInfo from './components/moneyInfo'
import resultInfo from './components/resultInfo'
export default {
  components: {
    onlySearchPart,
    contentWrap,
    orderList,
    resultInfo,
    moneyInfo,
    shipList,
    orderHeader,
    breadCrumbs
  },
  data () {
    return {
      breadCrumbs: [{
        label: '首页'
      }, {
        label: '个人中心'
      }, {
        label: '订单中心'
      }, {
        label: '订单1000001232133435'
      }]
    }
  }
}
</script>

<style>

</style>
