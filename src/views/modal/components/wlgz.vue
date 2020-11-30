<template>
 <div class="wlgz">
     <div class="text">
         <p>您的订单预计2020-11-20送达您手中</p>
     </div>
     <div class="timeline-wrap">
         <timeline>
            <timeline-item
                v-for="(item, index) in timeArr"
                :key="index"
                :timestamp="item.timestamp"
                :timestamp-position="item.timestampPosition"
                :color="item.color"
                :size="item.size"
                :icon="item.icon"
                :image="item.image"
                >
                  <div slot="content">
                    <timelineItemTemp :content="item.content" :title="item.title" />
                  </div>
                </timeline-item>
        </timeline>
     </div>
 </div>
</template>

<script>
import timeline from '@/components/timeline/timeline'
import timelineItem from '@/components/timeline/timelineItem'
import timelineItemTemp from '@/components/timeline/timelineItemTemp'
export default {
  components: {
    timeline,
    timelineItem,
    timelineItemTemp
  },
  data () {
    return {
      timeArr: [{
        size: '20',
        timestampPosition: 'left',
        timestamp: '2020-11-20/周五10:07:24',
        image: require('@/assets/ship1.png'),
        content: '您的订单已由本人签收。如有疑问您可以联系配送员 【xxx，15611889849】确认。欢迎再次光临。',
        title: '已签收'
      }, {
        size: '20',
        image: require('@/assets/ship2.png'),
        timestampPosition: 'left',
        timestamp: '08:48:13',
        content: '您的订单正在配送途中（快递员：xxx，电话：15611889849） 请您耐心等待。',
        title: '派送中'
      },
      {
        size: '20',
        timestamp: '08:48:13',
        timestampPosition: 'left',
        image: require('@/assets/ship3.png'),
        content: '您的订单正在发往北京金盏分拣中心',
        title: '运输中'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wlgz {
    padding: 30px 50px;
    text-align: left;
    .text {
        color: #333333;
    font-size: 14px;
    }
}
.timeline-wrap {
    margin-top: 30px;
}
</style>
