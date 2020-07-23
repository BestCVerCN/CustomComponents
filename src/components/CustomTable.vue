<template>
  <div>
    <div style="font-size: 12px;display: flex;justify-content: space-between; background-color: lightsteelblue;">
      <div class="table-head-item">项目</div>
      <div class="table-head-item">排名</div>
      <div class="table-head-item">当日考勤人数</div>
      <div class="table-head-item">月考勤合格工程数</div>
      <div class="table-head-item">月考勤合格率</div>
    </div>
    <div v-for="(item,index) in records" :style="index%2===1?drawLineStyle:normalLineStyle"
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
    data () {
      return {
        records: [
          {
            name: '项目1',
            rank: '1',
            checkNums: '265',
            qualifiedNums: '25',
            percent: '23.8%'
          },
          {
            name: '项目2',
            rank: '2',
            checkNums: '265',
            qualifiedNums: '25',
            percent: '23.8%'
          },
          {
            name: '项目3',
            rank: '3',
            checkNums: '265',
            qualifiedNums: '25',
            percent: '23.8%'
          }, {
            name: '项目4',
            rank: '4',
            checkNums: '265',
            qualifiedNums: '25',
            percent: '23.8%'
          }
        ],
        drawLineStyle:'font-size: 12px;display: flex;justify-content: space-between;background-color:lightcyan',
        normalLineStyle:'font-size: 12px;display: flex;justify-content: space-between;',
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
