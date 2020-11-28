<template>
  <div class="myOwnPage">
      <personList id="4"></personList>
        <coinPage></coinPage>
  </div>
</template>

<script>
import personList from '@/components/personList'
import coinPage from './coinPage'
export default {
  components: {
    personList,
    coinPage
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
