<template>
  <div class="myOwnPage">
      <personList id="6"></personList>
        <infoTable></infoTable>
  </div>
</template>

<script>
import personList from '@/components/personList'
import infoTable from './infoTable'
export default {
  components: {
    personList,
    infoTable
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
