<template>
  <div class="myOwnPage">
      <personList></personList>
        <infoForm></infoForm>
  </div>
</template>

<script>
import personList from '@/components/personList'
import infoForm from './infoForm'
export default {
  components: {
    personList,
    infoForm
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
