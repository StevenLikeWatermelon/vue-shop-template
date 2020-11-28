<template>
  <div class="myOwnPage">
      <personList id="8"></personList>
        <editPassword></editPassword>
  </div>
</template>

<script>
import personList from '@/components/personList'
import editPassword from './editPassword'
export default {
  components: {
    personList,
    editPassword
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
