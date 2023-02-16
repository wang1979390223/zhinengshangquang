<template>
  <div class="bg">
    <div class="title"><span class="title_tip">诱导服务</span></div>
    <div style="display: flex">
      <div class="center3">
        <!-- <div
          id="maine_center3"
          style="height: 210px;margin-top: 78px;margin-left:49px ;"
        ></div> -->
        <zhexiantu2
          style="height: 210px; margin-top: 78px; margin-left: 49px"
        ></zhexiantu2>
        <p class="maine_name2">车位诱导服务</p>
      </div>
      <div class="center_bottom">
        <div id="maine_center" style="height: ">
          <ul style="cursor: pointer">
            <li v-for="item in items" :key="item.id" @click="showTC(item)">
              <div class="img">
                <p class="num">{{ item.num }}</p>
                <p :class="['name', { num2: item.name == zpzzName }]">
                  {{ item.name }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <showTC :show-dialog.sync="showDialog" @closed="close"></showTC>
  </div>
</template>

<script>
// import { stopApi } from '@/api/sqfw.js';
import { kllApi } from '../../../api/kll';
import showTC from '@/components/dialogTC';
import zhexiantu2 from './components/zhexiantu2.vue';
export default {
  components: {
    showTC,
    zhexiantu2
  },
  data() {
    return {
      showDialog: false, // 控制弹窗
      zpzzName: '', // 弹窗传输的值
      items: [
        { num: '--', name: '停车场数量', id: 1 },
        { num: '--', name: '泊位数', id: 2 },
        { num: '44', name: '诱导次数', id: 3 },
        { num: '--', name: '当前空闲车位', id: 4 },
        { num: '--', name: '日间平均空余量', id: 5 },
        { num: '555', name: '高峰时段饱和度', id: 6 }
      ]
    };
  },
  created() {
    this.stop();
  },
  mounted() {
    this.draww3();
    this.stop();
  },
  methods: {
    async stop() {
      const res = await kllApi();
      console.log(res);
      this.tc = res;
      this.$set(this.items[0], 'num', res.tc.tccsl);
      this.$set(this.items[1], 'num', res.tc.bws);
      this.$set(this.items[3], 'num', res.tc.dqkxct);
      this.$set(this.items[4], 'num', res.tc.rjpjkyl);

      console.log(res);
    },
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
          top: '15%',
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
                color: 'rgba(255,255,255,1)',
                fontSize: 12
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
                color: 'rgba(48, 49, 51, 0.44)',
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
            data: ['50', '75', '80', '60', '75', '50', '85']
          }
        ]
      };

      this.myChart.setOption(option);
    },
    showTC(item) {
      this.zpzzName = item.name;
      this.showDialog = true;
    },
    close() {
      this.zpzzName = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-left: 19px;
  width: 232px;
  height: 40px;
  position: absolute;
  top: 20px;
  // right: 231px;
  // bottom: 587px;
  left: 15px;
  line-height: 30px;
  background: url(../../../assets/images/fw/title_bg_238.png) no-repeat left top /
    100% 100%;
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
.center3 {
  width: 706px;
  // width: 770px;
  height: 240px;
  // margin: 16px auto 0;
  // margin-bottom: 0;
  // background: rgb(179, 179, 179);

  .maine_name2 {
    margin-left: 52px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #26f5f5;
  }
}
.center_bottom {
  width: 444px;
  // width: 770px;
  // height: 346px;
  margin: 0px auto 0;
  // background: rgb(179, 179, 179);
  #maine_center {
    ul {
      margin-top: 30px;
      li {
        width: 130px;
        height: 110px;
        float: left;
        position: relative;
        margin-bottom: 33px;
        &:nth-child(2),
        &:nth-child(5) {
          margin-left: 25px;
          margin-right: 25px;
        }
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          margin-bottom: 0px;
        }
        .img {
          width: 86px;
          height: 86px;
          display: block;
          margin: 6px auto 0;
          background: url(../../../assets/images/fw/right_bottom_bg.png)
            no-repeat left top / 100% 100%;

          .num {
            position: absolute;
            top: 0px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 28px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #10e4e6;
            line-height: 36px;
          }

          .name {
            width: 130px;
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 500;
            color: #ffffff;
            line-height: 18px;
          }
          .name:hover {
            color: #c99d41;
          }
          .num2 {
            width: 130px;
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 500;
            color: #c99d41;
            line-height: 18px;
          }
        }
      }
      // li:hover .img {
      //     animation: mzfw 1.5s;
      //   }
    }
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
</style>
