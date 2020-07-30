<template>
  <div>
    <div
        style="display: flex;justify-content: space-between;background-color: #434299;height: 56px;align-items: center">
      <img style="width: 20px;height: 20px;margin-left: 8px" src="../assets/back.png" @click="leftClick"/>
      <div style="font-size: 16px;color: white">{{title}}</div>
      <img v-if="showRightIcon" style="width: 25px;height: 25px;margin-right: 8px" :src="rightIcon" @click="rightClick"/>
      <div v-else style="width: 25px;height: 25px;margin-right: 8px"></div>
    </div>
  </div>
</template>

<script>
  import backImg from '../assets/back.png'

  export default {
    name: "NavigationBar",
    props: {
      title: '',
      showRightIcon: false,
      rightIcon: Object
    },
    data() {
      return {
        backIcon: backImg
      }
    },
    methods:{
      leftClick(){
        this.$emit('left-click')
      },
      rightClick(){
        this.$emit('right-click')
      }
    }
  }
</script>

<style scoped>

</style>
