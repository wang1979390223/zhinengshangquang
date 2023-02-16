<template>
  <div class="main">
    <!-- 头部 -->
    <div class="top">
      <div class="q1s">
        <span class="sj">{{ dates }}</span>
        <span class="sjs">星期{{ datess }}</span>
        <span class="sj">{{ datesss }}</span>
      </div>
      <div class="q2s">
        <div id="he-plugin-simple"></div>
      </div>

      <ul class="top-1">
        <li class="lfs">驾驶舱</li>
        <li class="lf" @click="dianji">商圈智营</li>
        <li class="lf" @click="$router.push('/sqZhiYing')">
          商圈智治
        </li>
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
        <li class="rt">商圈服务</li>
        <li class="rt">商圈党建</li>
      </ul>
    </div>
    <!-- 左边 -->
    <div class="left"></div>
    <!-- 中间 -->
    <div class="center"></div>
    <!-- 右边 -->
    <div class="rigth"></div>
  </div>
</template>

<script>
import min from "./min.vue";
import maps from "./echas/index.vue";
import zhuxingtu from "./echas/zhuxingtu.vue";
(function (win) {
  var bodyStyle = document.createElement("style");
  bodyStyle.innerHTML = `body{width:1920px; height:1080px!important;}`;
  document.documentElement.firstElementChild.appendChild(bodyStyle);

  function refreshScale() {
    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;
    var designWidth = 1920,
      designHeight = 1080,
      widthRatio = docWidth / designWidth,
      heightRatio = docHeight / designHeight;
    document.body.style =
      "transform:scale(" +
      widthRatio +
      "," +
      heightRatio +
      ");transform-origin:left top;"; // 应对浏览器全屏切换前后窗口因短暂滚动条问题出现未占满情况
    setTimeout(function () {
      var lateWidth = document.documentElement.clientWidth,
        lateHeight = document.documentElement.clientHeight;
      if (lateWidth === docWidth) return;

      widthRatio = lateWidth / designWidth;
      heightRatio = lateHeight / designHeight;
      document.body.style =
        "transform:scale(" +
        widthRatio +
        "," +
        heightRatio +
        ");transform-origin:left top;";
    }, 500);
  }
  refreshScale();

  win.addEventListener(
    "pageshow",
    function (e) {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        refreshScale();
      }
    },
    false
  );
  win.addEventListener("resize", refreshScale, false);
})(window);

export default {
  data() {
    return {
      date: "",
      dates: "",
      datess: "",
      datesss: "",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {
    //天气
    window.WIDGET = {
      CONFIG: {
        modules: "01234",
        background: "5",
        tmpColor: "FFFFFF",
        tmpSize: "22",
        cityColor: "FFFFFF",
        citySize: "22",
        aqiColor: "FFFFFF",
        aqiSize: "22",

        weatherIconSize: "24",
        alertIconSize: "22",
        shadow: "0",
        language: "auto",
        fixed: "false",
        vertical: "top",
        horizontal: "left",
        key: "635d3ada3c524fe6b0d18f9c1f4590e1",
      },
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  components: {
    min,
    zhuxingtu,
    maps,
  },
};
</script>
<style scoped>
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
.main {
  margin: 0 auto;
  position: relative;
  width: 1920px;
  height: 1080px;
  margin: 0;
  padding: 0;
  background: #0e2940;
}
.top {
  width: 1920px;
  height: 112px;
  position: relative;
  background: url("../image/top.png") no-repeat center;
  background-size: 100% 100%;
}
.left {
  height: 968px;
  width: 486px;
  float: left;
}
.rigth {
  height: 968px;
  width: 480px;

  /* float: right; */
  position: absolute;
  right: 0px;
  float: right;
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
  font-size: 26px;
  color: white;
  line-height: 90px;
  text-align: center;
  width: 242.8px;
  height: 77.6px;
  float: right;
}
.left-1 {
  height: 454px;
  width: 486px;

  background: url("../image/zuo1.png") no-repeat center top;
  background-size: 100% 100%;
}
.left-2 {
  height: 521px;
  width: 486px;

  background: url("../image/zuo2.png") no-repeat center top;
  background-size: 100% 100%;
}
.rigth-1 {
  height: 664px;
  width: 480px;
  background: url("../image/you1.png") no-repeat center top;
  background-size: 100% 100%;
}
.rigth-2 {
  width: 480px;
  height: 311px;
  background: url("../image/you2.png") no-repeat center top;
  background-size: 100% 100%;
}
.tite {
  padding-left: 20px;
  font-size: 24px;
  position: relative;
  top: 15px;
  left: 15px;
  height: 47px;
  width: 238px;
  line-height: 47px;
  background: url("../image/sq.png") no-repeat center top;
  background-size: 100% 100%;
}
.jbs {
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
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
  height: 30%;
  /* padding-top: 20px; */
  line-height: 22px;
  background: url("../image/scmj.png") no-repeat center top;
  background-size: 100% 100%;
  margin: 10px 0;
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
  background: url("../image/yh.png") no-repeat center top;
  background-size: 100% 100%;
  height: 56px;
  width: 66px;
}
.sizicolor {
  color: #26f5f5ff;
  font-size: 30px;
  font-weight: 600;
}
.sizicolors {
  color: #26f5f5ff;
  font-size: 24px;
  font-weight: 600;
}
.tad2 {
  margin-top: 50px;
  display: flex;
  color: #ffffff;
  justify-content: center;
}
.bjjj {
  height: 53px;
  width: 109px;
}
.re {
  float: right;
  color: white;
  font-size: 14px;
  width: 60px;
  margin-left: -60px;
  /* text-align: center; */
}
.rea {
  float: right;
  color: white;
  font-size: 14px;
  margin-left: -60px;
  margin-top: -5px;
  line-height: 30px;
}
.center {
  width: 924px;
  margin: 0 auto;
}
.center-bottme {
  width: 924px;
  height: 311px;
  background: url("../image/zhong.png") no-repeat center top;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0px;
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
  width: 26%;
}
.center-bottme-2 {
  /* width: 60%; */
  float: right;
  margin-top: -60px;
}
.q1 {
  height: 20%;
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.ei {
  text-align: center;
  width: 25%;
  height: 72px;
  /* line-height: 45px; */
  background-size: 100% 100%;
  color: white;
  background: url("../image/wwg.png") no-repeat center top;
}
.q2 {
  height: 35%;
}
.q3 {
  height: 35%;
  width: 100%;
  margin-top: -40px;
}
.y2 {
  width: 30%;
  height: 100%;
  float: left;
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.y3 {
  width: 70%;
  height: 100%;
  float: left;
  /*  */
}
.dad {
  margin-top: 20px;
  margin-right: 15px;
}
.you {
  float: right;
  text-align: center;
  margin-top: -30px;
  /* margin-right: 10px; */
  line-height: 20px;
  color: white;
}
.q1s {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  left: 20px;
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
.q2s {
  position: absolute;
  left: 1720px;
  bottom: 1px;
}
.lf {
  margin-left: -30px;
  text-align: center;
  background-size: 100% 100%;
  background: url("../image/topbj.png") no-repeat center top;
}
.lfs {
  background-size: 100% 100%;
  background: url("../image/jsc1.png") no-repeat center top;
}
.rt {
  /* margin-right: 30px; */
  background: url("../image/topyou.png") no-repeat center top;
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
  float: right;
  line-height: 20px;
}
.ssi {
  font-size: 16px;
  line-height: 15px;
}

.center-top {
  width: 894px;
  height: 657px;
  float: left;
  position: relative;
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
  background: url("../image/sqhyd.png") no-repeat center;
  background-size: 100% 100%;
}
.bgi1 {
  height: 100%;
  width: 124px;
  background: url("../image/sqssd.png") no-repeat center;
  background-size: 100% 100%;
  margin: 0 50px;
}
.bgi2 {
  height: 100%;
  width: 124px;
  background: url("../image/zlzd.png") no-repeat center;
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
.ssd {
  font-size: 16px;
  color: white;
  line-height: 10px;
}
.xx > img {
  width: 35px;
  height: 35px;
  margin: 10px 0;
}
.sada {
  margin-top: 10px;
  font-size: 20px;
  background-image: -webkit-linear-gradient(bottom, #ffffff, #34cdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.seb {
  color: white;
}
.zuo {
  background: url("../image/dianzuo.png") no-repeat center;
  background-size: 100% 100%;
  height: 55px;
  width: 37px;
  float: left;
}
.you1 {
  background: url("../image/dianyou.png") no-repeat center;
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
  background: url("../image/touxiang.png") no-repeat center;
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
  font-size: 24px;
  color: #26f5f5ff;
}
.aaz {
  float: left;
}
.aay {
  float: right;
}
.tis {
  padding-left: 20px;
  font-size: 24px;
  position: relative;
  top: 15px;
  left: 15px;
  height: 47px;
  width: 180px;
  line-height: 47px;
  background: url("../image/sq.png") no-repeat center top;
  background-size: 100% 100%;
}
.tupian {
  width: 450px;
  height: 225px;
  margin-left: 15px;
}
.shugao {
  /* height: 408px; */
  width: 91px;
  /* border: 1px solid red; */
  position: absolute;
  left: 90px;
  top: 30px;
  z-index: 10;
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
}
.nianga > img {
  width: 100%;
  height: 100%;
  margin-left: 4px;
}
.youfud {
  float: right;
}
.weip {
  width: 100%;
  float: right;
  line-height: 44px;
  margin-top: 10px;
}
.weip > .di {
  line-height: 55px;
}
</style>