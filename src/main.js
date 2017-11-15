// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex/'




new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
//rout view 显示当前路由对应的内容
//rout link  路由的跳转