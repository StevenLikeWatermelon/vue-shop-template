<template>
  <div class="send-email">
      <div class="input">
          <el-input placeholder="用来接收电子发票邮件"></el-input>
      </div>
      <div class="modal-btn2 active mg-top-30">
            <span>发送</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.send-email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    .input {
        width: 390px;
    }
}
</style>
