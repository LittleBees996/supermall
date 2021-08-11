<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType,
        observeDOM: true  //必须开启,开启后检测DOM渲染进度,不然可能会因为数据异步延迟导致无法滚动
        })
        // 将滚动位置数据传出
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position);
        })

        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        }) 
        
      }) 
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y ,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>