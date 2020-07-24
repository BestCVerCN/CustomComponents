<template>
  <div>
    <div style="display: flex;font-size: 16px;justify-content: center;height: 50px;align-items: center">自定义组件集合</div>
    <customcalendar :year="currentDate.year" :month="currentDate.month" :day="currentDate.day" :qualified-date="qualifiedDate"
                    :unqualified-date="unqualifiedDate" :qualified-info="qualifiedMessage"
                    :unqualified-info="unqualifiedMessage"
                    @monthChanged="monthChange" :key="currentDate.month"/>
    <customtabel :column-data="columnData" :row-data="rowData"></customtabel>
  </div>
</template>

<script>
  import customcalendar from '../components/CustomCalendar'
  import customtabel from '../components/CustomTable'
  import { toastMessage } from '../util'

  export default {
    name: 'Home',
    components: {
      customcalendar,
      customtabel
    },
    data () {
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
          }, {
            name: '项目4',
            rank: '4',
            checkNums: '265',
            qualifiedNums: '25',
            percent: '23.8%'
          }],
        currentDate: {
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
          day: new Date().getDay()
        },
        qualifiedDate: [5, 8, 27],
        unqualifiedDate: [9, 15, 23],
        qualifiedMessage:['111/111','222/222','333/333'],
        unqualifiedMessage:['1/0','2/0','3/0'],
      }
    },
    created () {

    },
    methods: {
      monthChange(type, month){
        switch (type) {
          case 'pre':
            if (this.currentDate.month === 0) {
              this.currentDate.month = 11
              this.currentDate.year = this.currentDate.year - 1
            } else {
              this.currentDate.month = month
            }
            break;
          case 'next':
            if (this.currentDate.month === 11) {
              this.currentDate.month = 0
              this.currentDate.year = this.currentDate.year + 1
            } else {
              this.currentDate.month = month
            }
            break;
        }
        this.qualifiedDate = [1,2,3]
        toastMessage(this.currentDate.month + 1)
      }
    }
  }
</script>

<style lang="less">

</style>


