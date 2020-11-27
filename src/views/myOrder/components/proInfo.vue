<template>
  <div class="proInfo">
      <div class="img">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="text">
          <span class="large">DP4K-36BLP- 2</span>
          <span>荧光粉激光23米，支持银屏18</span>
      </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
.proInfo {
    display: flex;
    align-items: center;
    .img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .text {
        color: #999999;
        font-size: 14px;
        .large {
            color: #111111;
            padding-right: 5px;
        }
    }
}
</style>
