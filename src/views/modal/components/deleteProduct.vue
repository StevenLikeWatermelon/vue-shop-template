<template>
  <div class="delete">
      <div class="div-1">
          <img src="@/assets/delete.png" alt="">
      </div>
      <div class="div-2">
          <span>删除商品</span>
      </div>
      <div class="div-3">
          <span>您确定要删除此商品吗？</span>
      </div>
      <div class="div-4">
          <div class="modal-btn2 active">
                <span>删除商品</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.delete {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #333333;
    .div-1 {
        width: 70px;
        height: 70px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .div-2 {
        font-size: 24px;
        margin-top: 22px;
    }
    .div-3 {
        font-size: 14px;
        margin-top: 18px;
    }
    .div-4 {
        margin-top: 30px;
        margin-bottom: 55px;
    }
}
</style>
