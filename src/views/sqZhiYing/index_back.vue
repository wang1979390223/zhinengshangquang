<!-- 家政大屏 -->
<template>
  <div class="main">
    <iframe
      id="mapIframe"
      src="https://www.coveycity.com:444/ccdt/index.html"
      frameborder="0"
      width="100%"
      height="99%"
      scrolling="no"
    ></iframe>
    <!-- <button
      v-trigger
      style="width:200px;height:200px"
      @click="handleClick"
    ></button> -->

    <div class="bodybg_right"></div>
    <div class="bodybg_bottom"></div>
    <div class="bodybg_left"></div>
    <div class="bodybg_top"></div>
    <!-- <div class="bodybg_bottom"></div> -->
    <div class="header_nav">
      <div class="header_nav_list">
        <ul>
          <li class="header_nav_list_li" @click="$router.push('/')">
            <!-- 驾驶舱 -->驾驶舱
          </li>
          <li class="header_nav_list_li" @click="$router.push('/wisdomcamp')">
            <!-- 商圈智营 -->商圈智营
          </li>
          <li class="header_nav_list_li">商圈智治</li>
          <li class="header_nav_list_li_title">西市街智慧商圈数字应用</li>
          <li class="header_nav_list_li" @click="$router.push('/sqDangJian')">
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
            <span class="name">张三</span>
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
          <!-- <span style="margin-right: 10px">{{ weather }}</span> -->
          <!-- <span>{{ temperature }}</span> -->
          <div class="q2s">
            <div id="he-plugin-simple"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="but">
      <ul>
        <li @click="show('centerXiaoFang')">
          <div class="img">
            <div class="border">
              <img
                v-if="showComponents == 'centerXiaoFang'"
                src="../../assets/images/center/xiaofang2.png"
                alt=""
              >
              <img
                v-else
                src="../../assets/images/center/a.png"
                alt=""
                srcset=""
              >
            </div>
          </div>
          <div
            v-if="showComponents == 'centerXiaoFang'"
            class="name"
            style="color: #26f5f5;"
          >
            消防
          </div>
          <div v-else class="name">消防</div>
        </li>
        <li @click="show('centerZhiAn')">
          <div class="img">
            <div class="border">
              <img
                v-if="showComponents == 'centerZhiAn'"
                src="../../assets/images/center/zhian2.png"
                alt=""
                srcset=""
              >
              <img
                v-else
                src="../../assets/images/center/2.png"
                alt=""
                srcset=""
              >
            </div>
          </div>
          <div
            v-if="showComponents == 'centerZhiAn'"
            class="name"
            style="color: #26f5f5"
          >
            治安
          </div>
          <div v-else class="name">治安</div>
        </li>
        <li @click="show('centerHuanJing')">
          <div class="img">
            <div class="border">
              <img
                v-if="showComponents == 'centerHuanJing'"
                src="../../assets/images/center/huanjing2.png"
                alt=""
                srcset=""
              >
              <img
                v-else
                src="../../assets/images/center/3.png"
                alt=""
                srcset=""
              >
            </div>
          </div>
          <div
            v-if="showComponents == 'centerHuanJing'"
            class="name"
            style="color: #26f5f5"
          >
            环境
          </div>
          <div v-else class="name">环境</div>
        </li>
        <li @click="show('centerShiPin')">
          <div class="img">
            <div class="border">
              <img
                v-if="showComponents == 'centerShiPin'"
                src="../../assets/images/center/shipin2.png"
                alt=""
                srcset=""
              >
              <img
                v-else
                src="../../assets/images/center/4.png"
                alt=""
                srcset=""
              >
            </div>
          </div>
          <div
            v-if="showComponents == 'centerShiPin'"
            class="name"
            style="color: #26f5f5"
          >
            食品
          </div>
          <div v-else class="name">食品</div>
        </li>
      </ul>
    </div>
    <leftTop ref="lefttop" class="leftTop" @showdialog="showTc"></leftTop>
    <leftBottom
      v-if="showComponents == 'leftBottom'"
      ref="leftbottom"
      class="leftBottom"
      @showdialog="showTc"
    ></leftBottom>
    <centerXiaoFang
      v-if="showComponents == 'centerXiaoFang'"
      class="centerXiaoFang"
      style="    box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
    ></centerXiaoFang>
    <centerZhiAn
      v-if="showComponents == 'centerZhiAn'"
      class="centerZhiAn"
      style="    box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
    ></centerZhiAn>
    <centerHuanJing
      v-if="showComponents == 'centerHuanJing'"
      class="centerHuanJing"
      style="    box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
    ></centerHuanJing>
    <centerShiPin
      v-if="showComponents == 'centerShiPin'"
      class="centerShiPin"
      style="    box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
    ></centerShiPin>
    <!-- <center class="center"></center> -->
    <rightBottom class="rightBottom"></rightBottom>
    <rightTop ref="righttop" class="rightTop" @showdialog="showTc"></rightTop>
    <!-- 弹窗组件 -->
    <dialogTC :show-dialog.sync="showDialog" @closed="close"></dialogTC>
    <!-- 地图上方标识 -->
    <div class="dituBS">
      <div class="tuceng">
        <div class="tuceng1" @click="showMapbs">
          <img style="width:56px;height:56px" src="../../image/diyi.png" alt="">
          <p :class="['tc', { tc2: showMapicon }]">图层</p>
        </div>
      </div>
      <template v-if="showMapicon">
        <div
          v-for="(item, index) in mapbiaoshiList"
          :key="index"
          class="tucengSon"
        >
          <div><img style="width:44px;height:44px" :src="item.url" alt=""></div>
          <p>{{ item.name }}</p>
        </div>
      </template>
    </div>
    <!-- 地图上方指数 -->
    <div class="zhishu">
      <ul>
        <li v-for="(item, index) in zhishuList" :key="index" @click="showTc">
          <div class="ziti">{{ item.num }}</div>
          <div class="ziti2">{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import headerVue from '../header.vue'
// import shixiangQingdan from "./shixiangQingdan";
// centerShiPin
import leftTop from './leftTop';
import leftBottom from './leftBottom';
// import center from './centerLeft';
import centerXiaoFang from './centerXiaoFang';
import centerZhiAn from './centerZhiAn';
import centerHuanJing from './centerHuanJing';
import centerShiPin from './centerShiPin';
import rightTop from './rightTop';
import rightBottom from './rightBottom';
import AMapLoader from '@amap/amap-jsapi-loader';
import dialogTC from '@/components/dialogTC/index.vue';
// document.querySelector('#mapIframe').contentWindow.postMessage(
//   {
//     opreateType: 'handlePointsAdd', // 约定的方法名
//     data: {
//       // 向子页面传参
//       dataSource: {
//         type: 'FeatureCollection',
//         features: [
//           // 点位数组
//           {
//             type: 'Feature',
//             geometry: {
//               type: 'Point',
//               coordinates: [119.65268232360842, 29.102823347647465]
//             },
//             properties: {
//               // 点位属性数据
//               NAME: '商贸中心'
//             },
//             id: 'fid-6f66ddaf_1680dcd8a9a_-7f61' // 唯一标识
//           }
//         ]
//       },
//       imgUrl: 'https://www.thingjs.com/s/d518da646d643cd780a4e905',
//       imgSize: 5
//     }
//   },
//   '*'
// );

export default {
  name: 'ServiceSupermarket',
  directives: {
    trigger: {
      inserted(el) {
        el.click();
      }
    }
  },
  components: {
    dialogTC,
    leftTop,
    leftBottom,
    // center,
    centerXiaoFang,
    centerZhiAn,
    centerHuanJing,
    centerShiPin,
    rightTop,
    rightBottom
  },
  data() {
    return {
      showMapicon: false,
      showDialog: false,
      showComponents: 'leftBottom',
      weather: '',
      temperature: '',
      dateTime: '',
      dateTime2: '',
      timer: null,
      zhishuList: [
        {
          num: '45',
          name: '治理指数'
        },
        {
          num: '77',
          name: '效能指数'
        },
        {
          num: '60',
          name: '协同指数'
        }
      ],
      mapbiaoshiList: [
        {
          url: require('@/image/dier.png'),
          name: '商场'
        },
        {
          url: require('@/image/disan.png'),
          name: '商户'
        },
        {
          url: require('@/image/disi.png'),
          name: '消防'
        },
        {
          url: require('@/image/diwu.png'),
          name: '停车场'
        },
        {
          url: require('@/image/diliu.png'),
          name: '汽车'
        },
        {
          url: require('@/image/diqi.png'),
          name: '摩托车'
        },
        {
          url: require('@/image/diba.png'),
          name: '电动车'
        },
        {
          url: require('@/image/dijiu.png'),
          name: '执法记录仪'
        }
      ],
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
    // this.$nextTick.handleClick();
    this.$set(() => {
      this.handleClick();
    });
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
    // this.handleClick();
    // this.handleClick();
    // AMap.plugin("AMap.Weather", () => {
    //   // 创建天气查询实例
    //   const weather = new AMap.Weather();
    //   // 执行实时天气信息查询
    //   weather.getLive("婺城区", (err, data) => {
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
    handleClick() {
      // document.querySelector('#mapIframe').contentWindow.postMessage(
      //   {
      //     opreateType: 'handleMapZoom', // 约定的方法名
      //     data: {
      //       // 向子页面传参
      //       distance: -10, // 距离
      //       time: 500 // 时间
      //     }
      //   },
      //   '*'
      // );
      // document.querySelector('#mapIframe').contentWindow.postMessage(
      //   {
      //     opreateType: 'handleMapMove', // 约定的方法名
      //     data: {
      //       // 向子页面传参
      //       deltaX: 150, // 水平移动距离150m
      //       deltaY: 0 // 垂直移动
      //     }
      //   },
      //   '*'
      // );
      document.querySelector('#mapIframe').contentWindow.postMessage(
        {
          opreateType: 'handlePointsAdd', // 约定的方法名
          data: {
            // 向子页面传参
            dataSource: {
              type: 'FeatureCollection',
              features: [
                // 点位数组
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [119.65268232360842, 29.102823347647465]
                  },
                  properties: {
                    // 点位属性数据
                    NAME: '商贸中心'
                  },
                  id: 'fid-6f66ddaf_1680dcd8a9a_-7f61' // 唯一标识
                }
              ]
            },
            imgUrl: 'https://www.thingjs.com/static/image/train_station.png',
            imgSize: 5
          }
        },
        '*'
      );
      // document.querySelector('#mapIframe').contentWindow.postMessage(
      //   {
      //     opreateType: 'handleMapFlyTo', // 约定的方法名
      //     data: {
      //       // 向子页面传参
      //       time: 0, // 飞行时间 ms
      //       lonlat: [119.65268232360842, 29.102823347647465], // 目标点的经纬度
      //       height: 3000 // 离地高度
      //     }
      //   },
      //   '*'
      // );
      console.log(88888888888);
    },
    showTc() {
      this.showDialog = true;
    },
    close() {
      this.$refs.lefttop.showName = '';
      this.$refs.leftbottom.showid = '';
      this.$refs.righttop.showName = '';
    },
    showMapbs() {
      this.showMapicon = !this.showMapicon;
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
  // background: url(../../assets/images/center/bodybg.png) no-repeat;
  .bodybg {
    width: 100%;
    height: 100%;
    // background: url(../../assets/images/center/bodybg.png) no-repeat;
  }
  .header_nav {
    width: 1920px;
    height: 112px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(../../assets/images/head_bg.png) no-repeat;
    // box-shadow: -483px 100px 100px 0px rgb(17 57 83 / 90%);
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
        &:nth-child(3) {
          color: #c99d41;
          background: url(../../assets/images/head_nav_left_active.png)
            no-repeat left top / 100% 100%;
        }
        &:nth-child(5),
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
        font-weight: 400;
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

      .date_right {
        text-align: right;
        padding-right: 15px;
      }
      .q2s {
        position: absolute;
        left: 1684px;
        bottom: 8px;
      }
      ::v-deep .s-sticker-tmp {
        color: #fff;
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
  .bodybg_top {
    width: 1920px;
    height: 78px;
    position: absolute;
    top: -1px;
    background: url('../../image/sqzzbg2.png') no-repeat left top / 100% 100%;
  }
  .bodybg_right {
    width: 555px;
    height: 676px;
    position: absolute;
    top: 66px;
    right: 0px;
    background: url('../../image/sqzzbgRight.png') no-repeat;
  }
  .bodybg_bottom {
    width: 1920px;
    height: 328px;
    position: absolute;
    right: 0;
    bottom: 11px;
    left: 0px;
    background: url('../../image/sqzzbgBottom.png') no-repeat;
  }
  .bodybg_left {
    width: 556px;
    height: 676px;
    position: absolute;
    top: 66px;
    left: 0;
    background: url('../../image/sqzzbgLeft.png') no-repeat;
  }
  .leftTop {
    width: 481px;
    height: 657px;
    position: absolute;
    top: 94px;
    left: 25px;
    right: 1409px;
    bottom: 329px;
    background: url(../../assets/images/left_bg.png) no-repeat left top / 100%
      100%;
    box-shadow: 99px 63px 111px -47px #113953;
  }
  .leftBottom {
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -180px 73px -100px rgb(17 57 83 / 90%);
    box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;
  }
  .centerXiaoFang {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .centerZhiAn {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .centerHuanJing {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .centerShiPin {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    position: absolute;
    top: 745px;
    left: 25px;
    right: 521px;
    bottom: 16px;
    background: url(../../assets/images/left_bottom.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .center {
    width: 900px;
    height: 657px;
    position: absolute;
    top: 93px;
    left: 513px;
    right: 521px;
    bottom: 16px;
    background: #eee;
  }
  .rightTop {
    width: 486px;
    height: 657px;
    position: absolute;
    top: 93px;
    left: 1414px;
    right: 25px;
    bottom: 253px;
    background: url(../../assets/images/right_top.png) no-repeat left top / 100%
      100%;
    box-shadow: -137px 0px 100px -70px rgb(17 57 83 / 90%);
  }
  .rightBottom {
    width: 486px;
    height: 320px;
    position: absolute;
    top: 746px;
    left: 1414px;
    right: 25px;
    bottom: 16px;
    background: url(../../assets/images/right_bottom.png) no-repeat left top /
      100% 100%;
    box-shadow: -137px 0px 100px -70px rgb(17 57 83 / 90%);
  }
  .dituBS {
    position: absolute;
    left: 553px;
    top: 232px;
    .tuceng1 {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-bottom: 14px;
      .tc {
        font-size: 18px;
        color: #fff !important;
      }
      .tc2 {
        font-size: 18px;
        color: rgba(113, 255, 247, 1) !important;
      }
      img {
        width: 36px;
        height: 36px;
      }
    }
    .tucengSon {
      cursor: pointer;
      margin-left: 7px;
      margin-top: -8px;
      display: flex;
      align-items: center;
      p {
        font-size: 14px;
        color: #fff;
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .zhishu {
    position: absolute;
    top: 68px;
    left: 678px;
    cursor: pointer;
    ul {
      display: flex;
      text-align: center;
      height: 170px;
      li {
        height: 100%;
        width: 172px;
        background: url('~@/image/zlzd.png') no-repeat center;
        background-size: 100% 100%;
        position: relative;
        .ziti {
          // position: absolute;
          // left: 0;
          // top: 0;
          // width: 54px;
          // height: 43px;
          background: linear-gradient(
            0deg,
            #ffffff 0.1220703125%,
            rgba(136, 241, 233, 0.82) 35.67578125%,
            rgba(255, 255, 255) 41.4794921875%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          &:nth-child(2) {
            background: linear-gradient(
              0deg,
              #ffffff 0.1220703125%,
              rgba(244, 251, 131, 0.82) 35.67578125%,
              rgba(255, 255, 255) 41.4794921875%
            ) !important;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          &:nth-child(3) {
            background: linear-gradient(
              0deg,
              #ffffff 0.1220703125%,
              rgba(223, 152, 254, 0.82) 35.67578125%,
              rgba(255, 255, 255) 41.4794921875%
            ) !important;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          line-height: 146px;
          font-size: 52px;
        }
        .ziti2 {
          // width: 78px;
          // height: 19px;
          font-size: 20px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
          position: absolute;
          left: 48px;
          top: 102px;
        }
        &:nth-child(2) {
          height: 100%;
          width: 172px;
          background: url('~@/image/sqssd.png') no-repeat center;
          background-size: 100% 100%;
          margin: 0 50px;
        }
        &:nth-child(3) {
          height: 100%;
          width: 172px;
          background: url('~@/image/sqhyd.png') no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
