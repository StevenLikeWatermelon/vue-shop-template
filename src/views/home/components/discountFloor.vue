<template>
   <div class="discount-floor">
       <div class="left">
           <img src="@/assets/discount.png" alt="discount">
       </div>
       <div class="right">
            <div class="arrow-img-left">
              <img src="@/assets/rightScroll.png" alt="">
            </div>
           <div class="wrap-scroll">
               <discount-card
                v-for="item in productsArr"
                :key="item.id" :name="item.name"
                :originPrice="item.originPrice"
                :hasLine="!item.noline"
                :discountPrice="item.discountPrice">
               </discount-card>
           </div>
           <div class="arrow-img-right">
              <img src="@/assets/leftScroll.png" alt="">
            </div>
       </div>
   </div>
</template>

<script>
import discountCard from '@/components/discountCard'
export default {
  components: {
    discountCard
  },
  data () {
    return {
      productsArr: [
        {
          id: 0,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥99999',
          discountPrice: '￥5655'
        },
        {
          id: 1,
          name: 'DP4K-36BLP- 3',
          originPrice: '￥99999',
          discountPrice: '￥56676'
        }, {
          id: 2,
          name: 'DP4K-36BLP- 22',
          originPrice: '￥99099',
          discountPrice: '￥56866'
        }, {
          id: 3,
          name: 'DP4K-36BLP- 5',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 4,
          name: 'DP4K-36BLP- 6',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 5,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥9939',
          discountPrice: '￥56666'
        }, {
          id: 6,
          name: 'DP4K-36BLP- 8',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 7,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 9,
          name: 'DP4K-36BLP- 09',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 8,
          name: 'DP4K-36BLP- 76',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 10,
          name: 'DP4K-36BLP- 454',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 20,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        },
        {
          id: 30,
          name: 'DP4K-36BLP- 65',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 40,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 50,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 60,
          name: 'DP4K-36BLP- 77',
          originPrice: '￥9993',
          discountPrice: '￥56666'
        }, {
          id: 70,
          name: 'DP4K-36BLP- 2',
          originPrice: '￥999119',
          discountPrice: '￥56666',
          noline: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.discount-floor {
    width: 100%;
    display: flex;
    height: 260px;
    display: flex;
    background-color: white;
    margin-top: 20px;
    .left {
        width: 200px;
        height: 100%;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .right {
        flex: 1;
        overflow-x: auto;
        padding: 0 20px;
        position: relative;
        .wrap-scroll {
            display: flex;
            height: 100%;
            width: 100%;
            overflow-x: auto;
        }
        .arrow-img-left {
          position: absolute;
          top: 105px;
          left: 0;
        }
        .arrow-img-right {
          position: absolute;
          top: 105px;
          right: 0;
        }
    }
}
</style>
