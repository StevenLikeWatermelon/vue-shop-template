<template>
  <div class="personList">
    <div class="person-title">
      <span>个人中心</span>
    </div>
    <div class="person-icon" v-for="item in list" :key="item.id" :class="{'active': id === item.id}">
      <div class="icon">
        <img :src="item.activeImgUrl" alt="" v-if="item.id === id">
        <img :src="item.imgUrl" alt="" v-else>
      </div>
      <div class="text">
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      list: [
        {
          id: '1',
          imgUrl: require('@/assets/wddd.png'),
          activeImgUrl: require('@/assets/wddd1.png'),
          text: '我的订单'
        },
        {
          id: '2',
          imgUrl: require('@/assets/wdgwc.png'),
          activeImgUrl: require('@/assets/wdgwc1.png'),
          text: '我的购物车'
        },
        {
          id: '3',
          imgUrl: require('@/assets/wdyhq.png'),
          activeImgUrl: require('@/assets/wdyhq1.png'),
          text: '我的优惠券'
        },
        {
          id: '4',
          imgUrl: require('@/assets/wdzgb.png'),
          activeImgUrl: require('@/assets/wdzgb1.png'),
          text: '我的中光币'
        },
        {
          id: '5',
          imgUrl: require('@/assets/shdz.png'),
          activeImgUrl: require('@/assets/shdz1.png'),
          text: '收货地址'
        },
        {
          id: '6',
          imgUrl: require('@/assets/wddd.png'),
          activeImgUrl: require('@/assets/wddd1.png'),
          text: '发票信息'
        },
        {
          id: '7',
          imgUrl: require('@/assets/gsxx.png'),
          activeImgUrl: require('@/assets/gsxx1.png'),
          text: '公司信息'
        },
        {
          id: '8',
          imgUrl: require('@/assets/xtsz.png'),
          activeImgUrl: require('@/assets/xtsz1.png'),
          text: '系统设置'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.personList {
    padding: 30px;
    width: 230px;
    box-sizing: border-box;
    background-color: white;
    text-align: left;
    .person-title {
      color: #333333;
      font-size: 18px;
    }
    .person-icon {
      display: flex;
      align-items: center;
      color: #333333;
      font-size: 14px;
      margin-top: 30px;
      &.active {
        color: #FF5B22;
      }
      .text {
        padding-left: 7px;
      }
    }
}
</style>
