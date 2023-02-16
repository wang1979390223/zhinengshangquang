<template>
  <div class="wapper_sqDangJian_lefttop">
    <!-- title -->
    <div class="title"><span class="title_tip">党建基本情况</span></div>
    <!-- icon -->
    <div class="icon_center">
      <img
        class="party_emblem"
        src="../../../assets/images/image/党徽.png"
        alt=""
      >
    </div>
    <!-- icon_number -->
    <div class="txt_center">
      <ul style="  cursor:pointer;" @click="showDialogVisible(1)">
        <!-- <li class="txt_center_li_one">
          <span class="txt_center_sp">1</span>个
        </li> -->
        <li :class="['txt_center_li_two', { 'txt_center_li_two2': showid == 1 }]">
          商圈联合党委
        </li>
      </ul>
    </div>
    <!-- gridview -->
    <div class="gridview_center">
      <div class="gridview_center_one">
        <div class="gridview_center_one_box">
          <img src="../../../assets/images/image/党组织.png" alt="">
        </div>
        <ul style="  cursor:pointer;" @click="showDialogVisible(6)">
          <li><span class="num">6</span>个</li>
          <li
            :class="[
              'gridview_center_one_li',
              { 'gridview_center_one_li2': showid == 6 }
            ]"
          >
            党组织
          </li>
        </ul>
      </div>
      <div class="gridview_center_one">
        <div class="gridview_center_one_box">
          <img src="../../../assets/images/image/党员.png" alt="">
        </div>
        <ul style="  cursor:pointer;" @click="showDialogVisible(66)">
          <li><span class="num">66</span>个</li>
          <li
            :class="[
              'gridview_center_one_li',
              { 'gridview_center_one_li2': showid == 66 }
            ]"
          >
            党员
          </li>
        </ul>
      </div>
      <div class="gridview_center_one">
        <div class="gridview_center_one_box">
          <img src="../../../assets/images/image/志愿者队伍.png" alt="">
        </div>
        <ul style="  cursor:pointer;" @click="showDialogVisible(5)">
          <li><span class="num">5</span>个</li>
          <li
            :class="[
              'gridview_center_one_li',
              { 'gridview_center_one_li2': showid == 5 }
            ]"
          >
            志愿者队伍
          </li>
        </ul>
      </div>
      <div class="gridview_center_one">
        <div class="gridview_center_one_box">
          <img src="../../../assets/images/image/成员单位.png" alt="">
        </div>
        <ul style="  cursor:pointer;" @click="showDialogVisible(4)">
          <li><span class="num">4</span>个</li>
          <li
            :class="[
              'gridview_center_one_li',
              { 'gridview_center_one_li2': showid == 4 }
            ]"
          >
            成员单位
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showid: ''
    };
  },
  methods: {
    showDialogVisible(item) {
      this.showid = item;
      this.$emit('showdialog');
    }
  }
};
</script>

<style lang="scss" scoped>
.wapper_sqDangJian_lefttop {
  padding: 10px 10px;
  position: relative;
  .title {
    width: 300px;
    height: 46px;
    position: absolute;
    top: 18px;
    right: 170px;
    bottom: 587px;
    left: 16px;
    background: url(../../../assets/images/leftTop/title_bg.png) no-repeat left
      top / 100% 100%;
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
  .icon_center {
    width: 204px;
    height: 130px;
    position: absolute;
    left: 146px;
    top: 124px;
    background: url('../../../assets/images/image/组 2592@2x(1).png') no-repeat
      left top / 100% 100%;
    .party_emblem {
      margin-left: 65px;
      margin-top: 10px;
      width: 68px;
      height: 69px;
      animation: danghui 1.5s infinite alternate;
    }
  }
  .txt_center {
    width: 204px;
    height: 130px;
    position: absolute;
    left: 146px;
    top: 195px;
    .txt_center_li_one {
      color: #fff;
      font-size: 13px;
      .txt_center_sp {
        font-size: 30px;
        font-weight: 1000 !important;
        color: #26f5f5;
        background-image: linear-gradient(
          to top,
          #26f5f5,
          #26f5f5
        ); /* 线性渐变背景，方向向上 */
        -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
        -webkit-text-fill-color: transparent;
      }
    }
    .txt_center_li_two {
      width: 182px;
        height: 62px;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      margin-top: -128px;
    margin-left: 16px;
      padding-top: 20px;
      background: url('../../../assets/images/image/sqlhdwbg.png') no-repeat;
    }
    .txt_center_li_two:hover {
      color: #c99d41;
    }
    .txt_center_li_two2 {
      font-size: 18px;
      font-weight: 600;
      margin-top: -128px;
    margin-left: 16px;
      color: #c99d41;
    }
  }
  .gridview_center {
    width: 97%;
    height: 230px;
    // background: green;gridview_center
    position: absolute;
    left: 10px;
    top: 250px;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .gridview_center_one {
      width: 160px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .gridview_center_one_box {
        width: 76px;
        height: 69px;
        background: url('../../../assets/images/image/组 2584.png') no-repeat
          left top / 100% 100%;
        img {
          margin-left: 26px;
          margin-top: 14px;
        }
      }
      .gridview_center_one_box:hover {
        animation: djjbqk 2s;
      }
      ul {
        li {
          span {
            font-size: 40px;
            font-weight: 900;
            background-image: linear-gradient(
              to top,
              #26f5f5,
              #26f5f5
            ); /* 线性渐变背景，方向向上 */
            -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
            -webkit-text-fill-color: transparent;
          }
        }
        .num:hover {
          color: #c99d41;
        }
        .gridview_center_one_li {
          font-size: 15px;
        }
        .gridview_center_one_li:hover {
          color: #c99d41;
        }
        .gridview_center_one_li2 {
          color: #c99d41;
          font-size: 15px;
        }
      }
    }
  }
  //  动画效果
  @keyframes djjbqk {
    to {
      transform: translateY(-8px);
    }
  }
    // 动画效果
    @keyframes danghui {
    to {
      transform: translateY(9px);
    }
  }
}
</style>
