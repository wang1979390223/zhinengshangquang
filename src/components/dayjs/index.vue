<template>
  <div>
    <div class="header_nav_time">
      <div class="date_left">{{ dateTime }}</div>
      <div class="date_left2">{{ dateTime2 }}</div>
      <div class="date_right">
        <!-- <span style="margin-right: 10px">{{ weather }}</span>
          <span>{{ temperature }}</span> -->
        <!-- <div class="q2s">
          <div id="he-plugin-simple"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: '',
      dateTime2: ''
    };
  },
  created() {
    // 设置时间
    this.dateTime = this.parseTime(new Date(), '{y}-{m}-{d} 星期{a}');
    this.dateTime2 = this.parseTime(new Date(), ' {h}:{i}:{s}');
    this.timer = setInterval(() => {
      this.dateTime2 = this.parseTime(new Date(), ' {h}:{i}:{s}');
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.header_nav_time {
  height: 34.4px;
  margin: 0 15px;
  background-image: linear-gradient(
    to top,
    #34cdff,
    #ffffff
  ); /* 线性渐变背景，方向向上 */
  -webkit-background-clip: text; /* 背景被裁剪成文字的前景色 */
  // -webkit-text-fill-color: transparent; /* 文字填充颜色变透明 */
  // background-color: rgb(238, 189, 189);
  // display: flex;
  justify-content: space-between;
  // .date_left,
  .date_right {
    width: 50%;
  }
  .date_left {
    padding-left: 20px;
    font-size: 22px;
    -webkit-text-fill-color: transparent;
  }
  .date_left2 {
    margin-left: -556px;
    font-size: 22px;
    -webkit-text-fill-color: transparent;
  }
  ::v-deep .s-sticker-tmp {
    color: #fff;
  }
  .q2s {
    position: absolute;
    left: 1707px;
    bottom: 10px;
  }
  .date_right {
    text-align: right;
    padding-right: 15px;
  }
}
</style>
