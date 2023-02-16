<template>
  <div>
    <lottie class="box" :options="{ animationData: pieBg }" />
  </div>
</template>
<script>
import lottie from 'vue-lottie';
import pieBg from '@/assets/data.json';
export default {
  components: {
    lottie
  },
  data() {
    return {
      pieBg: pieBg
    };
  },
  created() {
    this.pieBg.assets.map(item => {
      item.u = '';
      if (item.w && item.h) {
        item.p = require(`@/assets/images/${item.p}`);
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 105px !important;
  height: 300px;
}
</style>
