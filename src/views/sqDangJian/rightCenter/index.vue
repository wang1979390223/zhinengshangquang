<template>
  <div class="container">
    <div class="title"><span class="title_tip">志愿服务</span></div>
    <div>
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          style="  cursor:pointer;"
          @click="showDialogVisible"
        >
          <div class="img">
            <img
              :src="item.url"
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
      items: [
        {
          title: '情系桑榆慰晚晴，重阳慰问...',
          content:
            ' 秋来又重阳，情系桑榆晚。为弘扬中华民族尊老、敬老的传统美德，在重阳节即将来临之际，10月13日下午，城中街道西市街商圈联合...',
          time: '2022年11月23日14:37:20',
          url: require('@/assets/images/dj-rightTop/img2.jpg')
        },
        {
          title: '最美志愿红，今天C位留给你',
          content:
            ' 1月26日，在这个阴冷潮湿的寒冬，城中街道西市街商圈却出现了一批志愿者的身影，成为这个婺城冬天里最靓丽的风景。她们是来自...',
          time: '2022年11月24日15:17:16',
          url: require('@/assets/images/dj-rightTop/img8.jpg')
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
