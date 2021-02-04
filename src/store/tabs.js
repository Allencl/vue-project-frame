/**
 * tabs 标签页
 */

export default {
	state: {
		maxNum:7, // 最大数
		tabsActiveName:"",  // 选中 名
        tbasList:[],   // tabs 列表
	},
	mutations: {
		/**
		 * add tabs
		 */
		addTabs: function(state,option){
			let that=option["_this"];


			// 限制个数
			if(state.tbasList["length"]>=state.maxNum){
				that.$Message.warning(that.$t('global.tabsNumlimit'));
				return;
			}

			// 去重
			if( !state.tbasList.filter((o)=>o["name"]==option["name"])["length"] ){
				state.tbasList=state.tbasList.concat([option]);
			}

			that.$router.push({name:option["name"],params:{}});
			state.tabsActiveName=option["name"];			
		},
		/**
		 * 删除 tabs
		*/
		removeTabs: function(state,callBack){
			let index=callBack();
			state.tbasList=state.tbasList.filter((o,i)=>i!=index);
		},
		/**
		 *  select
		*/	
		selectTabs: function(state,name){
			state.tabsActiveName=name;
		},	
		/**
		 * 清空
		*/
		removeTabsAll: function(state,name){
			state.tbasList=[];
		},

	},
	actions: {
		addTabs(context,agrs){
			context.commit("addTabs",agrs);
		},
		removeTabs(context,agrs){
			context.commit("removeTabs",agrs);
		},
		removeTabsAll(context,agrs){
			context.commit("removeTabsAll",agrs);
		},
		selectTabs(context,agrs){
			context.commit("selectTabs",agrs);
		},
	}
}