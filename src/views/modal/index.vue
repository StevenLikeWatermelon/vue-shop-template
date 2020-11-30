<template>
  <div class="modal-page">
    <div class="content">
      <div class="btn active" @click="showModal1">
          <span>选择取消订单原因</span>
      </div>
      <div class="btn active"  @click="showModal2">
          <span>发送邮箱</span>
      </div>
      <div class="btn active"  @click="showModal3">
          <span>物流跟踪</span>
      </div>
      <div class="btn active"  @click="showModal4">
          <span>添加收货地址</span>
      </div>
      <div class="btn active"  @click="showModal5">
          <span>删除商品</span>
      </div>
    </div>
    <el-dialog title="选择取消订单原因" :visible.sync="visible1">
        <modalCotentWrap>
            <orderCancelModal @cancelModal="cancelModal1"></orderCancelModal>
        </modalCotentWrap>
    </el-dialog>
    <el-dialog title="发送邮箱" :visible.sync="visible2">
        <modalCotentWrap>
            <sendEmail></sendEmail>
        </modalCotentWrap>
    </el-dialog>
    <el-dialog title="物流跟踪" :visible.sync="visible3">
        <modalCotentWrap>
            <wlgz></wlgz>
        </modalCotentWrap>
    </el-dialog>
    <el-dialog title="添加收货地址" :visible.sync="visible4">
        <modalCotentWrap>
            <tjshdz></tjshdz>
        </modalCotentWrap>
    </el-dialog>
    <el-dialog title="删除商品" :visible.sync="visible5">
        <deleteProduct></deleteProduct>
    </el-dialog>
  </div>
</template>

<script>
import modalCotentWrap from '@/components/modalCotentWrap'
import orderCancelModal from './components/orderCancelModal'
import sendEmail from './components/sendEmail'
import wlgz from './components/wlgz'
import tjshdz from './components/tjshdz'
import deleteProduct from './components/deleteProduct'
export default {
  components: {
    modalCotentWrap,
    orderCancelModal,
    sendEmail,
    wlgz,
    tjshdz,
    deleteProduct
  },
  data () {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false
    }
  },
  methods: {
    showModal1 () {
      this.visible1 = true
    },
    showModal2 () {
      this.visible2 = true
    },
    showModal3 () {
      this.visible3 = true
    },
    showModal4 () {
      this.visible4 = true
    },
    showModal5 () {
      this.visible5 = true
    },
    cancelModal1 () {
      this.visible1 = false
    },
    cancelModal2 () {
      this.visible2 = false
    },
    cancelModal3 () {
      this.visible3 = false
    },
    cancelModal4 () {
      this.visible4 = false
    },
    cancelModal5 () {
      this.visible5 = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-page {
  display: flex;
  justify-content: center;
  .content {
    width: 1226px;
    background-color: white;
    padding: 30px;
    display: flex;
    .btn {
      width: 123px;
      height: 40px;
      border: 1px solid #e1e1e1;
      border-radius: 2px;
      line-height: 40px;
      text-align: center;
      color: #666666;
      margin-right: 40px;
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
