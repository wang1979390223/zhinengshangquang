<template>
  <div class="board">
    <MHeader />
    <Map />
    <!-- 虚化背景 -->
    <div class="left-bg"></div>
    <div class="right-bg"></div>
    <!-- 统计数字 -->
    <div class="statistics-num" style="left: 560px">
      <span class="num">1900</span>
      <span class="text">审批总数</span>
    </div>
    <div class="statistics-num" style="right: 560px">
      <span class="num">2098</span>
      <span class="text">线索移送</span>
    </div>
    <!-- 左侧内容部分 -->
    <div class="left-box">
      <div class="content-box">
        <div class="title">智寻统计</div>
        <div class="content">
          <ContentZxtj />
        </div>
      </div>
      <div class="content-box m-t-20">
        <div class="title">线索事件</div>
        <div class="content">
          <ContentXssj />
        </div>
      </div>
      <div class="content-box m-t-20">
        <div class="title">监督评价</div>
        <div class="content">
          <ContentJdpj />
        </div>
      </div>
    </div>
    <!-- 右侧内容 -->
    <div class="right-box">
      <div class="content-box">
        <div class="title">AI监控</div>
        <div class="content">
          <ContentAijk />
        </div>
      </div>
      <div class="content-box m-t-20">
        <div class="title">协同联处</div>
        <div class="content">
          <ContentXtlc />
        </div>
      </div>
      <div class="content-box m-t-20">
        <div class="title">涉林服务</div>
        <div class="content">
          <ContentXlfw />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MHeader from '@/components/m-header.vue';
import Map from '@/components/map.vue';
import ContentZxtj from '@/components/content/zxtj.vue';
import ContentXssj from '@/components/content/xssj.vue';
import ContentAijk from '@/components/content/aijk.vue';
import ContentXtlc from '@/components/content/xtlc.vue';
import ContentXlfw from '@/components/content/xlfw.vue';
import ContentJdpj from '@/components/content/jdpj.vue';

export default {
  components: {
    MHeader,
    Map,
    ContentZxtj,
    ContentXssj,
    ContentAijk,
    ContentXtlc,
    ContentXlfw,
    ContentJdpj
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 100%;
  height: 100%;
  background-color: #001038;
  position: relative;
  .left-box {
    width: 460px;
    position: absolute;
    top: 110px;
    left: 30px;
    bottom: 24px;
  }
  .right-box {
    width: 460px;
    position: absolute;
    top: 110px;
    right: 30px;
    bottom: 24px;
  }
  .content-box {
    width: 460px;
    height: 300px;
    background: url(../assets/images/box-bg.png) no-repeat left top / 100% 100%;
    display: inline-block;
    vertical-align: top;
    .title {
      color: #feffff;
      font-size: 16px;
      background: url(../assets/images/box-title-bg.png) no-repeat left bottom /
        172px 11px;
      padding-left: 10px;
      margin: 20px 0 10px 20px;
    }
    .content {
      height: 245px;
      overflow: hidden;
    }
  }
  .statistics-num {
    position: absolute;
    width: 160px;
    height: 160px;
    top: 96px;
    background: url(/static/img/statistics-bg.6068ca0e.png) no-repeat left top /
      100% 100%;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 20px #333;
    .num {
      margin: 60px 0 5px 0;
      font-size: 24px;
      color: #44f4ff;
      font-weight: bold;
      display: block;
    }
    .text {
      font-size: 18px;
      color: #fff;
    }
  }
  .left-bg {
    width: 495px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(../assets/images/left-bg.png) no-repeat left center / 100%
      100%;
  }
  .right-bg {
    width: 495px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background: url(../assets/images/right-bg.png) no-repeat left center / 100%
      100%;
  }
}
</style>
