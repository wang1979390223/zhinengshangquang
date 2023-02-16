<template>
  <div class="container">
    <div class="top">
      <div class="title"><span class="title_tip">实时视频</span></div>
      <div class="nav">
        <ul>
          <li>
            <div class="icon" @click="qiehuan('全景')">
              <img
                src="../../../assets/images/rightBottom/nav_1.png"
                alt=""
                srcset=""
              >
              <span class="name">全景</span>
            </div>
          </li>
          <li>
            <div class="icon" @click="qiehuan('交通')">
              <img
                src="../../../assets/images/rightBottom/nav_2.png"
                alt=""
                srcset=""
              >
              <span class="name">交通</span>
            </div>
          </li>
          <li>
            <div class="icon" @click="qiehuan('步行')">
              <img
                src="../../../assets/images/rightBottom/nav_3.png"
                alt=""
                srcset=""
              >
              <span class="name">步行</span>
            </div>
          </li>
          <li>
            <div class="icon" @click="qiehuan('广场')">
              <img
                src="../../../assets/images/rightBottom/nav_4.png"
                alt=""
                srcset=""
              >
              <span class="name">广场</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="(ssvideo = '全景')" class="content">
      <img
        src="../../../assets/images/rightBottom/9a1e163c503f71fedf0950ba6c627a8.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ssvideo: '全景'
    };
  },
  mounted() {},
  methods: {
    qiehuan(item) {
      this.ssvideo = item;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  .top {
    display: flex;
    .title {
      width: 230px;
      height: 46px;
      position: absolute;
      top: 24px;
      right: 170px;
      bottom: 587px;
      left: 22px;
      background: url(../../../assets/images/rightBottom/title_bg.png) no-repeat
        left top / 100% 100%;
      padding: 8px;
      font-size: 24px;
      color: #fff;
      .title_tip {
        margin-left: 14px;
        line-height: 30px;
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
    .nav {
      width: 206px;
      height: 18px;
      position: absolute;
      top: 46px;
      right: 16px;
      bottom: 256px;
      left: 264px;
      ul li {
        width: 35px;
        float: left;
        margin-right: 13px;
        &:nth-child(3) {
          // width: 55px;
        }
        .icon {
          width: 43px;
          cursor: pointer;
          img {
            width: 18px;
            height: 18px;
            float: left;
          }
          .name {
            font-size: 12px;
            color: #fff;
            display: block;
            float: left;
            // -webkit-transform: scale(0.5);
            // -moz-transform: scale(0.5);
            // -o-transform: scale(0.5);
            // transform: scale(0.5);
          }
        }
      }
    }
  }

  .content {
    // width: 449px;
    // height: 227px;
    position: absolute;
    top: 77px;
    right: 15px;
    bottom: 16px;
    left: 22px;
    // background: #e8dcc6;
    // background: url(../../../assets/images/rightBottom/9a1e163c503f71fedf0950ba6c627a8.png)
    //   no-repeat left top / 100% 100%;
    img {
      width: 449px;
    height: 227px;
    }
  }
}
</style>
