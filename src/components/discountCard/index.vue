<template>
  <div class="discount-card-item">
      <div class="discount-card-top">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="discount-card-center">
          <span>{{name}}</span>
      </div>
      <div class="discount-card-bottom">
          <div class="half left">
              <span>{{discountPrice}}</span>
          </div>
          <div class="half delete">
              <span>{{originPrice}}</span>
          </div>
      </div>
      <div class="sperate-horizontal-line" v-if="hasLine"></div>
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
    discountPrice: {
      type: String,
      default: ''
    },
    hasLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.discount-card-item {
    min-width: 191px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .discount-card-top {
        width: 162px;
        img {
            display: block;
            width: 100%;
        }
    }
    .discount-card-center {
        padding: 31px 0 13px 0;
        font-size: 14px;
        color: #111111
    }
    .discount-card-bottom {
        width: 153px;
        height: 27px;
        background: url("../../assets/discountDiff.png");
        display: flex;
        align-items: center;
        position: relative;
        .half {
            width: 50%;
            font-size:12px;
            &.left {
                color: #FFFFFF;
            }
            &.delete {
                color: #999999;
                text-decoration:line-through;
            }
        }
    }
    .sperate-horizontal-line {
        position: absolute;
        width: 1px;
        height: 152px;
        background: linear-gradient(#ffffff, #E1E1E1, #ffffff);
        right: 0;
        top: 36px;
    }
}
</style>
