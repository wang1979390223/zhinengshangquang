<template>
  <div id="header">
    <div class="menu-bg"></div>
    <h1 class="logo"></h1>
    <div class="menu">
      <ul>
        <li class="m-r">智巡中心</li>
        <li class="m-r">协同联处</li>
        <li class="m-r">监督评价</li>
        <li>以案说法</li>
      </ul>
    </div>
    <div class="date-weather">
      <div class="weather">
        <span style="margin-right: 10px">{{ weather }}</span>
        <span>{{ temperature }}℃</span>
      </div>
      <div class="date">{{ dateTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MHeader',
  data() {
    return {
      weather: '',
      temperature: '',
      dateTime: '',
      timer: null
    }
  },
  mounted() {
    AMap.plugin('AMap.Weather', () => {
      // 创建天气查询实例
      const weather = new AMap.Weather();
      // 执行实时天气信息查询
      weather.getLive('婺城区', (err, data) => {
        if (!err) {
          this.weather = data.weather
          this.temperature = data.temperature
        }
      });
    });
    // 设置时间
    this.dateTime = this.parseTime(new Date(), '{y}年{m}月{d}日 {h}:{i}:{s}')
    this.timer = setInterval(() => {
      this.dateTime = this.parseTime(new Date(), '{y}年{m}月{d}日 {h}:{i}:{s}')
    }, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#header {
  position: relative;
  width: 100%;
  height: 80px;
  display: inline-block;
  z-index: 10;
  .menu-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 66px;
    font-size: 16px;
    background: url(../assets/images/menu-bg.png) no-repeat left top / contain;
  }

  .logo {
    width: 525px;
    height: 80px;
    background: url(../assets/images/title.png) no-repeat left top / contain;
    position: absolute;
    left: 0;
    top: 0;
  }

  .menu {
    width: 755px;
    height: 43px;
    margin: 10px auto 0;
    position: relative;
    z-index: 10;

    ul {
      height: 43px;

      li {
        color: #e6f2ff;
        width: 173px;
        height: inherit;
        line-height: 43px;
        background: url(../assets/images/menu-item-bg.png) no-repeat left top / contain;
        display: inline-block;
        text-align: center;
        cursor: pointer;

        &.m-r {
          margin-right: 20px;
        }
      }
    }
  }

  .date-weather {
    position: absolute;
    height: 43px;
    line-height: 43px;
    top: 10px;
    right: 10px;
    color: #e6f2ff;
    .weather {margin-right: 30px;}
    .weather,
    .date { display: inline-block;}
  }
}
</style>
