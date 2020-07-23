<template>
  <div>
    <div style="display: flex; justify-content: space-between; font-size: 20px;height: 60px;align-items: center">
      <img style="width: 20px;height: 20px;margin-left: 16px" :src="preMonth" alt="上一月" @click="changeMonth('pre')">
      <div>{{currentYear}}年{{currentMonth + 1}}月</div>
      <img style="width: 20px;height: 20px;margin-right: 16px" :src="nextMonth" alt="下一月" @click="changeMonth('next')">
    </div>
    <div style="font-size: 14px;display: flex;justify-content: space-between; background-color: #07c160;">
      <div class="week-line">日</div>
      <div class="week-line">一</div>
      <div class="week-line">二</div>
      <div class="week-line">三</div>
      <div class="week-line">四</div>
      <div class="week-line">五</div>
      <div class="week-line">六</div>
    </div>
    <div style="height: 16px"></div>
    <div v-for="line in dateData">
      <div style="display: flex;justify-content: space-between;">
        <div v-for="cell in line">
          <div>
            <div :style="cell.place === 'cur' ? currentMonthDayStyle : nextOrPreMonthDayStyle" @click="clickDate(cell)">
              <div style="display: flex; align-items:center;justify-content: center">{{cell.day}}</div>
              <div style="display: flex; align-items:center;justify-content: center;margin-top: 4px">
                <div
                  style="display:flex;width:24px; height:8px; font-size: 8px;justify-content: center;"
                  v-show="cell.place ==='cur' && cell.message !== ''">{{cell.message}}
                </div>
              </div>
              <div style="display: flex; align-items:center;justify-content: center;margin-top: 4px">
                <div v-show="cell.place ==='cur' && cell.qualified !== ''"
                     :style="cell.qualified === '合格' ? qualifiedStyle : unqualifiedStyle"
                >{{cell.qualified}}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import preMonthIcon from '../assets/premonth.png'
  import nextMonthIcon from '../assets/nextmonth.png'
  import { toastMessage } from '../util'

  export default {
    name: 'CustomCalendar',
    props: {
      year: 0,
      month: 0,
      day: 0,
      qualifiedDate: Array, // 合格日期
      unqualifiedDate: Array, // 不合格日期
      qualifiedInfo: Array, // 合格信息展示
      unqualifiedInfo: Array, // 不合格信息展示
    },

    data () {
      return {
        currentYear: this.year,
        currentMonth: this.month,
        currentDay: this.day,
        preMonth: preMonthIcon,
        nextMonth: nextMonthIcon,
        months: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], // 平年每个月的天数
        months2: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], // 闰年每个月的天数
        dateData: [],
        currentMonthDayStyle: 'height: 60px;width: 50px;font-size: 16px;',
        nextOrPreMonthDayStyle: 'color: #e3e3e3;height: 60px;width: 50px;font-size: 16px;',
        qualifiedStyle: 'display:flex;width:24px; height:8px; font-size: 8px;justify-content: center;padding: 4px;background-color: #07c160;color: white',
        unqualifiedStyle: 'display:flex;width:24px; height:8px; font-size: 8px;justify-content: center;padding: 4px;background-color: #cd5c5c;color: white',

      }
    },
    created () {
      this.dateData = this.getDateJson(new Date(this.currentYear, this.currentMonth, this.currentDay))
    },
    methods: {
      getDateJson (date) {
        let obj
        let i
        //获取要绘制月份的年月，
        const yy = date.getFullYear()
        const mm = date.getMonth()
        //判断是否是闰年
        const isleap = this.isLeapYear(yy)
        //获取应该使用的月份数组。
        const month = isleap ? this.months2 : this.months
        //定义此月的1号的日期，获取其星期。
        const begin_date = new Date(yy, mm, 1)
        //获得上个月应该显示几天
        const pre_num = begin_date.getDay()
        //数组的总个数
        const const_num = 7 * 6
        //当月的天数
        const cur_num = month[mm]
        //下个月的天数
        const after_num = const_num - cur_num - pre_num

        let preyy = yy
        let premm = mm
        //月份-1小于0，则前一月为上一年
        if (premm === 0) {
          preyy -= 1
        }
        //上个月的月份以及天数
        premm = premm - 1 < 0 ? 11 : (premm - 1)
        const pre_max = month[premm]

        //下个月的月份
        let afteryy = yy
        let aftermm = mm
        if (aftermm === 11) {
          afteryy += 1
        }
        aftermm = aftermm + 1 > 11 ? 0 : (aftermm + 1)
        //定义日历数组。
        const dateJson = []
        // 第一行的日期
        //循环得到上个月的日期。
        for (i = pre_num; i > 0; i--) {
          obj = {
            year: preyy,
            month: premm,
            day: (pre_max - i + 1),
            place: 'pre'
          }
          dateJson.push(obj)
        }
        //循环添加当月日期
        let m = 0 // 合格信息计数器
        let n = 0 // 不合格信息计数器
        for (i = 1; i <= cur_num; i++) {
          let tag = ''
          let message = ''

          if (this.qualifiedDate.indexOf(i) > -1) {
            tag = '合格'
            message = this.qualifiedInfo[m]
            m++
          } else if (this.unqualifiedDate.indexOf(i) > -1) {
            tag = '不合格'
            message = this.unqualifiedInfo[n]
            n++
          }

          obj = {
            year: yy,
            month: mm,
            day: i,
            qualified: tag,
            message: message,
            place: 'cur'
          }
          dateJson.push(obj)
        }
        //循环添加下个月的日期。
        for (i = 1; i <= after_num; i++) {
          obj = {
            year: afteryy,
            month: aftermm,
            day: i,
            place: 'after'
          }
          dateJson.push(obj)
        }

        // 格式化数组，每7个组成一个数组
        let formatDateJson = []
        for (let index = 0; index < dateJson.length; index += 7) {
          formatDateJson.push(dateJson.slice(index, index + 7))
        }
        console.log(formatDateJson)
        return formatDateJson
      },
      isLeapYear (yy) {
        return yy % 100 === 0 && yy % 400 === 0 ? true : (yy % 4 === 0)
      },
      clickDate (date) {
        if (date.place === 'cur') {
          toastMessage(date.year + '年' + (date.month + 1) + '月' + date.day + '日')
        } else {
          toastMessage('不是当前月的日期')
        }

      },
      changeMonth (type) {
        switch (type) {
          case 'pre':
            this.$emit('monthChanged', type, this.currentMonth - 1)
            break
          case 'next':
            this.$emit('monthChanged', type, this.currentMonth + 1)
            break
        }
      }

    }
  }
</script>

<style scoped>
  .week-line {
    display: flex;
    height: 60px;
    width: 50px;
    align-items: center;
    color: white;
    justify-content: center;
  }
</style>
