<template>
  <div class="zxtj">
    <div v-for="(item, index) in itemList" :key="`zxtj${index}`" class="item">
      <div class="icon">
        <img :src="require(`../../assets/images/icon/${item.icon}`)" alt="">
      </div>
      <div class="zxtj-title">{{ item.name }}</div>
      <div class="num-box">
        <span class="num" :style="{color: item.color}">{{ item.num }}</span>
        <span class="unit">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentZxtj',
  data() {
    return {
      itemList: [
        {name: '乡镇街道', icon: 'icon-xzjd.png', num: '32', unit: '个', color: '#36dbec' },
        {name: '协同部门', icon: 'icon-xtbm.png', num: '4', unit: '个', color: '#ff852b' },
        {name: 'AI监控', icon: 'icon-aijk.png', num: '12', unit: '个', color: '#36dbec' },
        {name: '巡防力量', icon: 'icon-xfll.png', num: '52', unit: '人', color: '#1ed841' },
        {name: '线索总数', icon: 'icon-xszs.png', num: '642', unit: '个', color: '#36dbec' },
        {name: '萌微改正', icon: 'icon-mwgz.png', num: '423', unit: '个', color: '#36dbec' },
        {name: '行政处罚', icon: 'icon-xzcf.png', num: '43', unit: '个', color: '#36dbec' },
        {name: '巡查发现', icon: 'icon-xcfx.png', num: '63', unit: '人', color: '#36dbec' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.zxtj {
  width: 100%;
  height: inherit;
  display: inline-block;
  vertical-align: top;
  .item {
    width: 25%;
    height: 50%;
    float: left;
    text-align: center;
    color: #fff;
    .icon {
      img {
        width: 32px;
        height: 32px;
      }
    }
    .num {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>