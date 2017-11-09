import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
import lunbo from '../pages/detail-shi-lunbo/module.js'
import detail from '../pages/detail-shi/module.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home:home,
		lunbo:lunbo,
		detail:detail
	}
})
