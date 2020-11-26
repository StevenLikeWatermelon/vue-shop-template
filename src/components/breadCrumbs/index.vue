<template>
  <div class="bread-crumb">
      <div class="content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in crumbs" :key="index">
                <span class="item" :class="{'active': item.active}">{{item.label}}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumb {
    width: 100%;
    height: 42px;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
        width: 1226px;
        .item {
            color:#666666;
            &.active {
                color:#666666;
            }
        }
    }
}
</style>
