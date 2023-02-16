<template>
  <div class="xssj">
    <vue-seamless-scroll :data="listData" :class-option="classOption" class="warp">
      <ul>
        <li v-for="(item, index) in listData" :key="index" class="item">
          <span class="icon">
            <img :src="item.icon ? require('../../assets/images/icon/icon-error.png') : require('../../assets/images/icon/icon-success.png')" alt="">
          </span>
          <span class="xssj-title" v-text="item.title"></span>
          <span class="type" v-text="item.type"></span>
          <span class="address" v-text="item.address"></span>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'ContentXssj',
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      classOption: {
        step: 0.5, // 滚动速度
        limitMoveNum: 6 // 达到此数量开始滚动
      },
      listData: [{
        icon: 0,
        title: '采伐案件1',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 0,
        title: '采伐案件2',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 1,
        title: '采伐案件3',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 0,
        title: '采伐案件4',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 1,
        title: '采伐案件5',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 1,
        title: '采伐案件6',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 1,
        title: '采伐案件7',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }, {
        icon: 1,
        title: '采伐案件8',
        type: '类型一',
        address: '区域一',
        date: '2022-02-22'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.xssj {
  width: 100%;
  height: 225px;
  .item {
    padding-left: 20px;
    font-size: 14px;
    color: #fff;
    height: 38px;
    line-height: 38px;
    text-align: center;
    span {
      display: inline-block;
      display: inline-block;
      vertical-align: top;
    }
    .icon {
      margin-top: 7px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: top;
        margin-right: 10px;
      }
    }
    .xssj-title {
      width: 90px;
    }
    .type {
      width: 90px;
    }
    .address {
      width: 95px;
    }
    .date {
      width: 118px;
    }
  }
}
</style>