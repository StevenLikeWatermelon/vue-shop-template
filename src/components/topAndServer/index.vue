<template>
  <div class="fix-div">
    <div class="fix-top img-fix-home">
        <img src="@/assets/fixTop.png" alt="置顶">
        </div>
        <div class="fix-kf img-fix-home">
        <img src="@/assets/fixKf.png" alt="客服">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fix-div {
    position: absolute;
    right: -104px;
    top: -172px;
    .img-fix-home {
        width: 60px;
        height: 60px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .fix-kf {
        margin-top: 10px;
    }
}
</style>
