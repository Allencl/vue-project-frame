<template>

    <Tabs
      v-model="activeName"
      closable
      type="card"
      :before-remove="beforeRemove"
      @on-click="changeTabHandle"
    >
      <TabPane 
        v-for="(o,i) in tabsArray"
        :key="i"
        :label="o['label']" 
        :name="o['name']"        
        :icon="o['icon']"
      />
    </Tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'top',  
        // 显示 菜单
        activeName: '',
      };
    },
		computed: {
			tabsArray(){
				return this.$store.state.storeTabs.tbasList;
			},
		},    
    methods: {
      /**
       * tab change
       */
      changeTabHandle: function(tabs){
        this.$router.push({name:tabs,params:{}});
      },
      /**
       * 删除
       */      
      beforeRemove:function(index){
        let that=this;
        let newList=this.$store.state.storeTabs.tbasList;
        let _index=(index-1>=0)?index-1:index+1;

        this.$store.dispatch("removeTabs",function(){
                 
          if(_index!=newList["length"]){
            that.activeName=newList[_index]["name"];
            that.$router.push({name:that.activeName,params:{}});
          }else{
            // to home
            that.$router.push({name:"home",params:{}});
          }
         
          return index;
        });
        return (new Promise((resolve, reject)=>{}));
      },

    },
    props:{

    }
  };
</script>