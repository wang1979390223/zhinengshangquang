<template>
  <div>
    <el-dialog
      title="查看详情"
      :visible.sync="showDialog4"
      width="842px"
      :before-close="handleClose"
    >
      <div v-for="item in threeTcList" :key="item.id" class="TCcontent">
        <div class="conten_header">
          <img
            style="width: 55px;height: 62px;"
            src="../../assets/images/threeTC.png"
            alt=""
          >
          <div class="title">{{ item.header }}</div>
        </div>
        <div class="content_body">{{ item.content }}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {threeTcList} from '@/mock';
export default {
  props: {
    showDialog4: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      threeTcList: []
    };
  },
  created() {
    this.threeTcList = threeTcList;
  },
  methods: {
    handleClose() {
      this.$emit('closed4');
      this.$emit('update:showDialog4', false);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 842px !important;
  background: url('../../assets/images/tanchuangBG.png') no-repeat;
  background-size: 100% 100%;
  opacity: 0.88;
  color: #fff;
  font-size: 30px;
}
::v-deep .el-dialog__body {
  color: #fff;
  font-size: 30px;
  width: 800px !important;
  height: 810px;
  img {
    width: 748px;
    height: 378px;
  }
}
::v-deep .el-dialog__header {
  padding: 28px 155px 27px 39px;
  // height: 83px;
  width: 842px !important;
  /* line-height: 70px; */
}
::v-deep .el-dialog__title {
  position: absolute;
  top: 57px;
  left: 100px !important;
  color: #fff;
  font-size: 30px;
  // line-height: 72px;
}
::v-deep .el-dialog__close {
  // color: rgba(127, 147, 168, 1);
  background: url('../../assets/images/tanchuangclose.png') no-repeat top right;
  font-size: 33px;
  margin-right: 39px;
  margin-top: 10px;
  padding: 0px 8px 39px 896px;
  &::before {
    display: none;
  }
}
::v-deep .el-dialog__close:hover {
  color: #fff;
}
::v-deep .el-pagination {
  white-space: nowrap;
  padding: 10px 5px;
  color: #303133;
  font-weight: 1000;
  /* width: 1700px; */
  // background-color: #0a1e34;
  padding-left: 1260px;
  margin-top: 60px;
}
::v-deep .el-pagination button:disabled {
  color: #c0c4cc;
  background-color: #0a1e34;
  cursor: not-allowed;
}
::v-deep .el-pager li {
  padding: 0 4px;
  // background: #0a1e34;
  font-size: 16px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  // -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  // color: #fff;
}
::v-deep .el-pagination .btn-next,
.el-pagination .btn-prev {
  // background: center center no-repeat #0a1e34;
  background-size: 16px;
  cursor: pointer;
  margin: 0;
  // color: #fff;
}
::v-deep.el-pagination .btn-prev {
  // background: center center no-repeat #0a1e34;
  background-size: 16px;
  cursor: pointer;
  margin: 0;
  // color: #fff;
}
.TCcontent {
  margin-bottom: 30px;
  .conten_header {
    display: flex;
    align-items: center;
    font-size: 16px;
    &:first-child {
      margin-top: 40px;
    }
    .title {
      color: #53d5ff;
    }
  }
  .content_body {
    margin-left: 80px;
    color: #fff;
    font-size: 20px;
  }
}
</style>
