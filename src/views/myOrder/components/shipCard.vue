<template>
  <div class="shipCard">
      <div class="ship-item">
          <div class="h1">
              <span>{{title}}</span>
          </div>
          <div class="h2" v-for="(item, index) in list" :key="index">
              <span>{{item}}</span>
          </div>
      </div>
      <div class="sperate" v-if="!noSperate"></div>
  </div>
</template>

<script>
export default {
  props: ['title', 'list', 'noSperate']
}
</script>

<style lang="scss" scoped>
.shipCard {
    position: relative;
    width: 388px;
    padding-left: 50px;
    box-sizing: border-box;
    .ship-item {
        text-align: left;
        color: #333333;
        font-size: 14px;
        .h1 {
            font-size: 16px;
            margin-bottom: 18px;
        }
        .h2 {
            margin-top: 16px;
        }
    }
    .sperate {
        position: absolute;
        width: 1px;
        height: 100%;
        background: linear-gradient(#ffffff, #E1E1E1, #ffffff);
        right: 0;
        top: 0;
    }

}
</style>
