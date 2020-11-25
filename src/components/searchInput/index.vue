<template>
  <div class="search-input-wrapper">
      <el-input placeholder="请输入内容" v-model="input2">
            <template slot="append">
              <div class="input-icon">
                <div class="icon">
                  <img src="@/assets/search2.png" alt="搜索">
                </div>
              </div>
            </template>
        </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input2: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input-wrapper {
  width: 518px;
  .input-icon {
    width: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      height: 20px;
    }
  }
}
</style>
