<template>
  <div class="header-content">
      <div class="person-info">
          <person-item>
              <span class="title">你好，请登录    <span class="no-name">没有账号</span></span>
          </person-item>
          <person-item>
              <span class="title">我的订单</span>
          </person-item>
          <person-item>
              <span class="title">会员中心</span>
          </person-item>
          <person-item>
              <span class="title">客户服务</span>
          </person-item>
          <person-item :showSperate="false">
              <span class="title">在线充值</span>
          </person-item>
      </div>
  </div>
</template>

<script>
import personItem from '@/components/personItem'
export default {
  components: {
    personItem
  }
}
</script>

<style lang="scss" scoped>
.header-content {
    width: 100%;
    height: 40px;
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: stretch;
    .person-info {
        width: 1226px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .title {
            color: #A2A2A2;
        }
        .no-name {
            color:#EC5724;
        }
    }
}
</style>
