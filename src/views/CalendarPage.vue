<template>
  <div>
    <custom-calendar :year="currentDate.year" :month="currentDate.month" :day="currentDate.day" :qualified-date="qualifiedDate"
                    :unqualified-date="unqualifiedDate" :qualified-info="qualifiedMessage"
                    :unqualified-info="unqualifiedMessage"
                    @monthChanged="monthChange" :key="currentDate.month"></custom-calendar>

  </div>
</template>

<script>
  import CustomCalendar from '../components/CustomCalendar'
  import { toastMessage } from '../util'
  export default {
    name: 'CalendarPage',
    components: {
      CustomCalendar
    },
    data(){
      return {
        currentDate: {
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
          day: new Date().getDate()
        },
        qualifiedDate: [5, 8, 27],
        unqualifiedDate: [9, 15, 23],
        qualifiedMessage:['111/111','222/222','333/333'],
        unqualifiedMessage:['1/0','2/0','3/0'],
      }
    },
    methods:{
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

<style scoped>

</style>
