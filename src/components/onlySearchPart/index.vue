<template>
  <div class="onlySearchPart">
      <div class="content">
          <div class="img">
              <img src="@/assets/logo.png" alt="">
          </div>
          <div>
              <searchInput></searchInput>
          </div>
      </div>
  </div>
</template>

<script>
import searchInput from '@/components/searchInput'
export default {
  components: {
    searchInput
  }
}
</script>

<style lang="scss" scoped>
.onlySearchPart {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #FF5B22;
    .content {
        width: 1226px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
            width: 135px;
            height: 60px;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
