<template>
  <div class="orderList">
    <div class="title">
      <span>发票信息</span>
    </div>
    <div class="sub-title">
      <span  class="h1 orange">开增值税发票</span>
      <span class="h2">全部申请订单</span>
      <span class="h2">异常申请订单</span>
      <span class="h2">已开票申请单</span>
      <span class="h2">企业发票</span>
      <span  class="h1">开票账号管理</span>
    </div>
    <div class="mg-top-20 warning">
      <div class="tips-title">
        <div class="icon">
          <img src="@/assets/warning.png" alt="">
        </div>
        <div class="word">
          <span>温馨提示：</span>
        </div>
      </div>
      <div class="content-word">
        <p>因收货地址不同，请在同一个可合并单发票组中选择订单进行合并发票。此处不包含订单完成后开票单订单。 </p>
        <p>因订单结算时已确认发票信息，一个发票组内仅发票信息一致单订单可合并发票。如有问题可咨询 <img src="@/assets/msg.png" alt="" style="margin: 0 7px;">在线客服</p>
        <p>增值税发票开票周期为3-5个工作日，为避免影响报账，请您及时提交开票！</p>
      </div>
    </div>
    <div class="mg-top-20 check-apply">
      <div class="checkbox">
        <el-checkbox>全选</el-checkbox>
      </div>
      <div class="btn">
        <span>开票</span>
      </div>
    </div>
    <div class="mg-top-20">
      <tableStatus>
        <div>
          <span>2020年11月15日 19:08</span>
          <span style="margin-left: 20px">发货单号：5201115560905733</span>
          <span style="color: #ff5b22; padding-left: 7px; padding-right: 15px"
            >物流跟踪</span
          >
          <span>订单状态：已完成</span>
        </div>
      </tableStatus>
      <simpleTableMoreColumn
        class="mg-top-ne-1"
        :edit="true"
        :showCheckBox="true"
      ></simpleTableMoreColumn>
      <simpleTableMoreColumn
        class="mg-top-ne-1"
        :edit="true"
        :showCheckBox="true"
      ></simpleTableMoreColumn>
    </div>
    <div class="mg-top-20">
      <tableStatus>
        <div>
          <span>2020年11月15日 19:08</span>
          <span style="margin-left: 20px">发货单号：5201115560905733</span>
          <span style="color: #ff5b22; padding-left: 7px; padding-right: 15px"
            >物流跟踪</span
          >
          <span>订单状态：已完成</span>
        </div>
      </tableStatus>
      <simpleTableMoreColumn
        class="mg-top-ne-1"
        :edit="true"
        :showCheckBox="true"
      ></simpleTableMoreColumn>
    </div>
  </div>
</template>

<script>
import simpleTableMoreColumn from '@/components/simpleTableMoreColumn'
import tableStatus from '@/components/tableStatus'
export default {
  methods: {
    validateField () {
      this.$refs.ruleForm.validateField('componey')
    }
  },
  components: {
    simpleTableMoreColumn,
    tableStatus
  },
  mounted () {
    this.validateField()
  },
  data () {
    return {
      ruleForm: {
        name: '00000000111111',
        type: '0',
        content: '',
        preType: '单位',
        componey: '',
        taxNum: '',
        // 第二个
        address: '',
        phone: '',
        bank: '',
        account: '',
        money: '',
        sendAddress: ''
      },
      rules: {
        type: [
          { required: true, message: '请选择发票类型', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        preType: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        componey: [
          { required: true, message: '请选择单位名称', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.orderList {
  text-align: left;
  width: 982px;
  box-sizing: border-box;
  background-color: white;
  padding: 38px 40px 110px 40px;
  .title {
    color: #333333;
    font-size: 24px;
  }
  .sub-title {
    margin-top: 30px;
    span {
      margin-right: 20px;
    }
    .h1 {
      color: #333333;
      font-size: 16px;
    }
    .h2 {
      font-size: 12px;
      color: #999999;
    }
    .orange {
        color: #FF5B22;
      }
  }
  .warning {
    height: 152px;
    background-color: #F7F3D8;
    padding: 21px 18px 0 18px;
    color: #9A6406;
    .tips-title {
      display: flex;
      align-items: center;
      .word {
        margin-left: 10px;
        font-size: 16px;
      }
    }
    .content-word {
      margin-top: 17px;
      margin-left: 26px;
      line-height: 30px;
    }
  }
  .check-apply {
    display: flex;
    align-items: center;
    .btn {
      margin-left: 15px;
      width: 90px;
      height: 30px;
      background: #FF5B22;
      border-radius: 2px;
      line-height: 30px;
      text-align:center;
      color: white;
    }
  }
  .sperate {
    color: #999999;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 30px;
  }
  .form-div {
    margin-top: 30px;
    margin-left: -10px;
  }
  .button-ope {
    display: flex;
    align-items: center;
    margin-top: 30px;
    .btn {
      width: 123px;
      height: 40px;
      border: 1px solid #e1e1e1;
      border-radius: 2px;
      line-height: 40px;
      text-align: center;
      color: #666666;
      font-size: 14px;
      &.active {
        background-color: #ff5b22;
        color: white;
        margin-right: 15px;
      }
    }
  }
}
.item-div {
  width: 342px;
  position: relative;
}
.invoice-content {
  display: flex;
  align-items: center;
  .btn {
    width: 166px;
    height: 40px;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    line-height: 40px;
    text-align: center;
    color: #333333;
    font-size: 14px;
    &.active {
      border-color: #ff5b22;
      color: #ff5b22;
      margin-left: 15px;
    }
  }
}
</style>
