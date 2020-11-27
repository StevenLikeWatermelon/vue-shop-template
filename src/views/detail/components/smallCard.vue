
<template>
  <div class="small-card">
      <div class="img">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="name">
          <span>DP4K-36BLP- 2</span>
      </div>
      <div class="price">
          <span>¥54680.00</span>
      </div>
      <div class="sperate-line"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.small-card {
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .img {
        width: 136px;
        height: 90px;
        margin-top: 29px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .name {
        color: #111111;
        font-size: 14px;
        margin-top: 19px;
    }
    .price {
        margin-top: 9px;
        margin-bottom: 30px;
        font-size: 14px;
        color: #F30012;
    }
    .sperate-line {
        position: absolute;
        width: 200px;
        height: 1px;
        background: linear-gradient(90deg,#f4f4f4, #E1E1E1, #f4f4f4);
        left: 0;
        bottom: 0;
    }
}
</style>
