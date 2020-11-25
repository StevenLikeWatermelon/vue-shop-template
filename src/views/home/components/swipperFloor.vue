<template>
  <div class="swipper-floor">
      <div class="left">
          <div class="left-item-select" v-for="item in productsArr" :key="item.id">
              <div class="title">
                  <span>{{item.label}}</span>
              </div>
              <div class="arrow">
                <div>
                    <img src="@/assets/arrow.png" alt="arrow">
                </div>
              </div>
          </div>
      </div>
      <div class="right">
        <el-carousel height="100%">
            <el-carousel-item>
                <div class="img-carousel-item">
                    <img src="@/assets/banner1.png" alt="banner1">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="img-carousel-item">
                    <img src="@/assets/banner2.png" alt="banner2">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="img-carousel-item">
                    <img src="@/assets/banner3.png" alt="banner3">
                </div>
            </el-carousel-item>
        </el-carousel>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productsArr: [{
        id: 0,
        label: '光源产品'
      }, {
        id: 1,
        label: '幕布'
      }, {
        id: 2,
        label: '音响  喇叭'
      }, {
        id: 3,
        label: '座椅 靠垫'
      }, {
        id: 4,
        label: '维保 移机'
      }, {
        id: 5,
        label: '3D眼镜'
      }, {
        id: 6,
        label: '木偶 玩具'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.swipper-floor {
    width: 100%;
    display: flex;
    height: 460px;
    .left {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        background-color: #fff;
        color: #333333;
        .left-item-select {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .arrow {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .right {
        flex: 1;
        height: 100%;
    }
}
</style>
