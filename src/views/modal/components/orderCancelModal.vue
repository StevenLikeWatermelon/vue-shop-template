<template>
  <div class="orderCancelModal">
      <div class="left">
          <div class="btn1">
              <span>不想要了</span>
          </div>
          <div class="btn1 mg-top-20">
              <span>商品选错</span>
          </div>
          <div class="modal-btn2 mg-top-30" @click.stop="cancelModal">
              <span>再想想</span>
          </div>
      </div>
      <div class="right">
          <div class="btn1 active">
              <span>地址信息填写错误</span>
          </div>
          <div class="btn1 mg-top-20">
              <span>商品降价</span>
          </div>
          <div class="modal-btn2 active mg-top-30">
              <span>提交</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancelModal () {
      this.$emit('cancelModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.orderCancelModal {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px;
    }
}
.btn1 {
    width: 220px;
    height: 40px;
    border: 1px solid #E1E1E1;
    border-radius: 2px;
    color: #333333;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    &.active {
        border-color: #FF5B22;
        color: #FF5B22;
    }

}
</style>
