<template>
  <div class="container">
    <div class="title"><span class="title_tip">招聘招租</span></div>
    <!-- <div class="content2">
      <div class="content_left">
        <p class="name"><span>招聘</span></p>
        <ul>
          <li
            v-for="(item, index) in item"
            :key="index"
            style="  cursor:pointer;"
            @click="showDialogVisible"
          >
            <span
              class="li_index"
              :class="[
                { ico_bg1: index === 0 },
                { ico_bg2: index === 1 },
                { ico_bg3: index === 2 },
                { ico_bg4: index === 3 },
                { ico_bg4: index === 4 }
              ]"
            >{{ item.index }}</span>
            <span class="li_content">{{ item.content }}</span>
          </li>
        </ul>
      </div>
      <div class="content_right">
        <p class="name"><span>招聘</span></p>
        <div>
          <ul>
            <li
              v-for="(item, index) in zhaozhuItem"
              :key="index"
              style="  cursor:pointer;"
              @click="showDialogVisible"
            >
              <div class="img">
                <img
                  src="../../../assets/images/fw/left_fotter_right.png"
                  alt=""
                  srcset=""
                >
              </div>
              <div class="li_right">
                <p class="li_right_name">{{ item.name }}</p>
                <p class="weizhi">
                  <span class="weizhi1"><i>{{ item.weizhi1 }}</i></span>
                  <span class="weizhi2"><i>{{ item.weizhi2 }}</i></span>
                </p>
                <p class="tips">
                  <span class="price"><i>{{ item.price }}</i></span>
                  <span class="mianji"><i>{{ item.mianji }}</i></span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="zpzz">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="showTC(item)">
          <div class="topTitle">{{ item.title }}</div>
          <div class="center">
            <img :src="item.img" alt="">
          </div>
          <div :class="['bottom', { bottom2: zpzzName === item.title2 }]">
            {{ item.title2 }}
          </div>
        </li>
      </ul>
    </div>
    <!-- 弹窗 -->
    <showTC :show-dialog.sync="showDialog" @closed="close"></showTC>
  </div>
</template>

<script>
import showTC from '@/components/dialogTC';
export default {
  components: {
    showTC
  },
  data() {
    return {
      showDialog: false,
      zpzzName: '',
      items: [
        {
          img: require('@/assets/images/fw/zhaopin.png'),
          title: '1357',
          title2: '招聘'
        },
        {
          img: require('@/assets/images/fw/zhaozu.png'),
          title: '2561',
          title2: '招租'
        }
      ],
      item: [
        { index: '01', content: '招聘信息招聘信息招聘信息' },
        { index: '02', content: '招聘信息招聘信息招聘信息' },
        { index: '03', content: '招聘信息招聘信息招聘信息' },
        { index: '04', content: '招聘信息招聘信息招聘信息' },
        { index: '05', content: '招聘信息招聘信息招聘信息' }
      ],
      zhaozhuItem: [
        {
          name: '出租写字楼，朝南，办公家具齐全，随时',
          weizhi1: '江北',
          weizhi2: '文化创意园',
          price: '0.9元/㎡/天',
          mianji: '5000㎡'
        },
        {
          name: '出租写字楼，朝南，办公家具齐全，随时',
          weizhi1: '江北',
          weizhi2: '文化创意园',
          price: '0.9元/㎡/天',
          mianji: '5000㎡'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showDialogVisible() {
      this.$emit('showdialog');
    },
    showTC(item) {
      this.zpzzName = item.title2;
      this.showDialog = true;
    },
    close() {
      this.zpzzName = '';
    }
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
<style lang="scss" scoped>
.container {
  // position: relative;
  .title {
    width: 232px;
    height: 46px;
    margin-left: 17px;
    margin-top: 20px;
    // position: absolute;
    // top: 21px;
    // right: 170px;
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
  .content2 {
    // width: 500px;
    height: 187px;
    padding: 0px 10px;
    display: flex;
    // justify-content: space-between;
    box-sizing: border-box;
    // align-items: center;
    // position: absolute;
    // top: 65px;
    // right: 7px;
    // bottom: 8px;
    // left: 12px;
    .content_left,
    .content_right {
      flex: 1;

      width: 230px;
      height: 180px;
      background: url(../../../assets/images/fw/left_fotter_bg.png) no-repeat
        center 100%;
    }
    .content_left {
      // margin-left: 5px;

      .name {
        margin-left: 10px;
        height: 10px;
        font-size: 10px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        span {
          font-size: 12px;
          display: block;
          transform: scale(0.83);
          color: #ffffff;
          text-shadow: 0px 3px 0px rgba(53, 119, 255, 0.52);

          background: linear-gradient(0deg, #afc6f5 0%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      ul {
        display: block;
        width: 90%;
        margin: 15px 0 10px 20px;
        li {
          width: 200px;
          margin: 5px auto 0;
          .li_index {
            width: 28px;
            height: 18px;
            display: inline-block;
            line-height: 18px;
            font-size: 12px;
            color: #fff;
            text-align: center;
            // background: url(../../../assets/images/fw/01.png) no-repeat left top /
            //   100% 100%;
          }
          .ico_bg1 {
            background: url(../../../assets/images/fw/01.png) no-repeat left top /
              100% 100%;
          }
          .ico_bg2 {
            background: url(../../../assets/images/fw/02.png) no-repeat left top /
              100% 100%;
          }
          .ico_bg3 {
            background: url(../../../assets/images/fw/03.png) no-repeat left top /
              100% 100%;
          }
          .ico_bg4 {
            background: url(../../../assets/images/fw/05.png) no-repeat left top /
              100% 100%;
          }
          .li_content {
            margin-left: 7px;
            width: 143px;
            height: 12px;
            font-size: 12px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            font-style: italic;
            color: rgba(255, 255, 255, 0.46);
            line-height: 15px;
            opacity: 0.84;
          }
        }
      }
    }
    .content_right {
      // margin-left: -10px;
      position: relative;
      .name {
        margin-left: 10px;
        height: 10px;
        font-size: 10px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        span {
          font-size: 12px;
          display: block;
          transform: scale(0.83);
          color: #ffffff;
          text-shadow: 0px 3px 0px rgba(53, 119, 255, 0.52);

          background: linear-gradient(0deg, #afc6f5 0%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      div {
        ul {
          // position: absolute;
          // top: 28px;
          // left: 21px;
          li {
            display: flex;
            margin-bottom: 8px;
            margin-top: 14px;
            margin-left: 21px;
            .img {
              width: 81px;
              height: 67px;
              img {
                width: 100%;
                height: 100%;
                display: block;
              }
            }
            .li_right {
              position: relative;
              width: 120px;
              height: 28px;
              margin-left: 10px;
              .li_right_name {
                width: 109px;
                height: 28px;
                font-size: 12px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                font-style: italic;
                color: #26f5f5;
                line-height: 15px;
              }
              .weizhi {
                height: 10px;
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                font-style: italic;
                color: #ffffff;
                line-height: 15px;
                margin-top: 10px;
                .weizhi1 {
                  i {
                    display: inline-block;
                    transform: scale(0.83);
                    margin-left: -2px;
                  }
                }
                .weizhi2 {
                  margin-left: 10px;
                  i {
                    display: inline-block;
                    transform: scale(0.83);
                    margin-left: -2px;
                  }
                }
              }
              .tips {
                width: 109px;
                height: 12px;
                position: absolute;
                top: 53px;
                bottom: 0;
                line-height: 12px;
                .price {
                  width: 52px;
                  height: 12px;
                  font-size: 12px;
                  font-family: Source Han Sans SC;
                  font-weight: 400;
                  font-style: italic;
                  color: #fff000;
                  line-height: 15px;
                  i {
                    display: inline-block;
                    transform: scale(0.83);
                    margin-left: -5px;
                  }
                }
                .mianji {
                  width: 33px;
                  height: 10px;
                  font-size: 12px;
                  font-family: Source Han Sans SC;
                  font-weight: 400;
                  font-style: italic;
                  color: #ffffff;
                  line-height: 15px;
                  i {
                    display: inline-block;
                    transform: scale(0.83);
                    margin-left: -5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.zpzz {
  //  position: relative;
  // top: 5px;
  ul {
    display: flex;
    justify-content: space-evenly;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      .topTitle {
        position: relative;
        top: 37px;
        font-size: 36px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #10e4e6;
      }
      .center {
        width: 118px;
        height: 118px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .bottom {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
      }
      .bottom2 {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #c99d41;
      }
    }
    li:hover .bottom {
      color: #c99d41;
    }
  }
}
</style>
