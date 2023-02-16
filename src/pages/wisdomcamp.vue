<template>
  <div class="body">
    <!-- 关闭地图全屏按钮 -->
    <button
      v-if="showHiddenMapAll"
      class="hiddenMap"
      @click="hiddenMapAll"
    ></button>
    <iframe
      src="https://www.coveycity.com:444/ccdt/index.html"
      frameborder="0"
      scrolling="no"
      width="100%"
      height="100%"
      :class="['ditu', { ditu2: mapall == true }]"
    ></iframe>
    <!-- 地图全屏展示按钮 -->
    <button v-if="showMapAll" class="showMap" @click="mapAll"></button>
    <!-- <div class="bodybg_right"></div>
    <div class="bodybg_bottom"></div>
    <div class="bodybg_left"></div> -->
    <div class="bodybg_top"></div>
    <!-- 商圈活跃度 -->
    <div
      :class="[
        'gq',
        ,
        'animate__animated',
        'animate__fadeIn',
        { animate__fadeOutBottomRight: mapall == true }
      ]"
    >
      <div class="bgi" @click="showTC">
        <div class="ziti1">90</div>
        <div class="ssd">商圈活跃度</div>
      </div>
      <div class="bgi1" @click="showTC">
        <div class="ziti2">98</div>
        <div class="ssd">商圈舒适度</div>
      </div>
      <div class="bgi2" @click="showTC">
        <div class="ziti3">88</div>
        <div class="ssd">累计营业额</div>
      </div>
      <div class="bgi3" @click="showTC">
        <div class="ziti4">94</div>
        <div class="ssd">累计客流</div>
      </div>
    </div>
    <!-- <div class="top">
      <div class="q1s">
        <div class="shijian">
          <dayjs></dayjs>
          <span class="sj">{{ datesss }}</span>
        </div>
        <div class="tianqi">
          <div id="he-plugin-simple"></div>
        </div>
      </div>

      <ul class="top-1">
        <li class="lfs" @click="$router.push('/')">驾驶舱</li>
        <li class="lif">商圈智营</li>
        <li class="lf" @click="$router.push('/sqZhiYing')">商圈智治</li>
      </ul>
      <div class="cen">西市街智慧商圈数字应用</div>
      <ul class="top-2">
        <li class="sxsxs">
          <div class="yonghu">
            <div class="zuo"></div>
            <div class="touxiang"></div>
            <div class="yinghuming">张三</div>
            <div class="you1"></div>
          </div>
        </li>
        <li class="rt" @click="$router.push('/sqFuwu')">商圈服务</li>
        <li class="rt" @click="$router.push('/sqDangjian')">商圈党建</li>
      </ul>
    </div> -->

    <div class="header_nav">
      <div class="header_nav_list">
        <ul>
          <li class="header_nav_list_li" @click="$router.push('/souye')">
            驾驶舱
          </li>
          <li class="header_nav_list_li">
            商圈智营
          </li>
          <li class="header_nav_list_li" @click="$router.push('/sqZhiYing')">商圈智治</li>
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
              src="../assets/images/head_nav_leftJT.png"
              alt=""
              srcset=""
            >
            <img
              class="user"
              src="../assets/images/user.png"
              alt=""
              srcset=""
            >
            <span class="name">姜安南</span>
            <img
              class="rightJT"
              src="../assets/images/head_nav_rightJT.png"
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
          <div class="q2s">
            <div id="he-plugin-simple"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        'lft',
        'animate__animated',
        'animate__bounceInLeft',
        { animate__lightSpeedOutLeft: mapall == true }
      ]"
    >
      <!-- 左一 -->
      <div class="xpanel-wrapper xpanel-wrapper-40">
        <div class="xpanel xpanel-l-b">
          <div class="title">
            <div class="tite"><div class="jbs">商户分布</div></div>
            <div class="specificdate">
              <div
                :class="[
                  'specificdateyear',
                  { specificdateyear2: showJyfxName == 'year' }
                ]"
                @click="showJyfx('year')"
              >
                年
              </div>
              <div
                :class="[
                  'specificdatemonth',
                  { specificdatemonth2: showJyfxName == 'month' }
                ]"
                @click="showJyfx('month')"
              >
                月
              </div>
              <div
                :class="[
                  'specificdateday',
                  { specificdateday2: showJyfxName == 'day' }
                ]"
                @click="showJyfx('day')"
              >
                日
              </div>
            </div>
          </div>
          <div class="shfb">
            <div
              v-for="(item, index) in obj"
              :key="index"
              class="px"
              @click="showTC3(item)"
            >
              <div style="font-size: 12px">
                <span
                  style="
                       font-size: 24px;
                        font-family: Source Han Sans SC;
                          font-weight: bold;
                        font-style: italic;
                      color: #26F5F5;
                          /* line-height: 11px; */
                      "
                >
                  {{ item.sz }}</span>
                {{ item.dw }}
              </div>
              <div :class="['textColor', { 'textColor2': showid == item.sz }]">
                {{ item.db }}
              </div>
            </div>
          </div>
          <!-- <div class="tda1">
                <div class="tad2">
                  <div v-for="(item, index) in dats" :key="index" class="bjjj">
                    <img :src="item.url" alt="" />
                    <div class="re">
                      <div>{{ item.nuba }}</div>
                      <div>{{ item.dw }}</div>
                    </div>
                  </div>
                </div>
              </div> -->
          <div
            id="maine"
            style="height: 218px; position: relative; z-index: 10"
          ></div>
          <dir class="maine-bg"></dir>
        </div>
      </div>

      <!-- 左2 -->
      <div class="xpanel-wrapper xpanel-wrapper-60">
        <div v-if="true" class="xpanel xpanel-l-t">
          <div class="title">
            <div class="tite"><div class="jbs">经营分析</div></div>
            <!-- <div class="fds">{{ date }}</div> -->
          </div>
          <div class="ssx">
            <!-- <div class="px" v-for="(item, index) in obj" :key="index">
                  <div style="font-size: 12px">
                    <span
                      style="
                        color: #10e4e5;
                        font-size: 22px;
                        font-style: italic;
                      "
                    >
                      {{ item.sz }}</span
                    >
                    {{ item.dw }}
                  </div>
                  <div>{{ item.db }}</div>
                </div>
                <min /> -->
            <template v-if="showJyfxName == 'year'">
              <jingying />
            </template>
            <template v-if="showJyfxName == 'month'">
              <jingying2 />
            </template>
            <template v-if="showJyfxName == 'day'">
              <jingying3 />
            </template>
            <div v-if="showJyfxName == 'year'">
              <jindutiao />
            </div>
            <div v-if="showJyfxName == 'month'">
              <jindutiao2 />
            </div>
            <div v-if="showJyfxName == 'day'">
              <jindutiao3 />
            </div>
            <zhexiantu />
          </div>
        </div>
        <!-- <div id="mais" style="height: 550px"></div> -->
      </div>
    </div>
    <!-- 中间区域 -->
    <div
      :class="[
        'col',
        'col-c',
        'animate__animated',
        'animate__fadeIn',
        { animate__fadeOutBottomRight: mapall == true }
      ]"
    >
      <!-- <div class="xpanel-wrapper xpanel-wrapper-75"> -->
      <!-- <maps class="maps" />
    <!-- </div> -->
      <div class="xpanel-wrapper xpanel-wrapper-25">
        <div class="xpanel xpanel-c-b" style="margin: 0">
          <div class="title title-long">
            <div class="tite"><div class="jbs">商圈运行</div></div>
          </div>
          <div class="sqdj2">
            <div id="mainet555" style="height: 90%; width: 100%"></div>
          </div>
        </div>
        <div class="xpanel xpanel-c-b-c" style="margin: 0">
          <div class="titles title-long" style="margin-top: 10px;">
            <div class="tite"><div class="jbs">周边资源</div></div>
          </div>
          <div class="sqdj1" style="padding: 0 25px;">
            <div
              v-for="(item, index) in objet"
              :key="index"
              class="ddd zhoubianziyuan"
              @click="showTC(item)"
            >
              <img style="width:38px;height:38px" :src="item.url" alt="">
              <div class="re">
                <div class="divrespannuba">
                  <span class="respannuba">{{ item.nuba }}</span>个
                </div>
                <div :class="['respanmc', { respanmc2: objetName == item.mc }]">
                  {{ item.mc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右 -->
    <div
      :class="[
        'col',
        'col-r',
        'animate__animated',
        'animate__bounceInRight',
        { animate__lightSpeedOutRight: mapall == true }
      ]"
    >
      <div class="xpanel-wrapper xpanel-wrapper-65">
        <!-- <div class="diw"> -->
        <!-- <div id="he-plugin-simple"></div> -->
        <!-- </div> -->
        <!-- <div class="q2s">
              <div id="he-plugin-simple"></div>
            </div> -->

        <div class="xpanel xpanel-r-t" style="padding-bottom: 10px;">
          <div class="title" style="top: 20px;">
            <div class="tite"><div class="jbs">客流画像</div></div>
          </div>
          <div class="q1">
            <div
              v-for="(item, index) in objets"
              :key="index"
              class="ei"
              @click="showTC3(item)"
            >
              <div class="q1eispandata">
                <span class="itemdata">{{ item.data }}</span> 万
              </div>
              <div :class="['', { ei2: objetsName == item.dz }]">
                {{ item.dz }}
              </div>
            </div>
          </div>
          <div class="q2">
            <div class="y2">
              <div id="mainets" style="height: 150px; width: 250px"></div>
            </div>
            <div class="y3">
              <!-- <div id="suib" style="height: 80%"></div> -->
              <mins :id="'mins'" />
            </div>
          </div>
          <div class="q3">
            <div id="sui" style="height: 100%"></div>
          </div>
          <div class="q4">
            <zhexiantus />
          </div>
        </div>
      </div>
      <div class="xpanel-wrapper" style="height: 235px;">
        <div
          class="xpanel xpanel-r-b"
          style="height: auto; padding-bottom: 24px;"
        >
          <div class="title">
            <div class="tite"><div class="jbs">数据赋能</div></div>
          </div>
          <div class="dad">
            <div
              v-for="(item, index) in objetobjet"
              :key="index"
              class="ziyuantitleicon"
              @click="showTC(item)"
            >
              <img :src="item.url" alt="" class="ziyuanimgtu">
              <div class="ziyuanimgtutittext re">
                <div class="divrespannuba">
                  <span class="respannuba">{{ item.nuba }}</span>个
                </div>
                <div
                  :class="[
                    'respanmc',
                    { respanmc2: objetobjetName == item.mc }
                  ]"
                >
                  {{ item.mc }}
                </div>
              </div>
              <!-- <div class="ziyuanimgtutittext re">
                    <div>{{ item.nuba }}</div>
                    <div>{{ item.mc }}</div>
                  </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- 弹窗 -->
    <dialogTC :show-dialog.sync="showDialog" @closed="close"></dialogTC>
    <dialogTC3 :show-dialog3.sync="showDialog3" @closed3="close"></dialogTC3>
  </div>
</template>

<script>
// import maps from './echas/index.vue';
import jingying from './wisdom/jingying.vue';
import jingying2 from './wisdom/jingying2.vue';
import jingying3 from './wisdom/jingying3.vue';
import jindutiao from './wisdom/jindutiao.vue';
import jindutiao2 from './wisdom/jindutiao2.vue';
import jindutiao3 from './wisdom/jindutiao3.vue';
import zhexiantu from './wisdom/zhexiantu.vue';
import zhexiantus from './wisdom/zhexiantus.vue';
import mins from './mins.vue';
import dialogTC from '../components/dialogTC/index.vue';
import dialogTC3 from '../components/dialogTC3/index.vue';
import dayjs from '../components/dayjs/index.vue';
// import dayjs from "dayjs";
// import * as echarts from 'echarts';

export default {
  components: {
    dayjs,
    dialogTC,
    dialogTC3,
    jingying,
    jingying2,
    jingying3,
    jindutiao,
    jindutiao2,
    jindutiao3,
    zhexiantu,
    mins,
    zhexiantus
  },
  data() {
    return {
      dateTime: '',
      dateTime2: '',
      showMapAll: true,
      showHiddenMapAll: false,
      objetsName: '',
      mapall: false,
      objetobjetName: '',
      objetName: '',
      showJyfxName: 'year',
      showDialog: false,
      showDialog3: false,
      showid: '',
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
          data: '1000',
          dz: '当年客流'
        },
        {
          data: '10',
          dz: '日均客流'
        },
        {
          data: '2',
          dz: '平均驻留时间'
        },
        {
          data: '2',
          dz: '平均客龄'
        }
      ],
      objet: [
        {
          url: require('../image/zbzy/gjc.png'),
          nuba: 3,
          mc: '公交车站'
        },
        {
          url: require('../image/zbzy/tcc.png'),
          nuba: 15,
          mc: '停车场'
        },
        {
          url: require('../image/zbzy/zxc.png'),
          nuba: 2,
          mc: '自行车站点'
        },
        {
          url: require('../image/zbzy/ddc.png'),
          nuba: 4,
          mc: '电动自行车站点'
        },
        {
          url: require('../image/zbzy/cesuo.png'),
          nuba: 7,
          mc: '厕所'
        },
        {
          url: require('../image/zbzy/mys.png'),
          nuba: 5,
          mc: '母婴室'
        },
        {
          url: require('../image/zbzy/zbj.png'),
          nuba: 6,
          mc: '直播间'
        },
        {
          url: require('../image/zbzy/txfw.png'),
          nuba: 2,
          mc: '通讯服务'
        }
      ],

      objetobjet: [
        {
          url: require('../image/sjfn/hyxf.png'),
          nuba: 20,
          mc: '行业消费'
        },
        {
          url: require('../image/sjfn/qykl.png'),
          nuba: 11,
          mc: '区域客流'
        },
        {
          url: require('../image/sjfn/nlgc.png'),
          nuba: 17,
          mc: '年龄构成'
        },
        {
          url: require('../image/sjfn/xbgc.png'),
          nuba: 12,
          mc: '性别构成'
        },
        {
          url: require('../image/sjfn/lyd.png'),
          nuba: 14,
          mc: '来源地'
        },
        {
          url: require('../image/sjfn/sdkl.png'),
          nuba: 9,
          mc: '时段客流'
        },
        {
          url: require('../image/sjfn/xfph.png'),
          nuba: 6,
          mc: '消费偏好'
        },
        {
          url: require('../image/sjfn/gpxf.png'),
          nuba: 6,
          mc: '高频消费'
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
          sz: '3000',
          dw: '家',
          db: '商户数量'
        },
        {
          sz: '9',
          dw: '个',
          db: '大型商场'
        },
        {
          sz: '100',
          dw: '种',
          db: '商户分类'
        },
        {
          sz: '1',
          dw: '万',
          db: '运营品牌'
        },
        {
          sz: '2',
          dw: '万',
          db: '从业人员'
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
  created() {
    // 设置时间
    this.dateTime = this.parseTime(new Date(), '{y}-{m}-{d} 星期{a} ');
    this.dateTime2 = this.parseTime(new Date(), ' {h}:{i}:{s}');
    this.timer = setInterval(() => {
      this.dateTime2 = this.parseTime(new Date(), '{h}:{i}:{s}');
    }, 1000);
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
    // this.drawws();
    this.draww();
    // this.draw();
    this.draws();
    this.drawss();
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

  methods: {
    dataws() {
      setInterval(() => {
        this.date = this.$dayJs().format('YYYY/MM/DD');
        this.dates = this.$dayJs().format('YYYY-MM-DD');
        this.datess = this.$dayJs().format('d');
        this.datesss = this.$dayJs().format('HH:mm:ss');
      }, 1000);
    },
    // 右2
    drawwss() {
      this.myChart = this.$echarts.init(document.getElementById('sui'));
      var spNum = 5,
          _max = 100;
      var legendData = ['18-30岁', '31-59岁', '60岁以上'];
      var y_data = ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10'];
      var x_data = [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000'
      ];
      var _datamax = [100, 100, 100, 100, 100, 100],
          _data1 = [10, 15, 10, 13, 15, 11, 3],
          _data2 = [19, 50, 40, 33, 15, 51, 3],
          _data3 = [21, 55, 10, 13, 35, 11, 3],
          _data4 = [21, 55, 10, 30, 35, 11, 3];
      var fomatter_fn = function(v) {
        return ((v.value / _max) * 100).toFixed(0);
      };
      var _label = {
        normal: {
          show: false,
          position: 'inside',
          formatter: fomatter_fn,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }
      };
      var option = {
        title: {
          text: '客流年龄',
          left: 'center',
          // top: "bottom",
          textStyle: {
            color: '#34cdff',
            fontSize: 13
          },
          bottom: '23'
        },
        // backgroundColor: "#091034",
        legend: {
          top: 30,
          right: 30,
          data: legendData,
          textStyle: {
            color: '#ccc'
          },
          itemWidth: 10, // 图例图形宽度
          itemHeight: 4 // 图例图形高度
        },
        grid: {
          containLabel: true,
          left: 30,
          right: 15,
          bottom: 50
        },
        tooltip: {
          show: true,
          backgroundColor: '#fff',
          borderColor: '#ddd',
          borderWidth: 1,
          textStyle: {
            color: '#3c3c3c',
            fontSize: 16
          },
          formatter: function(p) {
            console.log(p);
            var _arr = p.seriesName.split('/'),
                idx = p.seriesIndex; // 1，2，3
            return (
              '名称：' +
              p.seriesName +
              '<br>' +
              '完成：' +
              p.value +
              '<br>' +
              '占比：' +
              ((p.value / _max) * 100).toFixed(0) +
              '%'
            );
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
        },
        xAxis: {
          //  data: x_data,
          // splitNumber: spNum,
          // interval: _max / spNum,
          // max: _max,
          // axisLabel: {
          //     show: false,
          //     formatter: function(v) {
          //         var _v = (v / _max * 100).toFixed(0);
          //         return _v == 0 ? _v : _v + '%';
          //     }
          // },
          // axisLine: {
          //     show: false
          // },
          axisLabel: {
            fontSize: 10,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            data: y_data,
            axisLabel: {
              fontSize: 10,
              color: '#fff'
            },
            // axisLine: {
            //     show: false
            // },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          {
            show: false,
            data: y_data,
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'bar',
            name: '18-30岁',
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: '#FFAE00'
              },
              emphasis: {
                color: '#7E47FF'
              }
            },
            data: _data1
          },
          {
            type: 'bar',
            name: '31-59岁',
            stack: '2',
            legendHoverLink: false,
            barWidth: 10,
            label: _label,
            itemStyle: {
              normal: {
                color: '#52FFFF'
              },
              emphasis: {
                color: '#FD5916'
              }
            },
            data: _data2
          },
          // {
          //   type: 'bar',
          //   stack: '2',
          //   name: '60岁以上',
          //   legendHoverLink: false,
          //   barWidth: 10,
          //   label: _label,
          //   itemStyle: {
          //     normal: {
          //       color: '#28B1FF'
          //     },
          //     emphasis: {
          //       color: '#01A4F7'
          //     }
          //   },
          //   data: _data3
          // },
          {
            type: 'bar',
            stack: '2',
            name: '60岁以上',
            legendHoverLink: false,
            barWidth: 10,
            label: _label,
            itemStyle: {
              normal: {
                color: '#52FF97'
              },
              emphasis: {
                color: '#2EDDCD'
              }
            },
            data: _data4
          }
        ]
      };
      this.myChart.setOption(option);
    },
    // 右1
    // drawws() {
    //   this.myChart = this.$echarts.init(document.getElementById("suib"));
    //   var option = {
    //     title: {
    //       left: "center",
    //     },
    //     tooltip: {
    //       trigger: "item",
    //       formatter: "{a} <br/>{b} : {c} ({d}%)",
    //     },
    //     legend: {
    //       orient: "vertical",
    //       top: "5%",
    //       right: "20px",
    //       textStyle: {
    //         color: "#4c9bfd", // 图例文字颜色
    //       },
    //     },
    //     toolbox: {
    //       show: true,
    //       feature: {
    //         mark: { show: true },
    //       },
    //     },
    //     series: [
    //       {
    //         name: "Radius Mode",
    //         type: "pie",
    //         radius: [0, 100], //中间空洞大小 和整体大小
    //         //饼图位置
    //         center: ["30%", "50%"],
    //         roseType: "radius",
    //         itemStyle: {
    //           borderRadius: 0, //圆角
    //         },
    //         label: {
    //           show: false,
    //         },
    //         emphasis: {
    //           label: {
    //             show: true,
    //           },
    //         },
    //         data: [
    //           {
    //             value: 40,
    //             name: "rose 1",
    //             symbol: "diamond",
    //             symbolOffset: [0, "-50%"],
    //             symbolPosition: "end", //图形边缘与柱子结束的地方内切
    //             symbolSize: ["-95%", 90], //根据柱子大小来做调整
    //             itemStyle: {
    //               normal: {
    //                 color: "#c861d4",
    //               },
    //             },
    //           },
    //           {
    //             value: 33,
    //             name: "rose 2",
    //             symbol: "diamond",
    //             symbolOffset: [0, "-50%"],
    //             symbolPosition: "end", //图形边缘与柱子结束的地方内切
    //             symbolSize: ["-95%", 90], //根据柱子大小来做调整
    //             itemStyle: {
    //               normal: {
    //                 color: "#dee565",
    //               },
    //             },
    //           },
    //           {
    //             value: 28,
    //             name: "rose 3",
    //             symbol: "diamond",
    //             symbolOffset: [0, "-50%"],
    //             symbolPosition: "end", //图形边缘与柱子结束的地方内切
    //             symbolSize: ["-95%", 90], //根据柱子大小来做调整
    //             itemStyle: {
    //               normal: {
    //                 color: "#e68639",
    //               },
    //             },
    //           },
    //           {
    //             value: 22,
    //             name: "rose 4",
    //             itemStyle: {
    //               normal: {
    //                 color: "#27ba81",
    //               },
    //             },
    //           },
    //           {
    //             value: 20,
    //             name: "rose 5",
    //             itemStyle: {
    //               normal: {
    //                 color: "#27b8ba",
    //               },
    //             },
    //           },
    //           {
    //             value: 15,
    //             name: "rose 6",
    //             itemStyle: {
    //               normal: {
    //                 color: "#548deb",
    //               },
    //             },
    //           },
    //           {
    //             value: 12,
    //             name: "rose 7",
    //             itemStyle: {
    //               normal: {
    //                 color: "#439aff",
    //               },
    //             },
    //           },
    //           {
    //             value: 10,
    //             name: "rose 8",
    //             itemStyle: {
    //               normal: {
    //                 color: "#ff4a49",
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   };
    //   this.myChart.setOption(option);
    // },
    // 左2线图
    draww() {
      const colorList = ['#e977d8', '#69edae', '#a065f1', '#645df8', '#55cdfb'];
      this.myChart = this.$echarts.init(document.getElementById('maine'));
      // const colors = ['#5470C6', '#EE6666'];
      var option = {
        color: colorList,
        title: {
          text: '信用等级',
          textStyle: {
            color: '#26f5f5',
            fontSize: 16,
            width: 200,
            height: 100
          },
          left: 156,
          top: 75
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          padding: [10, 0],
          datas: ['A级', 'B级', 'C级', 'D级', 'M级'],
          right: 40,
          top: 20,
          bottom: 20,
          orient: 'vertical',
          // icon: "diamond",
          itemHeight: 8,
          itemWidth: 8,
          // itemHeight: 10,
          selectedMode: false,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 14
          }
        },
        series: [
          {
            name: '信用等级',
            type: 'pie',
            center: ['40%', '40%'],
            radius: ['70%', '40%'],
            data: [
              {
                value: 1048,
                name: '≥90',
                label: { name: 'A级', color: colorList[0] }
              },
              {
                value: 735,
                name: '90>b≥70',
                label: { name: 'B级', color: colorList[1] }
              },
              {
                value: 580,
                name: '70>c≥40',
                label: { name: 'C级', color: colorList[2] }
              },
              {
                value: 484,
                name: '<40',
                label: { name: 'D级', color: colorList[3] }
              },
              {
                value: 300,
                name: '≥70',
                label: { name: 'M级', color: colorList[4] }
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              alignTo: 'labelLine',
              fontSize: 14,
              minMargin: 15,
              edgeDistance: 10,
              lineHeight: 25,
              formatter: function(e) {
                return `${e.data.label.name}\n${e.data.value}`;
              }
            },
            labelLayout: params => {
              const isLeft = params.labelRect.x < this.myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points
              };
            },
            labelLine: {
              length: 50,
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ]
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b} : {c} ({d}%)",
        // },
        // legend: {
        //   datas: ["餐饮", "电影", "健身", "餐饮", "电影", "电影"],
        //   right: 10,
        //   top: 20,
        //   bottom: 20,
        //   orient: "vertical",
        //   // icon: "diamond",
        //   itemHeight: 8,
        //   itemWidth: 8,
        //   // itemHeight: 10,
        //   selectedMode: false,
        //   textStyle: {
        //     color: "#FFFFFF",
        //   },
        // },
        // series: [
        //   {
        //     name: "Access From",
        //     type: "pie",
        //     radius: ["40%", "70%"],
        //     avoidLabelOverlap: false,
        //     label: {
        //       show: false,
        //       position: "center",
        //     },
        //     emphasis: {
        //       label: {
        //         show: true,
        //         fontSize: "40",
        //         fontWeight: "bold",
        //       },
        //     },
        //     labelLine: {
        //       show: false,
        //     },
        // data: [
        //   { value: 1048, name: "Search Engine" },
        //   { value: 735, name: "Direct" },
        //   { value: 580, name: "Email" },
        //   { value: 484, name: "Union Ads" },
        //   { value: 300, name: "Video Ads" },
        // ],
        //   },
        // ],
      };
      this.myChart.setOption(option);
    },

    // 中下曲线图
    draws() {
      this.myChart = this.$echarts.init(document.getElementById('mainet555'));
      var xData2 = [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ];
      var scale = 1;
      var data1 = [200, 500, 1000, 1500, 2000, 2500, 3000];

      var shujuzt = [
        2300,
        2000,
        1000,
        1500,
        3000,
        2700,
        2300,
        2000,
        1000,
        1500,
        3000,
        2700
      ];
      var shujuzx = [
        100,
        1500,
        2000,
        1900,
        2500,
        1100,
        1000,
        1500,
        2000,
        1900,
        1500,
        1300
      ];
      var option = {
        title: {
          text: '客流对比图', // subtext: "消费趋势",
          left: 'center',
          // top: "bottom", // color: "#34cdff",
          textStyle: {
            color: '#34cdff',
            fontSize: 13
          },
          bottom: 20
        },
        // backgroundColor: "#021132",
        tooltip: {
          trigger: 'item'
        },
        grid: {
          left: 60,
          bottom: 75,
          top: 50
        },
        xAxis: {
          data: xData2,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#274e6a'
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#FBFCFC',
              fontSize: 11
            },
            margin: 20 // 刻度标签与轴线之间的距离。
          }
        },
        yAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#274e6a'
            }
          },
          splitLine: {
            // 去除网格线
            show: true,
            lineStyle: {
              color: '#274e6a',
              width: 2
            }
          },
          axisLabel: {
            textStyle: {
              color: '#FBFCFC',
              fontSize: 11
            }
          },
          // 刻度
          axisTick: {
            show: false
          }
        },
        legend: {
          align: 'left',
          itemGap: 50,
          // x: 'right',
          right: '10%',
          y: '10%',
          icon: 'rect',
          itemWidth: 10 * scale, // 图例图形宽度
          itemHeight: 10 * scale, // 图例图形高度
          textStyle: {
            color: '#3fdaff',
            fontSize: 10 * scale
          }
        },
        series: [
          {
            // 三个最低下的圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [8, 5],
            // 下面圆
            symbolOffset: [0, 2],
            z: 12,
            itemStyle: {
              opacity: 1,
              color: '#A6F5FD'
            },
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          },

          // 下半截柱状图
          {
            name: '客流',
            type: 'bar',
            barWidth: 8,
            barGap: '-100%',
            itemStyle: {
              // lenged文本 , 柱的颜色
              opacity: 0.7,
              color: '#3FB2BF'
            },

            data: shujuzt
          },
          // 线条
          {
            symbol: 'none', // 去掉上面的圆点
            smooth: true,
            name: '消费',
            type: 'line', // 折线图line;柱形图bar;饼图pie
            stack: '总量',
            areaStyle: {
              backgroundColor: '#000',
              // 显示区域颜色---渐变效果
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#FBE2AC' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FBE2AC00' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            itemStyle: {
              color: '#EDB774', // 改变折线点的颜色
              lineStyle: {
                color: '#EDB774   ' // 改变折线颜色
              }
            },
            data: shujuzx
          },
          {
            type: 'bar',
            barWidth: 8,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
              color: 'transparent'
            },
            data: data1
          },

          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [8, 5],
            // 上面圆
            symbolOffset: [0, -2],
            z: 12,
            itemStyle: {
              opacity: 1,
              color: '#A6F5FD'
            },
            symbolPosition: 'end',
            data: shujuzt
          }
        ]
      };
      this.myChart.setOption(option);
    },
    drawss() {
      this.myChart = this.$echarts.init(document.getElementById('mainets'));
      var option = {
        title: {
          text: '客流性别',
          left: 'center',
          top: 'bottom',
          textStyle: {
            color: '#34cdff',
            fontSize: 13
          }
        },
        // backgroundColor: "#23243a",
        tooltip: {
          // 提示框组件
          trigger: 'axis',
          // formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
          axisPointer: {
            type: 'shadow',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12
          }
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: 25,
          top: 20,
          padding: '0 0 10 0',
          containLabel: true
        },
        legend: {
          // 图例组件，颜色和名字
          right: 10,
          top: 0,
          itemGap: 16,
          itemWidth: 10,
          itemHeight: 10,
          data: [
            {
              name: '男'
              // icon:'image://../wwwroot/js/url2.png', //路径
            },
            {
              name: '女'
            }
          ],
          textStyle: {
            color: '#a8aab0',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true, // 坐标轴两边留白
            data: ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10'],
            axisLabel: {
              // 坐标轴刻度标签的相关设置。
              interval: 0, // 设置为 1，表示『隔一个标签显示一个标签』
              // margin: 15,
              textStyle: {
                color: '#E0E3E6',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12
              }
            },
            axisTick: {
              // 坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              // 坐标轴轴线相关设置
              lineStyle: {
                color: '#fff',
                opacity: 0.2
              }
            },
            splitLine: {
              // 坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            data: ['0', '3000', '6000', '9000', '12000', '15000'],
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#E0E3E6',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 10
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#fff'],
                opacity: 0.06
              }
            }
          }
        ],
        series: [
          {
            name: '男',
            type: 'bar',
            data: [9000, 5000, 2500, 3000, 8000, 8500, 9500],
            barWidth: 5,
            barGap: 0, // 柱间距离
            label: {
              // 图形上的文本标签
              normal: {
                //   show: true,
                position: 'top',
                textStyle: {
                  color: '#a8aab0',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 10
                }
              }
            },
            itemStyle: {
              // 图形样式
              normal: {
                barBorderRadius: [0, 0, 0, 0],
                color: '#29F2F4'
              }
            }
          },
          {
            name: '女',
            type: 'bar',
            data: [9000, 5000, 2500, 3000, 8000, 15000, 14000],
            barWidth: 5,
            barGap: 0.2, // 柱间距离
            label: {
              // 图形上的文本标签
              normal: {
                //   show: true,
                position: 'top',
                textStyle: {
                  color: '#a8aab0',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              // 图形样式
              normal: {
                barBorderRadius: [0, 0, 0, 0],
                color: '#D676DC'
              }
            }
          }
        ]
      };
      this.myChart.setOption(option);
    },
    showTC(item) {
      this.objetsName = item.dz;
      this.showid = item.sz;
      this.objetName = item.mc;
      this.objetobjetName = item.mc;
      this.showDialog = true;
    },
    showTC3(item) {
      this.objetsName = item.dz;
      this.showid = item.sz;
      this.objetName = item.mc;
      this.objetobjetName = item.mc;
      this.showDialog3 = true;
    },
    close() {
      this.objetsName = '';
      this.showid = '';
      this.objetName = '';
      this.objetobjetName = '';
    },
    // 全屏显示地图
    mapAll() {
      this.mapall = !this.mapall;
      this.showMapAll = false;
      this.showHiddenMapAll = true;
    },
    hiddenMapAll() {
      this.showHiddenMapAll = false;
      this.mapall = false;
      this.showMapAll = true;
    },
    // 年月日切换
    showJyfx(item) {
      // console.log(11111111);
      this.showJyfxName = item;
    }
  }
};
</script>
<style scoped>
@import '../css/app2.css';
</style>
<style lang="scss" scoped>
body::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.xpanel {
  // position: relative;
  // top: 5px;
  margin-top: 11px;
  padding-bottom: 0px;
}

.jbs {
  font-size: 24px;
  margin-left: 10px;
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
  margin-left: -10px;
}
.specificdate {
  width: 180px;
  position: absolute;
  right: 50px;
  top: 25px;
  font-size: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.specificdateyear {
  cursor: pointer;
  width: 25%;
  height: 20px;
  /* background: #0270e3ff; */
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  color: white;
}
.specificdateyear2 {
  cursor: pointer;
  width: 25%;
  height: 20px;
  /* background: #0270e3ff; */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#006ae1),
    to(#16b7ff)
  );
  background: linear-gradient(90deg, #006ae1, #16b7ff);
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  color: white;
}
.specificdatemonth {
  cursor: pointer;
  width: 25%;
  height: 20px;
  /* background: #0270e3ff; */
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  color: white;
}
.specificdatemonth2 {
  cursor: pointer;
  width: 25%;
  height: 20px;
  /* background: #0270e3ff; */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#006ae1),
    to(#16b7ff)
  );
  background: linear-gradient(90deg, #006ae1, #16b7ff);
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  color: white;
}
.specificdateday {
  cursor: pointer;
  width: 25%;
  height: 20px;
  /* background: #0270e3ff; */
  color: white;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
}
.specificdateday2 {
  cursor: pointer;
  width: 25%;
  height: 20px;
  /* background: #0270e3ff; */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#006ae1),
    to(#16b7ff)
  );
  background: linear-gradient(90deg, #006ae1, #16b7ff);
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  color: white;
}
.title {
  height: 10%;
  position: relative;
  top: 10px;
  left: 12px;
}
.tianqi {
  position: absolute;
  top: 76px;
  left: 1676px;
}
.lft {
  // margin-top: 21px;
  position: absolute;
  bottom: 9px;
  left: 20px;
}
.ssx {
  margin-top: 35px;
  height: 40%;

  color: white;
  display: flex;
  flex-wrap: wrap;
}
.shfb {
  margin-top: 35px;
  height: 173px;

  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.px {
  cursor: pointer;
  text-align: center;
  width: 30%;
  height: 35%;
  /* padding-top: 20px; */
  line-height: 25px;
  background: url('../image/scmj.png') no-repeat center top;
  background-size: 80% 100%;
}
.shfb {
  .textColor {
    color: #fff;
  }
  .textColor:hover {
    color: #c99d41;
  }

  .textColor2 {
    color: #c99d41;
  }
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
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* height: 70%; */
  width: 100%;
  /* margin-left: 30px; */
  /* float: left; */
  /*  */
  justify-content: space-around;
  align-content: space-around;
  line-height: 20px;
}
.zhoubianziyuan {
  margin-top: 15px;
  // font-size: 15px;
}
.sqdj2 {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  // margin-left: 10px;
  // margin-top: 10px;
  /* float: right; */
  /*  */
}
.ddd {
  cursor: pointer;
  width: 50%;
  display: flex;
}
.re {
  /* float: right; */
  color: white;
}
.zhoubianziyuan {
  margin-top: 10px;
  font-size: 15px;
}
.divrespannuba {
  color: white;
  font-size: 10px;
}
.respannuba {
  font-size: 24px;
  color: #26f5f5;
  font-weight: bold;
}
.respannuba {
  font-size: 24px;
  color: #26f5f5;
  font-weight: bold;
}
.ziyuanimgtutittext {
  font-size: 15px;
  margin-left: 5px;
}
.respanmc {
  font-size: 10px;
}
.respanmc:hover {
  color: #c99d41;
}
.respanmc2 {
  color: #c99d41;
}
.q1 {
  height: 20%;
  margin-top: -20px;
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
  margin-top: -160px;
}
.q4 {
  height: 35%;
  margin-top: -30px;
  margin-left: -50px;
  /* background-color: white; */
}
.ei {
  cursor: pointer;
  text-align: center;
  width: 25%;
  height: 50%;
  /* line-height: 45px; */
  background-size: 100% 100%;
  color: white;
  background: url('../image/wwg.png') no-repeat center top;
  z-index: 1;
}
.ei:hover {
  color: #c99d41;
}
.ei2 {
  cursor: pointer;
  background-size: 100% 100%;
  color: #c99d41;
}
.q1eispandata {
  color: white;
  font-size: 10px;
}
.itemdata {
  font-style: italic;
  font-size: 20px;
  color: #34cdff;
  font-weight: 700;
}
.y2 {
  width: 50%;
  height: 100%;
  float: left;
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: -85px;
  margin-left: 20px;
}
.y3 {
  width: 50%;
  height: 100%;
  float: left;
  margin-top: -140px;
  margin-left: -40px;
  z-index: -1;
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
  /* margin-right: 15px; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-top: 35px;
}
.ziyuanimgtutittext {
  font-size: 15px;
}
.nubaziyuan {
  /* padding-top: 15px; */
}
.nubaziyuans {
  padding-top: -40px;
}
.ziyuantitleicon {
  cursor: pointer;
  width: 25%;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.ziyuanimgtu {
  width: 50px;
  height: 50px;
}
.ziyuanimgtu:hover {
  animation: sjfn 2s;
}
.fudon {
  height: 80%;
  margin-left: 40px;
  width: 200px;
  float: left;
  font-size: 26px;
  color: white;
  text-align: center;
  line-height: 80px;
  background: url('../image/topbj.png') no-repeat center top;
  background-size: 120% 120%;
}
.fudo {
  line-height: 80px;
  height: 80%;
  /* margin-left: 40px; */
  width: 200px;
  float: left;
  font-size: 26px;
  color: white;
  text-align: center;
  background: url('../image/jsc1.png') no-repeat center top;
  background-size: 120% 120%;
}
.fudong {
  line-height: 80px;
  height: 80%;
  /* margin-left: 40px; */
  width: 200px;
  float: left;
  font-size: 26px;
  color: white;
  text-align: center;
  background: url('../image/topbj.png') no-repeat center top;
  background-size: 120% 120%;
}
.fudong2 {
  height: 80%;
  /* margin-right: 40px; */
  width: 200px;
  line-height: 80px;
  float: right;
  font-size: 26px;
  color: white;
  text-align: center;
  background: url('../image/topyou.png') no-repeat center top;
  background-size: 120% 120%;
  position: relative;
  left: -30px;
}
.fudongs {
  height: 80%;
  margin-top: 10px;
  width: 200px;
  line-height: 60px;
  float: right;
  font-size: 26px;
  color: white;
  text-align: center;
  /* background: url("../image/topbj.png") no-repeat center top; */
  background-size: 120% 120%;
}
.headers {
  /* height: 80%; */
  height: 80px;
  width: 1920px;
  background: url('../image/top.png') no-repeat center;
  background-size: 100% 100%;
  font-size: 28px;
  color: white;
  text-align: center;
  margin-top: 5px;
}
.gq {
  position: absolute;
  top: 78px;
  /* width: 100%; */
  height: 166px;
  left: 561px;
  /* height: 120px; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  font-size: 52px;
  text-align: center;
  z-index: 10;
}
.bgi {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/sqhyd.png') no-repeat center;
  background-size: 100% 100%;
  margin-right: 30px;
}
.bgi1 {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/sqssd.png') no-repeat center;
  background-size: 100% 100%;
  margin-right: 30px;
}
.bgi2 {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/zlzd.png') no-repeat center;
  background-size: 100% 100%;
  margin-right: 30px;
}
.bgi3 {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/zizds.png') no-repeat center;
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
  line-height: 146px;
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
  line-height: 146px;
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
  line-height: 146px;
}
.ziti4 {
  background: linear-gradient(
    0deg,
    #ffffff 0.1220703125%,
    rgba(136, 241, 233, 0.82) 25.67578125%,
    rgba(255, 255, 255) 41.4794921875%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  line-height: 146px;
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
  width: 600px;
  height: 25px;
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 249px;
  z-index: 10;
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
.xpanel-l-t {
  // position: relative;
  // top: 0px;
  height: 486px;
  margin-top: 0;
  padding-bottom: 8px;
}

.q1s {
  // margin-top: 20px;
  // height: 5%;
  height: auto;
  font-size: 22px;
  .shijian {
    position: absolute;
    top: 82px;
    left: 0;
  }
}
.yonghu {
  float: right;
  width: 200px;
}
.zuo {
  background: url('../image/dianzuo.png') no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: left;
}
.touxiang {
  width: 44px;
  height: 44px;
  background: url('../image/touxiang.png') no-repeat center;
  background-size: 100% 100%;
  float: left;
  margin-top: 5px;
}
.yinghuming {
  float: left;
  margin-left: 20px;
}
.you1 {
  background: url('../image/dianyou.png') no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: right;
}
.ssd {
  font-size: 20px;
  color: white;
  margin-top: -45px;
}
.wrapper {
  margin-top: 15px;
}
/* 头部 */
.top {
  width: 1920px;
  height: 106px;
  position: relative;
  background: url('../image/top.png') no-repeat center;
  background-size: 100% 100%;
  z-index: 10;
}

.header_nav {
    width: 1920px;
    height: 112px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(../assets/images/head_bg.png) no-repeat;
    // box-shadow: -483px 100px 100px 0px rgb(17 57 83 / 90%);
    .header_nav_list {
      height: 77.6px;
      margin: 0 15px;
      // background-color: rgb(131, 131, 131);
      .header_nav_list_li {
        width: 242.8px;
        height: 77.6px;
        background: url(../assets/images/head_nav_left.png) no-repeat left
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
        &:nth-child(2) {
          color: #c99d41;
          background: url(../assets/images/head_nav_left_active.png)
            no-repeat left top / 100% 100%;
        }
        &:nth-child(5),
        &:nth-child(6) {
          background: url(../assets/images/head_nav_right.png) no-repeat left
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
/* .q1s {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  left: 20px;
} */
/* .sj {q2s
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
} */
/* .sjs {
  margin: 0 15px 0 3px;
  height: 13px;
  color: white;
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
} */
.q2s {
  position: absolute;
  left: 1707px;
  bottom: -10px;
}
.top-1 {
  list-style: none;
}
.top-2 {
  list-style: none;
}
.top-1 > li {
  position: relative;
  z-index: 10;
  font-size: 26px;
  color: white;
  text-align: center;
  line-height: 90px;
  width: 242.8px;
  height: 77.6px;
  float: left;
}
.top-2 > li {
  position: relative;
  z-index: 10;
  font-size: 26px;
  color: white;
  line-height: 90px;
  text-align: center;
  width: 242.8px;
  height: 77.6px;
  float: right;
}
.lfs {
  background-size: 100% 100%;
  background: url('../image/topbj.png') no-repeat center top;
  cursor: pointer;
}
.lif {
  color: #c99d41 !important;
  margin-left: -30px;
  text-align: center;
  background-size: 100% 100%;
  background: url('../image/jsc1.png') no-repeat center top;
  cursor: pointer;
}
.lf {
  margin-left: -30px;
  text-align: center;
  background-size: 100% 100%;
  background: url('../image/topbj.png') no-repeat center top;
  cursor: pointer;
}
.cen {
  width: 1920px;
  position: absolute;
  text-align: center;
  font-size: 34px;
  height: 112px;
  line-height: 82px;
  font-weight: 600;
  color: white;
}
.yonghu {
  margin-top: 20px;
  margin-left: 30px;
  float: left;
  width: 200px;
}
.zuo {
  background: url('../image/dianzuo.png') no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: left;
}
.touxiang {
  width: 44px;
  height: 44px;
  background: url('../image/touxiang.png') no-repeat center;
  background-size: 100% 100%;
  float: left;
  margin-top: 5px;
}
.yinghuming {
  margin-top: -15px;
  float: left;
  margin-left: 20px;
}
.you1 {
  background: url('../image/dianyou.png') no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: right;
}
.rt {
  /* margin-right: 30px; */
  background: url('../image/topyou.png') no-repeat center top;
  background-size: 100% 100%;
  margin-right: -30px;
  cursor: pointer;
}
/* 左 */
.xpanel-wrapper-40 {
  width: 485px;
  height: 486px;
  // height: auto;
  position: relative;
  z-index: 10;
  padding: 0;
  .q1s {
    margin-left: -25px;
  }
}
.xpanel-wrapper-60 {
  width: 485px;
  height: 486px;
  padding: 0;
  position: relative;
  z-index: 10;
}
// 地图
.showMap {
  cursor: pointer;
  position: absolute;
  top: 60px;
  left: -110px;
  height: 40px;
  width: 40px;
  // border-radius: 10px;
  background: url('../assets/images/quanping(2).png') no-repeat;
  z-index: 1001;
}
.ditu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.ditu2 {
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 100;
}
.xpanel-l-b {
  height: 486px;
  // height: auto;
  // margin-top: 100px;
}

/* 右 */
.col-r {
  width: 498px;
  position: absolute;
  bottom: 7px;
  right: 9px;
  z-index: 10;
  height: auto;
}
.xpanel-wrapper-65 {
  height: 732px;
}
.xpanel-wrapper-45 {
  height: 333px;
  margin-top: -30px;
}
/* 中 */
.xpanel-wrapper-25 {
  position: absolute;
  bottom: 13px;
  left: 512px;
  z-index: 1;
  height: auto;
  padding: 0;
  .xpanel-c-b {
    height: 307px;
    position: relative;
    overflow: hidden;
  }
  .xpanel-c-b-c {
    height: 307px;
  }
}
/* 天气 */
.diw {
  width: 600px;
  height: 25px;
  position: relative;
  left: 0;
  margin-top: 35px;
}
/* 遮罩层 */
// .topzzc {
//   background: url('../assets/images/bodybg/1.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   width: 1920px;
//   height: 112px;
//   position: absolute;
//   top: 0;
//   background-size: 100% 100%;
//   z-index: 1;
// }
// .leftzzc {
//   position: absolute;
//   background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   height: 443px;
//   width: 475px;
//   top: 119px;
//   left: 26px;
//   z-index: 1;
// }
// .leftzzcs {
//   position: absolute;
//   background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   height: 483px;
//   width: 475px;
//   top: 579px;
//   left: 26px;
//   z-index: 1;
// }
// .centerzzc {
//   position: absolute;
//   background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   width: 550px;
//   height: 290px;
//   bottom: 20px;
//   left: 508px;
//   z-index: 1;
// }
// .centerzzctu {
//   position: absolute;
//   background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   width: 320px;
//   height: 291px;
//   bottom: 20px;
//   right: 535px;
//   z-index: 1;
// }
// .rigthzzc {
//   position: absolute;
//   background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   width: 493px;
//   height: 710px;
//   top: 126px;
//   right: 30px;
//   z-index: 1;
// }
// .rigthzzcs {
//   position: absolute;
//   background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
//   background-size: 100% 100%;
//   width: 490px;
//   height: 210px;
//   bottom: 25px;
//   right: 33px;
//   z-index: 1;
// }
.bodybg_top {
  width: 1920px;
  height: 78px;
  position: absolute;
  top: -1px;
  // bottom: 6px;
  background: url('../image/sqzzbg2.png') no-repeat left top / 100% 100%;
  z-index: 0;
}
// .bodybg_right {
//   width: 555px;
//   height: 676px;
//   position: absolute;
//   top: 96px;
//   right: 0px;
//   background: url('../image/sqzzbgRight.png') no-repeat;
//   z-index: 10;
// }
// .bodybg_bottom {
//   width: 1920px;
//   height: 328px;
//   position: absolute;
//   right: 0;
//   bottom: -19px;
//   left: 0px;
//   background: url('../image/sqzzbgBottom.png') no-repeat;
//   z-index: 10;
// }
// .bodybg_left {
//   width: 556px;
//   height: 676px;
//   position: absolute;
//   top: 96px;
//   left: 0;
//   background: url('../image/sqzzbgLeft.png') no-repeat;
//   z-index: 10;
// }
.showMap {
  cursor: pointer;
  position: absolute;
  top: 710px;
  left: 1350px;
  height: 40px;
  width: 40px;
  // border-radius: 10px;
  background: url('../assets/images/quanping.png') no-repeat;
  z-index: 1001;
}
.hiddenMap {
  cursor: pointer;
  position: absolute;
  top: 1020px;
  left: 1880px;
  height: 40px;
  width: 40px;
  // border-radius: 10px;
  background: url('../assets/images/quanping.png') no-repeat;
  z-index: 1001;
}
@keyframes sjfn {
  to {
    transform: translateY(-8px);
  }
}
.maine-bg {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #131854;
  bottom: 62px;
  left: 145px;
  border-radius: 50%;
}
</style>
