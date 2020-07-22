<template>
  <div>
    <div style="display: flex;font-size: 16px;justify-content: center;height: 50px;align-items: center">自定义组件集合</div>
    <customcalendar :current-date="new Date()"></customcalendar>
  </div>
</template>

<script>
  import customcalendar from '../components/CustomCalendar'
  export default {
    name: 'Home',
    components:{
      customcalendar
    },
    data () {
      return {
        currentDate:{
          year:new Date().getFullYear(),
          month:new Date().getMonth(),
          day:new Date().getDay()
        }
      }
    },
    created () {

    },
    methods: {}
  }
</script>

<style lang="less">

</style>


