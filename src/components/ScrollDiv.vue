<!-- 滑动包装 -->
<!-- 将需要滚动的组件用此组件包裹起来，:match-parent="true"时高度向下下撑满屏幕; :match-parent="false"时高度为scrollable-height设置的值 -->
<!-- 也可支持设置滑动高度 -->
<template>
  <div class="scroller" :style="'height:' + scrollerHeight + 'px'" ref="scroller">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ScrollDiv",

  props: {
    MatchParent: true,
    ScrollableHeight: ''
  },

  data() {
    return {
      scrollerHeight: 0
    }
  },

  mounted() {
    // 获取屏幕高度
    this.$nextTick(() => {
      const screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
      // 距离屏幕顶端的距离
      const distance = this.$refs['scroller'].getBoundingClientRect().top;

      if (this.MatchParent == true) {
        this.scrollerHeight = screenHeight - distance;
      } else if (this.MatchParent == false) {
        this.scrollerHeight = this.ScrollableHeight;
      }
    });
  }
}
</script>

<style scoped>
.scroller {
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  overflow: scroll;
}
</style>
