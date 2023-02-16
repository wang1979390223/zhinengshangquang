<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable no-undef -->
<template>
  <div class="main">
    <!-- <div class="q1s">
      <div>
        <dayjs></dayjs>
      </div>
      <span class="sj">{{ datesss }}</span>
      <div class="tianqi">
        <div id="he-plugin-simple"></div>
      </div>
    </div> -->
    <!--  -->
    <!-- 关闭地图全屏按钮 -->
    <button
      v-if="showHiddenMapAll"
      class="hiddenMap"
      @click="hiddenMapAll"
    ></button>
    <!-- <div class="bodybg_right"></div>
    <div class="bodybg_bottom"></div>
    <div class="bodybg_left"></div> -->
    <div class="bodybg_top"></div>
    <!-- 头部 -->
    <div class="top">
      <!-- <ul class="top-1">
        <li class="lfs">
          <a class="lfs">驾驶舱</a>
        </li>
        <li class="lf" @click="$router.push('/wisdomcamp')">商圈智营</li>
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
        <li class="rt" @click="$router.push('/sqFuWu')">商圈服务</li>
        <li class="rt" @click="$router.push('/sqDangJian')">商圈党建</li>
      </ul> -->
    </div>

    <div class="header_nav">
      <div class="header_nav_list">
        <ul>
          <li class="header_nav_list_li">驾驶舱</li>
          <li class="header_nav_list_li" @click="$router.push('/wisdomcamp')">
            商圈智营
          </li>
          <li class="header_nav_list_li" @click="$router.push('/sqZhiYing')">
            商圈智治
          </li>
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
            <span class="name"> 姜安南 </span>
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

    <!-- 左边 -->
    <div
      :class="[
        'left',
        'animate__animated',
        'animate__bounceInLeft',
        { animate__lightSpeedOutLeft: mapall == true }
      ]"
    >
      <div class="left-1">
        <div class="tite">
          <div class="jbs">商圈运行</div>
          <div class="specificdate">
            <div
              :class="[
                'specificdateyear',
                { specificdateyear2: showSqzyName == 'year' }
              ]"
              @click="showSqzy('year')"
            >
              年
            </div>
            <div
              :class="[
                'specificdatemonth',
                { specificdatemonth2: showSqzyName == 'month' }
              ]"
              @click="showSqzy('month')"
            >
              月
            </div>
            <div
              :class="[
                'specificdateday',
                { specificdateday2: showSqzyName == 'day' }
              ]"
              @click="showSqzy('day')"
            >
              日
            </div>
          </div>
        </div>
        <div class="ssx">
          <!-- 年 -->
          <template v-if="showSqzyName == 'year'">
            <div
              v-for="(item, index) in obj"
              :key="index"
              class="px"
              @click="showTC3(item)"
            >
              <div style="font-size: 12px">
                <span
                  style="color: #10e4e5; font-size: 24px; font-style: italic"
                >
                  {{ item.sz }}</span>
                {{ item.dw }}
              </div>
              <div :class="['objText', { objText2: objDb == item.db }]">
                {{ item.db }}
              </div>
            </div>
          </template>
          <!-- 月 -->
          <template v-if="showSqzyName == 'month'">
            <div
              v-for="(item, index) in obj2"
              :key="index"
              class="px"
              @click="showTC3(item)"
            >
              <div style="font-size: 12px">
                <span
                  style="color: #10e4e5; font-size: 24px; font-style: italic"
                >
                  {{ item.sz }}</span>
                {{ item.dw }}
              </div>
              <div :class="['obj2Db', { obj2Db2: obj2Db == item.db }]">
                {{ item.db }}
              </div>
            </div>
          </template>
          <!-- 日 -->
          <template v-if="showSqzyName == 'day'">
            <div
              v-for="(item, index) in obj3"
              :key="index"
              class="px"
              @click="showTC3(item)"
            >
              <div style="font-size: 12px">
                <span
                  style="color: #10e4e5; font-size: 24px; font-style: italic"
                >
                  {{ item.sz }}</span>
                {{ item.dw }}
              </div>
              <div :class="['obj3Db', { obj3Db2: obj3Db == item.db }]">
                {{ item.db }}
              </div>
            </div>
          </template>
          <div class="bingtu">
            <img src="../assets/images/ch.png" alt="">
            <min2 :id="id" />
            <div class="bingtuTitle">行业分类消费 TOP 6</div>
          </div>
        </div>
      </div>
      <div class="left-2">
        <div class="tite">
          <div class="jbs">党建引领</div>
        </div>
        <div>
          <ul>
            <li
              v-for="(item, index) in objet2"
              :key="index"
              style="display: flex"
              @click="showTC(item)"
            >
              <div class="left">
                <img :src="item.url" alt="">
              </div>
              <div class="right">
                <div
                  style="
                    font-size: 24px;
                    font-family: Source Han Sans SC;
                    font-weight: bold;
                    color: #10e4e6;
                  "
                >
                  {{ item.nuba }} <span>{{ item.dw }}</span>
                </div>
                <div
                  :class="['right_text', { right_text2: djylName === item.mc }]"
                >
                  {{ item.mc }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="sbf">
          <div
            v-for="(item, index) in obje"
            :key="index"
            class="tda"
            @click="showTC(item)"
          >
            <div class="sizicolor">
              {{ item.nuba }}
              <span class="dw">{{ item.dw }}</span>
            </div>
            <div class="bjj">
              <img :src="item.url" alt="">
            </div>
            <div :class="['', { mcText: sqfwName == item.mc }]">
              {{ item.mc }}
            </div>
          </div>
        </div> -->
        <!-- 第二场 -->
        <!-- <div class="tad2">
          <div
            v-for="(item, index) in dats"
            :key="index"
            class="bjjj"
            @click="showTC(item)"
          >
            <img :src="item.url" alt="">
            <div class="rea">
              <div id="res">{{ item.nuba }}</div>
              <div :class="['', { rea2: sqfwName2 == item.dw }]">
                {{ item.dw }}
              </div>
            </div>
          </div>
        </div> -->
        <!-- 第三层 -->
        <div class="maineHeader">
          <div class="maineHeader_left"><span></span> 服务需求</div>
          <div class="maineHeader_right"><span></span> 发现问题</div>
        </div>
        <div class="shuxian"></div>
        <div class="shuxian_title">数量</div>
        <div id="maine333" style="height: 230px; margin-top: 24px"></div>
        <div class="maineTitle">服务需求与发现问题统计</div>
      </div>
    </div>
    <!-- 中间 -->
    <div
      :class="[
        'center',
        'animate__animated',
        'animate__fadeIn',
        { animate__fadeOutBottomRight: mapall == true }
      ]"
    >
      <div :class="['shugao', { shugaoBox: showicon == true }]"></div>
      <div class="shugao">
        <div class="weip">
          <div class="niang">
            <img src="../image/diyi.png" alt="" @click="showIcon">
          </div>
          <p class="youfud"></p>
        </div>
        <template v-if="showicon">
          <div class="weip">
            <div class="nianga"><img src="../image/dier.png" alt=""></div>
            <p class="youfud">
              商场
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/disan.png" alt=""></div>
            <p class="youfud">
              商户
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/disi.png" alt=""></div>
            <p class="youfud">
              消防
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/diwu.png" alt=""></div>
            <p class="youfud">
              停车场
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/diliu.png" alt=""></div>
            <p class="youfud">
              汽车
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/diqi.png" alt=""></div>
            <p class="youfud">
              摩托车
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/diba.png" alt=""></div>
            <p class="youfud">
              电动车
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
          <div class="weip">
            <div class="nianga"><img src="../image/dijiu.png" alt=""></div>
            <p class="youfud">
              执法记录仪
              <el-checkbox class="weip_checkbox"></el-checkbox>
            </p>
          </div>
        </template>
      </div>
      <!-- 地图 -->
      <!-- <div class="amap-wrap">

        </div> -->
      <!-- ----- -->
      <div class="gq">
        <div class="bgi" @click="showTC">
          <div class="ziti1">95</div>
          <div class="ssd">商圈活跃度</div>
        </div>
        <div class="bgi1" @click="showTC">
          <div class="ziti2">89</div>
          <div class="ssd">商圈舒适度</div>
        </div>
        <div class="bgi2" @click="showTC">
          <div class="ziti3">82</div>
          <div class="ssd">治理指数</div>
        </div>
      </div>

      <div class="center-bottme">
        <div class="ggfw_tite"><div class="jbs">公共服务</div></div>
        <!-- 第一层 -->
        <div style="display: flex; align-items: center">
          <div>
            <div class="ggfw_top" style="display: flex; flex-direction: column">
              <ul>
                <li
                  v-for="(item, index) in obje"
                  :key="index"
                  @click="showTC3(item)"
                >
                  <div class="ggfw_top_text1">
                    {{ item.nuba }}
                    <span
                      style="color: #fff; font-size: 12px; margin-left: -9px"
                    >{{ item.dw }}</span>
                  </div>
                  <div class="ggfw_top_img">
                    <img class="img1" :src="item.url" alt="">
                  </div>
                  <div
                    :class="[
                      'ggfw_top_text2',
                      { ggfw_top_text3: ggfwName === item.mc }
                    ]"
                    style="text-align: center; width: 72px"
                  >
                    {{ item.mc }}
                  </div>
                </li>
              </ul>
              <div class="center_bottom">
                <ul>
                  <li
                    v-for="(item, index) in dats"
                    :key="index"
                    @click="showTC3(item)"
                  >
                    <div>
                      <img :src="item.url" alt="">
                    </div>
                    <div style="margin-bottom:12px;w">
                      <div class="center_bottom_top">{{ item.nuba }}</div>
                      <div
                        :class="[
                          'center_bottom_bottom',
                          { center_bottom_bottom2: ggfwName2 === item.dw }
                        ]"
                      >
                        {{ item.dw }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="ddd" @click="showTC3(item)">
            <div class="jyd">
              <img :src="item.url" alt="">
              <div class="re">
                <div class="sis">
                  {{ item.nuba }}
                  <div class="dw">{{ item.dw }}</div>
                </div>
                <div :class="['objet2Mc', { objet2Mc2: sqfwName3 == item.mc }]">
                  {{ item.mc }}
                </div>
              </div>
            </div>
          </div> -->
          <!-- 第二层 -->
          <div class="center-bottme-2">
            <div class="shuxian2"></div>
            <div class="shuxian2_title">数量</div>
            <div id="mainet222" style="height: 280px; width: 450px"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <div
      :class="[
        'rigth',
        'animate__animated',
        'animate__bounceInRight',
        { animate__lightSpeedOutRight: mapall == true }
      ]"
    >
      <div class="rigth-1">
        <div class="fkzl_tite"><div class="jbs">防控治理</div></div>
        <div class="q1">
          <div
            v-for="(item, index) in objets"
            :key="index"
            class="ei"
            @click="showTC(item)"
          >
            <div class="sizicolors">{{ item.data }}</div>
            <div :class="['ssi', { ssi2: objetsName == item.dz }]">
              {{ item.dz }}
            </div>
          </div>
        </div>
        <!-- 第二曾 -->
        <div class="q2">
          <div class="y2">
            <div
              v-for="(item, index) in objs"
              :key="index"
              class="xx"
              @click="showTC(item)"
            >
              <img :src="item.url" alt="">
              <div class="dsa">
                <div class="sada">{{ item.nuba }}</div>
                <div :class="['seb', { seb2: objsName == item.mc }]">
                  {{ item.mc }}
                </div>
              </div>
            </div>
          </div>
          <div class="y3">
            <div class="y3_title">
              <ul>
                <li>
                  <div class="y3_title_text">
                    <span></span>
                    <div class="y3_title_text2">阳光厨房</div>
                    <div class="y3_title_text3">12</div>
                  </div>
                </li>
                <li>
                  <div class="y3_title_text">
                    <span></span>
                    <div class="y3_title_text2">紧急医疗</div>
                    <div class="y3_title_text3">16</div>
                  </div>
                </li>
                <li>
                  <div class="y3_title_text">
                    <span></span>
                    <div class="y3_title_text2">市政抢修</div>
                    <div class="y3_title_text3">21</div>
                  </div>
                </li>
                <li>
                  <div class="y3_title_text">
                    <span></span>
                    <div class="y3_title_text2">投诉举报</div>
                    <div class="y3_title_text3">13</div>
                  </div>
                </li>
                <li>
                  <div class="y3_title_text">
                    <span></span>
                    <div class="y3_title_text2">消防安全</div>
                    <div class="y3_title_text3">11</div>
                  </div>
                </li>
                <li>
                  <div class="y3_title_text">
                    <span></span>
                    <div class="y3_title_text2">城市治安</div>
                    <div class="y3_title_text3">15</div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="suib444" style="height: 100%"></div>
          </div>
        </div>
        <!-- 第三层 -->
        <div class="q3">
          <div class="q3_title">
            <ul>
              <li>
                <div>
                  <span class="q3_title_tuli"></span>
                  自查
                </div>
              </li>
              <li>
                <div>
                  <span class="q3_title_tuli"></span>
                  巡查
                </div>
              </li>
              <li>
                <div>
                  <span class="q3_title_tuli"></span>
                  检查
                </div>
              </li>
              <li>
                <div>
                  <span class="q3_title_tuli"></span>
                  立案
                </div>
              </li>
            </ul>
          </div>
          <div id="sui" style="height: 100%; margin-top: 10px"></div>
          <div class="sui_title">三维防控一体化合规管理</div>
          <!-- <zhuxingtu /> -->
        </div>
      </div>
      <div class="rigth-2">
        <div class="sssp_tite"><div class="jbs">实时视频</div></div>
        <div class="dad">
          <div v-for="(item, index) in datas" :key="index" class="you">
            <div class="aaz">
              <img :src="item.url" alt="">
            </div>

            <div class="aay">{{ item.nuba }}</div>
          </div>
        </div>
        <div>
          <img
            class="tupian"
            src="../assets/images/rightBottom/9a1e163c503f71fedf0950ba6c627a8.png"
            alt=""
          >
        </div>
      </div>
      <!-- 地图全屏展示按钮 -->
      <button class="showMap" @click="mapAll"></button>
    </div>
    <img src="" alt="">
    <Tanchuang
      :datatanchuang="datatanchuang"
      @datatanchuang="closeDialog($event)"
    />
    <dialogTC :show-dialog.sync="showDialog" @closed="close"></dialogTC>
    <dialogTC3 :show-dialog3.sync="showDialog3" @closed3="close3"></dialogTC3>
  </div>
</template>

<script>
import min2 from './min2.vue';
import { kllApi } from '../../src/api/kll';
// import maps from './echas/index.vue';
// import zhuxingtu from './echas/zhuxingtu.vue';
// 弹窗
import Tanchuang from './echas/tanchuang.vue';
import dialogTC from '../components/dialogTC/index.vue';
import dialogTC3 from '../components/dialogTC3/index.vue';
import dayjs from '../components/dayjs/index.vue';
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

export default {
  components: {
    dialogTC3,
    // eslint-disable-next-line vue/no-unused-components
    dayjs,
    dialogTC,
    min2,
    // zhuxingtu,
    // maps,
    Tanchuang
  },
  data() {
    return {
      dateTime: '',
      dateTime2: '',
      id: 'bingtu',
      showHiddenMapAll: false,
      obj3Db: '',
      obj2Db: '',
      objDb: '',
      objsName: '',
      objetsName: '',
      sqfwName3: '',
      ggfwName: '',
      ggfwName2: '',
      showSqzyName: 'year',
      mapall: false,
      showDialog: false,
      showDialog3: false,
      showicon: false,
      datatanchuang: false,
      center: [119.986251, 30.542469], // 经纬度
      zoom: 14, // 缩放比例
      date: '',
      dates: '',
      datess: '',
      datesss: '',
      datas: [
        {
          url: require('../image/qj.png'),
          nuba: '全景'
        },
        {
          url: require('../image/jt.png'),
          nuba: '交通'
        },
        {
          url: require('../image/bx.png'),
          nuba: '步行街'
        },
        {
          url: require('../image/gc.png'),
          nuba: '广场'
        }
      ],
      objs: [
        {
          url: require('../image/jbl.png'),
          nuba: '95%',
          mc: '办结率'
        },
        {
          url: require('../image/csl.png'),
          nuba: '3%',
          mc: '超时率'
        },
        {
          url: require('../image/pjjbsj.png'),
          nuba: '1小时',
          mc: '平均办结时间'
        }
      ],
      objets: [
        {
          data: '1',
          dz: '微网格'
        },
        {
          data: '2',
          dz: '队伍'
        },
        {
          data: '5',
          dz: '装备'
        },
        {
          data: '9',
          dz: '传感'
        },
        {
          data: '6',
          dz: '事件总数'
        },
        {
          data: '2',
          dz: '待处置'
        },
        {
          data: '3',
          dz: '处置中'
        },
        {
          data: '7',
          dz: '办结数'
        }
      ],
      objet: [
        {
          url: require('../image/dzb.png'),
          nuba: 5,
          mc: ''
        },
        {
          url: require('../image/sqdy.png'),
          nuba: 66,
          mc: '用户'
        },
        {
          url: require('../image/wmhy.png'),
          nuba: 7,
          mc: '用户'
        },
        {
          url: require('../image/lxhy.png'),
          nuba: 20,
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

      objet2: [
        {
          url: require('../image/dzb.png'),
          nuba: 5,
          mc: '党组织',
          dw: '个'
        },
        {
          url: require('../image/sqdy.png'),
          nuba: 66,
          mc: '商圈党员',
          dw: '人'
        },
        {
          url: require('../image/wmhy.png'),
          nuba: 27,
          mc: '优秀党员',
          dw: '个'
        },
        {
          url: require('../image/lxhy.png'),
          nuba: 7,
          mc: '志愿者队伍',
          dw: '支'
        },
        {
          url: require('../image/dagl.png'),
          nuba: '20',
          mc: '联席会议',
          dw: '次'
        },
        {
          url: require('../image/fw.png'),
          nuba: '2/',
          mc: '服务需求',
          dw: '30个'
        },
        {
          url: require('../image/jccs.png'),
          nuba: '2/',
          mc: '三服务',
          dw: '22个'
        },
        {
          url: require('../image/fxwt.png'),
          nuba: 20,
          mc: '志愿者服务次数',
          dw: '次'
        },
        {
          url: require('../image/bjwt.png'),
          nuba: 20,
          mc: '党组织推荐商户',
          dw: '家'
        }
      ],
      dats: [
        {
          url: require('../image/tcsl.png'),
          nuba: 256,
          dw: '停车数量'
        },
        {
          url: require('../image/dqbw.png'),
          nuba: 100,
          dw: '当前泊位'
        },
        {
          url: require('../image/bwss.png'),
          nuba: 26,
          dw: '泊位数'
        },
        {
          url: require('../image/zzl.png'),
          nuba: 32,
          dw: '周转率'
        },
        {
          url: require('../image/ydcs.png'),
          nuba: 16,
          dw: '诱导次数'
        }
      ],
      obj: [
        {
          sz: '5.8',
          dw: 'km2',
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
          sz: '2',
          dw: '亿',
          db: '营业额'
        },
        {
          sz: '00',
          dw: '人',
          db: '年客流'
        },
        {
          sz: '00',
          dw: '人',
          db: '日客流'
        },
        {
          sz: '2.5',
          dw: '小时',
          db: '平均驻留时间'
        },
        {
          sz: '26',
          dw: '岁',
          db: '平均客龄'
        }
      ],
      obj2: [
        {
          sz: '5.8',
          dw: 'km2',
          db: '商场面积'
        },
        {
          sz: '2000',
          dw: '家',
          db: '商户数量'
        },
        {
          sz: '9',
          dw: '个',
          db: '大型商场'
        },
        {
          sz: '1.5',
          dw: '亿',
          db: '营业额'
        },
        {
          sz: '400',
          dw: '万',
          db: '年客流'
        },
        {
          sz: '2',
          dw: '万',
          db: '日客流'
        },
        {
          sz: '1.5',
          dw: '小时',
          db: '平均驻留时间'
        },
        {
          sz: '23',
          dw: '岁',
          db: '平均客龄'
        }
      ],
      obj3: [
        {
          sz: '5.8',
          dw: 'km2',
          db: '商场面积'
        },
        {
          sz: '3400',
          dw: '家',
          db: '商户数量'
        },
        {
          sz: '9',
          dw: '个',
          db: '大型商场'
        },
        {
          sz: '1.5',
          dw: '亿',
          db: '营业额'
        },
        {
          sz: '400',
          dw: '万',
          db: '年客流'
        },
        {
          sz: '0.8',
          dw: '万',
          db: '日客流'
        },
        {
          sz: '3',
          dw: '小时',
          db: '平均驻留时间'
        },
        {
          sz: '18',
          dw: '岁',
          db: '平均客龄'
        }
      ],
      obje: [
        {
          url: require('../image/yhs.png'),
          nuba: 20,
          mc: '用户',
          dw: '个'
        },
        {
          url: require('../image/fws.png'),
          nuba: 28,
          mc: '服务',
          dw: '次'
        },
        {
          url: require('../image/ysts.png'),
          nuba: 50,
          mc: '营销推送',
          dw: '次'
        },
        {
          url: require('../image/yhq.png'),
          nuba: 80,
          mc: '优惠券',
          dw: '万'
        }
      ],
      sqfwName: '',
      sqfwName2: '',
      djylName: '',
      // 中下柱状图数据
      item: [
        50.0, 40.9, 70.0, 30.2, 50.6, 60.7, 30.6, 20.2, 30.6, 55.0, 60.4, 30.3
      ],
      item2: [
        20.6, 50.9, 90.0, 60.4, 80.7, 70.7, 25.6, 32.2, 48.7, 58.8, 60.0, 20.3
      ]
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
  mounted() {
    this.Kllapi();
    this.dataws();
    this.drawws();
    setInterval(() => {
      this.draws();
      this.item = this.item.map(function(index) {
        return index + 4;
      });
      this.item2 = this.item2.map(function(index) {
        return index + 3;
      });
      // console.log(this.item, this.item2);
    }, 100000);
    this.draww();
    this.draws();
    this.drawwss();
  },
  methods: {
    // 商圈客流量

    async Kllapi() {
      const res = await kllApi();
      this.kl = res;
      this.$set(this.obj[4], 'sz', res.kl.nkl);
      this.$set(this.obj[5], 'sz', res.kl.rkl);
      // console.log(this.kl);
    },
    // 子组件返回false
    closeDialog(value) {
      console.log(value); // 此处回传的值是 false
      this.datatanchuang = value;
    },
    // 点击数据出现弹窗
    // dataclick() {
    //   this.datatanchuang = true;
    // },
    // 点击事件
    dianji() {
      // console.log(111);
      this.$router.push('./wisdomcamp');
    },
    dianjis() {},
    dataws() {
      // eslint-disable-next-line no-undef
      mainet222; // 时间
      setInterval(() => {
        this.date = this.$dayJs().format('YYYY/MM/DD');
        this.dates = this.$dayJs().format('YYYY-MM-DD');
        this.datess = this.$dayJs().format('d');
        this.datesss = this.$dayJs().format('HH:mm:ss');
      }, 1000);
    },
    // 中下柱状图图
    draws() {
      this.myChart = this.$echarts.init(document.getElementById('mainet222'));
      var option = {
        color: ['#1C7DFF'],
        grid: {
          top: '28%',
          bottom: '19%'
        },
        title: {
          text: '商场车流',
          x: 'center',
          y: 'bottom',
          textStyle: {
            color: '#25ECEDFF'
          }
        },
        textStyle: {
          color: '#FBFCFC',
          fontSize: 10
        },
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: ['服务需求', '发现问题'],
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
        toolbox: {
          show: true
        },
        calculable: true,
        xAxis: {
          type: 'category',
          // prettier-ignore
          data: ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10']
        },

        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0694B5',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '服务需求',
            type: 'bar',
            data: [
              this.item[0],
              this.item[1],
              this.item[2],
              this.item[3],
              this.item[4],
              this.item[5],
              this.item[6],
              this.item[7],
              this.item[8],
              this.item[9],
              this.item[10],
              this.item[11]
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            }
          },
          {
            name: '发现问题',
            type: 'bar',
            // data: [
            //   this.item2[0],
            //   this.item2[1],
            //   this.item2[2],
            //   this.item2[3],
            //   this.item2[4],
            //   this.item2[5],
            //   this.item2[6],
            //   this.item2[7],
            //   this.item2[8],
            //   this.item2[9],
            //   this.item2[10],
            //   this.item2[11]
            // ],
            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            }
          }
        ]
      };
      this.myChart.setOption(option);
    },
    drawwss() {
      this.myChart = this.$echarts.init(document.getElementById('sui'));
      // const colors = ['#5470C6', '#EE6666'];
      var option = {
        grid: {
          top: '10%'
        },
        // legend: {
        //   data: ['自查', '巡查', '检查', '立案'],
        //   icon: 'rect',
        //   textStyle: {
        //     color: '#7AFFFD'
        //   }
        // },
        // title: {
        //   text: '三维防控一体化合规管理',
        //   x: 'center',
        //   y: 'bottom',
        //   textStyle: {
        //     color: '#25ECEDFF'
        //     // lineHeight: ,
        //   }
        // },
        textStyle: {
          color: '#FBFCFC',
          fontSize: 11
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0694B5',
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0694B5',
              type: 'dashed'
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
            name: '立案',
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#c365e2',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#FF9876B1' // 改变区域颜色
              }
            },
            data: [
              ['1/10', 10],
              ['2/10', 86],
              ['3/10', 55],
              ['4/10', 88],
              ['5/10', 33],
              ['6/10', 22],
              ['7/10', 45]
            ]
          },
          {
            name: '检查',

            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#38e1b3',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#FF286174' // 改变区域颜色
              }
            },
            data: [
              ['1/10', 10],
              ['2/10', 16],
              ['3/10', 75],
              ['4/10', 58],
              ['5/10', 33],
              ['6/10', 12],
              ['7/10', 45]
            ]
          },
          {
            name: '巡查',

            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#d2d987',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#FF9D8A6A' // 改变区域颜色
              }
            },
            data: [
              ['1/10', 40],
              ['2/10', 85],
              ['3/10', 45],
              ['4/10', 58],
              ['5/10', 43],
              ['6/10', 22],
              ['7/10', 35]
            ]
          },
          {
            name: '自查',

            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#fa2c2d',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#FF6D384F' // 改变区域颜色
              }
            },
            data: [
              ['1/10', 10],
              ['2/10', 46],
              ['3/10', 15],
              ['4/10', 68],
              ['5/10', 43],
              ['6/10', 52],
              ['7/10', 85]
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    // 左2线图
    draww() {
      this.myChart = this.$echarts.init(document.getElementById('maine333'));
      // const colors = ['#5470C6', '#EE6666'];
      var option = {
        grid: {
          top: '3%'
        },
        textStyle: {
          color: '#FBFCFC',
          fontSize: 10
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false,
            lineStyle: {
              color: '#0694B5'
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0694B5'
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
              // color: '#5470C6',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false }
            },
            areaStyle: {
              normal: {
                color: '#668073' // 改变区域颜色
              }
            },
            data: [
              ['1月', 47],
              ['2月', 52],
              ['3月', 95],
              ['4月', 68],
              ['5月', 29],
              ['6月', 49],
              ['7月', 60]
            ]
          },
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#b85bda',
              width: 2
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: true }
            },
            areaStyle: {
              normal: {
                color: '#445091' // 改变区域颜色
              }
            },
            data: [
              ['1月', 37],
              ['2月', 82],
              ['3月', 35],
              ['4月', 68],
              ['5月', 69],
              ['6月', 49],
              ['7月', 50]
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    drawws() {
      this.myChart = this.$echarts.init(document.getElementById('suib444'));
      var option = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   top: '15%',
        //   right: '20px',
        //   textStyle: {
        //     color: '#4c9bfd' // 图例文字颜色
        //   }
        // },
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
            center: ['20%', '60%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 0 // 圆角
            },
            label: {
              show: false
            },
            // 关闭引导线
            labelLine: {
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
                name: '阳光厨房 40',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolPosition: 'end', // 图形边缘与柱子结束的地方内切
                symbolSize: ['-95%', 90], // 根据柱子大小来做调整
                itemStyle: {
                  normal: {
                    color: '#64b7ec'
                  }
                }
              },
              {
                value: 33,
                name: '紧急医疗 33',
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
                name: '市政抢修 28',
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
                name: '投诉举报 22',
                itemStyle: {
                  normal: {
                    color: '#27ba81'
                  }
                }
              },
              {
                value: 20,
                name: '消防安全 20',
                itemStyle: {
                  normal: {
                    color: '#27b8ba'
                  }
                }
              },
              {
                value: 15,
                name: '城市治安 15',
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
    showIcon() {
      this.showicon = !this.showicon;
    },
    showTC(item) {
      this.objsName = item.mc;
      this.objetsName = item.dz;
      this.sqfwName = item.mc;
      this.sqfwName2 = item.dw;
      this.djylName = item.mc;
      this.showDialog = true;
    },
    close() {
      (this.objsName = ''), (this.objetsName = '');
      this.sqfwName = '';
      this.sqfwName2 = '';
      this.djylName = '';
    },
    close3() {
      this.objDb = this.obj3Db = '';
      this.obj2Db = '';
      this.sqfwName3 = '';
      this.ggfwName = '';
      this.ggfwName2 = '';
    },
    showTC3(item) {
      this.obj3Db = item.db;
      this.objDb = item.db;
      this.obj2Db = item.db;
      this.sqfwName3 = item.mc;
      this.ggfwName = item.mc;
      this.ggfwName2 = item.dw;
      this.showDialog3 = true;
    },
    // 全屏显示地图
    mapAll() {
      this.mapall = !this.mapall;
      this.showHiddenMapAll = true;
    },
    hiddenMapAll() {
      this.showHiddenMapAll = false;
      this.mapall = false;
    },
    // 年月日切换
    showSqzy(item) {
      this.showSqzyName = item;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100vh;
  margin: 0;
}
body {
  background: #0e2940;
}
// body::-webkit-scrollbar {
//   display: none;showMap
// }
.main {
  margin: 0 auto;
  position: relative;
  width: 1920px;
  height: 1080px;
  margin: 0;
  padding: 0;
  background: #0e2940;
  overflow: hidden;
}
.showMap {
  cursor: pointer;
  position: absolute;
  top: 634px;
  left: -53px;
  height: 40px;
  width: 40px;
  // border-radius: 10px;
  background: url('../assets/images/quanping(2).png') no-repeat;
  z-index: 1001;
}
.ditu {
  position: absolute;
  top: 0;
  left: 0;
}
.ditu2 {
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 10;
}
.bodybg {
  width: 100%;
  height: 100%;
  background: url(../assets/images/center/bodybg.png) no-repeat;
}
.top {
  width: 1920px;
  height: 112px;
  position: relative;
  // background: url('../image/top.png') no-repeat center;
  background-size: 100% 100%;
  z-index: -1;
  cursor: pointer;
  .q2s {
    position: absolute;
    left: 1707px;
    bottom: -10px;
  }
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
      background: url(../assets/images/head_nav_left.png) no-repeat left top /
        100% 100%;
      float: left;
      text-align: center;
      line-height: 77.6px;
      font-size: 26px;
      color: #fff;
      font-weight: 400;
      margin-right: -21.8px;
      padding-top: 10px;
      cursor: pointer;
      &:nth-child(1) {
        color: #c99d41;
        background: url(../assets/images/head_nav_left_active.png) no-repeat
          left top / 100% 100%;
      }
      &:nth-child(5),
      &:nth-child(6) {
        background: url(../assets/images/head_nav_right.png) no-repeat left top /
          100% 100%;
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
.tianqi {
  position: absolute;
  top: -5px;
  left: 1681px;
}
.left {
  height: 968px;
  width: 486px;
  margin-left: 25px;
  float: left;
  margin-top: -13px;
}
.rigth {
  height: 968px;
  width: 480px;
  margin-right: 25px;
  /* float: right; */
  position: absolute;
  right: 0px;
  float: right;
  margin-top: -18px;
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
.left-1 {
  height: 480px;
  width: 486px;
  position: relative;
  z-index: 1;
  background: url('../image/zuo3(2).png') no-repeat center top;
  background-size: 100% 100%;
  .bingtu {
    // position: relative;
    width: 480px;
    height: 200px;
    // padding-left: 100px;
    img {
      position: absolute;
      bottom: 40px;
      left: 40px;
    }
  }
  .bingtuTitle {
    position: absolute;
    bottom: 15px;
    left: 125px;
    color: rgba(38, 245, 245, 1);
    font-size: 14px;
  }
}
.left-2 {
  height: 508px;
  width: 486px;
  position: relative;
  z-index: 1;
  background: url('../image/zuo2(2).png') no-repeat center top;
  background-size: 100% 100%;
  margin-top: -9px;
  ul {
    display: flex;
    margin-top: 45px;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex: 30%;
      margin-bottom: 14px;
      &:nth-child(1),
      &:nth-child(4),
      &:nth-child(7) {
        margin-left: 10px;
      }
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(8),
      &:nth-child(9) {
        margin-left: -10px;
      }

      .left {
        margin-left: 5px;
        width: 45px;
        height: 43px;
        img {
          width: 100%;
          height: 100%;
          margin-top: 8px;
        }
      }
      .right {
        line-height: 14px;
        span {
          margin-left: -6px;
          font-size: 14px;
          color: #fff;
        }
        .right_text {
          margin-top: 8px;
          padding-left: 2px;
          background-image: url('../image/right_text.png');
          background-repeat: no-repeat;
          background-size: 62px 14px;
          font-size: 14px;
          color: #fff;
        }
        .right_text2 {
          margin-top: 8px;
          padding-left: 2px;
          background-image: url('../image/right_text.png');
          background-repeat: no-repeat;
          background-size: 62px 14px;
          font-size: 14px;
          color: #c99d41;
        }
      }
    }
    li:hover .right_text {
      color: #c99d41;
    }
  }
  .maineTitle {
    position: absolute;
    top: 467px;
    left: 168px;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #26f5f5;
  }
  .maineHeader {
    position: absolute;
    top: 256px;
    left: 322px;
    display: flex;
    font-size: 10px;
    transform: scale(0.83333);
    transform-origin: 0 0;
    color: #fff;
    .maineHeader_left {
      span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #fa2cee;
      }
    }
    .maineHeader_right {
      span {
        margin-left: 16px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #d2d987;
      }
    }
  }
  .shuxian {
    position: absolute;
    top: 273px;
    left: 48px;
    width: 1px;
    height: 170px;
    background: #00b4d6;
  }
  .shuxian_title {
    position: absolute;
    top: 250px;
    left: 38px;
    height: 11px;
    font-size: 10px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #ffffff;
  }
}

.rigth-1 {
  height: 680px;
  width: 480px;
  background: url('../image/you1(2).png') no-repeat center top;
  background-size: 100% 100%;
}
.fkzl_tite {
  padding-left: 20px;
  font-size: 24px;
  position: relative;
  top: 26px;
  left: 22px;
  height: 47px;
  width: 238px;
  line-height: 47px;
  background: url('../image/sq.png') no-repeat center top;
  background-size: 100% 100%;
}
.rigth-2 {
  width: 480px;
  height: 310px;
  background: url('../image/you2(2).png') no-repeat center top;
  background-size: 100% 100%;
  margin-top: -10px;
}
.sssp_tite {
  padding-left: 20px;
  font-size: 24px;
  position: relative;
  top: 18px;
  left: 22px;
  height: 47px;
  width: 238px;
  line-height: 47px;
  background: url('../image/sq.png') no-repeat center top;
  background-size: 100% 100%;
}
.tite {
  padding-left: 20px;
  font-size: 24px;
  position: relative;
  top: 23px;
  left: 22px;
  height: 47px;
  width: 238px;
  line-height: 47px;
  background: url('../image/sq.png') no-repeat center top;
  background-size: 100% 100%;
}
.jbs {
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.ssx {
  padding: 0 15px;
  margin-top: 24px;
  height: 40%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  .objText {
    font-weight: 400;
    color: #fff;
  }
  .objText:hover {
    font-weight: 400;
    color: #c99d41;
  }
  .objText2 {
    font-weight: 400;
    color: #c99d41;
  }
}
.px {
  cursor: pointer;
  text-align: center;
  width: 25%;
  height: 30%;
  /* padding-top: 20px; */
  line-height: 22px;
  background: url('../image/scmj.png') no-repeat center top;
  background-size: 90% 100%;
  margin: 6px 0;
  font-weight: bold;
  .obj2Db {
    color: #fff;
  }
  .obj2Db:hover {
    color: #c99d41;
  }
  .obj2Db2 {
    color: #c99d41;
  }
  .obj3Db {
    color: #fff;
  }
  .obj3Db:hover {
    color: #c99d41;
  }
  .obj3Db2 {
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
  cursor: pointer;
  width: 15%;
  text-align: center;
  color: white;
  margin-top: 40px;
  .mcText {
    color: #c99d41;
  }
}
.tda:hover {
  color: #c99d41;
}
/* .tda1 {
  height: 35%;
} */
.tda2 {
  width: 15%;
  text-align: center;
  color: #c99d41;
}
.tda > img {
  width: 100%;
  height: 100%;
}
.bjj {
  background: url('../image/yh.png') no-repeat center top;
  background-size: 100% 100%;
  height: 56px;
  width: 66px;
}
.bjj:hover {
  animation: sqfwBottom 2s;
}
.sizicolor {
  display: flex;
  color: #26f5f5ff;
  font-size: 30px;
  font-weight: 600;
  justify-content: center;
}
.sizicolor .dw {
  font-size: 14px;
  color: #ffffff;
  margin-top: 5px;
}
.sizicolors {
  color: #26f5f5;
  font-size: 24px;
  font-weight: 600;
  padding-top: 10px;
}
.tad2 {
  margin-top: 50px;
  display: flex;
  color: #ffffff;
  justify-content: center;
}
.bjjj {
  cursor: pointer;
  height: 53px;
  width: 109px;
}
.bjjj:hover {
  // animation-play-state: paused;
  animation: sqfwBottom2 2s;
}
.re {
  float: right;
  color: white;
  font-size: 14px;
  width: 60px;
  margin-left: -60px;
  /* text-align: center; */
  .objet2Mc {
    text-align: center;
  }
  .objet2Mc:hover {
    color: #c99d41;
  }
  .objet2Mc2 {
    color: #c99d41;
  }
}
.rea {
  float: right;
  color: white;
  font-size: 12px;
  margin-left: -60px;
  margin-top: -5px;
  line-height: 30px;
}
.rea:hover {
  color: #c99d41;
}
.rea2 {
  color: #c99d41;
  font-size: 14px;
}
.center {
  width: 924px;
  margin: 0 auto;
}
.center-bottme {
  width: 904px;
  height: 311px;
  background: url('../image/zhong(2).png') no-repeat center top;
  background-size: 100% 100%;
  position: absolute;
  bottom: 2px;
  margin: 5px 10px;
  .ggfw_tite {
    padding-left: 20px;
    font-size: 24px;
    position: relative;
    top: 20px;
    left: 22px;
    height: 47px;
    width: 238px;
    line-height: 47px;
    background: url('../image/sq.png') no-repeat center top;
    background-size: 100% 100%;
  }
  ul {
    display: flex;
    margin: 26px 0;
    // margin-top: -40px;
    li {
      cursor: pointer;
      &:nth-child(1) {
        // margin-left: 15px;
      }
      &:nth-child(2) .ggfw_top_img .img1 {
        margin-left: 18px;
      }
      &:nth-child(3) .ggfw_top_img .img1 {
        margin-left: 18px;
      }
      &:nth-child(4) .ggfw_top_img .img1 {
        margin-left: 22px;
      }
      margin-left: 34px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ggfw_top_text1 {
        margin-left: 10px;
        font-size: 30px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #26f5f5;
      }
      .ggfw_top_img {
        width: 66px;
        height: 56px;
        background: url('../image/yh.png') no-repeat center center;
        .img1 {
          margin-left: 15px;
        }
      }
      .ggfw_top_text2 {
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #eff7ff;
      }
      .ggfw_top_text3 {
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #c99d41;
      }
    }
    li:hover .ggfw_top_text2 {
      color: #c99d41;
    }
  }
}
.center_bottom {
  margin-left: 20px;
  ul {
    display: flex;
    margin: 0;
    li {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      margin-left: 10px;
      // width: 56px;
      &:nth-child(2),
      &:nth-child(3) {
        margin-left: 8px;
      }
      &:nth-child(4),
      &:nth-child(5) {
        margin-left: -4px;
      }
      img {
        margin-top: 10px;
      }
      .center_bottom_top {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #26f5f5;
        line-height: 33px;
      }
      .center_bottom_bottom {
        line-height: 13px;
        height: 13px;
        width: 48px;
        font-size: 12px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #ffffff;
      }
      .center_bottom_bottom2 {
        width: 48px;
        font-size: 12px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #c99d41;
      }
    }
    li:hover .center_bottom_bottom {
      color: #c99d41;
    }
  }
}
.sqdj1 {
  margin-left: 20px;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  height: 220px;
  width: 40%;
  float: left;
  /*  */
  justify-content: space-around;
  align-content: space-around;
}
.ddd {
  cursor: pointer;
  width: 26%;
  margin-top: 15px;
}
.center-bottme-2 {
  /* width: 60%; */
  position: relative;
  top: 5px;
  margin-left: -13px;
  margin-top: -30px;
  .shuxian2 {
    position: absolute;
    top: 69px;
    left: 45px;
    width: 1px;
    height: 160px;
    background: #00b4d6;
  }
  .shuxian2_title {
    position: absolute;
    top: 45px;
    left: 35px;
    height: 11px;
    font-size: 10px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #ffffff;
  }
}
.q1 {
  height: 20%;
  display: flex;
  margin-top: 25px;
  padding: 0 40px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.ei {
  cursor: pointer;
  text-align: center;
  width: 25%;
  height: 72px;
  /* line-height: 45px; */
  background-size: 100% 100%;
  color: white;
  background: url('../image/wwg.png') no-repeat center top;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    margin-bottom: 12px;
    margin-top: 18px;
  }
}
.q2 {
  height: 35%;
}
.q3 {
  // position: relative;
  height: 35%;
  width: 100%;
  margin-top: -20px;
  .q3_title {
    ul {
      position: absolute;
      top: 426px;
      left: 194px;
      display: flex;
      li {
        display: flex;
        margin-left: 20px;
        font-size: 10px;
        transform: scale(0.83333);
        transform-origin: 0 0;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #7afffd;
        &:nth-child(2) .q3_title_tuli {
          background: #d2d987;
        }
        &:nth-child(3) .q3_title_tuli {
          background: #38e1b3;
        }
        &:nth-child(4) .q3_title_tuli {
          background: #c365e2;
        }
        .q3_title_tuli {
          margin-top: 10px;
          margin-right: 5px;
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #fa2c2d;
        }
      }
    }
  }
}
.sui_title {
  position: absolute;
  bottom: 312px;
  left: 164px;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 600;
  color: #26f5f5;
  line-height: 11px;
}
.y2 {
  width: 30%;
  height: 100%;
  float: left;
  /*  */
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  // justify-content: center;
  align-items: center;
  font-size: 12px;
}
.y3 {
  width: 70%;
  height: 100%;
  float: left;
  /*  */
  .y3_title {
    position: absolute;
    top: 251px;
    left: 323px;
    li {
      margin-bottom: 4px;
      &:nth-child(2) .y3_title_text span {
        background: #dee565;
      }
      &:nth-child(2) .y3_title_text .y3_title_text2 {
        color: #dee565;
      }
      &:nth-child(2) .y3_title_text .y3_title_text3 {
        color: #dee565;
      }
      &:nth-child(3) .y3_title_text span {
        background: #e68639;
      }
      &:nth-child(3) .y3_title_text .y3_title_text2 {
        color: #e68639;
      }
      &:nth-child(3) .y3_title_text .y3_title_text3 {
        color: #e68639;
      }
      &:nth-child(4) .y3_title_text span {
        background: #27ba81;
      }
      &:nth-child(4) .y3_title_text .y3_title_text2 {
        color: #27ba81;
      }
      &:nth-child(4) .y3_title_text .y3_title_text3 {
        color: #27ba81;
      }
      &:nth-child(5) .y3_title_text span {
        background: #27b8ba;
      }
      &:nth-child(5) .y3_title_text .y3_title_text2 {
        color: #27b8ba;
      }
      &:nth-child(5) .y3_title_text .y3_title_text3 {
        color: #27b8ba;
      }
      &:nth-child(6) .y3_title_text span {
        background: #538be8;
      }
      &:nth-child(6) .y3_title_text .y3_title_text2 {
        color: #538be8;
      }
      &:nth-child(6) .y3_title_text .y3_title_text3 {
        color: #538be8;
      }

      .y3_title_text {
        display: flex;
        align-items: center;
        span {
          display: block;
          width: 17px;
          height: 8px;
          background: #64b7ec;
        }
        .y3_title_text2 {
          margin: 0 12px;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #64b7ec;
        }
        .y3_title_text3 {
          font-size: 20px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #64b7ec;
        }
      }
    }
  }
}
.dad {
  margin-top: 20px;
  margin-right: 15px;
}
.you {
  float: right;
  text-align: center;
  margin-top: -30px;
  line-height: 20px;
  color: white;
}
.q1s {
  display: flex;
  position: absolute;
  top: 79px;
  left: 0px;
  font-size: 22px;
  z-index: 2;
}
.sj {
  margin-left: 25px;
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // font-weight: 600;
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
.lf {
  margin-left: -30px;
  text-align: center;
  background-size: 100% 100%;
  background: url('../image/topbj.png') no-repeat center top;
}
.lfs {
  color: #c99d41 !important;
  background-size: 100% 100%;
  background: url('../image/jsc1.png') no-repeat center top;
}
.rt {
  /* margin-right: 30px; */
  background: url('../image/topyou.png') no-repeat center top;
  background-size: 100% 100%;
  margin-right: -30px;
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
.dsa {
  cursor: pointer;
  float: right;
  line-height: 20px;
}
.ssi {
  font-size: 16px;
  line-height: 20px;
}
.ssi:hover {
  color: #c99d41;
}
.ssi2 {
  color: #c99d41;
}

.center-top {
  width: 894px;
  height: 657px;
  float: left;
  position: relative;
}
.gq {
  position: absolute;
  top: 68px;
  /* width: 100%; */
  height: 166px;
  left: 661px;
  /* height: 120px; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  font-size: 52px;
  text-align: center;
}
.bgi {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/sqhyd.png') no-repeat center;
  background-size: 100% 100%;
}
.bgi1 {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/sqssd.png') no-repeat center;
  background-size: 100% 100%;
  margin: 0 50px;
}
.bgi2 {
  cursor: pointer;
  height: 100%;
  width: 172px;
  background: url('../image/zlzd.png') no-repeat center;
  background-size: 100% 100%;
}
.ziti1 {
  /* padding: 8px; */
  background: linear-gradient(
    0deg,
    #ffffff 0.1220703125%,
    rgba(223, 152, 254, 0.82) 35.67578125%,
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
    rgba(244, 251, 131, 0.82) 35.67578125%,
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
    rgba(136, 241, 233, 0.82) 35.67578125%,
    rgba(255, 255, 255) 41.4794921875%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  line-height: 146px;
}
.ssd {
  font-size: 20px;
  color: white;
  margin-top: -45px;
}
.xx:nth-child(2) {
  margin-left: -8px;
  margin-top: -14px;
  margin-bottom: -14px;
}
.xx:nth-child(3) {
  margin-left: 30px;
}
.xx > img {
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: 10px 0;
}
.sada {
  margin-top: 10px;
  font-size: 20px;
  // background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: #26f5f5;
  font-weight: 600;
}
.seb {
  color: white;
}
.seb:hover {
  color: #c99d41;
}
.seb2 {
  color: #c99d41;
}
.zuo {
  background: url('../image/dianzuo.png') no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: left;
}
.you1 {
  background: url('../image/dianyou.png') no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: right;
}

.yonghu {
  margin-top: 20px;
  margin-left: 30px;
  float: left;
  width: 200px;
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
.jyd {
  /* width: 90px; */
}
/* .jyd > img {

} */
.amap-wrap {
  height: 100%;
  width: 100%;
  margin-left: 15px;
}
#res {
  font-size: 24px;
  color: #26f5f5ff;
  font-weight: 600;
}
.sis {
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #26f5f5ff;
  text-align: center;
}
.sis .dw {
  font-size: 14px;
  color: #ffffff;
  margin-top: 5px;
}
.aaz {
  float: left;
  // width: 30px;
  // height: 30px;
  img {
    margin-right: -5px;
  }
}
.aay {
  float: right;
  font-size: 12px;
  transform: scale(0.91, 0.91);
  line-height: 30px;
}

.tupian {
  width: 444px;
  height: 209px;
  margin-left: 19px;
  margin-top: 10px;
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
/* 年月日 */
.specificdate {
  width: 180px;
  position: absolute;
  left: 254px;
  top: 12px;
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
  background-color: RGBA(10, 44, 66, 1);
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
  background-color: RGBA(10, 44, 66, 1);
}
.specificdatemonth2 {
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
  background-color: RGBA(10, 44, 66, 1);
}
.specificdateday2 {
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
/* 遮罩层 */
.topzzc {
  background: url('../assets/images/bodybg/1.png') no-repeat left top / 100%;
  background-size: 100% 100%;
  width: 1920px;
  height: 112px;
  position: absolute;
  top: 0;
  background-size: 100% 100%;
}
.leftzzc {
  position: absolute;
  background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
  background-size: 100% 100%;
  height: 443px;
  width: 480px;
  top: 117px;
  left: 28px;
}
.leftzzcs {
  position: absolute;
  background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
  background-size: 100% 100%;
  height: 505px;
  width: 482px;
  top: 577px;
  left: 28px;
}
.centerzzc {
  position: absolute;
  background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
  background-size: 100% 100%;
  width: 904px;
  height: 300px;
  bottom: 20px;
  left: 518px;
}
.rigthzzc {
  position: absolute;
  background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
  background-size: 100% 100%;
  height: 664px;
  width: 475px;
  top: 120px;
  right: 29px;
}
.rigthzzcs {
  width: 480px;
  height: 291px;
  position: absolute;
  background: url('../assets/images/bodybg/2.png') no-repeat left top / 100%;
  background-size: 100% 100%;
  bottom: 10px;
  right: 29px;
}
.bodybg_top {
  width: 1920px;
  height: 78px;
  position: absolute;
  top: -1px;
  background: url('../image/sqzzbg2.png') no-repeat left top / 100% 100%;
  z-index: 0;
}
.bodybg_right {
  width: 555px;
  height: 676px;
  position: absolute;
  top: 66px;
  right: 0px;
  background: url('../image/sqzzbgRight.png') no-repeat;
}
.bodybg_bottom {
  width: 1920px;
  height: 328px;
  position: absolute;
  right: 0;
  bottom: 11px;
  left: 0px;
  background: url('../image/sqzzbgBottom.png') no-repeat;
}
.bodybg_left {
  width: 556px;
  height: 676px;
  position: absolute;
  top: 66px;
  left: 0;
  background: url('../image/sqzzbgLeft.png') no-repeat;
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
// 动画效果
@keyframes sqfwBottom {
  to {
    transform: translateY(-6px);
  }
}
@keyframes sqfwBottom2 {
  to {
    transform: translateY(-4px);
  }
}
</style>
