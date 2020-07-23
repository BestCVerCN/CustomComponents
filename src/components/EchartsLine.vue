<template>
  <div>
    <div ref="chartLine" class="line-wrap"></div>
    <div style="display: flex; justify-content: space-between; font-size: 20px;height: 60px;align-items: center">
      <img style="width: 20px;height: 20px;margin-left: 16px" :src="preMonth" alt="上一月" @click="changeMonth('pre')">
      <div>{{currentYear}}年{{currentMonth}}月</div>
      <img style="width: 20px;height: 20px;margin-right: 16px" :src="nextMonth" alt="下一月" @click="changeMonth('next')">
    </div>
    <div ref="chartLine2" class="line-wrap"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import preMonthIcon from '../assets/premonth.png'
  import nextMonthIcon from '../assets/nextmonth.png'
  import { toastMessage } from '../util'

  require('echarts/theme/shine')
  export default {
    name: 'EchartsLine',
    data () {
      return {
        chartLine: null,
        chartLine2: null,
        preMonth: preMonthIcon,
        nextMonth: nextMonthIcon,
        months: [1, 2, 3, 4, 5, 6],
        peopleNum: [70, 61, 790, 1067, 942, 96],
        money: [75.1, 36.1, 318.56, 337.16, 366.89, 104.75],
        currentYear: 2020,
        currentMonth: 6,
        currentIndex: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.drawLineChart()
        this.drawLineChart2()
        this.chartLine2.dispatchAction({
          type: 'highlight',
          dataIndex: this.months.length - 1
        })
        this.currentIndex = this.months.length - 1
      })
    },
    methods: {
      drawLineChart () {
        this.chartLine = echarts.init(this.$refs.chartLine)// 基于准备好的dom，初始化echarts实例
        let option = {
          // 标题
          title: {
            text: '考勤统计'
          },
          tooltip: {
            // 点击展示详细信息
            trigger: 'axis'
          },
          legend: {
            x: 'right',
            data: ['考勤工人数', '在职工人数']
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              axisTick: {
                show: false
              },
              data: ['7.17', '7.18', '7.19', '7.20', '7.21', '7.22', '7.23']
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              name: '单位:人'
            }
          ],
          series: [
            {
              name: '考勤工人数',
              type: 'line',
              symbol: 'circle',
              symbolSize: 6,
              data: [90, 52, 66, 32, 77, 82, 105],
              label: {
                show: true
              },
              itemStyle: {
                color: '#FFA500'
              }
            },
            {
              name: '在职工人数',
              type: 'line',
              symbol: 'circle',
              data: [115, 115, 118, 118, 118, 118, 118],
              label: {
                show: true
              },
              itemStyle: {
                color: '#104E8B'
              }
            }
          ]
        }
        // 使用刚指定的配置项和数据显示图表
        this.chartLine.setOption(option)
      },
      drawLineChart2 () {
        this.chartLine2 = echarts.init(this.$refs.chartLine2)// 基于准备好的dom，初始化echarts实例
        let option = {
          // 标题
          title: {
            text: '发薪统计'
          },
          legend: {
            x: 'right',
            data: ['人数(人)', '发薪(万)']
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              axisTick: {
                show: false
              },
              data: this.months
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              }
            },
            {
              type: 'value',
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '人数(人)',
              type: 'line',
              symbol: 'circle',
              symbolSize: 6,
              data: this.peopleNum,
              label: {
                show: true
              },
              itemStyle: {
                color: '#FFA500'
              }
            },
            {
              name: '发薪(万)',
              type: 'line',
              symbol: 'circle',
              yAxisIndex: 1,
              data: this.money,
              label: {
                show: true
              },
              itemStyle: {
                color: '#458B74'
              }
            }
          ]
        }
        // 使用刚指定的配置项和数据显示图表
        this.chartLine2.setOption(option)
      },
      changeMonth (type) {
        this.chartLine2.dispatchAction({
          type: 'downplay',
          dataIndex: this.currentIndex
        })
        switch (type) {
          case 'pre':

            if (this.currentMonth - 1 >= this.months[0]) {
              this.chartLine2.dispatchAction({
                type: 'highlight',
                dataIndex: this.currentIndex - 1
              })
              this.currentIndex--
              this.currentMonth--
            } else {
              this.chartLine2.dispatchAction({
                type: 'highlight',
                dataIndex: this.currentIndex
              })
            }
            break
          case 'next':

            if (this.currentMonth + 1 <= this.months[this.months.length - 1]) {
              this.chartLine2.dispatchAction({
                type: 'highlight',
                dataIndex: this.currentIndex + 1
              })
              this.currentIndex++
              this.currentMonth++
            } else {
              this.chartLine2.dispatchAction({
                type: 'highlight',
                dataIndex: this.currentIndex
              })
            }

            break
        }
      }
    }
  }
</script>

<style scoped>
  .line-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
  }
</style>
