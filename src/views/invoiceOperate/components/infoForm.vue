<template>
  <div class="orderList">
    <div class="title">
      <span>发票申请</span>
    </div>
    <div class="sperate">
      <span>电子普通发票信息</span>
      <span>
        ....................................................................................................................................................................................................................................</span
      >
    </div>
    <div class="form-div">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="90px"
      >
        <el-form-item label="申请编号:" prop="name">
          <div class="item-div">
            <el-input v-model="ruleForm.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="发票类型:" prop="type">
          <div class="item-div">
            <el-select v-model="ruleForm.type" placeholder="请选择发票类型">
              <el-option label="电子普通发票" value="0"></el-option>
              <el-option label="电子增值发票" value="1"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="发票内容:" prop="content">
          <div class="invoice-content item-div">
            <div class="btn">
              <span>商品明细</span>
            </div>
            <div class="btn active">
              <span>商品类别</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="抬头类型:" prop="preType">
          <div class="item-div">
            <el-input v-model="ruleForm.preType"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="单位名称:" prop="componey">
          <div class="item-div">
            <el-input v-model="ruleForm.componey"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="发票税号:" prop="taxNum">
          <div class="item-div">
            <el-input v-model="ruleForm.taxNum"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="sperate">
      <span>资质信息</span>
      <span>
        ....................................................................................................................................................................................................................................</span
      >
    </div>
    <div class="form-div">
      <el-form
        label-width="90px"
      >
        <el-form-item label="注册地址:" prop="address">
          <div class="item-div">
            <el-input v-model="ruleForm.address"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="注册电话:" prop="phone">
          <div class="item-div">
            <el-input v-model="ruleForm.phone"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="开会银行:" prop="bank">
          <div class="item-div">
            <el-input v-model="ruleForm.bank"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="银行账号:" prop="account">
          <div class="item-div">
            <el-input v-model="ruleForm.account"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="开票金额:" prop="money">
          <div class="item-div">
            <el-input v-model="ruleForm.money"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="邮寄地址:" prop="sendAddress">
          <div class="item-div">
            <el-input v-model="ruleForm.sendAddress"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-ope">
      <div class="btn active">
        <span>提交</span>
      </div>
      <div class="btn">
        <span>返回</span>
      </div>
    </div>
    <div class="title  mg-top-50">
      <span>发票明细</span>
    </div>
    <div class="mg-top-20">
      <simpleTableMoreColumn></simpleTableMoreColumn>
    </div>
    <div class="mg-top-10">
      <simpleTableMoreColumn></simpleTableMoreColumn>
    </div>
    <div class="mg-top-10">
      <simpleTableMoreColumn></simpleTableMoreColumn>
    </div>
  </div>
</template>

<script>
import simpleTableMoreColumn from '@/components/simpleTableMoreColumn'
export default {
  methods: {
    validateField () {
      this.$refs.ruleForm.validateField('componey')
    }
  },
  components: {
    simpleTableMoreColumn
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
    border: 1px solid #E1E1E1;
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
    border: 1px solid #E1E1E1;
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
