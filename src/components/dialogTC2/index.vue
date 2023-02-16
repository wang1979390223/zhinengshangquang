<template>
  <div>
    <el-dialog
      title="网格长"
      :visible.sync="showDialog2"
      width="964px"
      :before-close="handleClose"
    >
      <img src="../../image/tc2.png" alt="">
      <div class="right">
        <p>姓名：</p>
        <p>职务：</p>
        <p>联系电话：</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showDialog2: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit('closed2');
      this.$emit('update:showDialog2', false);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 964px;
  // height: 84px;
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
  height: 410px;
  // background: #091e35;
  // border: 1px solid #091e35;
  // border-image: linear-gradient(-32deg, #359cf8, #afdcfb) 10 10;
  // box-shadow: 0px 3px 35px 0px #000000;
  // opacity: 0.75;
  // border-radius: 50px;
}
::v-deep .el-dialog__header {
  padding: 26px 155px 27px 88px;
  // height: 83px;
  /* line-height: 70px; */
}
::v-deep .el-dialog__title {
  color: #fff;
  font-size: 30px;
  // line-height: 72px;
}
::v-deep .el-dialog__close {
  &::before {
    display: none;
  }
  // color: rgba(127, 147, 168, 1);
  background: url('../../assets/images/tanchuangclose.png') no-repeat top right ;
  font-size: 33px;
  margin-right: 5px;
  margin-top: 10px;
  padding: 0px 8px 39px 896px;
}
::v-deep .el-dialog__close:hover {
  color: #fff;
}
.right {
  position: absolute;
  left: 280px;
    top: 130px;
    p {
      margin-bottom: 45px;
    }
}
</style>
