<template>
  <div>
    <BottomMenu :menus="menusSave" @onClickMenu="onClickMenuCallBack"/>
    <van-popup v-model="showMoreApp" round position="bottom" :style="{ height: '70%' }" @closed="onMoreAppClose">
      <MoreApp :selected-menus="menusSave" :un-selected-menus="unSelectedMenusSave" @closePopUp="closePopUpCallBack"
               @finishEdit="finishEditCallBack"/>
    </van-popup>
  </div>
</template>

<script>

  import MoreApp from './MoreApp'
  import BottomMenu from './BottomMenu'

  export default {
    name: 'PanelView',
    components: {
      MoreApp,
      BottomMenu
    },
    props: {
      menus: Array,
      unSelectedMenus: Array
    },
    created () {
      this.menusSave = this.menus
      this.unSelectedMenusSave = this.unSelectedMenus
      this.menusSave.push({
        appName: '更多',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/more/more@2x.png'
      })
    },
    mounted () {

    },
    data () {
      return {
        showMoreApp: false,
        menusSave: [],
        unSelectedMenusSave: []
      }
    },
    methods: {
      onClickMenuCallBack (appName) {
        switch (appName) {
          case '更多':
            this.showMoreApp = !this.showMoreApp
            // 去掉最后一个更多
            this.menusSave.splice(this.menusSave.length - 1, 1)
            console.log(this.menusSave)
            break
        }
        this.$emit('onMenuClicked', appName)
      },
      closePopUpCallBack () {
        this.showMoreApp = false
      },
      finishEditCallBack (myApps) {
        this.menusSave = myApps
      },
      onMoreAppClose () {
        this.menusSave.push({
          appName: '更多',
          iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/more/more@2x.png'
        })
        console.log(this.menusSave)
        // 更新应用列表
        let appList = []
        for (let i = 0; i < this.menusSave.length; i++) {
          if (this.menusSave[i].appName !== '更多') {
            appList.push(this.menusSave[i].appId)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
