<template>
  <div class="get-addrrss">
    <div class="form-div">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="90px"
      >
        <el-form-item label="收货人:" prop="person">
          <div class="item-div">
            <el-input v-model="ruleForm.person"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="所在地区:" prop="area">
          <div class="item-div">
            <el-select v-model="ruleForm.area" placeholder="请选择所在地区">
              <el-option label="所在地区1" value="0"></el-option>
              <el-option label="所在地区2" value="1"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="详细地址:" prop="address">
          <div class="item-div">
            <el-input v-model="ruleForm.address"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="手机号:" prop="phone">
          <div class="item-div">
            <el-input v-model="ruleForm.phone"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="modal-btn2 active mg-auto">
            <span>保存收货地址</span>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    validateField () {
      this.$refs.ruleForm.validateField('address')
    }
  },
  mounted () {
    this.validateField()
  },
  data () {
    return {
      ruleForm: {
        address: '',
        phone: '',
        person: '00000000111111',
        area: ''
      },
      rules: {
        address: [
          { required: true, message: '请填详细地址', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请填手机号', trigger: 'change' }
        ],
        person: [
          { required: true, message: '请填人', trigger: 'change' }
        ],
        area: [
          { required: true, message: '请选择区域', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.get-addrrss {
  padding: 40px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-div {
    margin-left: 80px;
}
.item-div {
  width: 342px;
  position: relative;
  display: flex;
}
.mg-auto {
    margin: 30px auto;
}
</style>
