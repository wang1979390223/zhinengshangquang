<template>
  <div v-if="datatanchuang" class="min">
    <div class="kuangao">
      <div class="title">
        <div class="guanbi" @click="none">x</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datatanchuang: {
      // 定义接收的类型 还可以定义多种类型 [String, Undefined, Number]
      // 如果required为true,尽量type允许undefined类型，因为传递过来的参数是异步的。或者设置默认值。
      type: Boolean,
      // 定义是否必须传
      required: true,
      // 定义默认值
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    none() {
      this.$emit("datatanchuang", !this.datatanchuang);
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
.kuangao {
  width: 1032.2px;
  height: 874px;
  background-color: #081b2f;
  position: absolute;
  z-index: 10000;
  border-radius: 50px 50px 50px 50px;
  left: 409px;
}
.title {
  height: 83.9px;
  width: 100%;
  background: linear-gradient(180deg, #00aae2 0%, #073446 100%);
  opacity: 0.88;
  border-radius: 50px 50px 0px 0px;
}
.guanbi {
  width: 45px;
  height: 45px;
  font-size: 45px;
  position: absolute;
  left: 948px;
  top: 25px;
}
.guanbi:hover {
  width: 45px;
  height: 45px;
  font-size: 45px;
  position: absolute;
  left: 948px;
  top: 25px;
  color: white;
  cursor: pointer;
}
</style>