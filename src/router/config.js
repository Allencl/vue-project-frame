import Home from '@src/layout/home.vue';  // 主页




export default {
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'page1',
      path: '/page1',
      component: import("@view/page1/index.vue")
    },
  ]
}
