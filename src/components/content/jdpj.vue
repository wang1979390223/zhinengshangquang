<template>
  <div class="jdpj">
    <span class="num-0">0</span>
    <span class="num-6">6</span>
    <span class="num-12">12</span>
    <span class="num-18">18</span>
    <span class="arrow"></span>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentJdpj',
  data() {
    return {
      myChart: null,
      options: {
        title: {
          text: '90%',
          left: 220,
          top: 99,
          textStyle: {
            color: '#fe4536',
            fontSize: 18,
            fontWeight: 500
          }
        },
        color: ['#ff614e', '#ed0032', '#7a7a7a', '#21bb2e'],
        tooltip: {
          trigger: 'item'
        },
        grid: {
          top: 0
        },
        legend: {
          itemWidth: 14,
          itemHeight: 8,
          bottom: 5,
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '监督评价',
            type: 'pie',
            top: -28,
            radius: [53, 78],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: 'rgba(40, 70, 72,1)',
              borderWidth: 3
            },
            label: {
              show: true,
              textBorderWidth: 0,
              formatter: [
                '{percent|{d}%}',
                '{name|{b}}'
              ].join('\n'),
              rich: {
                percent: {
                  fontSize: 18,
                  fontWeight: '700'
                },
                name: {
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)'
                }
              }
            },
            labelLine: {
              length2: 50
            },
            data: [
              { value: 1048, name: '类型一', label: { color: '#f63d80' } },
              { value: 735, name: '类型二', label: { color: '#df0098' } },
              { value: 580, name: '类型三', label: { color: '#23fc97' } },
              { value: 484, name: '类型四', label: { color: '#4ecf01' } }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.chartInit()
  },
  methods: {
    chartInit() {
      this.myChart = this.$echarts.init(this.$refs.chart)
      this.myChart.setOption(this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
.jdpj {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/chart-bg.png) no-repeat center 10px;
  position: relative;
  .chart {
    width: 100%;
    height: 100%;
  }
  .num-0 {
    position: absolute;
    top: -2px;
    left: 50%;
    color: #999;
    margin-left: -6px;
  }
  .num-6 {
    position: absolute;
    top: 97px;
    right: 130px;
    color: #999;
  }
  .num-12 {
    position: absolute;
    bottom: 25px;
    left: 50%;
    color: #999;
    margin-left: -12px;
  }
  .num-18 {
    position: absolute;
    top: 97px;
    left: 117px;
    color: #999;
  }
  .arrow {
    position: absolute;
    top: 95px;
    left: 200px;
    width: 17px;
    height: 27px;
    background: url(../../assets/images/arrow.png) no-repeat left top;
  }
}
</style>
