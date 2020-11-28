<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  max-width: 1920px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  font-size: 14px;
  // hack element
  .search-input-wrapper {
    .el-input__inner {
      border-radius: 0;
      border: 2px solid #ff5b22;
      &:focus {
        border-color: #ff5b22;
      }
    }
    .el-input-group__append {
      background-color: #ff5b22;
      border: 2px solid #ff5b22;
      border-radius: 0;
      padding: 0;
    }
  }
  .el-carousel {
    height: 100%;
  }
  th {
    div {
      text-align: center;
    }
  }
  td {
    div {
      text-align: center;
    }
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #ff5b22;
    background: #ff5b22;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: unset;
  }
  .el-pagination button,
  .el-pager li,
  .el-pagination button,
  .el-pagination span:not([class*="suffix"]) {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background-color: white;
  }
  .el-pagination.is-background .el-pager li.active {
    background-color: #ff5b22;
  }
  .el-pagination.is-background .btn-prev:disabled,
  .el-pagination.is-background .btn-next:disabled {
    background-color: #e0e0e0;
  }
  .el-table th,
  .el-table tr.gray-bg {
    background-color: #f5f5f5;
  }
  .el-table .white-header th {
    background-color: white;
  }
  .el-form-item__label {
    color: #333333;
  }
  .el-form-item__error {
    top: 11px;
    left: 360px;
  }
  .simpleTable .text-2 .el-input__inner {
    height: 30px;
    line-height: 30px;
    width: 100px;
  }
  .mg-top-ne-1 {
    margin-top: -1px;
  }
  .mg-top-20 {
    margin-top: 20px;
  }
  .mg-top-10 {
    margin-top: 10px;
  }
  .mg-top-50 {
    margin-top: 50px;
  }
}
</style>
