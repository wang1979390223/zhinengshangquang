<template>
  <div id="echartsBar" style="width: 290px; height: 160px"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  name: 'Test',
  data() {
    return {
      chart: null,
      data1: [200, -220, -100, -500],
      data2: [500, 220, 100, 500]
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.echartsBarInit();
    });
  },
  methods: {
    echartsBarInit() {
      this.chart = echarts.init(document.getElementById('echartsBar')); // 初始化echarts实例

      var data1 = this.data1;
      var data2 = this.data2;
      var bgdata1 = new Array(data1.length).fill(Math.min(...data1));
      var bgdata2 = new Array(data2.length).fill(Math.max(...data2));
      var sdata2 = ['18-25岁', '26-45岁', '46-60岁', '60岁以上'];
      var sdata = [];
      this.chart.setOption({
        title: {
          text: '消费年龄与性别构成',
          left: 'center',
          top: 'bottom',
          textStyle: {
            color: '#34cdff',
            fontSize: 13
          }
        },
        grid: {
          left: '6%',
          right: '0%',
          bottom: '0%',
          top: '5%',
          containLabel: true
        },
        legend: {
          // 图例组件，颜色和名字
          right: 10,
          top: 30,
          itemGap: 16,
          itemWidth: 10,
          itemHeight: 10,
          data: [
            {
              name: '男'
              // icon:'image://../wwwroot/js/url2.png', //路径
            },
            {
              name: '女'
            }
          ]
          //   textStyle: {
          //     color: "#a8aab0",
          //     fontStyle: "normal",
          //     fontFamily: "微软雅黑",
          //     fontSize: 12,
          //   },
        },
        // backgroundColor: 'rgb(20,28,52)',
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            position: 'right',
            // offset: -50,
            top: 230,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: sdata2
          },
          {
            type: 'category',
            inverse: true,
            position: 'right',
            // offset: 10,
            axisTick: 'none',
            axisLine: 'none',
            show: false,
            axisLabel: {
              textStyle: {
                // color: '#fff',
                fontSize: '12'
              }
              // formatter: function (value) {
              //     if (value >= 10000) {
              //         return (value / 10000).toLocaleString() + '万';
              //     } else {
              //         return value.toLocaleString();
              //     }
              // },
            },
            data: data2
          },
          {
            type: 'category',
            inverse: true,
            position: 'left',
            // offset: 50,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }   
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
            // data: sdata,
          },
          {
            type: 'category',
            inverse: true,
            position: 'left',
            offset: 10,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: '12'
              }
              // formatter: function (value) {
              //     value = Math.abs(value);
              //     if (value >= 10000) {
              //         return (value / 10000).toLocaleString() + '万';
              //     } else {
              //         return value.toLocaleString();
              //     }
              // },
            }
            // data: data1
          }
        ],
        series: [
          {
            // radius: ["90%,90%"],
            label: {
              // 图形上的文本标签
              show: true,
              position: 'left', // 标签的位置
              offset: [35, -48], // 标签文字的偏移，此处表示向上偏移40
              formatter: '{c}{a}', // 标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: '#BE6AC0', // 标签字体颜色
              fontSize: 10 // 标签字号
            },
            name: '%',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: '#BF6AC0'
              }
            },
            barWidth: 10,
            data: data2
          },
          {
            label: {
              // 图形上的文本标签
              show: true,
              position: 'right', // 标签的位置
              offset: [-60, -15], // 标签文字的偏移，此处表示向上偏移40
              formatter: '{c}{a}', // 标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: '#fff', // 标签字体颜色
              fontSize: 10 // 标签字号
            },
            name: '%',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: '#26F5F5'
              }
            },
            barWidth: 10,
            data: data1
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: bgdata2,
            itemStyle: {
              normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30
              }
            }
          },
          {
            name: '背景1',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: bgdata1,
            itemStyle: {
              normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style scoped></style>
