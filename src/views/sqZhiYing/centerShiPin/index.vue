<!-- 资源调取 -->
<template>
  <div class="container">
    <div class="title"><span class="title_tip">食品</span></div>
    <div class="left">
      <div id="maine" style="height: 100%"></div>
      <p class="bottom_title">餐厨垃圾清理</p>
    </div>
    <div class="right_right">
      <p class="right_right_title">阳光厨房</p>
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
              <div>{{ v.eventName }}</div>
              <div>{{ v.shopName }}</div>
              <div>{{ v.status }}</div>
              <div style="width: 40%;">{{ v.time }}</div>
              <div>{{ v.num }}</div>
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
      list: ['事件名称', '店名', '状态', '时间', '编号'],
      cllData: [
        {
          eventName: '未戴口罩',
          shopName: '恒大',
          status: '办结',
          time: '2022-11-12 14:46:25',
          num: 10001
        },
        {
          eventName: '未戴口罩',
          shopName: '恒大',
          status: '报警',
          time: '2022-11-12 14:46:25',
          num: 20001
        },
        {
          eventName: '未戴口罩',
          shopName: '恒大',
          status: '处置中',
          time: '2022-11-12 14:46:25',
          num: 30001
        },
        {
          eventName: '未戴口罩',
          shopName: '恒大',
          status: '办结',
          time: '2022-11-12 14:46:25',
          num: 40001
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
      this.myChart = this.$echarts.init(document.getElementById('maine'));
      const formatBytes = function(bytes) {
        console.log(bytes);
        if (bytes === null || bytes === undefined) {
          return '-';
        }
        bytes = parseInt(bytes);
        if (isNaN(bytes)) {
          return '-';
        }
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (parseFloat(bytes) / Math.pow(k, i)).toFixed(2) + '' + sizes[i];
      };

      const seriesData = [
        { name: '第一百货', value: 10 },
        { name: '恒大百货', value: 20 },
        { name: '永盛购物广场', value: 30 },
        { name: '金华大世界', value: 40 },
        { name: '中华广场', value: 20 },
        { name: '金茂', value: 30 },
        { name: '金厦帝壹城', value: 10 },
        { name: '唯糖', value: 30 },
        { name: '银泰城', value: 30 }
      ];

      const colors = [
        {
          color: 'rgba(0,107,255,1)',
          start: 'rgba(0,107,255,0.75)',
          end: 'rgba(0,107,255,0.25)'
        },
        {
          color: 'rgba(121,72,255,1)',
          start: 'rgba(121,72,255,0.75)',
          end: 'rgba(121,72,255,0.25)'
        },
        {
          color: 'rgba(176,53,220,1)',
          start: 'rgba(176,53,220,0.75)',
          end: 'rgba(176,53,220,0.25)'
        },
        {
          color: 'rgba(255,100,121,1)',
          start: 'rgba(255,100,121,0.75)',
          end: 'rgba(255,100,121,0.25)'
        },
        {
          color: 'rgba(255,203,61,1)',
          start: 'rgba(255,203,61,0.75)',
          end: 'rgba(255,203,61,0.25)'
        },
        {
          color: 'rgba(0,188,163,1)',
          start: 'rgba(0,188,163,0.75)',
          end: 'rgba(0,188,163,0.25)'
        },
        {
          color: 'rgba(42,170,255,1)',
          start: 'rgba(42,170,255,0.75)',
          end: 'rgba(42,170,255,0.25)'
        },
        {
          color: 'rgba(195,195,225,1)',
          start: 'rgba(195,195,225,0.75)',
          end: 'rgba(195,195,225,0.25)'
        }
      ];
      seriesData.forEach((it, idx) => {
        it.value = it.value;
        it.itemStyle = {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#F5BD75' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#D97684' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 falseÏ
          }
        };
      });
      var option = {
        // backgroundColor: "#002251",
        grid: {
          top: 35,
          right: 50,
          bottom: 75,
          left: 50
        },

        tooltip: {
          trigger: 'axis',
          formatter: function(series) {
            return `${series[0].data.name}:${formatBytes(
              series[0].data.value
            )}`;
          },
          textStyle: {
            color: '#ffffff'
          },
          backgroundColor: 'rgba(0, 34, 81, 0.85)'
        },
        xAxis: {
          type: 'category',
          data: seriesData.map(it => it.name),
          axisTick: {
            alignWithLabel: true,
            show: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              show: true,
              color: '#C7C7E5', // 更改坐标轴文字颜色
              fontSize: 14 // 更改坐标轴文字大小
            }
          },
          axisLine: {
            show: false
            // lineStyle: {
            //   color: "#ffffff" //更改坐标轴颜色
            // }
          }
        },
        yAxis: {
          type: 'value',
          name: 'kg',
          axisTick: {
            show: true,
            alignWithLabel: true
          },
          axisLabel: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.20)'
            }
          }
        },
        series: [
          {
            type: 'bar',
            data: seriesData,
            barWidth: 24,
            label: {
              normal: {
                show: false,
                position: 'top',
                fontSize: 16,
                color: '#fff',
                offset: [2, -10],
                formatter: function(series) {
                  return formatBytes(series.data.value);
                }
              }
            }
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
  .left {
    width: 615px;
    height: 245px;
    position: absolute;
    top: 67px;
    right: 170px;
    bottom: 587px;
    left: 21px;
    // background: #eee;
    .bottom_title {
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #26f5f5;
      margin-top: -25px;
    }
  }
  .right_right {
    width: 564px;
    height: 256px;
    position: absolute;
    top: 44px;
    right: 72px;
    bottom: 19px;
    left: 739px;
    .right_right_title {
      color: #26f5f5;
      font-size: 16px;
      text-align: center;
    }
    .scroll-v {
      width: 100%;
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
          background: #811823;
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
        &:nth-child(4) {
          width: 40%;
        }
      }
    }
  }
}
</style>
