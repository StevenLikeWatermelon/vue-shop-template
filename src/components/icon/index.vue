<template>
  <i :class="classes" :style="styles" @click="handleClick" />
</template>
<script>
const prefixCls = 'el-icon'

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: '14px'
    },
    color: {
      type: String,
      default: 'unset'
    }
  },
  computed: {
    classes () {
      return [
        {
          [`${prefixCls}-${this.type}`]: this.type !== ''
        }
      ]
    },
    styles () {
      const style = {}

      if (this.size) {
        style['font-size'] = `${this.size}px`
      }

      if (this.color) {
        style.color = this.color
      }

      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
