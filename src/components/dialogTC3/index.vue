<template>
  <div>
    <el-dialog
      title="列表详情"
      :visible.sync="showDialog3"
      width="1720px"
      :before-close="handleClose"
    >
      <div class="listHeader">
        <ul class="head">
          <li v-for="(item, index) in listHeaderDate" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="tableBody">
        <ul>
          <li
            v-for="(item, index) in tableData"
            :key="index"
            style="font-size:24px;font-weight: 400;cursor: pointer;"
            class="listItem"
            @click="showTc4"
          >
            <div
              style="display:flex; height: 100px; padding: 48px 0 46px 15px;"
            >
              <div>
                {{ item.id }}
              </div>
              <div style="width:200px;padding-left:92px">{{ item.type }}</div>
              <div style="width:220px;padding-left: 60px">
                {{ item.shopName }}
              </div>
              <div style="width:300px;padding-left: 70px">
                {{ item.mobile }}
              </div>
              <div style="width:150px;padding-left: 0px">{{ item.state }}</div>
              <div style="width:100px;padding-left: 20px">
                {{ item.contacts }}
              </div>
              <div style="width:350px;padding-left: 40px">
                {{ item.address }}
              </div>
              <img
                class="photo"
                style=" width: 100px;
                    height: 100px;
                    margin-left: 60px;
                    padding-bottom: 10px;
                    margin-top: -43px;"
                :src="item.img"
                alt=""
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- 表格 -->
      <!-- <el-table class="table" border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
        <el-table-column prop="type" label="商户分类" width="180">
        </el-table-column>
        <el-table-column prop="shopName" label="商户名" width="180">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="180">
        </el-table-column>
        <el-table-column prop="state" label="开业状态" width="180">
        </el-table-column>
        <el-table-column prop="contacts" label="联系人" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="img" label="门头照片" width="180">
          <img
            style=" width: 101px;
            height: 91px;
            margin-left: 25px;"  
            class="photo"
            :src="tableData.img"
            alt=""
          >
        </el-table-column>
      </el-table> -->
      <!-- 分页器 -->
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="100"> </el-pagination>
      </div>
    </el-dialog>
    <dialogTC4 :show-dialog4.sync="dialogTC4"></dialogTC4>
  </div>
</template>

<script>
import dialogTC4 from '../dialogTC4/index.vue';
import { tableData, listHeaderDate } from '@/mock/index.js';
export default {
  components: {
    dialogTC4
  },
  props: {
    showDialog3: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogTC4: false,
      listHeaderDate: [],
      tableData: []
    };
  },
  created() {
    this.listHeaderDate = listHeaderDate;
    this.tableData = tableData;
  },
  methods: {
    handleClose() {
      this.$emit('closed3');
      this.$emit('update:showDialog3', false);
    },
    showTc4() {
      this.dialogTC4 = true;
      this.$emit('closed3');
      this.$emit('update:showDialog3', false);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 1720px;
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
  width: 1720px;
  height: 810px;
  // background: #091e35;
  // border-image: linear-gradient(-32deg, #359cf8, #afdcfb) 10 10;
  // box-shadow: 0px 3px 35px 0px #000000;
  // opacity: 0.75;
  // border-radius: 50px;
  // border-bottom-right-radius: 50px;
  // border-bottom-left-radius: 50px;
  img {
    width: 748px;
    height: 378px;
  }
}
::v-deep .el-dialog__header {
  padding: 28px 155px 27px 39px;
  // height: 83px;
  width: 1720px;
  /* line-height: 70px; */
}
::v-deep .el-dialog__title {
  position: absolute;
  top: 57px;
  left: 161px;
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
.listHeader {
  width: 1680px;
  height: 88px;
  // background: #398eb5;
  opacity: 0.78;
  border-radius: 2px;
  margin-top: 30px;
  .head {
    display: flex;
    justify-items: left;
    li {
      font-size: 24px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #26f5f5;
      margin-top: 31px;
      margin-right: 114px;
      margin-left: 25px;
      &:nth-child(2) {
        margin-left: 0;
        margin-right: 85px;
      }
      &:nth-child(3) {
        margin-left: 0;
        margin-right: 161px;
      }
      &:nth-child(4) {
        margin-left: 0;
        margin-right: 140px;
      }
      &:nth-child(5) {
        margin-left: 0;
        margin-right: 82px;
      }
      &:nth-child(6) {
        margin-left: 0;
        margin-right: 75px;
      }
      &:nth-child(7) {
        margin-left: 0;
        margin-right: 280px;
      }
      &:nth-child(8) {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}
.tableBody {
  .tableBody {
    ul {
      .listItem {
        color: red;
      }
    }
  }
}
.tableTr {
  // background-color: #00aae2;
}
::v-deep .el-table thead {
  // color: rgba(38, 245, 245, 1);
  font-weight: 500;
}
::v-deep .el-table tr {
  height: 110px;
  // background: #049AAB;
  // color: #fff;
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
// ::v-deep .photo {
//   width: 101px;
//   height: 91px;
//   text-align: center;
// }
</style>
