import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);


import tabsStore from './tabs';   // 标签页


export default new Vuex.Store({
	modules: {
		storeTabs: tabsStore,
	}
});
