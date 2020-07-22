<template>
  <div>
    <div style="display: flex;font-size: 16px;justify-content: center;height: 50px;align-items: center">自定义组件集合</div>
    <customcalendar :current-date="new Date()" :qualified-date="qualifiedDate"
                    :unqualified-date="unqualifiedDate" :qualified-info="qualifiedMessage"
                    :unqualified-info="unqualifiedMessage"
                    @monthChanged="monthChange" :key="month">

    </customcalendar>
  </div>
</template>

<script>
  import customcalendar from '../components/CustomCalendar'

  export default {
    name: 'Home',
    components: {
      customcalendar
    },
    data () {
      return {
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
      monthChange(month){
        this.month = month // 根据key刷新日历
        this.qualifiedDate = [4,6,26]
      }
    }
  }
</script>

<style lang="less">

</style>


