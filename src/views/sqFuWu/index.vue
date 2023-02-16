<!-- 家政大屏 -->
<template>
  <div class="main5">
    <iframe
      src="https://www.coveycity.com:444/ccdt/index.html"
      frameborder="0"
      width="99%"
      height="99%"
      scrolling="no"
    ></iframe>
    <div class="bodybg_top"></div>
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
          <li class="header_nav_list_li" @click="$router.push('/sqDangJian')">
            商圈党建
          </li>
          <li class="header_nav_list_li">商圈服务</li>
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
        <div class="date_left">
          {{ dateTime }}
        </div>
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
    <div :class="[, { 'shugaoBox': showicon == true }]"></div>
    <div class="shugao">
      <div class="weip">
        <div class="niang">
          <img src="../../image/diyi.png" alt="" @click="showIcon">
        </div>
        <p class="youfud"></p>
      </div>
      <template v-if="showicon">
        <div class="weip">
          <div class="nianga"><img src="../../image/dier.png" alt=""></div>
          <p class="youfud">
            商场
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/disan.png" alt=""></div>
          <p class="youfud">
            商户
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/disi.png" alt=""></div>
          <p class="youfud">
            消防
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/diwu.png" alt=""></div>
          <p class="youfud">
            停车场
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/diliu.png" alt=""></div>
          <p class="youfud">
            汽车
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/diqi.png" alt=""></div>
          <p class="youfud">
            摩托车
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/diba.png" alt=""></div>
          <p class="youfud">
            电动车
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
        <div class="weip">
          <div class="nianga"><img src="../../image/dijiu.png" alt=""></div>
          <p class="youfud">
            执法记录仪
            <el-checkbox class="weip_checkbox"></el-checkbox>
          </p>
        </div>
      </template>
    </div>
    <!-- 左一 -->
    <leftTop ref="lefttop" class="leftTop" @showdialog="showTc"></leftTop>
    <!-- 左二 -->
    <leftCenter
      ref="leftcenter"
      class="leftCenter"
      @showdialog="showTc"
    ></leftCenter>
    <!-- 左三 -->
    <leftBottom class="leftBottom" @showdialog="showTc"></leftBottom>
    <!-- 左四 -->
    <leftFooter class="leftFooter" @showdialog="showTc"></leftFooter>
    <!-- 中间 -->
    <center class="center" @showdialog="showTc"></center>
    <!-- 中间底部 -->
    <center_bottom class="center_bottom"></center_bottom>
    <!-- 右一 -->
    <rightTop ref="right" class="rightTop" @showdialog="showTc"></rightTop>
    <!-- 弹窗组件 -->
    <dialogTC :show-dialog.sync="showDialog" @closed="close"></dialogTC>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import leftTop from './leftTop/index.vue';
import leftCenter from './leftCenter/index.vue';
import leftBottom from './leftBottom/index.vue';
import leftFooter from './leftFooter/index.vue';
import center from './centers/index.vue';
import rightTop from './rightTop/index.vue';
import dialogTC from '@/components/dialogTC/index.vue';
import center_bottom from './center_bottom/center_bottom.vue';

export default {
  name: 'ServiceSupermarket',
  components: {
    dialogTC,
    rightTop,
    leftTop,
    leftCenter,
    leftBottom,
    leftFooter,
    center,
    center_bottom
  },
  data() {
    return {
      showicon: false,
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
    this.dateTime = this.parseTime(new Date(), '{y}-{m}-{d} 星期{a} ');
    this.dateTime2 = this.parseTime(new Date(), ' {h}:{i}:{s}');
    this.timer = setInterval(() => {
      this.dateTime2 = this.parseTime(new Date(), '{h}:{i}:{s}');
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
    close() {
      this.$refs.right.showid = '';
      (this.$refs.lefttop.showid = ''), (this.$refs.leftcenter.showid = '');
    },
    showTc() {
      this.showDialog = true;
    },
    showIcon() {
      this.showicon = !this.showicon;
    }
  }
};
</script>

<style lang="scss" scoped>
.main5 {
  position: relative;
  width: 1920px;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #0e2940;
  .bodybg_top {
    width: 1920px;
    height: 78px;
    position: absolute;
    top: -1px;
    background: url('../../image/sqzzbg2.png') no-repeat left top / 100% 100%;
    z-index: 0;
  }
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
        &:nth-child(6) {
          color: #c99d41;
          background: url(../../assets/images/head_nav_left_active.png)
            no-repeat left top / 100% 100%;
        }
        &:nth-child(5) {
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
      .q2s {
        position: absolute;
        left: 1689px;
        bottom: 5px;
      }
      ::v-deep .s-sticker-tmp {
        color: #fff;
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
      .date_right {
        text-align: right;
        padding-right: 15px;
      }
      ::v-deep {
        color: #fff;
      }
    }
  }

  .shugao {
    /* height: 408px; */
    width: 145px;
    /* border: 1px solid red; */
    position: absolute;
    left: 530px;
    top: 208px;
    z-index: 1;
  }
  .shugaoBox {
    position: absolute;
    top: 200px;
    left: 522px;
    width: 166px;
    height: 432px;
    background: rgba(22, 57, 87, 0.88);
  }
  .shugaoBox2 {
    position: absolute;
    top: 200px;
    left: 522px;
    width: 166px;
    height: 71px;
    background: rgba(22, 57, 87, 0.88);
  }
  .niang {
    width: 56px;
    height: 56px;
    float: left;
  }
  .niang > img {
    width: 100%;
    height: 100%;
  }
  .nianga {
    width: 44px;
    height: 44px;
    float: left;
    /* margin: 10px 10px; */
    margin-right: 5px;
  }
  .nianga > img {
    width: 100%;
    height: 100%;
    margin-left: 4px;
  }
  .youfud {
    /* float: right; */
    color: white;
    font-size: 14px;
    text-align: left;
    width: 120px;
  }
  .weip {
    cursor: pointer;
    width: 100%;
    float: right;
    line-height: 44px;
    /* margin-top: 10px; */
    .weip_checkbox {
      position: absolute;
      right: 0px;
    }
    ::v-deep.el-checkbox__inner {
      background-color: #0f3956;
    }
    ::v-deep.el-checkbox__inner::after {
      // border: 1px solid #EEBA5F;
      border: 1px solid #eeba5f;
      border-left: 0;
      border-top: 0;
    }
  }
  .weip > .di {
    line-height: 55px;
    color: white;
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
    height: 172px;
    position: absolute;
    top: 101px;
    left: 25px;
    right: 1409px;
    bottom: 329px;
    background: url(../../assets/images/left_bg.png) no-repeat left top / 100%
      100%;
  }
  .leftBottom {
    width: 485px;
    height: 311px;
    position: absolute;
    top: 496px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .leftCenter {
    width: 485px;
    height: 215px;
    position: absolute;
    top: 279px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_center.png) no-repeat left top /
      100% 100%;
  }
  .leftFooter {
    width: 485px;
    height: 253px;
    position: absolute;
    top: 810px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
  }
  .center {
    width: 895px;
    height: 91px;
    position: absolute;
    top: 50px;
    left: 513px;
    right: 521px;
    bottom: 16px;
    // background: url('../../assets/images/image/center_bottom.png') no-repeat left top /
    //   100% 100%;
  }
  .center_bottom {
    position: absolute;
    top: 745px;
    left: 523px;
    width: 1378px;
    height: 319px;
    background: url('../../assets/images/image/center_bottom.png') no-repeat
      left top;
  }
  .rightTop {
    width: 486px;
    height: 652px;
    position: absolute;
    top: 93px;
    left: 1420px;
    right: 25px;
    bottom: 253px;
    background: url(../../assets/images/right_top.png) no-repeat left top / 100%
      100%;
  }
}
</style>
