<template>
  <div class="container">
    <div class="title">治理力量</div>
    <div class="left">
      <ul>
        <li>
          <div class="img">1</div>
          <!-- <div class="name">网格长</div> -->
        </li>
        <li>
          <div class="img">3</div>
          <!-- <div class="name">网格员</div> -->
        </li>
        <li>
          <div class="img">N</div>
          <!-- <div class="name">联合党委</div> -->
        </li>
      </ul>
    </div>
    <div class="center">
      <div class="center_top">
        <div
          class="center_top_box"
          style="  cursor:pointer;"
          @click="showDialogVisible2"
        >
          <div class="ico"></div>
          <div :class="['name', { name2: showName == '网格长' }]">网格长</div>
          <div class="first"></div>
        </div>
        <div class="mapbg">
          <img
            src="../../../assets/images/dj-center/Map.png"
            alt=""
            srcset=""
          >
        </div>
      </div>
      <div class="center_center">
        <ul>
          <li
            v-for="(item, index) in center_item"
            :key="index"
            style="cursor:pointer;"
            @click="showDialogVisible2(item)"
          >
            <div class="secend">
              <img :src="item.img" alt="">
            </div>
            <div class="beijing"></div>
            <span :class="['name', { name2: showName == item.name }]">{{
              item.name
            }}</span>
          </li>
        </ul>
      </div>
      <div class="center_bottom">
        <div class="img">
          <img
            src="../../../assets/images/dj-center/city.png"
            alt=""
            srcset=""
          >
        </div>
        <div class="list">
          <ul>
            <li
              v-for="(item, index) in center_bottom_item"
              :key="index"
              style="cursor:pointer;"
              @click="showDialogVisible2(item)"
            >
              <div v-if="index == 0" class="bottom_list_imgbg">
                <img
                  src="../../../assets/images/dj-center/blgb.png"
                  alt=""
                  srcset=""
                >
              </div>
              <div v-if="index == 1" class="bottom_list_imgbg">
                <img
                  src="../../../assets/images/dj-center/yizhiduiwu.png"
                  alt=""
                  srcset=""
                >
              </div>
              <div v-if="index == 2" class="bottom_list_imgbg">
                <img
                  src="../../../assets/images/dj-center/zhxzzfd.png"
                  alt=""
                  srcset=""
                >
              </div>
              <div v-if="index == 3" class="bottom_list_imgbg">
                <img
                  src="../../../assets/images/dj-center/weiwangge.png"
                  alt=""
                  srcset=""
                >
              </div>
              <div v-if="index == 4" class="bottom_list_imgbg">
                <img
                  src="../../../assets/images/dj-center/zhiyuanfuwu.png"
                  alt=""
                  srcset=""
                >
              </div>
              <p :class="['name', { name3: showName == item.name }]">
                {{ item.name }}
              </p>
              <div class="third"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li
          v-for="(item, index) in bottom_item"
          :key="index"
          style="  cursor:pointer;"
          @click="showDialogVisible(item)"
        >
          <div class="num">
            <p>
              <img class="centerButtomImg" :src="item.num" alt="">
            </p>
          </div>
          <div :class="['name', { name4: showName == item.name }]">
            {{ item.name }}
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
      showName: '',
      center_item: [
        {
          name: '专职网格员',
          img: require('@/assets/images/dj-center/zzwgy.png')
        },
        {
          name: '兼职网格员',
          img: require('@/assets/images/dj-center/jzwgy.png')
        },
        {
          name: '网格指导员',
          img: require('@/assets/images/dj-center/wgzdy.png')
        }
      ],
      center_bottom_item: [
        { name: '包联干部' },
        { name: '党员干部' },
        { name: '综合行政执法队' },
        { name: '微网格治理团队' },
        { name: '志愿者队伍' }
      ],
      bottom_item: [
        {
          num: require('../../../assets/images/wtqd.png'),
          tip: '张',
          name: '问题清单'
        },
        {
          num: require('../../../assets/images/fwzyqd.png'),
          tip: '张',
          name: '资源清单'
        },
        {
          num: require('../../../assets/images/fwxmqd.png'),
          tip: '张',
          name: '项目清单'
        },
        {
          num: require('../../../assets/images/lxhy.png'),
          tip: '次',
          name: '联席会议'
        },
        {
          num: require('../../../assets/images/sfw.png'),
          tip: '次',
          name: '三服务'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showDialogVisible(item) {
      this.showName = item.name;
      this.$emit('showdialog');
    },
    showDialogVisible2(item) {
      this.showName = item.name;
      this.$emit('showdialog2');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .title {
    width: 758px;
    height: 53px;
    margin: 34px auto 0;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 53px;
    background: url(../../../assets/images/dj-center/title_bg.png) no-repeat
      left top / 100% 100%;
  }
  .left {
    width: 100px;
    height: 370px;
    position: absolute;
    top: 109px;
    right: 745px;
    left: 50px;
    ul {
      li {
        margin-bottom: 95px;
        .img {
          width: 74px;
          height: 74px;
          margin: auto;
          text-align: center;
          line-height: 70px;
          font-size: 40px;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          font-style: italic;
          color: #e9ca56;
          padding-right: 4px;
          background: url(../../../assets/images/dj-center/yuan-left.png)
            no-repeat left top / 100% 100%;
        }
        .name {
          width: 97px;
          height: 24px;
          text-align: center;
          margin-top: 9px;
          font-size: 24px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          font-style: italic;
          color: #e9ca56;
          line-height: 30px;
        }
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 66px;
        }
      }
    }
  }
  .center {
    width: 646px;
    height: 541px;
    margin: 46px auto 0;
    // background: #eee;
    position: relative;
    // position: absolute;
    // top: 109px;
    // right: 745px;
    // left: 50px;
    .center_top {
      width: 238.8px;
      height: 86px;
      margin: 17px auto 0;
      position: relative;
      background: url(../../../assets/images/dj-center/yuan-1.png) no-repeat
        left top / 100% 100%;
      .center_top_box {
        width: 78px;
        height: 46px;
        margin: auto;
        position: absolute;
        top: -2px;
        left: 0;
        right: 0;
        background: url(../../../assets/images/dj-center/topn_name_bg1.png)
          no-repeat left top / 100% 100%;
        .ico {
          width: 24px;
          height: 34px;
          margin: auto;
          position: absolute;
          top: -17px;
          left: 0;
          right: 0;
          background: url(../../../assets/images/dj-center/wanggezhang.png)
            no-repeat left top / 100% 100%;
        }
        .first {
          position: absolute;
          top: 20px;
          left: 9px;
          width: 59px;
          height: 19px;
          background: #20598e;
          border-radius: 4px;
          border: 1px solid #0382e6;
        }
        .name {
          position: absolute;
          top: 3px;
          left: 18px;
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: #f6ff00;
          z-index: 2;

          background: linear-gradient(
            180deg,
            #edf2f3 0%,
            #96e2ed 99.5849609375%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .name:hover {
          background: linear-gradient(
            180deg,
            #edf2f3 0%,
            #e9ca56 99.5849609375%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .name2 {
          text-align: center;
          margin-top: 15px;
          font-size: 18px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          font-style: italic;
          color: #f6ff00;

          background: linear-gradient(
            180deg,
            #edf2f3 0%,
            #e9ca56 99.5849609375%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .mapbg {
      width: 237px;
      height: 195px;
      display: flex;
      background: url(../../../assets/images/dj-center/Map_bg.png) no-repeat
        left top / 100% 100%;
      position: absolute;
      top: 44px;
      animation: zlllTop 1.5s infinite alternate;
      img {
        width: 119px;
        height: 123px;
        margin: auto;
      }
    }
    .mapbg:hover {
      animation-play-state: paused;
    }
    .center_center {
      width: 414.8px;
      height: 132.3px;
      margin: 60px auto 0;
      background: url(../../../assets/images/dj-center/yuan-2.png) no-repeat
        left top / 100% 100%;
      ul {
        position: relative;
        display: flex;
        justify-content: space-between;
        li {
          width: 128px;
          height: 74px;
          float: left;
          position: relative;
          background: url(../../../assets/images/dj-center/topn_name_bg2.png)
            no-repeat left top / 100% 100%;
          &:nth-child(2) {
            position: absolute;
            top: 52px;
            left: 136px;
            right: 0;
          }
          .secend {
            margin-left: 25px;
            img {
              position: absolute;
              top: -48px;
              width: 76px;
              height: 76px;
            }
          }
          .beijing {
            width: 127px;
            height: 26px;
            background: #20598e;
            border-radius: 4px;
            border: 1px solid #0382e6;
            position: absolute;
            top: 40px;
          }
          .name {
            position: absolute;
            top: 41px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 14px;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #f6ff00;
            background: linear-gradient(
              180deg,
              #edf2f3 0%,
              #96e2ed 99.5849609375%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .name:hover {
            background: linear-gradient(
              180deg,
              #edf2f3 0%,
              #e9ca56 99.5849609375%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .name2 {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 18px;
            font-family: Source Han Sans SC;
            font-weight: bold;
            font-style: italic;
            color: #f6ff00;

            background: linear-gradient(
              180deg,
              #edf2f3 0%,
              #e9ca56 99.5849609375%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
    .center_bottom {
      width: 646px;
      height: 193px;
      margin: 53px auto 0;
      position: relative;
      background: url(../../../assets/images/dj-center/yuan-3.png) no-repeat
        left top / 100% 100%;
      .img {
        width: 273px;
        height: 263px;
        margin: auto;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: -81px;
        }
      }
      .list {
        width: 572px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        ul {
          display: flex;
          justify-content: space-between;
          li {
            width: 133px;
            height: 79px;
            float: left;
            background: url(../../../assets/images/dj-center/topn_name_bg2.png)
              no-repeat left top / 100% 100%;
            position: relative;
            margin-top: -12px;
            &:nth-child(2) {
              margin-top: 107px;
            }
            &:nth-child(3) {
              margin-top: 120px;
            }
            &:nth-child(2) {
              left: -60px;
            }
            &:nth-child(3) {
              right: 10px;
            }
            &:nth-child(4) {
              margin-top: 107px;
              left: 50px;
            }
            p {
              width: 126px;
            }
            .bottom_list_imgbg {
              width: 88px;
              height: 88px;
              display: flex;
              margin: auto;
              position: absolute;
              top: -53px;
              left: 0;
              right: 0;
              background: url(../../../assets/images/dj-center/1.png) no-repeat
                left top / 100% 100%;

              img {
                margin: auto;
                display: block;
                line-height: 88px;
              }
            }
            .bottom_list_imgbg:hover {
              animation: zlll 1.5s;
            }
            .name {
              position: absolute;
              top: 38px;
              left: -5px;
              right: 0;
              text-align: center;
              font-size: 14px;
              font-family: Source Han Sans SC;
              font-weight: bold;
              color: #e9ca56;
              line-height: 33px;
              z-index: 2;
              background: linear-gradient(
                180deg,
                #edf2f3 0%,
                #96e2ed 99.5849609375%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .name:hover {
              background: linear-gradient(
                180deg,
                #edf2f3 0%,
                #e9ca56 99.5849609375%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .name3 {
              position: absolute;
              top: 38px;
              left: -5px;
              right: 0;
              text-align: center;
              font-size: 14px;
              font-family: Source Han Sans SC;
              font-weight: bold;
              font-style: italic;
              color: #e9ca56;
              line-height: 33px;
              z-index: 2;
              background: linear-gradient(
                180deg,
                #edf2f3 0%,
                #e9ca56 99.5849609375%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .third {
              position: absolute;
              top: 42px;
              left: -7px;
              width: 127px;
              height: 26px;
              background: #20598e;
              border-radius: 4px;
              border: 1px solid #0382e6;
            }
          }
        }
      }
    }
  }
  .bottom {
    width: 744px;
    height: 92px;
    margin: 190px auto 0;
    background: url(../../../assets/images/dj-center/yuan-bottom.png) no-repeat
      left top / 100% 100%;
    position: relative;
    ul {
      width: 744px;
      position: absolute;
      top: -68px;
      display: flex;
      justify-content: space-between;
      padding: 0 2px;
      li {
        width: 107px;
        height: 107px;
        float: left;
        margin-top: 4px;
        margin-left: 2px;
        font-size: 48px;
        line-height: 43px;
        &:nth-child(1) .num .centerButtomImg {
          width: 68px;
          height: 60px;
          margin-bottom: -10px;
        }
        &:nth-child(2) {
          margin-top: 18px;
          line-height: 70px;
          .num .centerButtomImg {
            margin-top: -7px;
          }
        }
        &:nth-child(3) {
          margin-top: 25px;
          line-height: 90px;
          .num .centerButtomImg {
            margin-top: 1px;
          }
        }
        &:nth-child(4) {
          margin-top: 18px;
          line-height: 70px;
          .num .centerButtomImg {
            margin-top: -7px;
          }
        }

        .num {
          width: 88px;
          height: 76px;
          // text-align: center;
          margin: auto;
          background: url(../../../assets/images/dj-center/bottom_num_bg.png)
            no-repeat left top / 100% 100%;
          p {
            width: 88px;
            // font-size: 48px;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #26f5f5;
            // line-height: 43px;
            text-align: center;
            position: absolute;
            top: -6px;
            .centerButtomImg {
              width: 156px;
              height: 146px;
              margin: -31px;
              margin-top: -20px;
              &:nth-child(2n) {
                margin-top: -7px;
              }
            }
            // span {
            //   color: #fefefe;
            //   font-size: 14px;
            // }
          }
          p:hover {
            animation: zlll 1.5s;
          }
        }
        .name {
          width: 102px;
          height: 32px;
          background: rgba(32, 89, 142, 0.65);
          border-radius: 4px;
          border: 1px solid #0382e6;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #00f1ff;
          line-height: 32px;
          text-align: center;
          margin-top: -14px;
          // background: url(../../../assets/images/dj-center/bottom_name_bg.png)
          //   no-repeat left top / 100% 100%;
        }
        .name:hover {
          color: #e9ca56;
        }
        .name4 {
          width: 100%;
          height: 32px;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #e9ca56;
          line-height: 32px;
          text-align: center;
          margin-top: -14px;
          background: url(../../../assets/images/dj-center/bottom_name_bg.png)
            no-repeat left top / 100% 100%;
        }
      }
    }
  }
  // 动画效果
  @keyframes zlll {
    to {
      transform: translateY(-10px);
    }
  }
  @keyframes zlllTop {
    to {
      transform: translateY(6px);
    }
  }
}
</style>
