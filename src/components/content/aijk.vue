<template>
  <div class="aijk">
    <div class="video">
      <img src="../../assets/images/video-1.png" alt="">
    </div>
    <div class="video">
      <img src="../../assets/images/video-2.png" alt="">
    </div>
    <div class="video">
      <img src="../../assets/images/video-3.png" alt="">
    </div>
    <div class="video">
      <img src="../../assets/images/video-4.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAijk',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.aijk {
  width: 100%;
  height: inherit;
  padding-left: 10px;
  .video {
    width: 205px;
    height: 108px;
    display: inline-block;
    vertical-align: top;
    margin: 0 7px 15px 7px;
  }
}
</style>
