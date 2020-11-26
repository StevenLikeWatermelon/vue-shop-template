<template>
  <div class="special-card-item">
      <div class="special-card-top">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="special-card-center">
          <span>{{name}}</span>
      </div>
      <div class="special-card-bottom">
          <div class="half left">
              <span>{{specialPrice}}</span>
          </div>
          <div class="half delete">
              <span>{{originPrice}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    originPrice: {
      type: String,
      default: ''
    },
    specialPrice: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.special-card-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #EFEFEF;
    position: relative;
    .special-card-top {
        img {
            display: block;
            width: 66px;
            height: 58px;
        }
    }
    .special-card-center {
        font-size: 12px;
        color: #111111
    }
    .special-card-bottom {
        width: 80%;
        height: 27px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content:center;
        .half {
            &.left {
                color: #F30012;
                font-size: 14px;
                margin-right: 9px;
            }
            &.delete {
                font-size:12px;
                color: #999999;
                text-decoration:line-through;
            }
        }
    }
}
</style>
