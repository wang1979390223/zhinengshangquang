<!-- 家政大屏 -->
<template>
  <div class="main">
    <div class="header_nav">
      <div class="header_nav_list">
        <ul>
          <li class="header_nav_list_li" @click="$router.push('/souye')">
            <!-- 驾驶舱 -->驾驶舱
          </li>
          <li class="header_nav_list_li" @click="$router.push('/wisdomcamp')">
            <!-- 商圈智营 -->商圈智营
          </li>
          <li class="header_nav_list_li" @click="$router.push('/sqZhiYing')">
            商圈智治
          </li>
          <li class="header_nav_list_li_title">西市街智慧商圈数字应用</li>
          <li class="header_nav_list_li">
            商圈党建
          </li>
          <li class="header_nav_list_li" @click="$router.push('/sqFuWu')">
            商圈服务
          </li>
          <li class="header_nav_list_li_user">
            <img
              class="leftJT"
              src="../../assets/images/head_nav_leftJT.png"
              alt=""
              srcset=""
            >
            <img
              class="user"
              src="../../assets/images/user.png"
              alt=""
              srcset=""
            >
            <span class="name">姜安南</span>
            <img
              class="rightJT"
              src="../../assets/images/head_nav_rightJT.png"
              alt=""
              srcset=""
            >
          </li>
        </ul>
      </div>
      <div class="header_nav_time">
        <div class="date_left">{{ dateTime }}</div>
        <div class="date_left2">{{ dateTime2 }}</div>
        <div class="date_right">
          <!-- <span style="margin-right: 10px">{{ weather }}</span>
          <span>{{ temperature }}</span> -->
          <div class="q2s">
            <div id="he-plugin-simple"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 左一 -->
    <leftTop ref="lefttop" class="leftTop" @showdialog="showTc"></leftTop>
    <!-- 左二 -->
    <leftBottom class="leftBottom" @showdialog="showTc"></leftBottom>
    <!-- 中间 -->
    <center
      ref="center"
      class="center"
      @showdialog="showTc"
      @showdialog2="showTc2"
    ></center>
    <!-- 右一 -->
    <rightTop class="rightTop" @showdialog="showTc"></rightTop>
    <!-- 右二 -->
    <rightCenter class="rightCenter" @showdialog="showTc"></rightCenter>
    <!-- 右三 -->
    <rightBottom class="rightBottom" @showdialog="showTc"></rightBottom>
    <!-- 弹窗组件 -->
    <dialogTC :show-dialog.sync="showDialog" @closed="close"></dialogTC>
    <!-- 弹窗组件2 -->
    <dialogTC2 :show-dialog2.sync="showDialog2" @closed2="close2"></dialogTC2>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import leftTop from './leftTop/index.vue';
import leftBottom from './leftBottom/index.vue';
import center from './center/index.vue';
import rightTop from './rightTop/index.vue';
import rightCenter from './rightCenter/index.vue';
import rightBottom from './rightBottom/index.vue';
import dialogTC from '@/components/dialogTC/index.vue';
import dialogTC2 from '@/components/dialogTC2';

export default {
  name: 'ServiceSupermarket',
  components: {
    dialogTC,
    dialogTC2,
    leftTop,
    leftBottom,
    center,
    rightTop,
    rightCenter,
    rightBottom
  },
  data() {
    return {
      showDialog2: false,
      showDialog: false,
      showComponents: 'leftBottom',
      weather: '',
      temperature: '',
      dateTime: '',
      dateTime2: '',
      timer: null,
      navLeftList: [
        { name: '驾驶舱', bgImage: '' },
        { name: '商圈智营', bgImage: '' },
        { name: '商圈智治', bgImage: '' }
      ],
      navRightList: [
        { name: '商圈党建', bgImage: '' },
        { name: '商圈服务', bgImage: '' }
      ]
    };
  },
  mounted() {
    this.initMap();
    // 天气
    window.WIDGET = {
      CONFIG: {
        modules: '01234',
        background: '5',
        tmpColor: 'red',
        tmpSize: '22',
        cityColor: 'FFFFFF',
        citySize: '22',
        aqiColor: 'FFFFFF',
        aqiSize: '22',

        weatherIconSize: '24',
        alertIconSize: '22',
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
  created() {
    // AMap.plugin('AMap.Weather', () => {
    //   // 创建天气查询实例
    //   const weather = new AMap.Weather();
    //   // 执行实时天气信息查询
    //   weather.getLive('婺城区', (err, data) => {
    //     if (!err) {
    //       console.log(data);
    //       this.weather = data.weather;
    //       this.temperature = data.temperature;
    //     }
    //   });
    // });
    // 设置时间
    this.dateTime = this.parseTime(new Date(), '{y}-{m}-{d} 星期{a}');
    this.dateTime2 = this.parseTime(new Date(), ' {h}:{i}:{s}');
    this.timer = setInterval(() => {
      this.dateTime2 = this.parseTime(new Date(), ' {h}:{i}:{s}');
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: 'd9c229436ee335caafc4a7cd36da2283', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Weather'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then(AMap => {
          const amapWeather = new AMap.Weather();
          amapWeather.getForecast('金华市', (err, data) => {
            if (err) {
              this.weather = '天气查询失败';
            } else {
              // console.log(data);
              const {
                nightWeather,
                dayWeather,
                dayTemp,
                nightTemp
              } = data.forecasts[0];
              if (nightWeather === dayWeather) {
                this.weather = nightWeather;
              } else if (/-/.test(nightWeather) || /-/.test(dayWeather)) {
                this.weather = /-/.test(nightWeather)
                  ? nightWeather
                  : dayWeather;
              } else {
                this.weather = nightWeather + '~' + dayWeather;
              }

              if (nightTemp === dayTemp) {
                this.temperature = nightTemp;
              } else {
                this.temperature = nightTemp + '~' + dayTemp + '℃';
              }
              // this.temperature = `${data.temperature}℃`
            }
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    getDateTime() {
      const nDate = new Date();
      this.date = this.parseTime(nDate, '{y}年{m}月{d}日');
      this.dataTime = this.parseTime(nDate, '{h}:{i}:{s}');
      this.week = this.parseTime(nDate, '星期{a}');
      if (this.dataTime === '00:00:00') {
        this.initMap();
      }
    },
    show(name) {
      this.showComponents = name;
      console.log(name);
    },
    showTc() {
      this.showDialog = true;
    },
    showTc2() {
      this.showDialog2 = true;
    },
    close() {
      this.$refs.lefttop.showid = '';
      this.$refs.center.showName = '';
    },
    close2() {
      this.$refs.center.showName = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 1920px;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #0e2940;
  .header_nav {
    width: 1920px;
    height: 112px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(../../assets/images/head_bg.png) no-repeat;
    .header_nav_list {
      height: 77.6px;
      margin: 0 15px;
      // background-color: rgb(131, 131, 131);
      .header_nav_list_li {
        width: 242.8px;
        height: 77.6px;
        background: url(../../assets/images/head_nav_left.png) no-repeat left
          top / 100% 100%;
        float: left;
        text-align: center;
        line-height: 77.6px;
        font-size: 26px;
        color: #fff;
        font-weight: 400;
        margin-right: -21.8px;
        padding-top: 10px;
        cursor: pointer;
        &:nth-child(5) {
          color: #c99d41;
          background: url(../../assets/images/head_nav_right_active.png)
            no-repeat left top / 100% 100%;
        }
        &:nth-child(6) {
  
          background: url(../../assets/images/head_nav_right.png) no-repeat left
            top / 100% 100%;
        }
      }
      .header_nav_list_li_title {
        width: 533.2px;
        height: 77.6px;
        color: #fff;
        font-size: 34px;
        font-weight: 600;
        text-align: center;
        line-height: 77.6px;
        margin-left: 15.8px;
        float: left;
      }
      .header_nav_list_li_user {
        width: 205px;
        height: 77.6px;
        float: left;
        padding-top: 17px;
        // margin-left: 30px;
        margin-right: 0px;
        margin-left: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .leftJT {
          width: 37px;
          height: 55px;
        }
        .user {
          width: 44px;
          height: 44px;
        }
        .name {
          color: #b6ddff;
          font-size: 18px;
        }
        .rightJT {
          width: 37px;
          height: 55px;
        }
      }
    }
    .header_nav_time {
      height: 34.4px;
      margin: 0 15px;
      background-image: linear-gradient(
        to top,
        #34cdff,
        #ffffff
      ); /* 线性渐变背景，方向向上 */
      -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
      // -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
      // background-color: rgb(238, 189, 189);
      display: flex;
      justify-content: space-between;
      // .date_left,
      .date_right {
        width: 50%;
      }
      .date_left {
        padding-left: 20px;
        font-size: 22px;
        -webkit-text-fill-color: transparent;
      }
      .date_left2 {
        margin-left: -556px;
        font-size: 22px;
        -webkit-text-fill-color: transparent;
      }
      ::v-deep .s-sticker-tmp {
        color: #fff;
      }
      .q2s {
        position: absolute;
        left: 1692px;
        bottom: 10px;
      }
      .date_right {
        text-align: right;
        padding-right: 15px;
      }
    }
  }
  .but {
    width: 636px;
    height: 89px;
    position: absolute;
    top: 668px;
    bottom: 323px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    background: url(../../assets/images/center/btn_bg.png) no-repeat left top /
      100% 100%;
    ul {
      position: absolute;
      top: 19px;
      left: 80px;
      margin: auto;
      li {
        width: 134px;
        float: left;
        cursor: pointer;
        .img {
          width: 52px;
          height: 52px;
          float: left;
          .border {
            width: 40px;
            height: 40px;
            margin-top: 6px;
            border-radius: 50%;
            border: 2px solid #298dd4;
            display: flex;
            background: #0e4b8a;
            box-shadow: 4px 0px 40px #298dd4;
            img {
              margin: auto;
            }
          }
        }
        .name {
          float: left;
          font-size: 22px;
          color: #fff;
          line-height: 52px;
        }
      }
    }
  }
  .leftTop {
    width: 485px;
    height: 496px;
    position: absolute;
    top: 94px;
    left: 25px;
    right: 1409px;
    bottom: 329px;
    background: url(../../assets/images/left_bg.png) no-repeat left top / 100%
      100%;
  }
  .leftBottom {
    width: 485px;
    height: 481px;
    position: absolute;
    top: 586px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .centerXiaoFang {
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .centerZhiAn {
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .centerHuanJing {
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .centerShiPin {
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .center {
    width: 900px;
    height: 975px;
    position: absolute;
    top: 93px;
    left: 513px;
    right: 521px;
    bottom: 16px;
    background: url('../../assets/images/image/边框(3).png') no-repeat left top /
      100% 100%;
  }
  .rightTop {
    width: 486px;
    height: 325px;
    position: absolute;
    top: 96px;
    left: 1420px;
    right: 25px;
    bottom: 253px;
    background: url(../../assets/images/right_top.png) no-repeat left top / 100%
      100%;
  }
  .rightCenter {
    width: 486px;
    height: 325px;
    position: absolute;
    top: 418px;
    left: 1420px;
    right: 25px;
    bottom: 253px;
    background: url(../../assets/images/right_top.png) no-repeat left top / 100%
      100%;
  }
  .rightBottom {
    width: 486px;
    height: 325px;
    position: absolute;
    top: 740px;
    left: 1420px;
    right: 25px;
    bottom: 16px;
    background: url(../../assets/images/right_bottom.png) no-repeat left top /
      100% 100%;
  }
}
</style>
