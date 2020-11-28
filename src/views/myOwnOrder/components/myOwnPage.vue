<template>
  <div class="myOwnPage">
      <personList id="1"></personList>
        <orderList></orderList>
  </div>
</template>

<script>
import personList from '@/components/personList'
import orderList from './orderList'
export default {
  components: {
    personList,
    orderList
  }
}
</script>

<style lang="scss" scoped>
.myOwnPage {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}
</style>
