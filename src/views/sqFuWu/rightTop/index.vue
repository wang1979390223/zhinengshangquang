<template>
  <div class="container">
    <div class="title"><span class="title_tip">民众服务</span></div>
    <div class="top">
      <!-- <div id="maine_center5" style="height: 223px"></div> -->
      <!-- <bt class="maine_center5"></bt> -->
      <!-- <min2 :id="id" class="maine_center5"></min2> -->
      <div class="bingtu5">
        <!-- <img
          class="bingtu5_img"
          src="../../../assets/images/fw/NB-Pie.png"
          alt=""
        > -->
        <bingzhunagtu></bingzhunagtu>
      </div>
      <div class="tuli5">
        <ul>
          <li>
            <div
              style="width: 12px;
              height: 13px;
              background: #00FF9C;
              border-radius: 50%;
              margin-right: 17px;"
            ></div>
            <div style="font-size: 12px;color: #fff;">优</div>
          </li>
          <li>
            <div
              style="width: 12px;
              height: 13px;
              background: #34ECFF;
              border-radius: 50%;
              margin-right: 17px;"
            ></div>
            <div style="font-size: 12px;color: #fff;">良</div>
          </li>
          <li>
            <div
              style="width: 12px;
              height: 13px;
              background: #DDC584;
              border-radius: 50%;
              margin-right: 17px;"
            ></div>
            <div style="font-size: 12px;color: #fff;">中</div>
          </li>
          <li>
            <div
              style="width: 12px;
              height: 13px;
              background: #EC5AF3;
              border-radius: 50%;
              margin-right: 17px;"
            ></div>
            <div style="font-size: 12px;color: #fff;">差</div>
          </li>
        </ul>
      </div>
      <img
        class="guanghuan"
        src="../../../assets/images/fw/guanghuan.png"
        alt=""
      >
      <p class="maine_name">用户评价</p>
    </div>
    <div class="center3">
      <div id="maine_center4" style="height: 211px;"></div>
      <p class="maine_name3">信息服务</p>
      <img class="center3_dizuo" src="../../../image/tuo.png" alt="">
    </div>
  </div>
</template>

<script>
// import bt from './3dbt.vue';
// import * as echarts from 'echarts';
import bingzhunagtu from '@/components/bingzhuangtu/bingzhuangtu.vue';
import 'echarts-gl';
export default {
  components: {
    // bt
    bingzhunagtu
  },
  data() {
    return {
      id: 'bingtu',
      showid: '',
      items: [
        { num: '13', name: '停车场数量', id: 1 },
        { num: '500', name: '泊位数', id: 2 },
        { num: '7', name: '诱导次数', id: 3 },
        { num: '32', name: '当前空闲车位', id: 4 },
        { num: '50', name: '日间平均空余量', id: 5 },
        { num: '50%', name: '高峰时段饱和度', id: 6 }
      ],
      optionData: [
        {
          name: '林地',
          value: 10000,
          itemStyle: {
            color: '#22c4ff'
          }
        },
        {
          name: '草地',
          value: 12116,
          itemStyle: {
            color: '#aaff00'
          }
        },
        {
          name: '耕地',
          value: 16616,
          itemStyle: {
            color: '#ffaaff'
          }
        }
      ]
    };
  },
  mounted() {
    this.draww4();
  },
  methods: {
    // 左2线图
    // draww() {
    //   this.myChart = this.$echarts.init(
    //     document.getElementById('maine_center4')
    //   );
    //   var option = {
    //     // backgroundColor: "#000a3f",
    //     tooltip: {
    //       trigger: 'axis',
    //       axisPointer: {
    //         type: 'shadow'
    //       },
    //       //   backgroundColor: "rgba(9, 24, 48, 0.5)",
    //       //   borderColor: "rgba(75, 253, 238, 0.4)",
    //       textStyle: {
    //         color: '#CFE3FC'
    //       },
    //       borderWidth: 1
    //     },
    //     grid: {
    //       top: '15%',
    //       right: '10%',
    //       left: '10%',
    //       bottom: '12%'
    //     },
    //     xAxis: [
    //       {
    //         name: '',
    //         type: 'category',
    //         data: [
    //           '信息服务',
    //           '咨询服务',
    //           '市政服务',
    //           '失物招领',
    //           '以图找人',
    //           '通讯服务',
    //           '交通服务'
    //         ],
    //         axisLine: {
    //           lineStyle: {
    //             color: '#FFFFFF',
    //             opacity: 0.1
    //           }
    //         },
    //         axisLabel: {
    //           margin: 5,
    //           color: '#e2e9ff',
    //           textStyle: {
    //             fontSize: 10
    //           }
    //         },
    //         axisTick: {
    //           show: false
    //         }
    //       }
    //     ],
    //     yAxis: [
    //       {
    //         name: '次',
    //         axisLabel: {
    //           formatter: '{value}',
    //           color: '#e2e9ff'
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLine: {
    //           show: true,
    //           lineStyle: {
    //             color: '#FFFFFF',
    //             opacity: 0.1
    //           }
    //         },
    //         splitLine: {
    //           lineStyle: {
    //             color: 'rgba(255,255,255,0.12)'
    //           }
    //         }
    //       }
    //     ],
    //     series: [
    //       {
    //         type: 'bar',
    //         data: [70, 30, 98, 63, 30, 50, 98],
    //         barWidth: 10.2,
    //         itemStyle: {
    //           normal: {
    //             color: new this.$echarts.graphic.LinearGradient(
    //               0,
    //               0,
    //               0,
    //               1,
    //               [
    //                 {
    //                   offset: 0,
    //                   color: '#00a8f5' // 0% 处的颜色
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: '#00f1f5' // 100% 处的颜色
    //                 }
    //               ],
    //               false
    //             )
    //             // shadowColor: "rgba(0,160,221,1)",
    //             // shadowBlur: 4
    //           }
    //         },
    //         label: {
    //           normal: {
    //             show: false,
    //             lineHeight: 10,
    //             formatter: '{c}',
    //             position: 'top',
    //             textStyle: {
    //               color: '#00D6F9',
    //               fontSize: 12
    //             }
    //           }
    //         }
    //       }
    //     ]
    //   };

    //   this.myChart.setOption(option);
    // },
    draww4() {
      this.myChart = this.$echarts.init(
        document.getElementById('maine_center4')
      );
      var option = {
        // backgroundColor: "rgba(39,46,74)",
        tooltip: {
          trigger: 'item'
        },
        grid: {
          top: '13%',
          left: '15%',
          right: '10%',
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
            data: [
              '信息服务',
              '咨询服务',
              '市政服务',
              '失物招领',
              '以图找人',
              '通讯服务',
              '交通服务'
            ],
            axisLabel: {
              textStyle: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 10
              },
              margin: 10 // 刻度标签与轴线之间的距离。
            },

            axisLine: {
              show: true, // 不显示x轴
              lineStyle: {
                color: 'rgba(48, 49, 51, 1)'
              }
            },
            axisTick: {
              show: false // 不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            name: '次',
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
                color: 'rgba(38, 245, 245, 0.2)',
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
                fontSize: 12
              }
            }
          }
        ],
        series: [
          {
            // 柱底圆片
            name: '',
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
                      color: 'rgba(0, 241, 245, 0.6)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 167, 245, 0.6)'
                    }
                  ],
                  false
                )
              }
            },
            data: ['50', '75', '80', '60', '75', '50', '85']
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
                      color: 'rgba(0, 241, 245, 0.6)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 167, 245, 0.6)'
                    }
                  ]
                }
              }
            },
            data: ['50', '75', '80', '60', '75', '50', '85']
          },

          // 柱顶圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 7], // 调整截面形状
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
                      color: 'rgba(0, 241, 245, 0.6)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 167, 245, 0.6)'
                    }
                  ],
                  false
                )
              }
            },
            data: ['50', '75', '80', '60', '75', '50', '85']
          }
        ]
      };
      this.myChart.setOption(option);
    },
    showDialogVisible(item) {
      this.showid = item.num;
      this.$emit('showdialog');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .title {
    width: 232px;
    height: 40px;
    position: absolute;
    top: 33px;
    right: 231px;
    bottom: 587px;
    left: 15px;
    line-height: 30px;
    background: url(../../../assets/images/fw/title_bg_238.png) no-repeat left
      top / 100% 100%;
    padding: 4px;
    font-size: 24px;
    color: #fff;
    .title_tip {
      line-height: 32px;
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
  .top {
    position: relative;
    width: 444px;
    height: 245px;
    // background: #eee;
    margin: 73px auto 0;
    margin-bottom: 42px;
    .bingtu5 {
      width: 291px;
      height: 181px;
      position: absolute;
      top: 24px;
      left: 60px;
      .bingtu5_img {
        width: 100%;
        height: 100%;
      }
    }
    .tuli5 {
      position: absolute;
      top: 28px;
      right: 10px;
      ul {
        li {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
      }
    }
    .maine_center5 {
      height: 223px;
    }
    .guanghuan {
      position: absolute;
      top: 63px;
      left: 22px;
      width: 350px;
      height: 195px;
      opacity: 0.5;
    }
    .maine_name {
      position: absolute;
      top: 242px;
      // left: 193px;
      width: 100%;
      text-align: center;
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
    }
  }
  .center2 {
    width: 444px;
    // width: 770px;
    height: 233px;
    margin: 16px auto 0;
    // background: rgb(88, 88, 88);
    .maine_center4 {
      height: 211px;
    }
    .maine_name {
      width: 100%;
      text-align: center;
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
    }
  }
  .center3 {
    position: relative;
    z-index: 2;
    .center3_dizuo {
      position: absolute;
      top: 162px;
      left: 21px;
      width: 442px;
      height: 75px;
      z-index: -1;
    }
    .maine_name3 {
      margin-top: 24px;
      width: 100%;
      text-align: center;
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
    }
  }
  // 动画效果
  @keyframes mzfw {
    to {
      transform: translateY(-10px);
    }
  }
}
</style>
