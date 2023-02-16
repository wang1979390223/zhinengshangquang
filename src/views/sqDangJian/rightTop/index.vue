<template>
  <div class="container">
    <div class="title"><span class="title_tip">党建活动</span></div>
    <div>
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          style="  cursor:pointer;"
          @click="showDialogVisible"
        >
          <div class="img">
            <img :src="item.url" alt="" srcset="">
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
      items: [
        {
          title: '党建联盟聚合力 相融共进...',
          content:
            '为贯彻全省、全市基层党建工作会议精神，高标准落实婺城区委“红动婺城、扛旗强基”行动要求，党建引领优化西市街商圈营商法治环境...',
          time: '2022年11月20日15:18:20',
          url: require('../../../assets/images/dj-rightTop/img.jpg')
        },
        {
          title: '党建引领，共筑诚信！西市...',
          content:
            '“感谢西市街商圈联合党委推荐我司成为党组织推荐商户，也感谢银泰百货一直以来鼎力支持，我们会珍惜这份荣誉，更加严格要求自己...',
          time: '2022年11月22日14:30:55',
          url: require('../../../assets/images/dj-rightTop/img7.jpg')
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
      height: 105px;
      margin-left: 22px;
      margin-bottom: 10px;
      display: flex;
      .img {
        width: 164px;
        height: 105px;
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
          width: 258px;
          // height: 55px;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
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
