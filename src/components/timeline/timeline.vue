<script>
export default {
  props: {
    // 指定节点排序规则
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render () {
    const reverse = this.reverse

    let slots = this.$slots.default || []
    if (reverse) {
      slots = slots.reverse()
    }
    return (
      <ul class='time-line-wrap'>
        {slots}
      </ul>
    )
  }
}
</script>

<style>
.time-line-wrap {
  list-style: none;
  display: block;
  min-width: 300px;
}
.time-line-wrap .time-line-item:last-child .item-sperate-wrap .baseline{
  display: none;
}
</style>
