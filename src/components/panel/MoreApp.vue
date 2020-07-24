<template>
  <div>
    <div style="display: flex; height: 40px; align-items: center">
      <img style="position: absolute; left: 16px; font-size: 14px; margin-top: 8px" width="16px" height="16px"
           :src="closeImg" @click="closeSelf">
      <div style="position: absolute; right: 16px; font-size: 14px; margin-top: 8px;color: #4090e2"
           @click="enterEditMode">{{ this.editMode ? "完成" : "编辑"}}
      </div>
    </div>
    <div style="display: flex;align-items: center;margin-top: 8px">
      <div class="title">我的应用</div>
      <div class="tip">{{ this.editMode ? "长按拖拽调整顺序" : "点击编辑修改收藏"}}</div>
    </div>
    <draggable v-model="myApps" v-if="editMode" style="display: flex;justify-content: center">
      <transition-group tag="div" class="grid" name="grid">
        <div v-for="(item, index) in myApps" :key="item.appName">
          <div style="display: flex;justify-content: center">
            <img :src="item.iconPath" width="40px" height="40px"/>
            <div>
              <img style="position: fixed;" :src="deleteMenuImg" width="10px" height="10px"
                   @click="deleteMenu(index)"/>
            </div>
          </div>
          <div style="display:flex; font-size: 12px; margin-top: 4px; justify-content: center">{{item.appName}}</div>
        </div>
      </transition-group>
    </draggable>
    <div v-if="!editMode" style="display: flex;justify-content: center">
      <transition-group tag="div" class="grid" name="grid">
        <div v-for="item in selectedMenus" :key="item.appName">
          <div style="display: flex; justify-content: center">
            <img :src="item.iconPath" width="40px" height="40px"/>
          </div>
          <div style="display:flex; font-size: 12px; margin-top: 4px; justify-content: center">{{item.appName}}</div>
        </div>
      </transition-group>
    </div>
    <div style="margin-top: 16px" class="title">全部应用</div>
    <van-grid style="margin-left: 16px;margin-right: 16px" :border="false" column-num="5">
      <van-grid-item v-for="(menu,index) in unSelectedMenus" :key="menu.appName">
        <div style="display: flex">
          <img :src="menu.iconPath" width="40px" height="40px"/>
          <div v-if="editMode" style="width: 100%">
            <img style="position: fixed;" :src="addMenuImg" width="10px" height="10px"
                 @click="addMenu(index)"/>
          </div>
        </div>
        <div style="font-size: 12px; margin-top: 4px">{{menu.appName}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import deleteImg from '../../assets/menu_item_disabled.png';
  import addImg from '../../assets/menu_item_add.png';
  import Notify from "vant/es/notify";
  import closeIcon from '../../assets/arrow_back_b.png';
  import draggable from 'vuedraggable';

  export default {
    name: "MoreApp",
    components: {
      draggable
    },
    data() {
      return {
        deleteMenuImg: deleteImg,
        addMenuImg: addImg,
        closeImg: closeIcon,
        editMode: false,
        myApps: []
      }
    },
    props: {
      token: '',
      selectedMenus: Array,
      unSelectedMenus: Array
    },
    mounted() {
      // this.$dragging.$on('dragged', ({value}) => {
      //
      // });
      // this.$dragging.$on('dragend', () => {
      //
      // })
    },
    created() {
      this.myApps = this.selectedMenus;
    },
    methods: {
      deleteMenu(index) {
        if (this.selectedMenus.length > 5) {
          this.unSelectedMenus.push(this.selectedMenus[index]);
          this.selectedMenus.splice(index, 1);

        } else {
          Notify({type: 'danger', message: '不允许少于5个'});
        }
      },
      addMenu(index) {
        if (this.selectedMenus.length < 9) {
          this.selectedMenus.push(this.unSelectedMenus[index]);
          this.unSelectedMenus.splice(index, 1);
        } else {
          Notify({type: 'warning', message: '应用达到上限数9'});
        }

      },
      closeSelf() {
        this.$emit("closePopUp");
      },
      enterEditMode() {
        this.editMode = !this.editMode;
        this.$emit("finishEdit", this.myApps);
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 100%;
    height: 30px;
    font-size: 16px;
    margin-left: 16px;
    font-weight: bold;
  }

  .tip {
    height: 30px;
    font-size: 12px;
    position: absolute;
    right: 16px;
    color: #666666;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(2, 60px);
    grid-gap: 0.2em;
  }
</style>

