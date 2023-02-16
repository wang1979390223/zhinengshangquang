<!-- 家政大屏 -->
<template>
  <div class="main">
    <iframe
      id="mapIframe"
      src="https://www.coveycity.com:444/ccdt/index.html"
      frameborder="0"
      width="1920px"
      height="1080px"
      scrolling="no"
    ></iframe>
    <!-- 地图全屏展示按钮 -->
    <button
      class="showMap"
      :class="{ hideMap: mapall == true }"
      @click="mapall = !mapall"
    ></button>
    <!-- <button
      v-trigger
      style="width:200px;height:200px"
      @click="handleClick"
    ></button> -->
    <!-- <div class="bodybg_bottom"></div> -->
    <div class="bodybg_top"></div>
    <div class="header_nav">
      <div class="header_nav_list">
        <ul>
          <li class="header_nav_list_li" @click="$router.push('/souye')">
            驾驶舱
          </li>
          <li class="header_nav_list_li" @click="$router.push('/wisdomcamp')">
            商圈智营
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
          <div class="q2s">
            <div id="he-plugin-simple"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 左侧 -->
    <div
      class="left-box animate__animated animate__bounceInLeft"
      :class="{ animate__lightSpeedOutLeft: mapall == true }"
    >
      <div class="title">
        <span class="title-sty">综合行政执法队</span>
      </div>
      <!-- 旋转部分 -->
      <div class="top">
        <div class="item-box">
          <div
            v-for="(item, index) in leftDataList"
            :key="item.text"
            class="top-item"
            :class="`top-item-${index}`"
          >
            <span class="title-sty text">{{ item.text }}</span>
          </div>
        </div>
      </div>
      <!-- 标题 -->
      <div class="title-qjsj">
        <span class="left-icon"></span>
        <span class="text title-sty">区建设局</span>
        <span class="right-icon"></span>
      </div>
      <!-- 正文 -->
      <div class="text-content">
        <i class="zz-icon"></i>
        <span class="tit title-sty">职责：</span>
        <p>
          负责西市街商圈人民广场区域绿化维护和公共设施建设管理，做好商圈绿化、路面保洁、环境卫生公共设施维护，清理公共绿地卫生死角和杂物堆放，彻底清除“脏、乱、差”现象，确保公厕、垃圾房、果壳箱等环卫设施齐全、管理规范。
        </p>
      </div>
      <!-- tabel -->
      <div class="m-table">
        <div class="left-c">
          <div class="num">18</div>
          <div class="zq title-sty">职权</div>
        </div>
        <div class="r-table">
          <div
            v-for="(item, idx) in tableData"
            :key="`table-${idx}`"
            class="table-tr"
          >
            <div class="table-td b-r">{{ item.title }}</div>
            <div class="table-td">{{ item.content }}</div>
            <div class="table-td b-l">{{ item.isAll }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下方 -->
    <div
      class="bottom-box animate__animated animate__bounceInLeft"
      :class="{ animate__fadeOutBottomLeft: mapall == true }"
    >
      <div v-if="showComponents == 'centerSanwei'" class="box">
        <div class="left-tab">
          <div
            class="tab-item"
            :class="{ active: tabCheck }"
            @click="tabCheck = true"
          >
            部门分类
          </div>
          <div
            class="tab-item"
            :class="{ active: !tabCheck }"
            @click="tabCheck = false"
          >
            行业分类
          </div>
        </div>
        <div class="title">
          <span class="sw title-sty">三维防控</span>
        </div>
        <!-- 左侧列表 -->
        <div class="left-list">
          <div
            v-for="(item, idx) in swDataList"
            :key="`sw-${idx}`"
            class="left-list-item"
          >
            <div
              class="icon"
              :style="
                `background: url(${require('../../assets/images/sqzy/' +
                  item.icon)}) no-repeat left top / 100% 100%;`
              "
            ></div>
            <div class="right-content">
              <p>
                <span>{{ item.num }}</span> 项
              </p>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <!-- 三角图案 -->
        <div class="center-list">
          <div class="left-bottom-jt"></div>
          <div class="right-bottom-jt"></div>
          <div class="center-bottom-jt"></div>
          <div class="fz center-bottom-jt"></div>
          <div class="sj-bg">
            <div class="icon"></div>
            <p class="text title-sty">监管执法</p>
          </div>
          <div class="left-bg sj-bg">
            <div class="icon"></div>
            <p class="text title-sty">企业自查</p>
          </div>
          <div class="right-bg sj-bg">
            <div class="icon"></div>
            <p class="text title-sty">联合监督</p>
          </div>
          <div class="text-content">
            <div class="content">
              <div class="content-item">
                <span>6</span>
                <p>检查</p>
              </div>
              <div class="content-item">
                <span>2</span>
                <p>发现问题</p>
              </div>
            </div>
            <div class="bg"></div>
          </div>
          <div class="right-text-sj text-content">
            <div class="content">
              <div class="content-item">
                <span>6</span>
                <p>检查</p>
              </div>
              <div class="content-item">
                <span>2</span>
                <p>发现问题</p>
              </div>
            </div>
            <div class="bg"></div>
          </div>
          <div class="left-text-sj text-content">
            <div class="content">
              <div class="content-item">
                <span>6</span>
                <p>自查</p>
              </div>
              <div class="content-item">
                <span>2</span>
                <p>未完成</p>
              </div>
              <div class="content-item">
                <span>0</span>
                <p>纠正</p>
              </div>
            </div>
            <div class="bg"></div>
          </div>
        </div>
        <!-- 图表 -->
        <div class="line-chart">
          <div id="line-chart"></div>
          <p class="text">三维防控一体化合规管理</p>
        </div>
      </div>
      <centerXiaoFang
        v-if="showComponents == 'centerXiaoFang'"
        class="centerXiaoFang"
        style="box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
      ></centerXiaoFang>
      <centerZhiAn
        v-if="showComponents == 'centerZhiAn'"
        class="centerZhiAn"
        style="box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
      ></centerZhiAn>
      <centerHuanJing
        v-if="showComponents == 'centerHuanJing'"
        class="centerHuanJing"
        style="box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
      ></centerHuanJing>
      <centerShiPin
        v-if="showComponents == 'centerShiPin'"
        class="centerShiPin"
        style="box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;"
      ></centerShiPin>
    </div>
    <!-- 右方 -->
    <div
      class="right-box animate__animated animate__bounceInRight"
      :class="{ animate__lightSpeedOutRight: mapall == true }"
    >
      <div class="title">
        <span class="fk title-sty">防控治理</span>
      </div>
      <!-- 防控场景 -->
      <div class="fkcj-box">
        <div class="fk-title">
          <div class="icon"></div>
          <span @click="handleChange('centerSanwei')">防控场景</span>
        </div>
        <div class="fkcj_content">
          <div>
            <ul>
              <li
                v-for="item in fkcj_content"
                :key="item.id"
                @click="handleChange(item.components)"
              >
                <div class="fkcj_content_num">{{ item.num }}</div>
                <img class="fkcj_content_img" :src="item.img" alt="">
                <div class="fkcj_content_title">
                  {{ item.title }}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="fk-content">
          <div
            v-for="(fkItem, idx) in fkDataList"
            :key="`fk-${idx}`"
            class="fk-content-item"
            @click="handleChange(fkItem.components)"
          >
            <div
              class="fk-icon"
              :style="
                `background: url(${require('../../assets/images/sqzy/' +
                  fkItem.icon)}) no-repeat left top / 100% 100%;`
              "
            ></div>
            <p>
              {{ fkItem.title }}
              <span v-if="fkItem.num > 0" class="num">{{ fkItem.num }}</span>
            </p>
          </div>
        </div> -->
        <!-- 物联感知 -->
        <div class="wlgz-box">
          <div class="wl-title">
            <div class="icon"></div>
            <span>物联感知</span>
          </div>
          <div class="chart">
            <div id="bar-chart"></div>
          </div>
        </div>
        <!-- 治理闭环 -->
        <div class="zlbh-box">
          <div class="zl-title">
            <div class="icon"></div>
            <span>治理闭环</span>
          </div>
          <!-- 表格 -->
          <div class="zl-table">
            <div class="zl-table-title">
              <span class="text">预警</span>
              <span class="icon"></span>
              <span class="text">分办</span>
              <span class="icon"></span>
              <span class="text">处置</span>
              <span class="icon"></span>
              <span class="text">办结</span>
            </div>
            <div class="zl-table-head">
              <span class="text">类别</span>
              <span class="text">事件</span>
              <span class="text">时间</span>
              <span class="text">状态</span>
            </div>
            <div class="zl-table-body">
              <div
                v-for="(zlItem, idx) in zlTableList"
                :key="`zl-table-${idx}`"
                class="zl-table-tr"
              >
                <div
                  class="zl-table-td"
                  style="width: 152px; text-indent: 34px;"
                >
                  {{ zlItem.type }}
                </div>
                <div class="zl-table-td">{{ zlItem.content }}</div>
                <div class="zl-table-td">{{ zlItem.time }}</div>
                <div
                  class="zl-table-td"
                  style="width: 60px;"
                  :style="`color: ${statusColor[zlItem.statusCode]}`"
                >
                  {{ zlItem.status }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 地图上方标识 -->
    <!-- <div class="dituBS">
      <div class="tuceng">
        <div class="tuceng1" @click="showMapbs">
          <img
            style="width:56px;height:56px"
            src="../../image/diyi.png"
            alt=""
          >
          <p :class="['tc', { tc2: showMapicon }]">图层</p>
        </div>
      </div>
      <template v-if="showMapicon">
        <div
          v-for="(item, index) in mapbiaoshiList"
          :key="index"
          class="tucengSon"
        >
          <div>
            <img style="width:44px;height:44px" :src="item.url" alt="">
          </div>
          <p>{{ item.name }}</p>
        </div>
      </template>
    </div> -->
    <div :class="['shugao', { shugaoBox: showicon == true }]"></div>
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
import centerXiaoFang from './centerXiaoFang';
import centerZhiAn from './centerZhiAn';
import centerHuanJing from './centerHuanJing';
import centerShiPin from './centerShiPin';
import AMapLoader from '@amap/amap-jsapi-loader';

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
    centerXiaoFang,
    centerZhiAn,
    centerHuanJing,
    centerShiPin
  },
  data() {
    return {
      showicon: false,
      showComponents: 'centerSanwei',
      mapall: false,
      tabCheck: true,
      statusColor: {
        1: 'rgba(214, 0, 0, 1)',
        2: 'rgba(254, 165, 10, 1)',
        3: 'rgba(0, 202, 105, 1)'
      },
      fkcj_content: [
        {
          num: '260',
          img: require('@/assets/images/sqzy/red.png'),
          title: '消防',
          id: '0001',
          components: 'centerXiaoFang'
        },
        {
          num: '10',
          img: require('@/assets/images/sqzy/blue.png'),
          title: '治安',
          id: '0002',
          components: 'centerZhiAn'
        },
        {
          num: '56',
          img: require('@/assets/images/sqzy/green.png'),
          title: '环境',
          id: '0003',
          components: 'centerHuanJing'
        }
      ],
      zlTableList: [
        {
          type: '消防',
          content: '烟雾传感',
          time: '10:58:40',
          status: '预警',
          statusCode: 1
        },
        {
          type: '治安',
          content: '异常移动',
          time: '10:58:40',
          status: '预警',
          statusCode: 1
        },
        {
          type: '环境',
          content: '空气污染',
          time: '10:58:40',
          status: '处置中',
          statusCode: 2
        },
        {
          type: '食品',
          content: '餐厨垃圾',
          time: '10:58:40',
          status: '办结',
          statusCode: 3
        }
      ],
      fkDataList: [
        {
          title: '消防',
          num: 2,
          icon: 'xf-right-item.png',
          components: 'centerXiaoFang'
        },
        {
          title: '治安',
          num: 0,
          icon: 'za-right-item.png',
          components: 'centerZhiAn'
        },
        {
          title: '环境',
          num: 0,
          icon: 'hj-right-item.png',
          components: 'centerHuanJing'
        },
        {
          title: '食品',
          num: 0,
          icon: 'sp-right-item.png',
          components: 'centerShiPin'
        }
      ],
      leftDataList: [
        { text: '区建设局' },
        { text: '区行政执法局' },
        { text: '区市场监管局' },
        { text: '区商务局' },
        { text: '区经商局' },
        { text: '区公安局' },
        { text: '区卫健局' },
        { text: '区环保局' },
        { text: '区应急指挥中心' },
        { text: '区交警支队' },
        { text: '城中街道' },
        { text: '区消防大队' }
      ],
      tableData: [
        {
          title: '房地产业',
          content: '对装修人因住宅室内装饰装修活动...',
          isAll: '全部'
        },
        {
          title: '房地产业',
          content: '对装修人因住宅室内装饰装修活动...',
          isAll: '全部'
        },
        {
          title: '房地产业',
          content: '对装修人因住宅室内装饰装修活动...',
          isAll: '部分'
        },
        {
          title: '房地产业',
          content: '对装修人因住宅室内装饰装修活动...',
          isAll: '全部'
        },
        {
          title: '房地产业',
          content: '对装修人因住宅室内装饰装修活动...',
          isAll: '全部'
        }
      ],
      swDataList: [
        { title: '区公安局', num: 13, icon: 'sw-icon-1.png' },
        { title: '区市场监管局', num: 2, icon: 'sw-icon-2.png' },
        { title: '区交警支队', num: 2, icon: 'sw-icon-3.png' },
        { title: '区建设局', num: 1, icon: 'sw-icon-4.png' },
        { title: '区经商局', num: 3, icon: 'sw-icon-5.png' },
        { title: '区环保局', num: 3, icon: 'sw-icon-6.png' },
        { title: '区行政执法局', num: 4, icon: 'sw-icon-7.png' },
        { title: '城中街道', num: 10, icon: 'sw-icon-8.png' },
        { title: '区卫健局', num: 10, icon: 'sw-icon-9.png' },
        { title: '区商务局', num: 4, icon: 'sw-icon-10.png' },
        { title: '区消防救援大队', num: 8, icon: 'sw-icon-11.png' },
        { title: '区应急指挥中心', num: 8, icon: 'sw-icon-12.png' }
      ],
      showMapicon: false,
      showDialog: false,
      // showComponents: 'leftBottom',
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
      ],
      item: [100, 860, 550, 880, 330, 220, 450, 300, 100]
    };
  },
  mounted() {
    this.initMap();
    // this.$nextTick.handleClick();
    this.$set(() => {
      this.handleClick();
    });
    this.draww();
    this.drawwBar();
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
    showIcon() {
      this.showicon = !this.showicon;
    },
    handleChange(name) {
      this.showComponents = name;
      if (name == 'centerSanwei') {
        this.$nextTick(() => {
          this.draww();
        });
      }
    },
    drawwBar() {
      this.myChart = this.$echarts.init(document.getElementById('bar-chart'));
      var option = {
        grid: {
          top: 30,
          bottom: 30,
          right: 20,
          left: 60
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff', // 刻度线标签颜色
            formatter: function(params) {
              var newParamsName = '';
              var paramsNameNumber = params.length;
              var provideNumber = 2; // 一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = '';
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 180, 214, 1)'
            }
          },
          data: [
            '烟雾传感',
            '消防水压',
            '餐饮燃气',
            '消防通道',
            '环境监测',
            '窑井监测',
            '人流监测',
            '高空全景',
            '步道监测',
            '街景视频'
          ]
        },
        yAxis: {
          name: '數量',
          nameTextStyle: {
            color: '#fff'
          },
          type: 'value',
          boundaryGap: [0, '30%'],
          axisLabel: {
            color: '#fff' // 刻度线标签颜色
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(38, 245, 245, 0.2)'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 180, 214, 1)'
            }
          }
        },
        series: [
          {
            name: '数据一',
            type: 'bar',
            stack: 'Ad',
            barWidth: 18,
            itemStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: 'rgba(0, 162, 255, 1)'
                },
                {
                  offset: 0,
                  color: 'rgba(34, 117, 255, 1)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250, 220, 340, 310]
          },
          {
            name: '数据二',
            type: 'bar',
            stack: 'Ad',
            barWidth: 18,
            itemStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(8, 130, 160, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(32, 217, 170, 1)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310, 125, 253, 321]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    draww() {
      this.myChart = this.$echarts.init(document.getElementById('line-chart'));
      const colors = ['#5470C6', '#EE6666'];
      var option = {
        legend: {
          show: true,
          top: 20,
          right: 30,
          data: ['自查', '巡查', '检查', '立案'],
          textStyle: {
            color: 'rgb(255,255,255,0.9)'
          }
        },

        grid: {
          top: 50,
          bottom: 30
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
          },
          data: [
            '2019-10-10',
            '2019-10-11',
            '2019-10-12',
            '2019-10-13',
            '2019-10-14',
            '2019-10-15',
            '2019-10-16'
          ]
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
            stack: 'Total',
            smooth: true,
            lineStyle: {
              color: 'rgba(250, 44, 238, 1)'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(250, 44, 238, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(250, 44, 238, 0)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: '巡查',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              color: 'rgba(210, 217, 135, 1)'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(210, 217, 135, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(210, 217, 135, 0)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: '检查',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              color: 'rgba(56, 225, 179, 1)'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(56, 225, 179, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(56, 225, 179, 0)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
          },
          {
            name: '立案',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              color: 'rgba(236, 0, 0, 1)'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(236, 0, 0, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(236, 0, 0, 0)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          }
        ]
      };
      this.myChart.setOption(option);
    },
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

<style>
body {
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
@keyframes animX {
  0% {
    left: -10px;
  }
  100% {
    left: 350px;
  }
}
@keyframes animY {
  0% {
    top: 0px;
  }
  100% {
    top: 150px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}

// 地图
.showMap {
  cursor: pointer;
  position: absolute;
  top: 713px;
  left: 1361px;
  height: 40px;
  width: 40px;
  // border-radius: 10px;
  background: url('../../assets/images/quanping(2).png') no-repeat;
  z-index: 1001;
}

.hideMap {
  top: 1033px;
  left: 1880px;
}

.title-sty {
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 45px;
  background: linear-gradient(180deg, #ffffff 0%, #34cdff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.left-box {
  position: absolute;
  left: 25px;
  width: 486px;
  height: 657px;
  bottom: 329px;
  background: url('../../assets/images/sqzy/left-bg.png') no-repeat left top /
    100% 100%;
  .title {
    width: 300px;
    height: 46px;
    background: url('../../assets/images/sqzy/left-title-bg.png') no-repeat left
      top / 100% 100%;
    margin: 24px 0 0 16px;
    padding-left: 10px;
  }
  .m-table {
    margin-top: 24px;
    overflow: hidden;
    .left-c {
      float: left;
      margin: 24px 11px 0 21px;
      .num {
        width: 62px;
        height: 62px;
        background: url('../../assets/images/sqzy/num-bg.png') no-repeat left
          top / 100% 100%;
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #10e4e5;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 5px;
      }
      .zq {
        font-size: 14px;
        text-align: center;
        padding-right: 5px;
      }
    }
    .r-table {
      width: 367px;
      height: 138px;
      background: rgba(17, 77, 140, 0.14);
      border: 1px solid rgba(16, 228, 229, 0.14);
      display: table;
      .table-tr {
        display: table-row;
        height: 27px;
        border-bottom: 1px solid rgba(38, 245, 245, 0.4);
        .b-r {
          border-right: 2px solid rgb(38 245 245 / 4%);
        }
        .b-l {
          width: 65px;
          border-left: 2px solid rgb(38 245 245 / 4%);
        }
        .table-td {
          text-align: center;
          display: table-cell;
          font-size: 10px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
        }
      }
    }
  }
  .text-content {
    position: relative;
    padding-left: 49px;
    .zz-icon {
      position: absolute;
      left: 0;
      top: -19px;
      width: 57px;
      height: 56px;
      background: url(../../assets/images/sqzy/zz-icon.png) no-repeat left top /
        100% 100%;
    }
    .tit {
      display: inline-block;
      width: 45px;
      font-size: 14px;
      vertical-align: top;
      line-height: 20px;
    }
    p {
      display: inline-block;
      width: 355px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #feffff;
      line-height: 20px;
    }
  }
  .title-qjsj {
    text-align: center;
    display: flex;
    justify-content: center;
    .text {
      margin: 247px 14px 0 14px;
      font-size: 22px;
    }
    .left-icon {
      margin-top: 259px;
      margin-bottom: 19px;
      width: 20px;
      height: 21px;
      background: url(../../assets/images/sqzy/left_jt.png) no-repeat left top /
        100% 100%;
    }
    .right-icon {
      margin-top: 259px;
      margin-bottom: 19px;
      width: 20px;
      height: 21px;
      background: url(../../assets/images/sqzy/right_jt.png) no-repeat left top /
        100% 100%;
    }
  }
  .top {
    position: absolute;
    left: 23px;
    top: 54px;
    width: 440px;
    height: 270px;
    background: url(../../assets/images/sqzy/left-dz.png) no-repeat left top /
      100% 100%;
    transform-style: preserve-3d;
    perspective: 1000px;
    .item-box {
      width: 440px;
      height: 270px;
      position: relative;
      &:hover .top-item {
        animation-play-state: paused;
      }
    }
    .top-item {
      width: 101px;
      height: 88px;
      text-align: center;
      padding-top: 40px;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      transform-origin: bottom;
      .text {
        font-size: 17px;
        line-height: 32px;
      }
    }
    .top-item-0 {
      background: url(../../assets/images/sqzy/left-icon-1.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
    }

    .top-item-1 {
      background: url(../../assets/images/sqzy/left-icon-2.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -6.667s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -1.667s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -1.667s infinite alternate;
    }

    .top-item-2 {
      background: url(../../assets/images/sqzy/left-icon-3.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -8.334s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -3.334s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -3.334s infinite alternate;
    }

    .top-item-3 {
      background: url(../../assets/images/sqzy/left-icon-4.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.001s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.001s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.001s infinite alternate;
    }

    .top-item-4 {
      background: url(../../assets/images/sqzy/left-icon-5.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -11.668s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -6.668s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -6.668s infinite alternate;
    }

    .top-item-5 {
      background: url(../../assets/images/sqzy/left-icon-6.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.335s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.335s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.335s infinite alternate;
    }

    .top-item-6 {
      background: url(../../assets/images/sqzy/left-icon-7.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -15.002s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -10.002s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -10.002s infinite alternate;
    }
    .top-item-7 {
      background: url(../../assets/images/sqzy/left-icon-8.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -16.669s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -11.669s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -11.669s infinite alternate;
    }
    .top-item-8 {
      background: url(../../assets/images/sqzy/left-icon-9.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -18.336s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -13.336s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -13.336s infinite alternate;
    }
    .top-item-9 {
      background: url(../../assets/images/sqzy/left-icon-10.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -20.003s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -15.003s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -15.003s infinite alternate;
    }
    .top-item-10 {
      background: url(../../assets/images/sqzy/left-icon-11.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -21.67s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -16.667s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -16.667s infinite alternate;
    }
    .top-item-11 {
      background: url(../../assets/images/sqzy/left-icon-12.png) no-repeat left
        top / 100% 100%;
      animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -23.337s infinite alternate,
        animY 10s cubic-bezier(0.36, 0, 0.64, 1) -18.337s infinite alternate,
        scale 20s cubic-bezier(0.36, 0, 0.64, 1) -18.337s infinite alternate;
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
.bottom-box {
  position: absolute;
  left: 24px;
  bottom: 16px;
  width: 1375px;
  height: 319px;
  .box {
    width: 1375px;
    height: 319px;
    overflow: hidden;
    position: relative;
    background: url(../../assets/images/sqzy/bottom-bg.png) no-repeat left top /
      100% 100%;
  }
  .left-tab {
    position: absolute;
    left: 7px;
    top: 95px;
    .tab-item {
      width: 30px;
      height: 81px;
      background: rgba(29, 103, 153, 0.14);
      border: 1px solid #1d6799;
      border-radius: 0px 6px 6px 0px;
      font-size: 13px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 15px;
      padding: 9px 7px;
      cursor: pointer;
      &.active {
        background: rgba(255, 174, 0, 0.14);
        border: 1px solid #ffae00;
        color: #ffae00;
      }
    }
  }
  .title {
    width: 232px;
    height: 36px;
    background: url(../../assets/images/sqzy/title-bg.png) no-repeat left top /
      100% 100%;
    margin: 25px 0 0 21px;
    padding-left: 10px;
    .sw {
      line-height: 36px;
    }
  }
  .line-chart {
    width: 490px;
    height: 290px;
    position: absolute;
    right: 0;
    top: 0;
    .text {
      position: absolute;
      bottom: -18px;
      left: 158px;
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
    }
    #line-chart {
      width: 100%;
      height: 100%;
    }
  }
  .center-list {
    position: absolute;
    width: 395px;
    height: 319px;
    top: 0;
    left: 470px;
    .sj-bg {
      width: 125px;
      height: 87px;
      background: url(../../assets/images/sqzy/center_bg.png) no-repeat left top /
        100% 100%;
      position: absolute;
      left: 141px;
      top: 61px;
      text-align: center;
      .icon {
        margin-top: 7px;
        width: 40px;
        height: 44px;
        background: url(../../assets/images/sqzy/jgzf-icon.png) no-repeat left
          top / 100% 100%;
        display: inline-block;
      }
      .text {
        font-size: 12px;
        line-height: 16px;
        margin-top: -7px;
      }
    }
    .left-bg {
      left: 14px;
      top: 211px;
      .icon {
        background: url(../../assets/images/sqzy/qyzc-icon.png) no-repeat left
          top / 100% 100%;
      }
    }
    .right-bg {
      top: 211px;
      left: 268px;
      .icon {
        background: url(../../assets/images/sqzy/lhjd-icon.png) no-repeat left
          top / 100% 100%;
      }
    }
    .left-bottom-jt {
      width: 59px;
      height: 60px;
      background: url(../../assets/images/sqzy/left-bottom-jt.png) no-repeat
        left top / 100% 100%;
      position: absolute;
      left: 94px;
      top: 134px;
    }
    .right-bottom-jt {
      width: 63px;
      height: 55px;
      background: url(../../assets/images/sqzy/right-bottom-jt.png) no-repeat
        left top / 100% 100%;
      position: absolute;
      left: 268px;
      top: 144px;
    }
    .center-bottom-jt {
      width: 121px;
      height: 14px;
      position: absolute;
      left: 144px;
      top: 255px;
      background: url(../../assets/images/sqzy/center-bottom-jt.png) no-repeat
        left top / 100% 100%;
    }
    .fz {
      left: 138px;
      top: 271px;
      transform: rotateY(180deg);
    }
    .text-content {
      width: 130px;
      position: absolute;
      left: 138px;
      bottom: 236px;
      &.right-text-sj {
        left: 264px;
        bottom: 86px;
      }
      &.left-text-sj {
        width: 155px;
        left: 0;
        bottom: 86px;
      }
      .content {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 0 18px 15px;
        z-index: 10;
        .content-item {
          text-align: center;
          span {
            font-size: 19px;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #00fffc;
            line-height: 23px;
          }
          p {
            font-size: 12px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 10px;
          }
        }
      }
      .bg {
        position: absolute;
        width: 100%;
        height: 37px;
        background: url(../../assets/images/sqzy/num-big-bg.png) no-repeat left
          top / 100% 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
  .left-list {
    width: 415px;
    overflow: hidden;
    margin-left: 53px;
    .left-list-item {
      width: 136px;
      display: flex;
      float: left;
      align-items: flex-end;
      margin-top: 10px;
      .icon {
        width: 52px;
        height: 50px;
      }
      p {
        font-size: 12px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 17px;
        span {
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          font-style: italic;
          color: #10e4e5;
        }
      }
    }
  }
}
.right-box {
  position: absolute;
  right: 25px;
  bottom: 11px;
  width: 486px;
  height: 975px;
  background: url(../../assets/images/sqzy/right-bg.png) no-repeat left top /
    100% 100%;
  .title {
    width: 232px;
    height: 36px;
    background: url(../../assets/images/sqzy/title-bg.png) no-repeat left top /
      100% 100%;
    margin: 29px 0 0 15px;
    padding-left: 10px;
    .fk {
      line-height: 36px;
    }
  }
  .zlbh-box {
    .zl-title {
      .icon {
        width: 59px;
        height: 72px;
        display: inline-block;
        background: url(../../assets/images/sqzy/left-big-jt.png) no-repeat left
          top / 100% 100%;
        vertical-align: top;
      }
      span {
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #b4d7fa;
        margin: 24px 0 0 -10px;
        display: inline-block;
      }
    }
    .zl-table {
      width: 460px;
      margin-left: 11px;
      border: 1px solid rgb(6 79 137 / 83%);
      .zl-table-title {
        width: 460px;
        height: 47px;
        background: linear-gradient(
          0deg,
          rgba(13, 95, 215, 0.14),
          rgba(13, 95, 215, 0.14)
        );
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        .text {
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #b4d7fa;
        }
        .icon {
          width: 20px;
          height: 22px;
          background: url(../../assets/images/sqzy/table-right-jt.png) no-repeat
            left top / 100% 100%;
        }
      }
      .zl-table-head {
        width: 459px;
        height: 45px;
        background: rgb(15 71 128 / 10%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 33px;
        .text {
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #87d1ef;
        }
      }
      .zl-table-body {
        width: 459px;
        display: table;
        .zl-table-tr {
          height: 45px;
          display: table-row;
          .zl-table-td {
            display: table-cell;
            font-size: 14px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #ffffff;
            padding-top: 10px;
          }
        }
      }
    }
  }
  .wlgz-box {
    .wl-title {
      margin-top: 14px;
      .icon {
        width: 59px;
        height: 72px;
        display: inline-block;
        background: url(../../assets/images/sqzy/left-big-jt.png) no-repeat left
          top / 100% 100%;
        vertical-align: top;
      }
      span {
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #b4d7fa;
        margin: 24px 0 0 -10px;
        display: inline-block;
      }
    }
    .chart {
      height: 230px;
      #bar-chart {
        width: 100%;
        height: 100%;
      }
    }
  }
  .fkcj-box {
    .fk-title {
      margin-top: 14px;
      .icon {
        width: 59px;
        height: 72px;
        display: inline-block;
        background: url(../../assets/images/sqzy/left-big-jt.png) no-repeat left
          top / 100% 100%;
        vertical-align: top;
      }
      span {
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #b4d7fa;
        margin: 24px 0 0 -10px;
        display: inline-block;
        cursor: pointer;
      }
    }
    .fkcj_content {
      ul {
        display: flex;
        justify-content: space-around;
        li {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items:center;
          width: 110px;
          .fkcj_content_num {
            margin-bottom: 4px;
            // width: 68px;
            height: 30px;
            font-size: 38px;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #10e4e6;
            line-height: 28px;
            background: linear-gradient(0deg, #ffffff 0%, #ff3434 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .fkcj_content_img {
            margin-bottom: 8px;
            width: 109px;
            height: 72px;
          }
          .fkcj_content_title {
            width: 52px;
            height: 29px;
            font-size: 26px;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: #fefeff;
            line-height: 29px;
            background: linear-gradient(0deg, #ffffff 0%, #ff3434 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
    .fk-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 18px 0 22px;
      .fk-content-item {
        width: 101px;
        text-align: center;
        cursor: pointer;
        .fk-icon {
          width: 101px;
          height: 92px;
        }
        p {
          position: relative;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #fefeff;
          margin-top: 10px;
        }
        .num {
          position: absolute;
          right: 18px;
          top: -5px;
          border-radius: 50%;
          padding: 4px 7px;
          font-size: 12px;
          background: red;
          color: #fff;
          line-height: 12px;
        }
      }
    }
  }
}
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
    background: url(../../assets/images/sqzy/bottom-bg.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -180px 73px -100px rgb(17 57 83 / 90%);
    box-shadow: rgb(17 57 83 / 90%) 9px -90px 53px -80px;
  }
  .centerXiaoFang {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    // position: absolute;
    // top: 745px;
    // left: 25px;
    // right: 521px;
    // bottom: 16px;
    background: url(../../assets/images/sqzy/bottom-bg.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .centerZhiAn {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    // position: absolute;
    // top: 745px;
    // left: 25px;
    // right: 521px;
    // bottom: 16px;
    background: url(../../assets/images/sqzy/bottom-bg.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .centerHuanJing {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    // position: absolute;
    // top: 745px;
    // left: 25px;
    // right: 521px;
    // bottom: 16px;
    background: url(../../assets/images/sqzy/bottom-bg.png) no-repeat left top /
      100% 100%;
    // box-shadow: 109px -10px 73px -100px rgb(17 57 83 / 90%);
  }
  .centerShiPin {
    line-height: 30px;
    width: 1375px;
    height: 319px;
    // position: absolute;
    // top: 745px;
    // left: 25px;
    // right: 521px;
    // bottom: 16px;
    background: url(../../assets/images/sqzy/bottom-bg.png) no-repeat left top /
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
