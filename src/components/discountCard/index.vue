<template>
  <div class="discount-card-item">
      <div class="discount-card-top">
          <img src="@/assets/product1.png" alt="">
      </div>
      <div class="discount-card-center">
          <span>{{name}}</span>
      </div>
      <div class="discount-card-bottom" :class="{'no-background': noBackground}">
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
    },
    noBackground: {
      type: Boolean,
      default: false
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
            &.left {
                font-size: 14px;
                color: #FFFFFF;
            }
            &.delete {
                font-size:12px;
                color: #999999;
                text-decoration:line-through;
            }
        }
        &.no-background {
            background: transparent;
            margin-top: -15px;
            justify-content: center;
            .half {
                width: unset;
                text-align: center;
                &.left {
                    color: #F30012;
                    padding-right: 5px;
                }
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
