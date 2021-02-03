export default {
  routes: [
    {
      name: 'home',
      path: '/',
      meta:{title:'首页',keepAlive:true},
      component: ()=> import("@src/layout/home.vue"),
    },
    {
      name: 'page1',
      path: '/page1',
      meta:{title:'示例页面1',keepAlive:true},
      component: ()=> import("@view/page1/index.vue")
    },
    {
      name: 'page2',
      path: '/page2',
      meta:{title:'示例页面2',keepAlive:true},
      component: ()=> import("@view/page2/index.vue")
    },    
    {
      name: 'page3',
      path: '/page3',
      meta:{title:'示例页面2',keepAlive:true},
      component: ()=> import("@view/page3/index.vue")
    }, 
    
    // 这个要放在最后
    {
      name: '404',
      path: '/404',
      meta:{title:'404',keepAlive:true},
      component: ()=> import("@src/router/404.vue")
    }, 
    {
      path:"*",
      redirect:"/404"
    } 
  ]
}
