<template>
  <div id="chartLine" class="line-wrap">

  </div>
</template>

<script>
  import * as echarts from 'echarts'

  require('echarts/theme/shine')
  export default {
    name: 'EchartsLine',
    data () {
      return {
        chartLine: null
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.drawLineChart()
      })
    },
    methods: {
      drawLineChart () {
        this.chartLine = echarts.init(this.$el)// 基于准备好的dom，初始化echarts实例
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
              symbol:'circle',
              symbolSize: 6,
              data: [90, 52, 66, 32, 77, 82, 105],
              label: {
                show: true
              },
              itemStyle:{
                color:'#FFA500'
              }
            },
            {
              name: '在职工人数',
              type: 'line',
              symbol:'circle',
              data: [115, 115, 118, 118, 118, 118, 118],
              label: {
                show: true
              },
              itemStyle:{
                color:'#104E8B'
              }
            }
          ]
        }
        // 使用刚指定的配置项和数据显示图表
        this.chartLine.setOption(option)
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
