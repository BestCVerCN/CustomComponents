<template>
  <div>
    <div style="font-size: 12px;display: flex;justify-content: space-between; background-color: lightsteelblue;">
      <div v-for="columnName in columnData" class="table-head-item">{{columnName}}</div>
    </div>
    <div v-for="(item,index) in rowData" :style="index%2===1?drawLineStyle:normalLineStyle"
         :key="item.name">
      <div class="table-head-item">{{item.name}}</div>
      <div class="table-head-item">{{item.rank}}</div>
      <div class="table-head-item">{{item.checkNums}}</div>
      <div class="table-head-item">{{item.qualifiedNums}}</div>
      <div class="table-head-item">{{item.percent}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      columnData: Array,
      rowData: Array
    },
    data () {
      return {
        drawLineStyle: 'font-size: 12px;display: flex;justify-content: space-between;background-color:lightcyan',
        normalLineStyle: 'font-size: 12px;display: flex;justify-content: space-between;',
      }
    }
  }
</script>

<style scoped>
  .table-head-item {
    display: flex;
    font-size: 14px;
    height: 40px;
    width: 60px;
    align-items: center;
    justify-content: center;
  }
</style>
