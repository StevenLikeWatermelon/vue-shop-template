<template>
  <div class="pay">
    <onlyLogoPart>
        <steps></steps>
    </onlyLogoPart>
    <contentWrap>
        <payContent></payContent>
        <div class="all-moneny">
            <p>
                <span class="span1">应付总额：</span>
                <span class="span2">¥54680.00</span>
            </p>
            <p class="p2">寄送至：北京市 朝阳区 十八里店乡 张家店东街273号 收货人：张先生 139****111</p>
        </div>
        <div class="bottom-div">
          <div class="text">
            本订单收货确认后，可产生 <span style="color: #ff5b22">25</span> 个中光币
          </div>
          <div class="btn">
            <span>提交订单</span>
          </div>
        </div>
      </contentWrap>
  </div>
</template>

<script>
import onlyLogoPart from '@/components/onlyLogoPart'
import contentWrap from '@/components/contentWrap'
import steps from '@/components/steps'
import payContent from './components/payContent'
export default {
  components: {
    onlyLogoPart,
    contentWrap,
    steps,
    payContent
  }
}
</script>

<style lang="scss" scoped>
.all-moneny {
    padding: 25px 30px;

border-top: 1px solid #E1E1E1;
border-bottom: 1px solid #E1E1E1;
    text-align: right;
    background-color: #FAFAFA;
    .span1 {
        color: #333333;
          font-size: 16px;
    }
    .span2 {
        color: #ff5b22;
          font-size: 26px;
    }
    .p2 {
            color: #666666;
            padding-top: 13px;
          font-size: 14px;
    }
}
.bottom-div {
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  padding-right: 30px;
  .text {
    color: #333333;
    font-size: 14px;
  }
  .btn {
    width: 187px;
    height: 42px;
    background: #ff5b22;
    border-radius: 2px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    margin-left: 20px;
  }
}
</style>
