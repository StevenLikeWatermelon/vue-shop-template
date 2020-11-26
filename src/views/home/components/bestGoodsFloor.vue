<template>
  <div class="best-goods">
      <div class="title">
          <span>精品热销</span>
      </div>
      <div class="content">
          <div class="best-goods-item"
            v-for="item in bestGoodsArrs"
            :key="item.id"
          >
            <best-goods-card
                :name="item.name"
                :originPrice="item.originPrice"
                :tips="item.tips"
                :discountPrice="item.discountPrice"
            ></best-goods-card>
          </div>
      </div>
  </div>
</template>

<script>
import bestGoodsCard from '@/components/bestGoodsCard'
export default {
  data () {
    return {
      bestGoodsArrs: [
        {
          id: 0,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥5655'
        },
        {
          id: 1,
          name: 'DP4K-36BLP- 3',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56676'
        }, {
          id: 2,
          name: 'DP4K-36BLP- 22',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99099',
          discountPrice: '￥56866'
        }, {
          id: 3,
          name: 'DP4K-36BLP- 5',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 4,
          name: 'DP4K-36BLP- 6',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 5,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥9939',
          discountPrice: '￥56666'
        }, {
          id: 6,
          name: 'DP4K-36BLP- 8',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 7,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 9,
          name: 'DP4K-36BLP- 09',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 8,
          name: 'DP4K-36BLP- 76',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 10,
          name: 'DP4K-36BLP- 454',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 20,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        },
        {
          id: 30,
          name: 'DP4K-36BLP- 65',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 40,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }, {
          id: 50,
          name: 'DP4K-36BLP- 2',
          tips: '荧光粉激光23米，支持银屏18米',
          originPrice: '￥99999',
          discountPrice: '￥56666'
        }
      ]
    }
  },
  components: {
    bestGoodsCard
  }
}
</script>

<style lang="scss" scoped>
.best-goods {
    margin-top: 28px;
    width: 100%;
    .title {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        text-align: left;
    }
    .content {
        margin-top: 23px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 234px);
        grid-template-rows: repeat(3, 340px);
        grid-row-gap: 14px;
        grid-column-gap: 14px;
        .best-goods-item {
            width: 234px;
            height: 340px;
            &:hover {
                box-shadow: 0px 0px 38px 0px rgba(0, 0, 0, 0.19);
            }
        }
    }
}
</style>
