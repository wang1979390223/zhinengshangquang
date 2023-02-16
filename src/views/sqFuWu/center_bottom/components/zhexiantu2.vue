<template>
  <div id="test_app">
    <!--echarts的容器-->
    <div id="main5" style="width: 724px; height: 236px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
export default {
  data() {
    return {
      charts: '',
      opinionData: [
        '155',
        '700',
        '900',
        '600',
        '700',
        '600',
        '270',
        '500',
        '400',
        '300',
        '500',
        '270'
      ] // 数据
    };
  },
  // 调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine('main5');
    });
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        // backgroundColor: "#021132", //背景颜色
        // title: {
        //   left: "3%",
        //   top: "5%",
        //   text: "最近一周订单数量", //标题文本，支持使用 \n 换行。
        // },
        // tooltip: {
        //   trigger: "axis",
        // },
        // legend: {
        //   align: "right", //文字在前图标在后
        //   left: "3%",
        //   top: "15%",
        //   data: ["近一周"],
        // },
        grid: {
          top: '5%',
          left: '5%',
          right: '5%',
          bottom: '30',
          containLabel: true
        },

        // toolbox: {
        //   feature: {
        //     saveAsImage: {}, //保存为图片
        //   },
        // },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          axisTick: {
            show: false,
            alignWithLabel: true // 保证刻度线和标签对齐
          },
          axisLine: {
            lineStyle: {
              color: '#274e6a'
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#FBFCFC',
              fontSize: 12
            },
            margin: 20 // 刻度标签与轴线之间的距离。
          },
          splitLine: {
            // 去除网格线
            show: false
          },
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ] // x坐标的名称
        },
        yAxis: {
          type: 'value',
          show: true,
          //   boundaryGap: true,
          splitNumber: 4, // 纵坐标数
          interval: 200, // 强制设置坐标轴分割间隔
          axisLine: {
            show: true,
            lineStyle: {
              color: '#274e6a'
            }
          },
          splitLine: {
            // 去除网格线
            show: true,
            lineStyle: {
              color: '#274e6a',
              width: 2
            }
          },
          axisLabel: {
            textStyle: {
              color: '#FBFCFC',
              fontSize: 12
            }
          }
        },
        title: {
          text: '', // subtext: "消费趋势",
          left: 'center',
          // top: "bottom", // color: "#34cdff",
          textStyle: {
            color: '#34cdff',
            fontSize: 13
          },
          bottom: '5'
        },

        series: [
          {
            symbol: 'none', // 去掉上面的圆点
            smooth: true,
            name: '近一周',
            type: 'line', // 折线图line;柱形图bar;饼图pie
            stack: '总量',
            areaStyle: {
              backgroundColor: '#000',
              // 显示区域颜色---渐变效果
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#eeb274' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#eeb27400' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            itemStyle: {
              color: '#EDB774', // 改变折线点的颜色
              lineStyle: {
                color: '#EDB774   ' // 改变折线颜色
              }
            },
            data: this.opinionData
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
