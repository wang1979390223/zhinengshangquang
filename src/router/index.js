import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 公共路由
export const constantRoutes = [
  // {
  //   path: '/',
  //   hidden: true,
  //   component: resolve => require(['@/views/index'], resolve)
  // },
  // {
  //   path: '/',
  //   hidden: true,
  //   component: resolve => require(['@/views/indexa'], resolve)
  // },
  {
    path: '/',
    component: resolve => require(['../views/loginDp.vue'], resolve),
    hidden: true
  },
  {
    path: '/souye',
    component: resolve => require(['../pages/souye.vue'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: resolve => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/sqZhiYing',
    component: resolve => require(['@/views/sqZhiYing/index'], resolve),
    hidden: true
  },
  {
    path: '/sqDangJian',
    component: resolve => require(['@/views/sqDangJian/index'], resolve),
    hidden: true
  },
  {
    path: '/sqFuWu',
    component: resolve => require(['@/views/sqFuWu/index'], resolve),
    hidden: true
  },
  {
    path: '/wisdomcamp', // 组件名，自定义的
    component: () => import('../pages/wisdomcamp') // 这是你的文件
  },
  {
    path: '/zuye', // 组件名，自定义的
    component: () => import('../pages/index') // 这是你的文件
  },
  {
    path: '/min', // 组件名，自定义的
    component: () => import('../pages/min') // 这是你的文件
  },
  {
    path: '/mins', // 组件名，自定义的
    component: () => import('../pages/mins') // 这是你的文件
  },
  {
    path: '/jingying', // 组件名，自定义的
    component: () => import('../pages/wisdom/jingying') // 这是你的文件
  },
  {
    path: '/jindutiao', // 组件名，自定义的
    component: () => import('../pages/wisdom/jindutiao') // 这是你的文件
  },
  {
    path: '/zhexiantu', // 组件名，自定义的
    component: () => import('../pages/wisdom/zhexiantu') // 这是你的文件
  },
  {
    path: '/zhexiantus', // 组件名，自定义的
    component: () => import('../pages/wisdom/zhexiantus') // 这是你的文件
  },
  {
    path: '/sqzy', // 组件名，自定义的
    component: () => import('../pages/sqzy') // 这是你的文件
  }
];

export default new Router({
  // mode: 'history', // 去掉url中的#
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});
