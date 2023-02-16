<template>
  <div>
    <el-dialog
      title="以“社区+商圈”模式 持续激活西市街区商圈"
      :visible.sync="showDialog"
      width="964px"
      :before-close="handleClose"
    >
      <span style="line-height:72px">
        11月24日，婺城区城中街道西市街商圈党委联合党委携手成员单位第一百货江北支部组织开展了“遇见美丽的你”美妆沙龙活动，获得了前来参加活动人员的点赞。这是今年西市街商圈党委成立美妆社团后开展的第一个活动，活动还通过直播的形式让更多的观众所了解。
      </span>
      <img src="../../assets/images/dj-rightTop/img5.jpg" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit('closed');
      this.$emit('update:showDialog', false);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 964px;
  height: auto;
  // background: linear-gradient(180deg, #00aae2 0%, #073446 100%);
  background: url('../../assets/images/tanchuangBG.png') no-repeat;
  background-size: 100% 100%;
  opacity: 0.88;
  // border-radius: 50px 50px 0px 0px;
  color: #fff;
  font-size: 30px;
  // border: 1px solid #091e35;
}
::v-deep .el-dialog__body {
  color: #fff;
  font-size: 30px;
  width: 964px;
  height: 745px;
  // background: #091e35;
  // border: 1px solid #091e35;
  // border-image: linear-gradient(-32deg, #359cf8, #afdcfb) 10 10;
  box-shadow: 0px 3px 35px 0px #000000;
  // opacity: 0.75;
  // border-radius: 50px;
  // border-bottom-right-radius: 50px;
  // border-bottom-left-radius: 50px;
   img {
    width: 748px;
    height: 308px;
   }
}
::v-deep .el-dialog__header {
  padding: 54px 155px 27px 95px;
  height: auto;
  /* line-height: 70px; */
}
::v-deep .el-dialog__title {
  color: #fff;
  font-size: 30px;
  // line-height: 72px;
}
::v-deep .el-dialog__close {
  // display: none;
  // opacity: 0;
  // color: rgba(127, 147, 168, 1);
  background: url('../../assets/images/tanchuangclose.png') no-repeat top right ;
  // background-size: 100% 100%;
  font-size: 33px;
  padding: 0px 8px 39px 896px;
  margin-right: 5px;
  margin-top: 10px;
  &::before {
    display: none;
  }
}
::v-deep .el-dialog__close:hover {
  color: #fff;
}
</style>
