<template>
  <div class="container">
    <div class="title"><span class="title_tip">惠农直通车</span></div>
    <div>
      <ul>
        <li v-for="(item, index) in item" :key="index" style="  cursor:pointer;" @click="showDialogVisible">
          <div class="img">
            <img
              src="../../../assets/images/dj-rightTop/img6.jpg"
              alt=""
              srcset=""
            >
          </div>
          <div class="content_box">
            <div class="content_title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="time">
              <img
                src="../../../assets/images/dj-rightTop/time_ico.png"
                alt=""
                srcset=""
              >{{ item.time }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          title: '“惠农直通车”开进西市街...',
          content:
            '“来搭把手，把花车摆成A字形，这样中间的标语就更醒目啦。”连日来，在婺城区城中街道西市街商圈的帝壹城商场内，社工和商户们忙碌地筹备着，一场由城中街道西市街商圈联合党委联合金厦帝壹城、中国移动婺城分公司发起的“惠农直通车”农特产品展销...',
          time: '2022年11月24日13:22:16'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showDialogVisible() {
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
    top: 18px;
    right: 170px;
    bottom: 587px;
    left: 16px;
    background: url(../../../assets/images/dj-rightTop/title_bg.png) no-repeat
      left top / 100% 100%;
    padding: 8px;
    font-size: 24px;
    color: #fff;
    .title_tip {
      line-height: 32px;
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
  ul {
    margin-top: 80px;
    li {
      width: 436px;
      height: 214px;
      margin-left: 22px;
      margin-bottom: 10px;
      display: flex;
      .img {
        width: 243px;
        height: 214px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content_box {
        margin-left: 14px;
        position: relative;
        .content_title {
          width: 210px;
          height: 16px;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: #ffffff;
          line-height: 16px;

          background: linear-gradient(0deg, #ffffff 0%, #34cdff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .content {
          width: 183px;
          height: 160px;
          font-size: 12px;
          margin-top: 10px;
          line-height: 20px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 75;
        }
        .time {
          height: 11px;
          font-size: 10px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #e3e3e3;
          line-height: 11px;
          position: absolute;
          bottom: 0px;
          img {
            width: 9px;
            height: 9px;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
