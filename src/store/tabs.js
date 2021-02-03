/**
 * tabs 标签页
 */

export default {
	state: {
        tbasList:[],   // tabs 列表
	},
	mutations: {
		/**
		 * add tabs
		 */
		addTabs: function(state,option){
			let that=option["_this"];

			// 限制个数
			if(state.tbasList["length"]>=10){
				that.$Message.warning(that.$t('global.tabsNumlimit'));
			}

			// 去重
			if( !state.tbasList.filter((o)=>o["name"]==option["name"])["length"] ){
				state.tbasList=state.tbasList.concat([option]);
				that.$router.push({name:option["name"],params:{}});
			}
			
		},
		/**
		 * 删除 tabs
		*/
		removeTabs: function(state,callBack){
			let index=callBack();
			state.tbasList=state.tbasList.filter((o,i)=>i!=index);
		},		
	},
	actions: {
		addTabs(context,agrs){
			context.commit("addTabs",agrs);
		},
		removeTabs(context,agrs){
			context.commit("removeTabs",agrs);
		},
	}
}