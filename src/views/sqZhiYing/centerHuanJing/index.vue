<!-- 资源调取 -->
<template>
  <div class="container">
    <div class="title"><span class="title_tip">环境</span></div>
    <div class="left_box">
      <ul>
        <li>
          <p class="num">500</p>
          <p class="name">PM 2.5</p>
        </li>
        <li>
          <p class="num">500</p>
          <p class="name">PM 10</p>
        </li>
        <li>
          <p class="num">500</p>
          <p class="name">TSP</p>
        </li>
        <li>
          <p class="num">500</p>
          <p class="name">噪声</p>
        </li>
      </ul>
    </div>
    <div class="center_box">
      <div id="maine" style="height: 90%"></div>
      <p class="center_box_title">空气污染监测</p>
    </div>
    <div class="right_box">
      <div id="maine2" style="height: 90%; width: 98%"></div>
      <p class="center_box_title">噪声污染监测</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.draww();
    this.draww2();
  },
  methods: {
    // 左2线图
    draww() {
      this.myChart = this.$echarts.init(document.getElementById('maine'));
      const colors = ['#5470C6', '#EE6666'];
      var option = {
        // backgroundColor: "#394056",
        title: {
          // text: "请求数",
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: '6%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['PM2.5', 'PM10', 'TSP', '警界线'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            data: ['0', '0:15', '0:30', '0:45', '1:00', '1:15', '1:30']
          },
          {
            axisPointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            axisTick: {
              show: false
            },

            position: 'bottom',
            offset: 20
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位（%）',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: '#57617B'
              }
            }
          }
        ],
        series: [
          {
            name: 'PM2.5',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(137, 189, 27, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(137, 189, 27, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12
              }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
          },
          {
            name: 'PM10',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0, 136, 212, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(0, 136, 212, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12
              }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
          },
          {
            name: 'TSP',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(219, 50, 51, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(219, 50, 51, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
              }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
          },
          {
            name: '警界线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(219, 50, 51, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(219, 50, 51, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
              }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    // 左2线图
    draww2() {
      this.myChart = this.$echarts.init(document.getElementById('maine2'));
      const colors = ['#5470C6', '#EE6666'];
      var option = {
        // backgroundColor: "#05224d",
        tooltip: {},
        grid: {
          top: '12%',
          left: '0%',
          right: '3%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              color: '#fff' // 刻度线标签颜色
            },
            axisTick: { show: false },
            data: ['0', '0:15', '0:30', '0:45', '1:00', '1:15', '1:30']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'db',
            min: 0,
            max: 140,
            splitNumber: 7,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              color: '#fff' // 刻度线标签颜色
            },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: '异常流量',
            type: 'line',
            smooth: 0.3, // 是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize: 0,

            lineStyle: {
              normal: {
                color: '#3deaff' // 线条颜色
              }
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: 'rgba(61,234,255, 0.2)' },
                    { offset: 0.7, color: 'rgba(61,234,255, 0)' }
                  ],
                  false
                ),

                shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [90, 105, 84, 125, 110, 92, 98]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .title {
    width: 300px;
    height: 46px;
    position: absolute;
    top: 25px;
    right: 170px;
    bottom: 587px;
    left: 21px;
    background: url(../../../assets/images/leftBottom/title_bg.png) no-repeat
      left top / 100% 100%;
    padding: 8px;
    font-size: 24px;
    color: #fff;
    .title_tip {
      margin-left: 14px;
      font-weight: bold;
      background-image: linear-gradient(
        to top,
        #34cdff,
        #ffffff
      ); /* 线性渐变背景，方向向上 */
      -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
      -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
    }
  }
  .left_box {
    position: absolute;
    top: 80px;
    right: 1164px;
    bottom: 35px;
    left: 29px;
    ul {
      li {
        width: 80px;
        height: 94px;
        float: left;
        text-align: center;
        margin-bottom: 20px;
        background: url(../../../assets/images/leftBottom/PM.png) no-repeat left
          top / 100% 100%;
        .num {
          color: #26f5f5;
          font-size: 18px;
          margin-top: 2px;
          margin-left: 3px;
        }
        .name {
          color: #fff;
          font-size: 14px;
          margin-top: 62px;
        }
      }
    }
  }
  .center_box {
    width: 460px;
    height: 247px;
    position: absolute;
    top: 58px;
    right: 643px;
    bottom: 14px;
    left: 272px;
    // background: #eee;
    .center_box_title {
      color: #26f5f5;
      font-size: 14px;
      text-align: center;
    }
  }
  .right_box {
    width: 470px;
    height: 247px;
    position: absolute;
    top: 58px;
    right: 100px;
    bottom: 14px;
    left: 800px;
    // background: #eee;
    .center_box_title {
      color: #26f5f5;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
