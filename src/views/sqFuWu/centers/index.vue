<template>
  <div class="container">
    <div class="title">
      <ul>
        <li v-for="(item, index) in items" :key="index" style="  cursor:pointer;" @click="showDialogVisible">
          <span class="name">{{ item.name }}</span>
          <span class="num">{{ item.num }}</span>
        </li>
      </ul>
    </div>
    <!-- <div class="center">
      <div id="maine_center" style="height: 91%"></div>
      <p class="maine_name">总服务曲线服务</p>
    </div> -->
    <!-- <div class="center2">
      <div id="maine_center2" style="height: 91%"></div>
      <p class="maine_name">共享电动自行车服务</p>
      <div class="zhedang">
        <ul>
          <li>10/1</li>
          <li>10/2</li>
          <li>10/3</li>
          <li>10/4</li>
          <li>10/5</li>
          <li>10/6</li>
          <li>10/7</li>
        </ul>
      </div>
    </div> -->
    <!-- <div class="center3">
      <div id="maine_center3" style="height: 91%"></div>
      <p class="maine_name">车位诱导服务</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: '用户数', num: '200' },
        { name: '总服务数', num: '370' },
        { name: '服务评价', num: '优' }
      ]
    };
  },
  mounted() {
    // this.draww();
    // this.draww2();
    this.draww3();
  },
  methods: {
    // 左2线图
    draww() {
      this.myChart = this.$echarts.init(
        document.getElementById('maine_center')
      );
      var option = {
        backgroundColor: '',
        tooltip: {},
        grid: {
          top: '12%',
          left: '5%',
          right: '5%',
          bottom: '8%',
          containLabel: true
        },
        legend: {
          icon: 'circle',
          top: '0%',
          right: '5%',
          itemWidth: 10,
          itemGap: 20,
          textStyle: {
            color: '#fff'
          },
          itemStyle: {
            color: '#e4937e'
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            color: '#fff',
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233e64'
              }
            },
            axisLabel: {
              color: '#fff', // 刻度线标签颜色
              // 坐标轴刻度标签的相关设置
              textStyle: {
                color: '#fff',
                margin: 15
              }
            },
            axisTick: { show: false },
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
            ]
          }
        ],
        yAxis: [
          {
            name: '数量',
            type: 'value',
            color: '#fff',
            nameTextStyle: {
              color: '#fff',
              nameLocation: 'start',
              fontSize: 10
            },
            min: 0,
            max: 140,
            splitNumber: 7,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#233e64'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: '总服务',
            type: 'line',
            smooth: true, // 是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize: 0,

            lineStyle: {
              normal: {
                color: '#62603c' // 线条颜色
              }
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: '#62603c' },
                    { offset: 1, color: '#143950' }
                  ],
                  false
                ),

                shadowColor: '', // 阴影颜色
                shadowBlur: 0 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [90, 105, 84, 125, 110, 92, 98, 110, 92, 98, 92, 98]
          }
        ]
      };

      this.myChart.setOption(option);
    },
    // 左2线图
    draww2() {
      this.myChart = this.$echarts.init(
        document.getElementById('maine_center2')
      );
      /**
       * 照着一个案例改的
       * 增加下面的数值显示
       * */
      var myData = ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7'];
      var lineData = [100, 100, 100, 100, 100, 100, 100];
      var lastYearData = {
        1: [13, 20, 62, 34, 55, 65, 33]
      };
      var thisYearData = {
        1: [11, 38, 23, 39, 66, 66, 79]
      };
      var timeLineData = [1];
      var background = '#0e2147'; // 背景

      var option = {
        baseOption: {
          //   backgroundColor: background,
          timeline: {
            show: false,
            top: 0,
            data: []
          },
          legend: [
            {
              top: '0%',
              left: '35%',
              itemWidth: 0,
              itemHeight: 0,
              itemGap: 343,
              icon: 'horizontal',
              textStyle: {
                color: '#227CFF',
                fontSize: 16
              },
              data: ['到达']
            },
            {
              top: '0%',
              left: '61%',
              itemWidth: 0,
              itemHeight: 0,
              itemGap: 343,
              icon: 'horizontal',
              textStyle: {
                color: '#7b3aff',
                fontSize: 16
              },
              data: ['出发']
            }
          ],
          grid: [
            {
              show: false,
              left: '5%',
              top: '10%',
              bottom: '8%',
              containLabel: true,
              width: '37%'
            },
            {
              show: false,
              left: '51%',
              top: '10%',
              bottom: '11%',
              width: '0%'
            },
            {
              show: false,
              right: '5%',
              top: '10%',
              bottom: '8%',
              containLabel: true,
              width: '37%'
            }
          ],
          xAxis: [
            {
              type: 'value',
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'bottom',
              axisLabel: {
                show: false,
                //     formatter:function(value)
                //   {
                //         //return '\n\n\n\n' + value;
                //      // return '\n' + value
                //      return value
                //      // return value + 'virus'
                //     // return value.split("").join("\n");
                //   },
                textStyle: {
                  color: 'white'
                }
              },
              splitLine: {
                show: false
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              gridIndex: 2,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'bottom',
              axisLabel: {
                show: false,
                interval: 0,
                // formatter:function(value)
                //   {
                //         //return '\n\n\n\n' + value;
                //     //  return '\n' + value
                //   return value
                //      // return value + 'virus'
                //     // return value.split("").join("\n");
                //   },
                textStyle: {
                  color: 'white'
                }
              },
              splitLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              gridIndex: 0,
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: myData
            },
            {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                //  formatter:function(value)
                //   {

                //      // return '\n' + value
                //      return value + '\n\n'
                //      // return value + 'virus'
                //   },
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20
                }
              },
              data: myData.map(function(value) {
                return {
                  value: value,
                  textStyle: {
                    align: 'center'
                  }
                };
              })
            },
            {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: myData
            }
          ],
          series: []
        },
        options: []
      };

      option.baseOption.timeline.data.push(timeLineData[0]);
      option.options.push({
        series: [
          {
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            // symbol: 'rect',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },
            textStyle: {
              color: 'red' // 图例文字颜色
            },
            barWidth: 10,
            // symbolRepeat: true,
            // symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
              normal: {
                show: true,
                formatter: series => {
                  return lastYearData[timeLineData[0]][series.dataIndex];
                },
                position: 'insideTopLeft',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20
                },
                offset: [0, -10]
              }
            },
            z: -100,
            animationEasing: 'elasticOut'
            // animationDelay: function(dataIndex, params) {
            //   return params.index * 30;
            // }
          },
          {
            name: '到达',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            //  symbol: 'rect',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: '#1e7aff'
              }
            },
            textStyle: {
              color: 'red' // 图例文字颜色
            },
            // symbolRepeat: true,
            // symbolSize: 14,
            data: lastYearData[timeLineData[0]]
            // animationEasing: 'elasticOut',
            // animationDelay: function (dataIndex, params) {
            //     return params.index * 30 * 1.1;
            // }
          },
          {
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
              normal: {
                show: true,
                formatter: series => {
                  return thisYearData[timeLineData[0]][series.dataIndex];
                },
                position: 'insideTopRight',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20
                },
                offset: [0, -10]
              }
            },
            z: -100,
            animationEasing: 'elasticOut'
            // animationDelay: function(dataIndex, params) {
            //   return params.index * 30;
            // }
          },
          {
            name: '出发',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            //   symbol: 'rect',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: '#7b3aff'
              }
            },
            // symbolRepeat: true,
            // symbolSize: 14,
            data: thisYearData[timeLineData[0]]
            // animationEasing: 'elasticOut',
            // animationDelay: function (dataIndex, params) {
            //     return params.index * 30 * 1.1;
            // }
          }
        ]
      });
      this.myChart.setOption(option);
    },
    // 左2线图
    draww3() {
      this.myChart = this.$echarts.init(
        document.getElementById('maine_center3')
      );
      var option = {
        // backgroundColor: "rgba(39,46,74)",
        tooltip: {
          trigger: 'item'
        },
        grid: {
          top: '12%',
          left: '5%',
          right: '5%',
          bottom: '10%'
        },
        legend: {
          icon: 'circle',
          top: '0%',
          right: '5%',
          itemWidth: 10,
          itemGap: 20,
          fontSize: 16,
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: [
          {
            data: ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7'],
            axisLabel: {
              textStyle: {
                color: 'rgba(122,173,212,1)',
                fontSize: 14
              },
              margin: 10 // 刻度标签与轴线之间的距离。
            },

            axisLine: {
              show: true, // 不显示x轴
              lineStyle: {
                color: 'rgba(53,65,95,1)'
              }
            },
            axisTick: {
              show: true // 不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            name: '数量',
            type: 'value',
            color: '#fff',
            nameTextStyle: {
              color: '#fff',
              nameLocation: 'start',
              fontSize: 10
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(53,65,95,1)',
                type: 'dashed'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#548DEB',
                opacity: 0.22
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            // 柱底圆片
            name: '车位数',
            type: 'pictorialBar',
            symbolSize: [22, 7], // 调整截面形状
            symbolOffset: [0, 2],
            z: 12,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#c77483'
                    },
                    {
                      offset: 1,
                      color: '#c77483'
                    }
                  ],
                  false
                )
              }
            },
            data: ['50', '75', '105', '130', '75', '105', '130']
          },

          // 柱体
          {
            name: '',
            type: 'bar',
            barWidth: 22,
            itemStyle: {
              // shadowOffsetX: 200,
              // shadowOffsetY: 200,
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: 'linear',
                  global: false,
                  colorStops: [
                    {
                      // 第一节下面
                      offset: 0,
                      color: '#a4916f'
                    },
                    {
                      offset: 1,
                      color: '#8a5e71'
                    }
                  ]
                }
              }
            },
            data: ['50', '75', '105', '130', '75', '105', '130']
          },

          // 柱顶圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [22, 7], // 调整截面形状
            symbolOffset: [0, -2],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#FFDBAC'
                    },
                    {
                      offset: 1,
                      color: '#FFDBAC'
                    }
                  ],
                  false
                )
              }
            },
            data: ['50', '75', '105', '130', '75', '105', '130']
          }
        ]
      };

      this.myChart.setOption(option);
    },
    showDialogVisible() {
      this.$emit('showdialog');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  .title {
    ul {
      width: 840px;
      margin: 53px auto 0;
      display: flex;
      justify-content: space-between;
      li {
        &:nth-child(3) .num {
          margin-right: 15px;
        }
        width: 257px;
        height: 91px;
        background: url(../../../assets/images/fw/center_bg.png) no-repeat left
          top / 100% 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        .name {
          line-height: 91px;
          font-size: 29px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #26f5f5;
        }
        .num {
          line-height: 91px;
          font-size: 36px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: #26f5f5;

          background: linear-gradient(180deg, #fbcf34 0%, #ff9b58 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
  .center {
    width: 840px;
    // width: 770px;
    height: 269px;
    margin: 15px auto 0;
    .maine_center {
      height: 269px;
    }
    .maine_name {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
      margin-top: -13px;
    }
  }
  .center2 {
    position: relative;
    width: 840px;
    // width: 770px;
    height: 244px;
    margin: auto;
    .maine_center2 {
      height: 244px;
    }
    .maine_name {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
    }
    .zhedang {
      width: 102px;
      height: 194px;
      background: #eee;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -51px;
      margin-top: 18px;
      background: url(../../../assets/images/fw/centet_center2.png) no-repeat
        left top / 100% 100%;
      ul {
        li {
          width: 70px;
          height: 20px;
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
          text-align: center;
          margin: 6.2px auto 0;
          background: url(../../../assets/images/fw/center_center_bg.png)
            no-repeat left top / 100% 100%;
        }
      }
    }
  }
  .center3 {
    width: 840px;
    // width: 770px;
    height: 270px;
    margin: auto;
    .maine_center3 {
      height: 270px;
    }
    .maine_name {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
    }
  }
}
</style>
