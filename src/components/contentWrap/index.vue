<template>
  <div class="content-wrap">
      <div class="content-inner">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content-wrap {
    width: 100%;
    margin-top: 14px;
    display: flex;
    justify-content: center;
    .content-inner {
        width: 1226px;
    }
}
</style>
