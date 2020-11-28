<template>
  <div class="myOwnPage">
      <personList id="5"></personList>
        <addressList></addressList>
  </div>
</template>

<script>
import personList from '@/components/personList'
import addressList from './addressList'
export default {
  components: {
    personList,
    addressList
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
