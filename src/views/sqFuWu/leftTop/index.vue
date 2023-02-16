<template>
  <div class="container">
    <div class="title"><span class="title_tip">金融服务</span></div>
    <div class="title_right">
      <div :class="year ? 'active' : 'title_right_tips'" @click="show">年</div>
      <div :class="month ? 'active' : 'title_right_tips'" @click="showMonth">
        月
      </div>
      <div :class="day ? 'active' : 'title_right_tips'" @click="showDay">
        日
      </div>
    </div>
    <div v-if="year" class="content">
      <ul>
        <li style="  cursor:pointer;" @click="showDialogVisible(2)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_1.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">2</p>
            <p :class="['name',{'num2': showid == 2}]">贷款</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(26)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_2.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">
              26<span class="tips">万</span>
            </p>
            <p :class="['name',{'num2': showid == 26}]">贷款金额</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(21)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_3.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">21</p>
            <p :class="['name',{'num2': showid == 21}]">保函笔数</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(20)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_4.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">
              20<span class="tips">万</span>
            </p>
            <p :class="['name', {'num2': showid == 20}]">保函额度</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="month" class="content">
      <ul>
        <li style="  cursor:pointer;" @click="showDialogVisible(2)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_1.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">2</p>
            <p :class="['name',{'num2': showid == 2}]">贷款</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(16)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_2.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">16<span class="tips">万</span></p>
            <p :class="['name',{'num2': showid == 16}]">贷款金额</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(12)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_3.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">12</p>
            <p :class="['name',{'num2': showid == 12}]">保函笔数</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(10)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_4.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">10<span class="tips">万</span></p>
            <p :class="['name',{'num2': showid == 10}]">保函额度</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="day" class="content">
      <ul>
        <li style="  cursor:pointer;" @click="showDialogVisible(1)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_1.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">1</p>
            <p :class="['name',{'num2': showid == 1}]">贷款</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(2)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_2.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">2<span class="tips">万</span></p>
            <p :class="['name',{'num2': showid == 2}]">贷款金额</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(10)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_3.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">10</p>
            <p :class="['name',{'num2': showid == 10}]">保函笔数</p>
          </div>
        </li>
        <li style="  cursor:pointer;" @click="showDialogVisible(8)">
          <div class="img">
            <img
              src="../../../assets/images/fw/left_top_4.png"
              alt=""
              srcset=""
            >
          </div>
          <div class="li_right">
            <p class="num">8<span class="tips">万</span></p>
            <p :class="['name',{'num2': showid == 8}]">保函额度</p>
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
      showid: '',
      item: [
        {
          title: '聚焦党建先锋 寻找党建榜样',
          content:
            '加强党建活动，落实双重组织生活制度，党组班子成员积极参加联系点党支部组织生活和党建活动，及时跟进指导、总结经验做法...',
          time: '2022年11月24日19:37:16'
        }
      ],
      year: true,
      month: false,
      day: false
    };
  },
  mounted() {},
  methods: {
    show() {
      this.year = true;
      this.month = false;
      this.day = false;
    },
    showMonth() {
      this.year = false;
      this.month = true;
      this.day = false;
    },
    showDay() {
      this.year = false;
      this.month = false;
      this.day = true;
    },
    showDialogVisible(id) {
      this.showid = id;
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
  .title_right {
    width: 179px;
    height: 22px;
    position: absolute;
    top: 26px;
    right: 29px;
    bottom: 124px;
    left: 277px;
    .title_right_tips {
      width: 49px;
      height: 22px;
      display: block;
      float: left;
      font-size: 14px;
      text-align: center;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #fefeff;
      line-height: 22px;
      background: #0a2c42;
      cursor: pointer;
      border-image: linear-gradient(108deg, #67b9ff, #ffffff) 10 10;
      margin: 0 8px;
      &:nth-child(2) {
        // margin: 0 16px;
      }
      // &:nth-child(2),
      &:nth-child(3) {
        width: 49px;
        height: 22px;
        background: #0a2c42;
        border: 1px solid #0a2c42;
        border-radius: 4px;
      }
    }
    .active {
      width: 49px;
      height: 22px;
      display: block;
      float: left;
      font-size: 14px;
      text-align: center;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #fefeff;
      line-height: 22px;
      background: linear-gradient(90deg, #006ae1, #16b7ff);
      border-radius: 4px;
      border: 1px solid #67b9ff;
    }
  }
  .content {
    width: 100%;
    position: absolute;
    top: 93px;
    right: 170px;
    bottom: 587px;
    left: 18px;
    ul {
      li {
        display: flex;
        float: left;
        margin-right: 3px;
        &:nth-child(1) {
          margin-right: -20px;
        }
        .img {
          width: 53px;
          height: 53px;
          display: flex;
          background: url(../../../assets/images/fw/left_top_bg.png) no-repeat
            left top / 100% 100%;
          img {
            width: 20px;
            height: 20px;
            margin: auto;
          }
        }
        .li_right {
          margin-left: 3px;
          .num {
            width: 56px;
            height: 20px;
            font-size: 26px;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #26f5f5;
            line-height: 22px;
            .tips {
              font-size: 12px;
            }
          }

          .name {
            width: 56px;
            height: 13px;
            margin-top: 14px;
            font-size: 14px;
            line-height: 13px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #ffffff;
          }
          .name:hover {
            color: #c99d41;
          }
          .num2 {
            width: 56px;
            height: 13px;
            margin-top: 14px;
            font-size: 14px;
            line-height: 13px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #c99d41;
          }
        }
      }
    }
  }
}
</style>
