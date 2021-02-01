import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'
import ProductList from '../pages/ProductList.vue'
import PriceList from '../pages/PriceList.vue'
import Service from '../pages/Service.vue';
import CalculatePage from '../pages/Calculate.vue';




export default {
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    
    {
      name: 'Calculate',
      path: '/calculate',
      component: CalculatePage
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'ProductList',
      path: '/productlist',
      component: ProductList
    },
    {
      name: 'PriceList',
      path: '/pricelist',
      component: PriceList
    },
    {
      name: 'Service',
      path: '/service',
      component: Service
    }
  ]
}
