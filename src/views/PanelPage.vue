<template>
  <div>
    <div style="width: 100%; height: 600px; background-color: #cacaca"></div>
    <PanelView :un-selected-menus="unSelectedMenus" :menus="menus" @onMenuClicked="onClickMenuCallBack"/>
  </div>
</template>

<script>
  import { toastMessage } from '../util'
  import PanelView from '../components/panel/PanelView'

  export default {
    name: 'PanelPage',
    components: { PanelView },
    data () {
      return {
        menus: [],
        unSelectedMenus: []
      }
    },
    created () {
      this.menus = [{
        appName: '菜单1',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单2',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单3',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单4',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单5',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }]

      this.unSelectedMenus = [{
        appName: '菜单6',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单7',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单8',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单9',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }, {
        appName: '菜单10',
        iconPath: 'http://58.210.9.134:8077/JRx6df2VxxERzXP6VjigAa/newOnemap/static/icon/application/all_layer/all_layer@2x.png'
      }]

    },
    methods: {
      onClickMenuCallBack (appName) {
        toastMessage(appName)
      }
    }

  }
</script>

<style scoped>

</style>
