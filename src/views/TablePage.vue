<template>
  <div>
    <custom-table :column-data="columnData" :row-data="rowData"></custom-table>
  </div>
</template>

<script>
  import CustomTable from '../components/CustomTable'
  export default {
    name: 'TablePage',
    components: {
      CustomTable
    },
    data(){
      return {
        columnData:['项目','排名','当日考勤人数','月考勤合格工程数','月考勤合格率'],
        rowData:[{
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
          },
          {
            name: '项目4',
            rank: '4',
            checkNums: '265',
            qualifiedNums: '25',
            percent: '23.8%'
          }]
      }
    }
  }
</script>

<style scoped>

</style>
