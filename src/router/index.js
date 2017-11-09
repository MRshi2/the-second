import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Shidetail from '@/pages/detail-shi/Shidetail'
import Shilunbo from '@/pages/detail-shi-lunbo/Lunbo'
import Pay from '@/pages/pay/Pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
    	path: '/detail-shi',
      name: 'detail-shi',
      component: Shidetail
    },
    /*添加图片详情效果*/
    {
    	path: '/detail-shi-lunbo',
      name: 'detail-shi-lunbo',
      component: Shilunbo
    },
    {
    	path: '/pay',
      name: 'pay',
      component: Pay
    }
   ]
 
})
