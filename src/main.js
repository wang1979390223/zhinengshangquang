import Vue from 'vue';
import App from './App.vue';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from '@/store';
import router from '@/router';

import { parseTime } from '@/utils';
// import 'tcj-lib-flexible'
import '@/assets/styles/base.css';
import lottie from 'vue-lottie';
Vue.component('Lottie', lottie);

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import dayjs from 'dayjs'; // 时间插件
Vue.prototype.$dayJs = dayjs;
import 'animate.css';
// 全局方法挂载
Vue.prototype.parseTime = parseTime;

import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
