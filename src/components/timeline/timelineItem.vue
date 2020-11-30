<script>
import Icon from '../icon/index.vue'
export default {
  components: {
    Icon
  },
  props: {
    timestamp: {
      type: String,
      default: ''
    },
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    timestampPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    content: {
      type: String,
      default: ''
    },
    contentPosition: {
      type: String,
      default: 'right',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    timestampVerticalPosition: {
      type: String,
      default: 'top',
      validator: function (value) {
        return ['top', 'bottom'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: ''
    },
    // 限制用户的最大尺寸
    size: {
      type: [String, Number],
      default: 14
    },
    icon: {
      type: String,
      default: null
    },
    lineColor: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    limitSize () {
      if (this.size < 12) {
        return 12
      }
      if (this.size > 36) {
        return 36
      }
      return this.size
    },
    circleStyle () {
      return {
        backgroundColor: this.color || 'rgb(228, 231, 237)',
        width: (this.limitSize || '12') + 'px',
        height: (this.limitSize || '12') + 'px',
        borderRadius: (this.limitSize || '12') + 'px',
        left: (-Math.floor(this.limitSize / 2) || '-6') + 'px'
      }
    },
    imageStyle () {
      return {
        width: (this.limitSize || '12') + 'px',
        height: (this.limitSize || '12') + 'px'
      }
    },
    lineStyle () {
      return {
        backgroundColor: this.lineColor || 'rgb(228, 231, 237)',
        left: '-1px',
        width: '2px'
      }
    }
  },
  render () {
    // 渲染中间分隔线和图标；图片的优先级要高于icon
    const circle = (
      <div class='item-sperate-wrap'>
        <div class='baseline' style={this.lineStyle} />
        <div class='circle' style={this.circleStyle}>
          {
            this.image ? <img src={this.image} alt='图标' width={this.limitSize + 'px'} height={this.limitSize + 'px'}/> : null
          }
          {
            !this.image && this.icon ? <Icon type={this.icon} size={this.limitSize} /> : null
          }
        </div>
      </div>
    )

    // 时间节点
    const time = (
      <div class='item-time-wrap'>
        <div>{this.$slots.time}</div>
        <div domProps-innerHTML={ this.timestamp } />
      </div>
    )

    // 内容节点
    const content = (
      <div class='item-content-wrap'>
        <div>{this.$slots.content}</div>
        <div domProps-innerHTML={this.content} />
      </div>
    )

    // 1、 time (left) content (left)
    if (this.timestampPosition === 'left' && this.contentPosition === 'left') {
      return (this.timestampVerticalPosition === 'top'
        ? (<li class='time-line-item time-line-item-leftleft'>
          <div class='left-wrap'>
            {time}
            {content}
          </div>
          {circle}
        </li>)
        : (<li class='time-line-item time-line-item-leftleft'>
          <div class='left-wrap'>
            {content}
            {time}
          </div>
          {circle}
        </li>))
    }

    // 2、time (right) content (right)
    if (this.timestampPosition === 'right' && this.contentPosition === 'right') {
      return (this.timestampVerticalPosition === 'top'
        ? (<li class='time-line-item  time-line-item-rightright'>
          {circle}
          <div class='right-wrap'>
            {time}
            {content}
          </div>
        </li>)
        : (<li class='time-line-item  time-line-item-rightright'>
          {circle}
          <div class='right-wrap'>
            {content}
            {time}
          </div>
        </li>))
    }

    // 3、time (right) content (left)
    if (this.timestampPosition === 'right' && this.contentPosition === 'left') {
      return (<li class='time-line-item time-line-item-right'>
        {content}
        {circle}
        {time}
      </li>)
    }

    // 4、 time (left) content (right)  ---- default
    return (<li class='time-line-item time-line-item-left'>
      {time}
      {circle}
      {content}
    </li>)
  }
}
</script>

<style scoped>
.time-line-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  font-size: 14px;
  color: #333333;
  word-break: break-all;
}

.item-sperate-wrap {
  position: relative;
  margin-right: 25px;
  margin-left: 25px;
}
.item-sperate-wrap .baseline {
  /* width: 2px; */
  width: 100%;
  height: 100%;
  position: relative;
}
.item-sperate-wrap .circle {
  top: 0px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-time-wrap {
  overflow: hidden;
  color: #909399;
  font-size: 13px;
  min-width: 100px;
}
.item-content-wrap {
  min-width: 100px;
  color: #303133;
  font-size: 14px;
}

.time-line-item-leftleft .left-wrap {
  width: calc(100% - 150px);
  text-align: right;
  padding-bottom: 20px;
}

.time-line-item-leftleft .left-wrap div:first-child {
  padding-bottom: 3px;
}

.time-line-item-rightright .right-wrap {
  width: calc(100% - 50px);
  padding-bottom: 20px;
}

.time-line-item-rightright .right-wrap div:first-child {
  padding-bottom: 3px;
}

.time-line-item-left .item-time-wrap {
  width: 180px;
  text-align: right;
  padding-bottom: 20px;
  line-height:18px;
}

.time-line-item-left .item-content-wrap {
  width: calc(100% - 150px);
}

.time-line-item-right .item-time-wrap {
  padding-bottom: 20px;
  width: 150px;
}

.time-line-item-right .item-content-wrap {
  width: calc(100% - 150px);
  text-align: right;
}
</style>
