<!-- 资源调取 -->
<template>
  <div class="container">
    <div class="title"><span class="title_tip">治安</span></div>
    <div class="left_box">
      <img
        src="../../../assets/images/leftBottom/YiChang.png"
        alt=""
        srcset=""
      />
      <p class="bottom_title">异常移动监测</p>
    </div>
    <div class="center">
      <div id="maine" style="height: 100%"></div>
      <p class="bottom_title">异常移动监测</p>
    </div>
    <div class="right_right">
      <p class="right_right_title">人员求助</p>
      <div class="scroll-v">
        <div class="scrolltitle scrolltitlelist">
          <div
            v-for="(v, i) in list"
            :key="i"
            :style="{ width: v == '' ? '60px' : '' }"
          >
            {{ v }}
          </div>
        </div>
        <div v-if="cllData.length" class="content">
          <vue-seamless-scroll
            :data="cllData"
            class="my-scroll-bar"
            :class-option="defaultOption"
          >
            <div
              v-for="(v, i) in cllData"
              :key="i"
              ref="scrolltitles"
              class="scrolltitle scrolltitlebg"
            >
              <div>{{ v.name }}</div>
              <div>{{ v.mobile }}</div>
              <div style="width: 33%;">{{ v.response }}</div>
            </div>
          </vue-seamless-scroll>
        </div>
        <div v-else style="color:#fff;text-align:center;padding-top:40px">
          暂无工单信息!!!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["姓名", "电话", "求助原因"],
      cllData: [
        {
          name: "张三",
          mobile: "13812345678",
          response: "文字内容文..."
        },
        {
          name: "张三",
          mobile: "13812345678",
          response: "文字内容文..."
        },
        {
          name: "张三",
          mobile: "13812345678",
          response: "文字内容文..."
        },
        {
          name: "张三",
          mobile: "13812345678",
          response: "文字内容文..."
        }
      ]
    };
  },
  mounted() {
    this.draww();
  },
  methods: {
    // 左2线图
    draww() {
      this.myChart = this.$echarts.init(document.getElementById("maine"));
      const colors = ["#5470C6", "#EE6666"];
      var option = (option = {
        // backgroundColor: "#0f375f",
        title: {
          // text: "带警戒线的图",
          textStyle: {
            align: "right",
            color: "#fff",
            fontSize: 22
          },
          top: "0%",
          bottom: "0%",
          left: "center"
        },
        grid: {
          top: "18%",
          bottom: "10%",
          left: "10%",
          right: "5%"
        },
        legend: {
          data: ["一级", "二级", "三级"],
          top: "0%",
          x: "center",
          itemWidth: 15,
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: ["2/18", "2/19", "2/20", "2/21", "2/22"],
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            textStyle: {
              color: "#fff",
              fontStyle: "normal",
              fontSize: 10
            }
          },
          axisTick: {
            //坐标轴刻度相关设置。
            show: false
          },
          axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
              color: "#fff",
              opacity: 0.2
            }
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false
          }
        },
        yAxis: [
          {
            type: "value",
            // name: "万吨",
            min: 0,
            max: 700,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 10
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0c2c5a"
              }
            }
          }
        ],
        series: [
          {
            name: "三级",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                type: "dashed",
                color: "red",
                lineStyle: {
                  color: "red"
                }
              }
            },
            markLine: {
              symbol: "none",
              silent: true,
              label: {
                position: "start"
              },
              data: [
                {
                  yAxis: 500,
                  lineStyle: {
                    //警戒线的样式  ，虚实  颜色
                    type: "solid",
                    color: "red"
                  },
                  label: {
                    show: false,
                    position: ""
                  }
                }
              ]
            }
          },
          {
            name: "二级",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                type: "dashed",
                color: "yellow",
                lineStyle: {
                  color: "yellow"
                }
              }
            },
            markLine: {
              symbol: "none",
              silent: true,
              label: {
                position: "start"
              },
              data: [
                {
                  yAxis: 400,
                  lineStyle: {
                    //警戒线的样式  ，虚实  颜色
                    type: "solid",
                    color: "yellow"
                  },
                  label: {
                    show: false,
                    position: ""
                  }
                }
              ]
            }
          },
          {
            name: "一级",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                type: "dashed",
                color: "skyblue",
                lineStyle: {
                  color: "skyblue"
                }
              }
            },
            markLine: {
              symbol: "none",
              silent: true,
              label: {
                position: "start"
              },
              data: [
                {
                  yAxis: 300,
                  lineStyle: {
                    //警戒线的样式  ，虚实  颜色
                    type: "solid",
                    color: "skyblue"
                  },
                  label: {
                    show: false,
                    position: ""
                  }
                }
              ]
            }
          },
          {
            type: "line",
            name: "实际值",
            smooth: true, //平滑曲线显示
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "rgb(59,196,236)",
                lineStyle: {
                  color: "rgb(59,196,236)"
                }
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
                      color: "rgba(34,77,136,0.5)"
                    },
                    {
                      offset: 0.5,
                      color: "rgba(34,77,136,.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(34,77,136,0)"
                    }
                  ],
                  false
                )
              }
            },
            label: {
              show: false,
              distance: 1
            },
            data: [700, 400, 140, 520, 140, 659]
          }
        ]
      });
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
    width: 358px;
    height: 201px;
    position: absolute;
    top: 87px;
    right: 996px;
    bottom: 30px;
    left: 21px;
    .bottom_title {
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #26f5f5;
      margin-top: -10px;
    }
  }
  .center {
    width: 446px;
    height: 240px;
    position: absolute;
    top: 57px;
    right: 503px;
    bottom: 17px;
    left: 427px;
    // background: #eee;
    .maine {
      display: block;
      width: 100%;
    }
    .bottom_title {
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #26f5f5;
      margin-top: -10px;
    }
  }
  .right_right {
    width: 414px;
    height: 256px;
    position: absolute;
    top: 44px;
    right: 54px;
    bottom: 19px;
    left: 907px;
    .right_right_title {
      color: #26f5f5;
      font-size: 16px;
      text-align: center;
    }
    .scroll-v {
      width: 90%;
      height: 80%;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);

      .scrolltitle {
        display: flex;
        justify-content: space-around;
        font-size: 0.8rem;
        height: 2.5rem;
        line-height: 2.5rem;
        color: #fefefe;
        font-size: 16px;

        // &:nth-child(2n) {
        //   background: -webkit-linear-gradient(left, #0f288a, #1a1d5e);
        // }

        div {
          width: 20%;
          text-align: center;
        }
      }

      .scrolltitlebg {
        background: #103f69;
        &:hover {
          cursor: pointer;
          background: red;
        }
      }

      .content {
        height: calc(100% - 1.5rem);

        .my-scroll-bar {
          width: 100%;
          height: 93%;
          box-sizing: border-box;
          overflow: hidden;
        }
      }
    }

    .scrolltitlelist {
      background: #114880;
      color: #26f5f5 !important;
      font-weight: 700;
      div {
        font-size: 16px;
        &:nth-child(3) {
          width: 33%;
        }
      }
    }
  }
}
</style>
