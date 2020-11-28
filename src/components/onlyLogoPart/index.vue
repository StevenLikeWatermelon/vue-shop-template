<template>
  <div class="onlySearchPart">
      <div class="content">
          <div class="left">
              <div class="img">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="title-page">
                <slot name="title">
                    <span>结算页</span>
                </slot>
            </div>
          </div>
          <div class="slot-div">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.onlySearchPart {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #FF5B22;
    background-color: white;
    .content {
        width: 1226px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
            .img {
                width: 135px;
                height: 60px;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .title-page {
                color: #333333;
                font-size: 24px;
                padding-left: 60px;
            }
        }
    }
}
</style>
