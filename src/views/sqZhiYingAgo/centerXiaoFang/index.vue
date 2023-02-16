<!-- 资源调取 -->
<template>
  <div class="container">
    <div class="title"><span class="title_tip">消防</span></div>
    <div class="left_box">
      <img
        src="../../../assets/images/leftBottom/SaoMiao.png"
        alt=""
        srcset=""
      >
    </div>
    <div class="center_box">
      <ul>
        <li>
          <div class="img">
            <img
              src="../../../assets/images/leftBottom/YanWu.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="right">
            <p class="num">35</p>
            <p class="name">烟雾传感</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../assets/images/leftBottom/XiaoFangShuiYa.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="right">
            <p class="num">35</p>
            <p class="name">消防水压</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../assets/images/leftBottom/RanQi.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="right">
            <p class="num">35</p>
            <p class="name">餐饮燃气</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../assets/images/leftBottom/TongDao.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="right">
            <p class="num">35</p>
            <p class="name">消防通道</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="light"></div>
    <div class="right_left">
      <ul>
        <li class="right_left_top">
          <p class="num">100</p>
          <p class="name">累计预警</p>
        </li>
        <li class="right_left_bottom">
          <p class="num">10</p>
          <p class="name">今日预警</p>
        </li>
      </ul>
    </div>
    <div class="right_right">
      <p class="right_right_title">实时监控</p>
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
              <div>{{ v.type }}</div>
              <div>{{ v.status }}</div>
              <div style="width: 33%;">{{ v.time }}</div>
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
      list: ['类型', '状态', '时间', '编号'],
      cllData: [
        {
          type: '烟雾传感',
          status: '正常',
          time: '2022-11-12 14:46:25',
          num: 10001
        },
        {
          type: '消防水压',
          status: '正常',
          time: '2022-11-12 14:46:25',
          num: 10001
        },
        {
          type: '餐饮燃气',
          status: '正常',
          time: '2022-11-12 14:46:25',
          num: 10001
        },
        {
          type: '消防通道',
          status: '正常',
          time: '2022-11-12 14:46:25',
          num: 10001
        }
      ]
    };
  },
  mounted() {},
  methods: {}
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
  .left_box {
    width: 202px;
    height: 202px;
    position: absolute;
    top: 87px;
    right: 1137px;
    bottom: 30px;
    left: 36px;
  }
  .center_box {
    width: 202px;
    height: 202px;
    position: absolute;
    top: 76px;
    right: 797px;
    bottom: 48px;
    left: 259px;
    ul {
      width: 320px;
      height: 202px;
      li {
        width: 50%;
        float: left;
        display: flex;
        &:nth-child(2n) {
          padding-left: 5px;
        }
        .img {
          width: 85px;
          height: 87px;
          background: url(../../../assets/images/leftBottom/li_bg.png) no-repeat
            left top / 100% 100%;
          img {
            width: 32px;
            height: 32px;
            margin: 22px 27px 0;
            display: inline-block;
          }
        }
        .right {
          .num {
            margin: 25px 0 5px;
            font-size: 26px;
            font-weight: bold;
            font-style: oblique;
            color: #26f5f5;
          }
          .name {
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }
  }
  .light {
    width: 20px;
    height: 233px;
    position: absolute;
    top: 57px;
    right: 767px;
    bottom: 29px;
    left: 588px;
    background: url(../../../assets/images/leftBottom/light.png) no-repeat left
      top / 100% 100%;
  }
  .right_left {
    width: 124px;
    height: 247px;
    position: absolute;
    top: 43px;
    right: 629px;
    bottom: 21px;
    left: 625px;
    ul {
      position: absolute;
      top: 0px;
      width: 121px;
      li {
        width: 100%;
        height: 124px;
        float: left;
        text-align: center;
        padding-right: 3px;
        .num {
          margin: 25px 0 5px;
          font-size: 26px;
          color: #fff;
        }
        .name {
          font-size: 14px;
          color: #fff;
          margin-top: 35px;
        }
      }
      .right_left_top {
        background: url(../../../assets/images/leftBottom/LeiJi.png) no-repeat
          left top / 100% 100%;
      }
      .right_left_bottom {
        background: url(../../../assets/images/leftBottom/JinRi.png) no-repeat
          left top / 100% 100%;
      }
    }
  }
  .right_right {
    width: 556px;
    height: 262px;
    position: absolute;
    top: 33px;
    right: 48px;
    bottom: 21px;
    left: 801px;
    .right_right_title {
      color: #26f5f5;
      font-size: 16px;
      text-align: center;
    }
    .scroll-v {
      width: 90%;
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
          background: red;
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
        &:nth-child(3) {
          width: 33%;
        }
      }
    }
  }
}
</style>
