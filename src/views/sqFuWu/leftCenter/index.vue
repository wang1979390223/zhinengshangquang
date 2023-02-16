<template>
  <div class="container">
    <div class="title"><span class="title_tip">法律服务</span></div>
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in item"
          :key="index"
          style="  cursor:pointer;"
          @click="showDialogVisible(item.num)"
        >
          <p class="num">
            <span>{{ item.num }}</span><span class="num_tips">{{ item.tip }}</span>
          </p>
          <p :class="['name',{num2: showid == item.num}]">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showid: '',
      item: [
        {
          num: '20',
          name: '法律咨询',
          tip: '个'
        },
        {
          num: '3',
          name: '经济谈判',
          tip: '个'
        },
        {
          num: '1',
          name: '诉讼代理',
          tip: '个'
        },
        {
          num: '4',
          name: '法律宣传',
          tip: '个'
        },
        {
          num: '7',
          name: '劳动保障',
          tip: '个'
        },
        {
          num: '2',
          name: '合规辅导',
          tip: '个'
        },
        {
          num: '9',
          name: '其他',
          tip: '个'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showDialogVisible(item) {
      this.showid = item
      this.$emit('showdialog');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .title {
    width: 232px;
    height: 46px;
    position: absolute;
    top: 21px;
    right: 170px;
    bottom: 587px;
    left: 17px;
    line-height: 30px;
    background: url(../../../assets/images/fw/title_bg_238.png) no-repeat left
      top / 100% 100%;
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
  .content {
    width: 100%;
    height: 46px;
    position: absolute;
    top: 60px;
    right: 14px;
    bottom: 23px;
    left: 10px;
    ul {
      li {
        position: relative;
        width: 108.1px;
        height: 50px;
        margin-top: 19px;
        margin-right: 10px;
        text-align: center;
        float: left;
        background: url(../../../assets/images/fw/scmj.png) no-repeat left top /
          100% 100%;
        .num {
          position: absolute;
          top: -8px;
          width: 108.1px;
          height: 26px;
          font-size: 26px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: #26f5f5;
          line-height: 26px;
          .num_tips {
            font-size: 12px;
          }
        }
        .name {
          position: absolute;
          bottom: 6px;
          width: 108.1px;
          height: 14px;
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 14px;
        }
        .name:hover {
          color: #c99d41;
        }
        .num2 {
          position: absolute;
          bottom: 6px;
          width: 108.1px;
          height: 14px;
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #c99d41;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
