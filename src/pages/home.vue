<template>
  <div class="">
    <div class="header">
      <div class="headers">
        西市街智慧商圈数字应用
        <div :class="[clik ? 'fudong' : 'fudon']">1</div>
        <div class="fudong">2</div>
        <div class="fudong">3</div>
        <!-- <div class="to">
      
        西市街智慧商圈数字应用
      </div> -->
        <div class="fudong2">1</div>
        <div class="fudong2">2</div>
        <div class="fudong2">3</div>
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="col col-l">
          <!-- 左一 -->
          <div class="xpanel-wrapper xpanel-wrapper-40">
            <div class="q1s">
              <span class="sj">{{ dates }}</span>
              <span class="sjs">星期{{ datess }}</span>
              <span class="sj">{{ datesss }}</span>
            </div>

            <div v-if="true" class="xpanel xpanel-l-t">
              <div class="title">
                <div class="tite"><div class="jbs">商圈智营</div></div>
                <div class="fds">{{ date }}</div>
              </div>
              <div class="ssx">
                <div v-for="(item, index) in obj" :key="index" class="px">
                  <div style="font-size: 12px">
                    <span
                      style="
                        color: #10e4e5;
                        font-size: 22px;
                        font-style: italic;
                      "
                    >
                      {{ item.sz }}</span>
                    {{ item.dw }}
                  </div>
                  <div>{{ item.db }}</div>
                </div>
                <min />
              </div>
            </div>
            <div id="mais" style="height: 550px"></div>
          </div>
          <!-- 左2 -->
          <div class="xpanel-wrapper xpanel-wrapper-60">
            <div class="xpanel xpanel-l-b">
              <div class="title">
                <div class="tite"><div class="jbs">商圈服务</div></div>
              </div>
              <div class="sbf">
                <div v-for="(item, index) in obje" :key="index" class="tda">
                  <div class="sizicolor">{{ item.nuba }}</div>
                  <div class="bjj">
                    <img :src="item.url" alt="">
                  </div>
                  <div>{{ item.mc }}</div>
                </div>
              </div>
              <div class="tda1">
                <div class="tad2">
                  <div v-for="(item, index) in dats" :key="index" class="bjjj">
                    <img :src="item.url" alt="">
                    <div class="re">
                      <div>{{ item.nuba }}</div>
                      <div>{{ item.dw }}</div>
                    </div>
                  </div>
                </div>
                <!-- <div id="main" style="height: 100%"></div> -->
                <div id="maine" style="height: 200px"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 中间区域 -->
        <div class="col col-c">
          <div class="xpanel-wrapper xpanel-wrapper-75">
            <div class="xpanel no-bg">
              <div class="gq">
                <div class="bgi">
                  <div class="ziti1">80</div>
                </div>
                <div class="bgi1">
                  <div class="ziti2">80</div>
                </div>
                <div class="bgi2">
                  <div class="ziti3">80</div>
                </div>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-25">
            <div class="xpanel xpanel-c-b">
              <div class="title title-long">
                <div class="tite"><div class="jbs">商圈党建666</div></div>
              </div>
              <div class="sqdj1">
                <div v-for="(item, index) in objet" :key="index" class="ddd">
                  <img :src="item.url" alt="">
                  <div class="re">
                    <div>{{ item.nuba }}</div>
                    <div>{{ item.mc }}</div>
                  </div>
                </div>
              </div>
              <div class="sqdj2">
                <div id="mainet" style="height: 250px; width: 400px"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右 -->
        <div class="col col-r">
          <div class="xpanel-wrapper xpanel-wrapper-65">
            <div id="he-plugin-simple" class="q1s sj"></div>
            <div class="xpanel xpanel-r-t">
              <div class="title">
                <div class="tite"><div class="jbs">商圈智治</div></div>
              </div>
              <div class="q1">
                <div v-for="(item, index) in objets" :key="index" class="ei">
                  <div>{{ item.data }}</div>
                  <div>{{ item.dz }}</div>
                </div>
              </div>
              <div class="q2">
                <div class="y2">
                  <div v-for="(item, index) in objs" :key="index" class="xx">
                    <img :src="item.url" alt="">
                    <div class="dsa">
                      <div>{{ item.nuba }}</div>
                      <div>{{ item.mc }}</div>
                    </div>
                  </div>
                </div>
                <div class="y3">
                  <div id="suib" style="height: 100%"></div>
                </div>
              </div>
              <div class="q3">
                <div id="sui" style="height: 100%"></div>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-45">
            <div class="xpanel xpanel-r-b">
              <div class="title">
                <div class="tite"><div class="jbs">实时视频</div></div>
                <div class="dad">
                  <div v-for="(item, index) in datas" :key="index" class="you">
                    <img :src="item.url" alt="">
                    <div>{{ item.nuba }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import min from './min.vue';
// import dayjs from "dayjs";
import * as echarts from 'echarts';

export default {
  components: {
    min
  },
  data() {
    return {
      dats: [
        {
          url: require('../image/tcsl.png'),
          nuba: 100,
          dw: '停车数量'
        },
        {
          url: require('../image/bwss.png'),
          nuba: 100,
          dw: '停车数量'
        },
        {
          url: require('../image/zzl.png'),
          nuba: 100,
          dw: '停车数量'
        },
        {
          url: require('../image/ydcs.png'),
          nuba: 100,
          dw: '停车数量'
        }
      ],
      clik: false, // 顶层点击
      datas: [
        {
          url: require('../image/qj.png'),
          nuba: 100
        },
        {
          url: require('../image/jt.png'),
          nuba: 100
        },
        {
          url: require('../image/bx.png'),
          nuba: 100
        },
        {
          url: require('../image/gc.png'),
          nuba: 100
        }
      ],
      objs: [
        {
          url: require('../image/jbl.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/csl.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/pjjbsj.png'),
          nuba: 100,
          mc: '用户'
        }
      ],
      objets: [
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '微网格'
        }
      ],
      objet: [
        {
          url: require('../image/dzb.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/sqdy.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/wmhy.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/lxhy.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/dagl.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/fw.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/jccs.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/fxwt.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/bjwt.png'),
          nuba: 100,
          mc: '用户'
        }
      ],
      obje: [
        {
          url: require('../image/yhs.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/fws.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/ysts.png'),
          nuba: 100,
          mc: '用户'
        },
        {
          url: require('../image/sp.png'),
          nuba: 100,
          mc: '用户'
        }
      ],
      obj: [
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        },
        {
          sz: '5.8',
          dw: 'ke2',
          db: '商场面积'
        }
      ],
      date: '',
      dates: '',
      datess: '',
      datesss: ''
    };
  },
  computed: {},
  watch: {},
  created() {},

  created() {
    // 页面固定
    (function(win) {
      var bodyStyle = document.createElement('style');
      bodyStyle.innerHTML = 'body{width:1920px; height:1080px!important;}';
      document.documentElement.firstElementChild.appendChild(bodyStyle);

      function refreshScale() {
        var docWidth = document.documentElement.clientWidth;
        var docHeight = document.documentElement.clientHeight;
        var designWidth = 1920,
          designHeight = 1080,
          widthRatio = docWidth / designWidth,
          heightRatio = docHeight / designHeight;
        document.body.style =
          'transform:scale(' +
          widthRatio +
          ',' +
          heightRatio +
          ');transform-origin:left top;'; // 应对浏览器全屏切换前后窗口因短暂滚动条问题出现未占满情况
        setTimeout(function() {
          var lateWidth = document.documentElement.clientWidth,
            lateHeight = document.documentElement.clientHeight;
          if (lateWidth === docWidth) return;

          widthRatio = lateWidth / designWidth;
          heightRatio = lateHeight / designHeight;
          document.body.style =
            'transform:scale(' +
            widthRatio +
            ',' +
            heightRatio +
            ');transform-origin:left top;';
        }, 500);
      }
      refreshScale();

      win.addEventListener(
        'pageshow',
        function(e) {
          if (e.persisted) {
            // 浏览器后退的时候重新计算
            refreshScale();
          }
        },
        false
      );
      win.addEventListener('resize', refreshScale, false);
    })(window);
  },
  mounted() {
    this.dataws();
    this.drawwss();
    this.drawws();
    this.draww();
    // this.draw();
    this.draws();
    const that = this;
    window.onresize = function() {
      if (!that.timer) {
        that.timer = true;
        setTimeout(function() {
          if (this.myChart) {
            this.myChart.resize();
          }
          that.timer = false;
        }, 400);
      }
    };
    // 天气
    window.WIDGET = {
      CONFIG: {
        modules: '01234',
        background: '5',
        tmpColor: 'FFFFFF',
        tmpSize: '16',
        cityColor: 'FFFFFF',
        citySize: '16',
        aqiColor: 'FFFFFF',
        aqiSize: '16',

        weatherIconSize: '24',
        alertIconSize: '18',
        shadow: '0',
        language: 'auto',
        fixed: 'false',
        vertical: 'top',
        horizontal: 'left',
        key: '635d3ada3c524fe6b0d18f9c1f4590e1'
      }
    };
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0';
    document.getElementsByTagName('head')[0].appendChild(script);
  },

  methods: {
    dataws() {
      // 时间
      console.log('22', 1);
      console.log('22222', this.$dayJs().format('-HH-mm-ss')); // 2022-05-07
      this.date = this.$dayJs().format('YYYY/MM/DD');
      this.dates = this.$dayJs().format('YYYY-MM-DD');
      this.datess = this.$dayJs().format('d');
      this.datesss = this.$dayJs().format('HH:mm:ss');
    },
    // 右2
    drawwss() {
      this.myChart = this.$echarts.init(document.getElementById('sui'));
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };
      this.myChart.setOption(option);
    },
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
            radius: [0, 100], // 中间空洞大小 和整体大小
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
                value: 40,
                name: 'rose 1',
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
                value: 33,
                name: 'rose 2',
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
                value: 28,
                name: 'rose 3',
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
                value: 22,
                name: 'rose 4',
                itemStyle: {
                  normal: {
                    color: '#27ba81'
                  }
                }
              },
              {
                value: 20,
                name: 'rose 5',
                itemStyle: {
                  normal: {
                    color: '#27b8ba'
                  }
                }
              },
              {
                value: 15,
                name: 'rose 6',
                itemStyle: {
                  normal: {
                    color: '#548deb'
                  }
                }
              },
              {
                value: 12,
                name: 'rose 7',
                itemStyle: {
                  normal: {
                    color: '#439aff'
                  }
                }
              },
              {
                value: 10,
                name: 'rose 8',
                itemStyle: {
                  normal: {
                    color: '#ff4a49'
                  }
                }
              }
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    // 左2线图
    draww() {
      this.myChart = this.$echarts.init(document.getElementById('maine'));
      const colors = ['#5470C6', '#EE6666'];
      var option = {
        grid: {
          top: '10%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#1e4660'
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
          splitLine: {
            show: true,
            lineStyle: {
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
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#091e3b' // 改变区域颜色
              }
            },
            data: [
              ['2019-10-10', 100],
              ['2019-10-11', 860],
              ['2019-10-12', 550],
              ['2019-10-13', 880],
              ['2019-10-14', 330],
              ['2019-10-15', 220],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },

    // 中下曲线图
    draws() {
      this.myChart = this.$echarts.init(document.getElementById('mainet'));
      var option = {
        grid: {
          bottom: '10%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#1e4660'
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
          splitLine: {
            show: true,
            lineStyle: {
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
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 0
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#7c77ca' // 改变区域颜色
              }
            },
            data: [
              ['2019-10-10', 100],
              ['2019-10-11', 860],
              ['2019-10-12', 550],
              ['2019-10-13', 880],
              ['2019-10-14', 330],
              ['2019-10-15', 220],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
            ]
          },
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 0
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#c861d4' // 改变区域颜色
              }
            },
            data: [
              ['2019-10-10', 200],
              ['2019-10-11', 160],
              ['2019-10-12', 450],
              ['2019-10-13', 780],
              ['2019-10-14', 390],
              ['2019-10-15', 220],
              ['2019-10-16', 850],
              ['2019-10-17', 300],
              ['2019-10-18', 800]
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
@import '../css/app.css';
</style>
<style scoped>
.xpanel {
  position: relative;
}
.jbs {
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.tite {
  position: relative;
  top: 15px;
  width: 232px;
  background: url('../image/sq.png') no-repeat center top;
  background-size: 100% 100%;
}
.title {
  height: 10%;
}

.ssx {
  margin-top: 20px;
  height: 40%;

  color: white;
  display: flex;
  flex-wrap: wrap;
}
.px {
  text-align: center;
  width: 25%;
  height: 35%;
  /* padding-top: 20px; */
  line-height: 25px;
  background: url('../image/scmj.png') no-repeat center top;
  background-size: 100% 100%;
}
.sbf {
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* line-height: 30px; */
  margin: 30px 0;
}
.tda {
  width: 15%;
  text-align: center;
  color: white;
}
.tda1 {
  height: 35%;
}
.tda2 {
  height: 25%;
}
.tda > img {
  width: 100%;
  height: 100%;
}
.bjj {
  background: url('../image/yh.png') no-repeat center top;
  background-size: 100% 100%;
  height: 50px;
}
.sqdj1 {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  width: 40%;
  float: left;
  /*  */
  justify-content: space-around;
  align-content: space-around;
}
.sqdj2 {
  height: 100%;
  width: 60%;
  float: right;
  /*  */
}
.ddd {
  width: 26%;
}
.re {
  float: right;
  color: white;
}
.q1 {
  height: 20%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.q2 {
  height: 35%;
}
.q3 {
  height: 35%;
}
.ei {
  text-align: center;
  width: 25%;
  height: 50%;
  /* line-height: 45px; */
  background-size: 100% 100%;
  color: white;
  background: url('../image/wwg.png') no-repeat center top;
}
.y2 {
  width: 30%;
  height: 100%;
  float: left;
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.y3 {
  width: 70%;
  height: 100%;
  float: left;
  /*  */
}
.xx {
  height: 20%;
  width: 60%;
  color: white;
}
.xx > img {
  height: 100%;
}
.dsa {
  float: right;
}
.you {
  float: right;
  text-align: center;
  margin-top: -30px;
  margin-right: 15px;
  line-height: 25px;
}
.dad {
  margin-right: 15px;
}
.fudon {
  height: 80%;
  margin-left: 40px;
  width: 200px;
  float: left;
  font-size: 28px;
  color: white;
  text-align: center;
  background: url('../image/jsc1.png') no-repeat center top;
  background-size: 120% 120%;
}
.fudong {
  height: 80%;
  /* margin-left: 40px; */
  width: 200px;

  float: left;
  font-size: 28px;
  color: white;
  text-align: center;
  background: url('../image/topbj.png') no-repeat center top;
  background-size: 120% 120%;
}
.fudong2 {
  height: 80%;
  /* margin-right: 40px; */
  width: 200px;

  float: right;
  font-size: 28px;
  color: white;
  text-align: center;
  background: url('../image/topbj.png') no-repeat center top;
  background-size: 120% 120%;
}
.headers {
  height: 80%;
  height: 70px;
  width: 1920px;
  background: url('../image/top.png') no-repeat center;
  background-size: 100% 100%;
  font-size: 28px;
  color: white;
  text-align: center;
}
.gq {
  position: absolute;
  top: 50px;
  width: 100%;
  height: 108px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  font-size: 52px;
  text-align: center;
}
.bgi {
  height: 100%;
  width: 124px;
  background: url('../image/sqhyd.png') no-repeat center;
  background-size: 100% 100%;
}
.bgi1 {
  height: 100%;
  width: 124px;
  background: url('../image/sqssd.png') no-repeat center;
  background-size: 100% 100%;
  margin: 0 50px;
}
.bgi2 {
  height: 100%;
  width: 124px;
  background: url('../image/zlzd.png') no-repeat center;
  background-size: 100% 100%;
}
.ziti1 {
  background: linear-gradient(
    0deg,
    #ffffff 0.1220703125%,
    rgba(223, 152, 254, 0.82) 25.67578125%,
    rgba(255, 255, 255) 41.4794921875%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.ziti2 {
  background: linear-gradient(
    0deg,
    #ffffff 0.1220703125%,
    rgba(244, 251, 131, 0.82) 25.67578125%,
    rgba(255, 255, 255) 41.4794921875%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.ziti3 {
  background: linear-gradient(
    0deg,
    #ffffff 0.1220703125%,
    rgba(136, 241, 233, 0.82) 25.67578125%,
    rgba(255, 255, 255) 41.4794921875%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.tad2 {
  margin: 30px 0;
  height: 30%;
  display: flex;
  color: #ffffff;
  justify-content: space-around;
}
.bjjj {
  height: 100%;
}
.sizicolor {
  color: #26f5f5ff;
  font-size: 30px;
  font-weight: 600;
}
.fds {
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 19px;
}
.sj {
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.sjs {
  margin: 0 15px 0 3px;
  height: 13px;
  color: white;
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.q1s {
  height: 5%;
}
</style>
