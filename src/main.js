import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routerConfig from './router/config.js'


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import http from './http/index';
import utils from './utils/index';
Vue.prototype.$http = http;
Vue.prototype.$utils = utils;



import SCSS from 'scss'
import "@styles/index.scss";  // 全局样式
Vue.use(SCSS);


// store
import store from './store/index.js';

// 全局组件
import GlobalComponents from './packages/index.js'
// Vue.use(GlobalComponents);


// 多语言
import VueI18n from 'vue-i18n'; 
import LocalI18n from './locale/index.js';

import en from 'view-design/dist/locale/en-US';
import zh from 'view-design/dist/locale/zh-CN';
Vue.use(VueI18n);

const messages = {
  en: Object.assign(en,LocalI18n.en),
  zh: Object.assign(zh,LocalI18n.zh)
};
const i18n = new VueI18n({
  locale: 'zh',  // set locale
  messages  // set locale messages
});



const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

Vue.config.productionTip = false;
new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
