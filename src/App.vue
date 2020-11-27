<template>
  <div id="app">
    <router-view/>
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
      border: 2px solid #FF5B22;
      &:focus {
        border-color: #FF5B22;
      }
    }
    .el-input-group__append {
      background-color: #FF5B22;
      border: 2px solid #FF5B22;
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
    border-color: #FF5B22;
    background: #FF5B22;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: unset;
  }
}

</style>
