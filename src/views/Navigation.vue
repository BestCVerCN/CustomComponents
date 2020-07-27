<template>
  <div>
    <router-view/>
    <van-tabbar route active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/usercenter" icon="setting-o">
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
