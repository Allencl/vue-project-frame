import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前

import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routerConfig from './router/config.js'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import http from './api/http'
import api from './api/api'

Vue.prototype.$http = http;
Vue.prototype.$api = api;

import SCSS from 'scss'
import "@styles/index.scss";  // 全局样式
Vue.use(SCSS);

import Vuex from 'vuex';
import LocalStore from './store';

let WisStore = new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'PRD', //在非生产环境下，使用严格模式
  modules: LocalStore
});


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

Vue.config.productionTip = false;

new Vue({
  WisStore,
  router,
  render: h => h(App)
}).$mount('#app');
