<template>
  <div class="myOwnPage">
      <personList id="7"></personList>
        <componeyInfoCrad></componeyInfoCrad>
  </div>
</template>

<script>
import personList from '@/components/personList'
import componeyInfoCrad from './componeyInfoCrad'
export default {
  components: {
    personList,
    componeyInfoCrad
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
