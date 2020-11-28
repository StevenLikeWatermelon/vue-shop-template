<template>
  <div class="myOwnPage">
      <personList id="3"></personList>
        <couponCard></couponCard>
  </div>
</template>

<script>
import personList from '@/components/personList'
import couponCard from './couponCard'
export default {
  components: {
    personList,
    couponCard
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
