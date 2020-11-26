<template>
  <div class="search-panel">
      <div class="search-content">
          <div class="search-list">
              <div class="search-header">
                  <span>品牌:</span>
              </div>
              <div v-for="(item, index) in brands" :key="index" class="search-item" :class="{'search-active': item.active, 'text-active': item.activeSpan}">
                  <span>{{item.label}}</span>
              </div>
          </div>
          <div class="search-list">
              <div class="search-header">
                  <span>分类:</span>
              </div>
              <div v-for="(item, index) in types" :key="index" class="search-item" :class="{'search-active': item.active, 'text-active': item.activeSpan}">
                  <span>{{item.label}}</span>
              </div>
          </div>
          <div class="search-list">
              <div class="search-header">
                  <span>像素:</span>
              </div>
              <div v-for="(item, index) in pixles" :key="index" class="search-item" :class="{'search-active': item.active, 'text-active': item.activeSpan}">
                  <span>{{item.label}}</span>
              </div>
          </div>
          <div class="search-list">
              <div class="search-header">
                  <span>产地:</span>
              </div>
              <div v-for="(item, index) in locaitons" :key="index" class="search-item" :class="{'search-active': item.active, 'text-active': item.activeSpan}">
                  <span>{{item.label}}</span>
              </div>
          </div>
          <div class="search-list no-border">
              <div class="search-header">
                  <span>高级:</span>
              </div>
              <div v-for="(item, index) in advancedArr" :key="index" class="search-item with-arrow" :class="{'search-active': item.active, 'text-active': item.activeSpan}">
                  <div>
                    <span>{{item.label}}</span>
                  </div>
                  <div class="icon">
                    <span><img src="@/assets/arrow2.png" alt=""></span>
                  </div>
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
      }],
      types: [{
        label: '全部',
        active: true
      }, {
        label: '影院设备'
      }, {
        label: '家庭设备'
      }, {
        label: '户外设备'
      }, {
        label: '穿戴设备'
      }],
      pixles: [{
        label: '全部',
        active: true
      }, {
        label: '13000像素'
      }, {
        label: '20000像素'
      }],
      locaitons: [{
        label: '全部',
        active: true
      }, {
        label: '国产'
      }, {
        label: '美国'
      }, {
        label: '日本'
      }, {
        label: '韩国'
      }],
      advancedArr: [{
        label: '型号'
      }, {
        label: '主频'
      }, {
        label: '分辨率'
      }, {
        label: '机身'
      }, {
        label: '网络'
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
    display: flex;
    justify-content: center;
    align-items: center;
    .search-content {
        width: 1226px;
        .search-list {
            width: 100%;
            display: flex;
            justify-items: center;
            align-items: center;
            border-bottom: 1px solid #E1E1E1;
            &.no-border {
              border-bottom: none;
            }
            height: 50px;
            .search-header {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
                padding-right: 29px;
            }
            .search-item {
              margin-right: 29px;
              color: #333333;
              &.text-active {
                color: #FF5B22;
              }
              &.search-active {
                background-color: #FF5B22;
                border-radius: 2px;
                padding: 0 1px;
                color: #ffffff;
              }
              &.with-arrow {
                display: flex;
                align-items: center;
                .icon {
                    padding-left: 7px;
                    height: 21px;
                }
              }
            }
        }
    }
}
</style>
