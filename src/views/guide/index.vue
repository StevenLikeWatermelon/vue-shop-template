<template>
  <div class="guide">
      <div class="child modal-btn2 active" v-for="item in childRouters" :key="item.name" @click="goToName(item)">
          <span>{{item.meta.title}}</span>
      </div>
  </div>
</template>

<script>
import { routes } from '@/router'
export default {
  data () {
    return {
      routes
    }
  },
  computed: {
    childRouters () {
      return this.routes[0].children.filter(item => !item.hiddden)
    }
  },
  methods: {
    goToName (item) {
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.guide {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 40px auto;
    padding-left: 200px;
    div {
        margin-bottom: 40px;
        margin-right: 25px;

    }
}
</style>
