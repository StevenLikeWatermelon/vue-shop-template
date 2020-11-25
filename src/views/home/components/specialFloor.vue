<template>
  <div class="special-floor">
      <div class="left card">
          <div class="title">
              <span>每日特价</span>
          </div>
          <div class="card-content">
              <div class="special-card-wrapper">

              </div>
          </div>
      </div>
      <div class="right card">
          <div class="title">
              <span>排行榜</span>
          </div>
          <div class="card-content">

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.special-floor {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 340px;
    .card {
        width: 603px;
        height: 100%;
        background-color: #fff;
        padding: 23px 20px 20px 20px;
        position: relative;
         box-sizing: border-box;
        .title {
            color: #000000;
            font-size: 24px;
            font-weight: 600;
            width: 100%;
            text-align: left;

        }
        .card-content {
            display: flex;
            margin-top: 20px;
            height: 254px;
            width: 100%;
        }
    }
    .left {

    }
    .right {

    }
}
</style>
