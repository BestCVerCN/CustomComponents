<template>
  <div>
    <img :style="expand?'position: fixed;bottom: 208px;right: 16px':'position: fixed;bottom: 108px;right: 16px'" @click="getLocation" :src="locationImg" width="40px" height="40px">
    <div v-swipeup="swipeUp" v-swipedown="swipeDown"
         :style="expand? 'width: 100%; height: 200px;position: fixed;bottom: 0px;background-color: white;border-top-left-radius: 16px;border-top-right-radius: 16px':
       'width: 100%; height: 200px;position: fixed;bottom: -100px;background-color: white;border-top-left-radius: 16px;border-top-right-radius: 16px'">
      <div style="width: 100%; height: 20px; display: flex; justify-content: center">
        <img :src="expand?menuCloseImg:menuExpandImg" width="80px" style="padding-top: 5px; padding-bottom: 5px"
             height="10px"
             @click="hideBottomMenu">
      </div>
      <van-grid :border="false" column-num="5">
        <van-grid-item v-for="menu in menus" @click="menuClicked(menu)" :key="menu.appName">
          <img
              :src="menu.iconPath"
              width="40px" height="40px"/>
          <div style="font-size: 12px; margin-top: 4px;">{{menu.appName}}</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
  import MenuClose from '../../assets/pulldown.png';
  import MenuExpand from '../../assets/pullup.png';
  import Location from '../../assets/location.png';
  import vueTouch from "../../vueTouch";

  export default {
    name: "BottomMenu",
    data() {
      return {
        menuCloseImg: MenuClose,
        menuExpandImg: MenuExpand,
        locationImg: Location,
        expand: false
      }
    },
    props: {
      menus: Array
    },
    created() {

    },
    methods: {
      hideBottomMenu() {
        this.expand = !this.expand;
      },
      menuClicked(menu) {
        this.$emit("onClickMenu", menu.appName);
      },
      swipeUp() {
        this.expand = true;
      },
      swipeDown() {
        this.expand = false;
      },
      getLocation(){
        this.$emit("onClickMenu", '定位');
      }

    }
  }
</script>

<style scoped>

</style>
