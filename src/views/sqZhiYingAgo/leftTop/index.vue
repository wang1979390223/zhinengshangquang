<!-- 资源调取 -->
<template>
  <div class="container">
    <div class="title"><span class="title_tip">综合行政执法队</span></div>
    <div class="content_top">
      <ul>
        <li class="content_li li_1" @click="showDialogVisible('区公安局')">
          <div
            :class="[
              'content_li_title',
              { content_li_title2: showName == '区公安局' }
            ]"
          >
            区公安局
          </div>
          <div class="content_li_img">
            <div class="content_li_img_icon">
              <img
                src="../../../assets/images/leftTop/ZhiFa.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="content_li_img_bg"></div>
          </div>
        </li>
        <li class="content_li li_2" @click="showDialogVisible('区建设局')">
          <div
            :class="[
              'content_li_title',
              { content_li_title2: showName == '区建设局' }
            ]"
          >
            区建设局
          </div>
          <div class="content_li_img">
            <div class="content_li_img_icon">
              <img
                src="../../../assets/images/leftTop/JianShe.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="content_li_img_bg"></div>
          </div>
        </li>
        <li class="content_li li_3" @click="showDialogVisible('城中街道')">
          <div
            :class="[
              'content_li_title',
              { content_li_title2: showName == '城中街道' }
            ]"
          >
            城中街道
          </div>
          <div class="content_li_img">
            <div class="content_li_img_icon">
              <img
                src="../../../assets/images/leftTop/ChengZhong.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="content_li_img_bg"></div>
          </div>
        </li>
        <li class="content_li li_4" @click="showDialogVisible('区行政执法局')">
          <div
            :class="[
              'content_li_title',
              { content_li_title2: showName == '区行政执法局' }
            ]"
          >
            区行政执法局
          </div>
          <div class="content_li_img">
            <div class="content_li_img_icon">
              <img
                src="../../../assets/images/leftTop/ZhiFa.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="content_li_img_bg"></div>
          </div>
        </li>
        <li class="content_li li_5" @click="showDialogVisible('区商务局')">
          <div
            :class="[
              'content_li_title',
              { content_li_title2: showName == '区商务局' }
            ]"
          >
            区商务局
          </div>
          <div class="content_li_img">
            <div class="content_li_img_icon">
              <img
                src="../../../assets/images/leftTop/ShangWu.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="content_li_img_bg"></div>
          </div>
        </li>
        <li class="content_li li_6" @click="showDialogVisible('区市场监管局')">
          <div
            :class="[
              'content_li_title',
              { content_li_title2: showName == '区市场监管局' }
            ]"
          >
            区市场监管局
          </div>
          <div class="content_li_img">
            <div class="content_li_img_icon">
              <img
                src="../../../assets/images/leftTop/ShiChang.png"
                alt=""
                srcset=""
              >
            </div>
            <div class="content_li_img_bg"></div>
          </div>
        </li>
      </ul>
      <div class="content_top_center"></div>
    </div>
    <div class="contnet_bottom">
      <span class="left_jt"></span>
      <div class="contnet_bottom_title">商圈市场主体</div>
      <span class="right_jt"></span>
      <div class="contnet_bottom_content">
        <ul>
          <li
            v-for="(item, index) in listData"
            :key="index"
            class="contnet_bottom_content_li"
          >
            <div class="contnet_bottom_content_li_img"></div>
            <div class="contnet_bottom_content_li_name">{{ item.name }}</div>
          </li>
          <img
            src="../../../image/dybh.png"
            alt=""
            style="position: absolute;
                         top: 0;
                    left: 7px;"
          >
          <img
            src="../../../image/hdbh.png"
            alt=""
            style="position: absolute;
                    top: 0;
                          left: 98px;"
          >
          <img
            src="../../../image/ysgwgc.png"
            alt=""
            style="position: absolute;
                       top: 0;
                      left: 185px;"
          >
          <img
            src="../../../image/jhdsj.png"
            alt=""
            style="position: absolute;
                        top: 0;
                      left: 274px;"
          >
          <img
            src="../../../image/ytc.png"
            alt=""
            style="position: absolute;
                        top: 110px;
                    left: 274px;"
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showName: '',
      listData: [
        {
          name: '第一百货',
          icon: 'images/leftTop/center.png'
        },
        { name: '恒大百货', icon: '' },
        { name: '永盛购物广场', icon: '' },
        { name: '金华大世界', icon: '' },
        { name: '中华广场', icon: '' },
        { name: '金茂', icon: '' },
        { name: '金厦帝壹城', icon: '' },
        { name: '唯糖', icon: '' },
        { name: '银泰城', icon: '' },
        { name: '其他', icon: '' }
      ]
    };
  },
  mounted() {},
  methods: {
    showDialogVisible(item) {
      this.showName = item;
      this.$emit('showdialog');
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
    top: 24px;
    right: 170px;
    bottom: 587px;
    left: 16px;
    background: url(../../../assets/images/leftTop/title_bg.png) no-repeat left
      top / 100% 100%;
    padding: 8px;
    font-size: 24px;
    color: #fff;
    .title_tip {
      line-height: 30px;
      margin-left: 8px;
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
  .content_top {
    width: 440px;
    height: 268.9px;
    position: absolute;
    top: 81px;
    right: 19px;
    bottom: 307px;
    left: 27px;
    background: url(../../../assets/images/leftTop/center_bg.png) no-repeat left
      top / 100% 100%;
    .content_li.li_1,
    .content_li.li_2,
    .content_li.li_3,
    .content_li.li_4,
    .content_li.li_5,
    .content_li.li_6 {
      cursor: pointer;
    }
    .content_li {
      // animation: zhxzzfd 1.5s infinite alternate;
    //   transform-origin: center;
    // animation: xuanzhuan 20s linear alternate;
      .content_li_title {
        padding: -10px;
        font-size: 17.08px;
        text-align: center;
        width: 150%;
        margin-left: -25%;
        background-image: linear-gradient(
          to top,
          #34cdff,
          #ffffff
        ); /* 线性渐变背景，方向向上 */
        -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
        -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
      }
      .content_li_title2 {
        padding: -10px;
        font-size: 17.08px;
        text-align: center;
        width: 150%;
        margin-left: -25%;
        background-image: linear-gradient(
          to top,
          #d49830,
          #ffffff
        ); /* 线性渐变背景，方向向上 */
        -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
        -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
      }
      .content_li_img {
        width: 76px;
        height: 70px;
        background: url(../../../assets/images/leftTop/bg.png) no-repeat left
          top / 100% 100%;
        margin-top: -10px;
        .content_li_img_icon {
          display: flex;
          justify-content: center;

          img {
            padding-top: 10px;
          }
        }
      }
    }
    .content_li:hover {
      animation-play-state: paused;
    }
    .li_1 {
      position: absolute;
      top: 10px;
      right: 181px;
      bottom: 181px;
      left: 188px;
    }
    li:hover .content_li_title {
      background-image: linear-gradient(to top, #d49830, #ffffff);
    }
    .li_2 {
      position: absolute;
      top: 44px;
      right: 52px;
      bottom: 155px;
      left: 317px;
    }
    .li_3 {
      position: absolute;
      top: 124px;
      right: 26px;
      bottom: 84px;
      left: 343px;
    }
    .li_4 {
      position: absolute;
      top: 165px;
      right: 181px;
      bottom: 29px;
      left: 188px;
    }
    .li_5 {
      position: absolute;
      top: 124px;
      right: 330px;
      bottom: 84px;
      left: 39px;
    }
    .li_6 {
      position: absolute;
      top: 44px;
      right: 302px;
      bottom: 155px;
      left: 62px;
    }
    .content_top_center {
      position: absolute;
      top: 90px;
      right: 183px;
      bottom: 104px;
      left: 183px;
      background: url(../../../assets/images/leftTop/center.png) no-repeat left
        top / 100% 100%;
    }
  }
 
  .contnet_bottom {
    .left_jt {
      width: 20px;
      height: 21px;
      position: absolute;
      top: 374px;
      right: 345px;
      bottom: 262px;
      left: 121px;
      background: url(../../../assets/images/leftTop/left_jt.png) no-repeat left
        top / 100% 100%;
    }
    .contnet_bottom_title {
      width: 186px;
      height: 29px;
      position: absolute;
      top: 371px;
      right: 146px;
      bottom: 257px;
      left: 154px;
      color: #26f5f5;
      font-size: 30px;
    }
    .right_jt {
      width: 20px;
      height: 21px;
      position: absolute;
      top: 371px;
      right: 112px;
      bottom: 154px;
      left: 354px;
      background: url(../../../assets/images/leftTop/right_jt.png) no-repeat
        left top / 100% 100%;
    }
    .contnet_bottom_content {
      width: 446px;
      position: absolute;
      top: 420px;
      right: 18px;
      bottom: 30px;
      left: 21px;

      .contnet_bottom_content_li {
        width: 20%;
        height: 110px;
        float: left;
        position: relative;
        .contnet_bottom_content_li_img {
          width: 74px;
          height: 74px;
          background: url(../../../assets/images/leftTop/center.png) no-repeat
            left top / 100% 100%;
          margin: auto;
        }
        .contnet_bottom_content_li_name {
          width: 84px;
          height: 14px;
          font-size: 14px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
   // 动画效果
   @keyframes zhxzzfd {
    to {
      transform: translateY(6px);
    }
  }
  @keyframes xuanzhuan {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
}
</style>
