<template>
  <div class="container">
    <div class="title"><span class="title_tip">党建项目</span></div>
    <div>
      <ul>
        <li v-for="(item, index) in item" :key="index" style="  cursor:pointer;" @click="showDialogVisible">
          <div v-if="index == 0" class="img">
            <img
              src="../../../assets/images/dj-rightTop/img3.jpg"
              alt=""
              srcset=""
            >
          </div>
          <div v-if="index == 1" class="img">
            <img
              src="../../../assets/images/dj-rightTop/img4.jpg"
              alt=""
              srcset=""
            >
          </div>
          <div v-if="index == 2" class="img">
            <img
              src="../../../assets/images/dj-rightTop/img5.jpg"
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
          title: '守护“舌尖上的安全”！西...',
          content:
            '天气炎热，食品容易腐败变质。为筑牢西市街商圈安全防线，9月1日上午，由婺城区城中街道办事处主任杨大春带领西市街商圈联...',
          time: '2022年11月24日10:32:36'
        },
        {
          title: '西市街商圈联合党委第三期... ',
          content:
            '面对新零售、新渠道、新形势的加持，竞争越来越激烈的时代，实体门店销售面临巨大的挑战，人流量少、销量下降，库存积压...',
          time: '2022年11月26日14:37:16'
        },
        {
          title: '在“趣味”中学史明理，追...',
          content:
            '“四史是指哪几史？“第一个中文全译本《共产党宣言》是由谁翻译？”、“红船精神主要内容是什么？”。一群人有的穿梭...',
          time: '2022年11月27日16:42:53'
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
    top: 24px;
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
    margin-top: 90px;
    li {
      width: 436px;
      height: 105px;
      margin-left: 22px;
      margin-bottom: 22px;
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
