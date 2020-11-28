<template>
  <div class="orderList">
    <div class="title">
      <div class="left">
        <span>系统设置</span>
      </div>
    </div>
    <div class="form-div">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="90px"
      >
        <el-form-item label="旧密码:" prop="old">
          <div class="item-div">
            <el-input v-model="ruleForm.old"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="新密码:" prop="new">
          <div class="item-div">
            <el-input v-model="ruleForm.new"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="确认密码:" prop="confirm">
          <div class="item-div">
            <el-input v-model="ruleForm.confirm"></el-input>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        new: '',
        old: '',
        confirm: ''
      },
      rules: {
        new: [
          { required: true, message: '请选择发票类型', trigger: 'change' }
        ],
        old: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        confirm: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-div {
  width: 342px;
  position: relative;
}
.orderList {
  text-align: left;
  width: 982px;
  box-sizing: border-box;
  background-color: white;
  padding: 38px 40px 38px 40px;
  height: 593px;
  box-sizing: border-box;
  .title {
    color: #333333;
    font-size: 24px;
  }
  .list-form {
    margin-top: 35px;
    color: #333333;
    font-size: 14px;
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
</style>
