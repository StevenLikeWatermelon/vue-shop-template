<template>
  <div class="contentArea">
    <tableCar></tableCar>
    <operateArea></operateArea>
    <guessLike></guessLike>
  </div>
</template>

<script>
import tableCar from './tableCar'
import operateArea from './operateArea'
import guessLike from './guessLike'
export default {
  components: {
    tableCar,
    guessLike,
    operateArea
  }
}
</script>

<style lang="scss" scoped>
.contentArea {
    width: 100%;
}
</style>
