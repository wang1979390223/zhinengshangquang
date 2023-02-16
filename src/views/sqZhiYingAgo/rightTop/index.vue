<template>
  <div class="container">
    <div class="title"><span class="title_tip">协同指挥</span></div>
    <div class="content_top">
      <div>
        <ul>
          <li style="  cursor:pointer;" @click="showDialogVisible">
            <div class="numRed num">1000</div>
            <div class="img1">
              <gif></gif>
            </div>
            <div class="nameRed name">应急处置</div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible">
            <div class="numYellow num">1000</div>
            <div class="img2">
              <gif></gif>
            </div>
            <div class="nameYellow name">重大活动</div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible">
            <div class="numBlue num">1000</div>
            <div class="img3">
              <gif></gif>
            </div>
            <div class="nameBlue name">普通事件</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content_center">
      <ul>
        <li style="  cursor:pointer;" @click="showDialogVisible('wg')">
          <div class="num">15</div>
          <div :class="['name', { name2: showName == 'wg' }]">网格</div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible('yjg')">
          <div class="num">3</div>
          <div :class="['name', { name2: showName == 'yjg' }]">窑井盖</div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible('xfsy')">
          <div class="num">10</div>
          <div :class="['name', { name2: showName == 'xfsy' }]">消防水压</div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible('ai')">
          <div class="num">6</div>
          <div :class="['name', { name2: showName == 'ai' }]">AI</div>
        </li>
      </ul>
    </div>
    <div class="content_center_two">
      <div class="left">
        <ul>
          <li style="  cursor:pointer;" @click="showDialogVisible('sjzs')">
            <div class="img img1">
              <img
                src="../../../assets/images/rightTop/center_two1.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="right">
              <div class="num">1000</div>
              <div :class="['name', { name2: showName == 'sjzs' }]">
                事件总数
              </div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('bjs')">
            <div class="img img2">
              <img
                src="../../../assets/images/rightTop/center_two2.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="right">
              <div class="num">50</div>
              <div :class="['name', { name2: showName == 'bjs' }]">办结数</div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('bjl')">
            <div class="img img3">
              <img
                src="../../../assets/images/rightTop/center_two3.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="right">
              <div class="num">95<span>%</span></div>
              <div :class="['name', { name2: showName == 'bjl' }]">办结率</div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('csl')">
            <div class="img img4">
              <img
                src="../../../assets/images/rightTop/center_two4.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="right">
              <div class="num">5<span>%</span></div>
              <div :class="['name', { name2: showName == 'csl' }]">超时率</div>
            </div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('pjsj')">
            <div class="img img5">
              <img
                src="../../../assets/images/rightTop/center_two5.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="right">
              <div class="num">5<span class="ico">小时</span></div>
              <div :class="['name', { name2: showName == 'pjsj' }]">
                平均时间
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="rightEch"><div id="suib" style="height: 100%"></div></div>
    </div>
    <div class="content_bottom">
      <span class="left_jt"></span>
      <div class="contnet_bottom_title">行政审批</div>
      <span class="right_jt"></span>
      <div class="contnet_bottom_content">
        <ul>
          <li style="  cursor:pointer;" @click="showDialogVisible('zsp')">
            <div class="num">10<span class="ico">件</span></div>
            <div :class="['name', { name2: showName == 'zsp' }]">总审批</div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('ysp')">
            <div class="num">6<span class="ico">件</span></div>
            <div :class="['name', { name2: showName == 'ysp' }]">已审批</div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('dsp')">
            <div class="num">2<span class="ico">件</span></div>
            <div :class="['name', { name2: showName == 'dsp' }]">待审批</div>
          </li>
          <li style="  cursor:pointer;" @click="showDialogVisible('bh')">
            <div class="num">2<span class="ico">件</span></div>
            <div :class="['name', { name2: showName == 'bh' }]">驳回</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gif from '../rightTop/gif.vue';
export default {
  components: { gif },
  data() {
    return {
      showName: '',
      item: [3, 4, 3, 4, 5, 8, 6]
    };
  },
  mounted() {
    this.drawws();
    setInterval(() => {
      this.drawws();
      this.item = this.item.map(function(index) {
        return index + 1;
      });
      console.log(this.item);
    }, 30000);
  },
  methods: {
    // 右1
    drawws() {
      this.myChart = this.$echarts.init(document.getElementById('suib'));
      var option = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          top: '5%',
          right: '20px',
          textStyle: {
            color: '#4c9bfd' // 图例文字颜色
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true }
          }
        },
        series: [
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [0, 80], // 中间空洞大小 和整体大小
            // 饼图位置
            center: ['30%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 0 // 圆角
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {
                value: this.item[0],
                name: '阳光厨房',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolPosition: 'end', // 图形边缘与柱子结束的地方内切
                symbolSize: ['-95%', 90], // 根据柱子大小来做调整
                itemStyle: {
                  normal: {
                    color: '#c861d4'
                  }
                }
              },
              {
                value: this.item[1],
                name: '紧急医疗',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolPosition: 'end', // 图形边缘与柱子结束的地方内切
                symbolSize: ['-95%', 90], // 根据柱子大小来做调整
                itemStyle: {
                  normal: {
                    color: '#dee565'
                  }
                }
              },
              {
                value: this.item[3],
                name: '市政抢修',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolPosition: 'end', // 图形边缘与柱子结束的地方内切
                symbolSize: ['-95%', 90], // 根据柱子大小来做调整
                itemStyle: {
                  normal: {
                    color: '#e68639'
                  }
                }
              },
              {
                value: this.item[4],
                name: '投诉举报',
                itemStyle: {
                  normal: {
                    color: '#27ba81'
                  }
                }
              },
              {
                value: this.item[5],
                name: '消防安全',
                itemStyle: {
                  normal: {
                    color: '#27b8ba'
                  }
                }
              },
              {
                value: this.item[6],
                name: '城市治安',
                itemStyle: {
                  normal: {
                    color: '#548deb'
                  }
                }
              }
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    showDialogVisible(item) {
      this.showName = item;
      this.$emit('showdialog');
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
    top: 24px;
    right: 170px;
    bottom: 587px;
    left: 16px;
    background: url(../../../assets/images/rightTop/title_bg.png) no-repeat left
      top / 100% 100%;
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
  .content_top {
    width: 372px;
    height: 119px;
    position: absolute;
    top: 87px;
    right: 60px;
    bottom: 450px;
    left: 60px;
    li {
      float: left;
      margin-right: 27px;
      &:nth-child(3) {
        margin-right: 0px;
      }
      .num,
      .name {
        text-align: center;
      }
      .num {
        font-size: 30px;
        margin-bottom: 3px;
      }
      .name {
        font-size: 18px;
        margin-top: 6px;
      }
      .numRed,
      .nameRed {
        background-image: linear-gradient(
          to top,
          #ff3434,
          #ffffff
        ); /* 线性渐变背景，方向向上 */
        -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
        -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
      }
      .numYellow,
      .nameYellow {
        background-image: linear-gradient(
          to top,
          #ffc05d,
          #ffffff
        ); /* 线性渐变背景，方向向上 */
        -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
        -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
      }
      .numBlue,
      .nameBlue {
        background-image: linear-gradient(
          to top,
          #42b2ed,
          #ffffff
        ); /* 线性渐变背景，方向向上 */
        -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
        -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
      }

      .img1 {
        width: 106px;
        height: 70px;
        // background: url(../../../assets/images/rightTop/top_1.png) no-repeat
        //   left top / 100% 100%;
      }
      .img1:hover {
        animation-play-state: paused;
      }
      .img2 {
        width: 106px;
        height: 70px;
        // background: url(../../../assets/images/rightTop/top_2.png) no-repeat
        //   left top / 100% 100%;
      }
      .img2:hover {
        animation-play-state: paused;
      }
      .img3 {
        width: 106px;
        height: 70px;
        // background: url(../../../assets/images/rightTop/top_3.png) no-repeat
        //   left top / 100% 100%;
      }
      .img3:hover {
        animation-play-state: paused;
      }
    }
    li:hover {
      animation: xtzh 2s;
    }
  }
  // 动画效果
  @keyframes xtzh {
    to {
      transform: translateY(-15px);
    }
  }
  .content_center {
    width: 388px;
    height: 88px;
    position: absolute;
    top: 226px;
    right: 345px;
    bottom: 359px;
    left: 53px;
    ul li {
      width: 88px;
      height: 72px;
      margin-right: 12px;
      text-align: center;
      background: url(../../../assets/images/rightTop/center.png) no-repeat left
        top / 100% 100%;
      float: left;
      &:nth-child(4) {
        margin-right: 0px;
      }
      .num {
        margin-top: 11px;
        font-size: 30px;
        color: #26f5f5;
      }
      .name {
        margin-top: 4px;
        font-size: 16px;
        color: #fff;
      }
      .name:hover {
        color: #c99d41;
      }
      .name2 {
        margin-top: 4px;
        font-size: 16px;
        color: #c99d41;
      }
    }
  }
  .content_center_two {
    width: 95px;
    height: 172px;
    position: absolute;
    top: 317px;
    right: 345px;
    bottom: 169px;
    left: 46px;
    .left {
      li {
        width: 95px;
        height: 28px;
        display: flex;
        margin-bottom: 8px;
        .img {
          width: 29px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid #0198ff;
          padding: 5px;
          display: flex;
          img {
            margin: auto;
          }
        }
        .right {
          padding-left: 4px;
          .num {
            width: 35px;
            height: 12px;
            font-size: 16px;
            color: #26f5f5;
            margin-top: -3px;
            margin-bottom: 3px;
            .ico {
              font-size: 12px;
              -webkit-transform: scale(0.8);
              -moz-transform: scale(0.8);
              -o-transform: scale(0.8);
              transform: scale(0.8);
            }
          }
          .name {
            width: 58px;
            height: 10px;
            font-size: 12px;
            text-align: left;
            margin-top: 2px;
            margin-left: -4px;
            color: #fff;
            -webkit-transform: scale(0.8);
            -moz-transform: scale(0.8);
            -o-transform: scale(0.8);
            transform: scale(0.8);
          }
          .name:hover {
            color: #c99d41;
          }
          .name2 {
            width: 58px;
            height: 10px;
            font-size: 12px;
            text-align: left;
            margin-top: 2px;
            margin-left: -4px;
            color: #c99d41;
            -webkit-transform: scale(0.8);
            -moz-transform: scale(0.8);
            -o-transform: scale(0.8);
            transform: scale(0.8);
          }
        }
        // .img1 {
        //   background: url(../../../assets/images/rightTop/center_two1.png)
        //     no-repeat left top / 100% 100%;
        // }
        // .img2 {
        //   background: url(../../../assets/images/rightTop/center_two2.png)
        //     no-repeat left top / 100% 100%;
        // }
        // .img3 {
        //   background: url(../../../assets/images/rightTop/center_two2.png)
        //     no-repeat left top / 100% 100%;
        // }
        // .img4 {
        //   background: url(../../../assets/images/rightTop/center_two4.png)
        //     no-repeat left top / 100% 100%;
        // }
        // .img5 {
        //   background: url(../../../assets/images/rightTop/center_two5.png)
        //     no-repeat left top / 100% 100%;
        // }
      }
    }
    .rightEch {
      width: 316px;
      height: 180px;
      position: absolute;
      top: 0px;
      right: 40px;
      bottom: 14px;
      left: 100px;
    }
  }
  .content_bottom {
    .left_jt {
      width: 20px;
      height: 21px;
      position: absolute;
      top: 519px;
      right: 297px;
      bottom: 117px;
      left: 169px;
      background: url(../../../assets/images/rightTop/left_jt.png) no-repeat
        left top / 100% 100%;
    }
    .contnet_bottom_title {
      width: 73px;
      height: 18px;
      position: absolute;
      top: 520px;
      right: 216px;
      bottom: 119px;
      left: 197px;
      color: #26f5f5;
      font-size: 18px;
    }
    .right_jt {
      width: 20px;
      height: 21px;
      position: absolute;
      top: 519px;
      right: 190px;
      bottom: 117px;
      left: 276px;
      background: url(../../../assets/images/rightTop/right_jt.png) no-repeat
        left top / 100% 100%;
    }
    .contnet_bottom_content {
      width: 459px;
      height: 48px;
      position: absolute;
      top: 570px;
      right: 0px;
      bottom: 47px;
      left: 27px;
      ul li {
        width: 109px;
        height: 40px;
        float: left;
        text-align: center;
        background: url(../../../assets/images/rightTop/bottom.png) no-repeat
          left top / 100% 100%;
        .num {
          font-size: 26px;
          font-style: oblique;
          color: #10e4e5;
          margin-top: -15px;
          .ico {
            font-size: 12px;
          }
        }
        .name {
          margin-top: -5px;
          font-size: 16px;
          color: #fff;
        }
        .name:hover {
          color: #c99d41;
        }
        .name2 {
          margin-top: -5px;
          font-size: 16px;
          color: #c99d41;
        }
      }
    }
  }
}
</style>
