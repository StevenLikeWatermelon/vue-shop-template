<template>
  <div class="search-panel">
      <div class="search-content">
          <div class="search-list">
              <div class="search-header">
                  <span>品牌:</span>
              </div>
              <div class="search-item" v-for="(item, index) in brands" :key="index">
                  <span>{{item.label}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brands: [{
        label: '全部',
        active: true
      }, {
        label: '欧达(ORDRO)'
      }, {
        label: '摄徒(SHETU)',
        activeSpan: true
      }, {
        label: '梓润(Insta)'
      }, {
        label: '松典(SONGDIAN)'
      }, {
        label: '爱普生(EPSON)'
      }, {
        label: '极米(XGIMI)'
      }, {
        label: '米家'
      }, {
        label: '微影'
      }, {
        label: '当呗'
      }, {
        label: '明基'
      }, {
        label: '坚果(JmG)'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.search-panel {
    width: 100%;
    background-color: white;
    padding: 10px 0;
    .search-content {
        width: 1226px;
        .search-list {
            width: 100%;
            display: flex;
            justify-items: center;
            align-items: center;
        }
    }
}
</style>
