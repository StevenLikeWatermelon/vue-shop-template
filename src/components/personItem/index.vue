<template>
  <div class="person-item">
      <slot></slot>
      <div class="sperate-line" v-if="showSperate"></div>
  </div>
</template>

<script>
export default {
  props: {
    showSperate: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.person-item {
    padding: 0 20px;
    height: 15px;
    position: relative;
    font-size: 14px;
    line-height: 14px;
    .sperate-line {
        position: absolute;
        right: 0;
        top: 0px;
        height: 13px;
        width: 1px;
        background-color: rgba(255, 255, 255, 0.5)
    }
}
</style>
