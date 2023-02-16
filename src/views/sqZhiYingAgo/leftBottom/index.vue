<!-- 资源调取 -->
<template>
  <div class="container">
    <div class="title"><span class="title_tip">三维防控</span></div>
    <div class="left">
      <div @mouseenter="transfrom(3)">
        <ul>
          <li style=" cursor:pointer;" @click="showDialogVisible(3)">
            <div class="img">
              <img
                src="../../../assets/images/leftBottom/GongAn.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="text">
              <div>
                <p class="num">3<span>张</span></p>
                <p :class="['name', { name2: showid == 3 }]">区公安局</p>
              </div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible(2)">
            <div class="img">
              <img
                src="../../../assets/images/leftBottom/ShiChang.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="text">
              <div>
                <p class="num">2<span>张</span></p>
                <p :class="['name', { name2: showid == 2 }]">区市场监管局</p>
              </div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible(1)">
            <div class="img">
              <img
                src="../../../assets/images/leftBottom/JianShe.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="text">
              <div>
                <p class="num">1<span>张</span></p>
                <p :class="['name', { name2: showid == 1 }]">区建设局</p>
              </div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible(5)">
            <div class="img">
              <img
                src="../../../assets/images/leftBottom/ShangWu.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="text">
              <div>
                <p class="num">5<span>张</span></p>
                <p :class="['name', { name2: showid == 5 }]">区商务局</p>
              </div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible(4)">
            <div class="img">
              <img
                src="../../../assets/images/leftBottom/ZhiFa.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="text">
              <div>
                <p class="num">4<span>张</span></p>
                <p :class="['name', { name2: showid == 4 }]">区行政执法局</p>
              </div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible(7)">
            <div class="img">
              <img
                src="../../../assets/images/leftBottom/ChengZhong.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="text">
              <div>
                <p class="num">7<span>张</span></p>
                <p :class="['name', { name2: showid == 7 }]">城中街道</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <p class="left_bottom_tip">防控清单</p>
    <div class="center">
      <ul>
        <li class="one">
          <div class="center_li_title">
            <ul>
              <li style="  cursor:pointer;" @click="showDialogVisible(6)">
                <p class="title_num">6</p>
                <p :class="['title_name', { title_name2: showid == 6 }]">
                  巡查
                </p>
              </li>
              <li style="  cursor:pointer;" @click="showDialogVisible('2')">
                <p class="title_num">2</p>
                <p :class="['title_name', { title_name2: showid == '2' }]">
                  发现问题
                </p>
              </li>
            </ul>
          </div>
          <div class="center_li_content">
            <img
              src="../../../assets/images/leftBottom/JianGuanZF.png"
              alt=""
              srcset=""
            >
            <p>监管执法</p>
          </div>
        </li>
        <li class="three">
          <div class="center_li_title">
            <ul>
              <li style="  cursor:pointer;" @click="showDialogVisible(9)">
                <p class="title_num">9</p>
                <p :class="['title_name', { title_name2: showid == 9 }]">
                  自查
                </p>
              </li>
              <li style="  cursor:pointer;" @click="showDialogVisible('3')">
                <p class="title_num">3</p>
                <p :class="['title_name', { title_name2: showid == '3' }]">
                  未完成
                </p>
              </li>
              <li style="  cursor:pointer;" @click="showDialogVisible('0')">
                <p class="title_num">0</p>
                <p :class="['title_name', { title_name2: showid == '0' }]">
                  纠正
                </p>
              </li>
            </ul>
          </div>
          <div class="center_li_content">
            <img
              src="../../../assets/images/leftBottom/QIYeZC.png"
              alt=""
              srcset=""
            >
            <p>企业自查</p>
          </div>
        </li>
        <li class="two">
          <div class="center_li_title">
            <ul>
              <li style="  cursor:pointer;" @click="showDialogVisible(8)">
                <p class="title_num">8</p>
                <p :class="['title_name', { title_name2: showid == 8 }]">
                  巡查
                </p>
              </li>
              <li style="  cursor:pointer;" @click="showDialogVisible('5')">
                <p class="title_num">5</p>
                <p :class="['title_name', { title_name2: showid == '5' }]">
                  发现问题
                </p>
              </li>
            </ul>
          </div>
          <div class="center_li_content">
            <img
              src="../../../assets/images/leftBottom/LianHeZJ.png"
              alt=""
              srcset=""
            >
            <p>联合监督</p>
          </div>
        </li>
      </ul>
      <div class="jiantou_left_1"></div>
      <div class="jiantou_right_1"></div>
      <div class="jiantou_bottom_1"></div>
      <div class="jiantou_bottom_2"></div>
    </div>
    <div class="right">
      <div id="maine222" style="height: 100%"></div>
    </div>
    <p class="roght_bottom_tip">三维防控一体化合规管理</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showid: '',
      item: [100, 860, 550, 880, 330, 220, 450, 300, 100]
    };
  },
  mounted() {
    this.draww();
    setInterval(() => {
      this.draww();
      this.item = this.item.map(function(index) {
        return index + 100;
      });
      console.log(this.item);
    }, 25000);
  },
  methods: {
    // 左2线图
    draww() {
      this.myChart = this.$echarts.init(document.getElementById('maine222'));
      const colors = ['#5470C6', '#EE6666'];
      var option = {
        legend: {
          show: true,
          data: ['自查', '巡查', '监督', '立案'],
          textStyle: {
            color: 'rgb(255,255,255,0.9)'
          }
        },

        grid: {
          top: '10%',
          bottom: '10%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#fff' // 刻度线标签颜色
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed', // 虚线
              color: '#1e4660'
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
          axisLabel: {
            color: '#fff' // 刻度线标签颜色
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed', // 虚线
              color: '#1e4660'
            }
          }
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: []
        },
        series: [
          {
            name: '自查',
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#D2D987FF',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#8D8968FF' // 改变区域颜色自查
              }
            },
            data: [
              ['2019-10-10', this.item[0]],
              ['2019-10-11', this.item[1]],
              ['2019-10-12', this.item[2]],
              ['2019-10-13', this.item[3]],
              ['2019-10-14', this.item[4]],
              ['2019-10-15', this.item[5]],
              ['2019-10-16', this.item[6]],
              ['2019-10-17', this.item[7]],
              ['2019-10-18', this.item[8]]
            ]
          },
          {
            name: '巡查',
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#1EE7C3FF',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#194E5EFF' // 改变区域颜色
              }
            },
            data: [
              ['2019-10-10', 420],
              ['2019-10-11', 150],
              ['2019-10-12', 750],
              ['2019-10-13', 880],
              ['2019-10-14', 1300],
              ['2019-10-15', 220],
              ['2019-10-16', 950],
              ['2019-10-17', 700],
              ['2019-10-18', 100]
            ]
          },
          {
            name: '监督',
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#3FCEAFFF',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#635F87FF' // 改变区域颜色
              }
            },
            data: [
              ['2019-10-10', 900],
              ['2019-10-11', 460],
              ['2019-10-12', 550],
              ['2019-10-13', 280],
              ['2019-10-14', 330],
              ['2019-10-15', 1020],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
            ]
          },
          {
            name: '立案',
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#C577D5FF',
              width: 2
            },
            textStyle: {
              // 图例文字的样式
              color: '#fff',
              fontSize: 16
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#726694FF' // 改变区域颜色
              }
            },
            data: [
              ['2019-10-10', 300],
              ['2019-10-11', 260],
              ['2019-10-12', 1250],
              ['2019-10-13', 380],
              ['2019-10-14', 330],
              ['2019-10-15', 220],
              ['2019-10-16', 750],
              ['2019-10-17', 300],
              ['2019-10-18', 800]
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    showDialogVisible(item) {
      console.log(1);
      this.showid = item;
      this.$emit('showdialog');
    },
    transfrom(a) {
      console.log(a);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .title {
    width: 230px;
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
      line-height: 30px;
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
  .left {
    width: 292px;
    height: 46px;
    position: absolute;
    top: 85px;
    right: 1030px;
    bottom: 52px;
    left: 53px;
    div ul li {
      width: 50%;
      float: left;
      margin-bottom: 15px;
      .img {
        width: 50px;
        height: 46px;
        float: left;
        background: url(../../../assets/images/leftBottom/icon_bg.png) no-repeat
          left top / 100% 100%;

        img {
          display: flex;
          margin: auto;
        }
      }
      .img:hover {
        animation: swfk 1.5s;
      }
      .text {
        float: left;
        margin-left: 5px;
        div {
          .num {
            color: #10e4e5;
            font-size: 26px;
            font-style: oblique;
            span {
              font-size: 12px;
            }
          }
          .name {
            color: #fff;
            font-size: 14px;
          }
          .name:hover {
            color: #c99d41;
          }
          .name2 {
            color: #c99d41;
            font-size: 14px;
          }
        }
      }
    }
  }

  .left_bottom_tip {
    font-size: 16px;
    color: #26f5f5;
    position: absolute;
    top: 283px;
    right: 1030px;
    bottom: 20px;
    left: 143px;
  }
  .center {
    width: 446px;
    height: 283px;
    position: absolute;
    top: 0px;
    right: 571px;
    bottom: 14px;
    left: 385px;
    ul {
      .one {
        position: absolute;
        top: 22px;
        right: 571px;
        bottom: 182px;
        left: 160px;
      }
      .two {
        position: absolute;
        top: 183px;
        right: 0px;
        bottom: 14px;
        left: 304px;
      }
      .three {
        position: absolute;
        top: 183px;
        right: 270px;
        bottom: 14px;
        left: 0px;
      }
      li {
        width: 142px;
        height: 100px;

        .center_li_title {
          width: 144px;
          height: 38px;
          background: url(../../../assets/images/leftBottom/center_titlebg.png)
            no-repeat left top / 100% 100%;
          ul {
            padding: 0 10px;
            display: flex;
            li {
              &:nth-child(1) {
                width: 35%;
              }
              &:nth-child(2) {
                width: 65%;
              }
              .title_num {
                height: 19px;
                text-align: center;
                font-size: 22px;
                color: #00fffc;
              }
              .title_name {
                text-align: center;
                font-size: 14px;
                color: #fff;
              }
              .title_name:hover {
                color: #c99d41;
              }
              .title_name2 {
                text-align: center;
                font-size: 14px;
                color: #c99d41;
              }
            }
          }
        }
        &:nth-child(2) {
          width: 142px;
          height: 100px;
          .center_li_title {
            width: 176px;
            margin-left: -16px;
            height: 38px;
            background: url(../../../assets/images/leftBottom/center_titlebg.png)
              no-repeat left top / 100% 100%;
            ul {
              padding: 0 10px;
              display: flex;
              li {
                &:nth-child(1) {
                  width: 35%;
                }
                &:nth-child(2) {
                  width: 35%;
                }
                &:nth-child(3) {
                  width: 30%;
                }
                .title_num {
                  text-align: center;
                  font-size: 22px;
                  color: #00fffc;
                }
                .title_name {
                  text-align: center;
                  font-size: 14px;
                  color: #fff;
                }
                .title_name:hover {
                  color: #c99d41;
                }
                .title_name2 {
                  text-align: center;
                  font-size: 14px;
                  color: #c99d41;
                }
              }
            }
          }
        }
        .center_li_content {
          text-align: center;
          font-size: 14px;
          color: #fff;
          background: url(../../../assets/images/leftBottom/center_bg.png)
            no-repeat left top / 100% 100%;
          img {
            // animation: swfk 1.5s infinite alternate;
          }
          img:hover {
            animation: swfk 1.5s;
          }
          p {
            background-image: linear-gradient(
              to top,
              #f8feff,
              #5ccbff
            ); /* 线性渐变背景，方向向上 */
            -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
            -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
          }
        }
      }
    }
    .jiantou_left_1 {
      width: 74px;
      height: 63px;
      position: absolute;
      top: 119px;
      right: 571px;
      bottom: 133px;
      left: 98px;
      background: url(../../../assets/images/leftBottom/jt_1.png) no-repeat left
        top / 100% 100%;
      transform: rotate(-90deg);
    }
    .jiantou_right_1 {
      width: 74px;
      height: 63px;
      position: absolute;
      top: 130px;
      right: 571px;
      bottom: 126px;
      left: 303px;
      background: url(../../../assets/images/leftBottom/jt_1.png) no-repeat left
        top / 100% 100%;
    }
    .jiantou_bottom_1 {
      width: 140px;
      height: 17px;
      position: absolute;
      top: 256px;
      right: 571px;
      bottom: 46px;
      left: 160px;
      background: url(../../../assets/images/leftBottom/jt_2.png) no-repeat left
        top / 100% 100%;
    }
    .jiantou_bottom_2 {
      width: 140px;
      height: 17px;
      position: absolute;
      top: 273px;
      right: 571px;
      bottom: 30px;
      left: 160px;
      background: url(../../../assets/images/leftBottom/jt_2.png) no-repeat left
        top / 100% 100%;
      transform: rotate(180deg);
    }
  }
  .right {
    width: 470px;
    height: 262px;
    position: absolute;
    top: 20px;
    right: 50px;
    bottom: 37px;
    left: 857px;
    // background: #eee;
  }
  .roght_bottom_tip {
    font-size: 16px;
    color: #26f5f5;
    position: absolute;
    top: 289px;
    right: 179px;
    bottom: 14px;
    left: 1019px;
  }
  // 动画效果
  @keyframes swfk {
    to {
      transform: translateY(-8px);
    }
  }
}
</style>
