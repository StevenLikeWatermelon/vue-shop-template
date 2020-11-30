<template>
  <div class="timelineItemTemp">
      <div class="title">
          <span>{{title}}</span>
      </div>
      <div class="content">
          <span>{{content}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'title']
}
</script>

<style lang="scss" scoped>
.timelineItemTemp {
    text-align: left;
    color: #333333;
    .title {
        font-size: 14px;
        font-weight: bold;
    }
    .content {
        width: 276px;
        font-size: 12px;
        white-space: pre-wrap;
        margin-top: 8px;
        margin-bottom: 30px;
        line-height: 22px;
    }
}
</style>
