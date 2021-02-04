<template>
    <span 
      v-if="tabsArray['length']"
      style="width:100%;padding: 12px 12px 0px 12px;display:inline-block;padding-left:46px;position: relative;}"
    >
      <span style="display:inline-block;position: absolute;top: 10px;left: 5px;">
        <Button 
          @click="toHome"
        style="border: none;background: inherit;" size="large" icon="ios-home-outline"></Button>
      </span>
      <Tabs
        v-model="tabsActiveName"
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
        <div slot="extra">
          <span v-if="tabsArray['length']" :class="`tabs-mark-box ${tabsArray['length']>=maxNum?'warning':''}`">
            <Badge :count="'标签数量: '+tabsArray['length']"></Badge>
          </span>
        </div>
      </Tabs>
    </span>

</template>
<script>
  export default {
    data() {
      return {

      };
    },
		computed: {
			tabsArray(){
				return this.$store.state.storeTabs.tbasList;
      },
			tabsActiveName(){
				return this.$store.state.storeTabs.tabsActiveName;
      },  
      maxNum(){
				return this.$store.state.storeTabs.maxNum;
      }    
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
            that.$store.dispatch("selectTabs",newList[_index]["name"]);

            that.$router.push({
              name:that.$store.state.storeTabs.tabsActiveName,
              params:{}}
            );
          }else{
            // to home
            that.$router.push({name:"home",params:{}});
          }
         
          return index;
        });
        return (new Promise((resolve, reject)=>{}));
      },
      toHome: function(){
        
        this.$store.dispatch("removeTabsAll",{});
        this.$router.push({name:'home',params:{}});
      }

    },
    props:{

    }
  };
</script>
<style lang="scss">
  .tabs-mark-box{
    &.warning{
      .ivu-badge-count-alone{
        background:#f90;
      }  
    }

    .ivu-badge-count-alone{
      background:#2d8cf0
    }
  }
</style>

