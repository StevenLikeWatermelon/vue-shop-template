<template>
  <div class="simpleTable" :class="color">
      <div class="son-1">
          <div class="son-1-1">
              <div class="son-1-1-1">
              <img src="@/assets/product1.png" alt="">
          </div>
          <div class="son-1-1-2">
              <span>DP4K-36BLP- 2</span>
              <span class="grey">荧光粉激光23米， 支持银屏18米</span>
          </div>
          </div>
          <div class="son-1-2">
              <span>X1</span>
          </div>
      </div>
      <div class="son-2">
          <span>金额：¥54680.00</span>
      </div>
      <div class="son-3">
          <div class="text">
              <span>待发货</span>
          </div>
          <div class="btn">
              <span>再次购买</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style lang="scss" scoped>
.simpleTable {
    height: 100px;
    display: flex;
    align-items: stretch;
    border: 1px solid #E1E1E1;
    &.orange {
        border-color: #FF5B22;
    }
    color: #333333;
    font-size: 14px;
    .son-1 {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        flex: 1;
        .son-1-1 {
            display: flex;
            align-items: center;
            .son-1-1-1 {
                width: 60px;
                height: 60px;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .son-1-1-2 {
                width: 218px;
                white-space: pre-wrap;
                .grey {
                    color: #999999;
                    font-size: 12px;
                    padding-left: 10px;
                }
            }
        }
    }
    .son-2 {
        width: 160px;
        border-left: 1px solid #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .son-3 {
        width: 160px;
        border-left: 1px solid #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        .btn {
            width: 104px;
            height: 30px;
            border: 1px solid #E1E1E1;
            border-radius: 2px;
            margin-top: 10px;
            line-height: 30px;
        }
    }
}
</style>
