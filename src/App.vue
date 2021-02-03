<template>
  <div id="app">

    <div class="layout">
        <Layout>
            <Header>
              <WisHeader />
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                  <WisMenu 
                    @addMenuHandle="addMenuHandle"
                  />
                </Sider>
                <Layout class="wis-content-container" 
                  :style=" tabsArray ?
                    {background:'#fff',padding:'46px 0px 0px 0px'}:
                    {background:'#fff',padding:'0px 0px 0px 0px'}
                  "
                >
                    <div class="wis-tabs-container">
                      <WisTabs 

                      />
                    </div>
                    <Content :style="{overflow:'auto',height:documentHeight+'px',padding: '8px 8px', minHeight: '280px', background: '#fff'}">
                      <keep-alive>
                        <router-view v-if='$route.meta.keepAlive'></router-view>
                      </keep-alive>
                      <router-view v-if='!$route.meta.keepAlive'></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
import WisHeader from '@src/layout/header.vue';  // 头
import WisMenu from '@src/layout/menu.vue';  // 菜单
import WisTabs from '@src/layout/tabs.vue';  // tabs



export default {
  name: 'App',
  components: { 
    WisHeader, 
    WisMenu,
    WisTabs
  },
  data(_this) {
    return {
      documentHeight:document.documentElement.clientHeight-(_this.tabsArray?116:68),  // 窗口高度
    }
  },
  computed: {
    tabsArray(){
      return this.$store.state.storeTabs.tbasList["length"];
    }     
  },   
  watch:{
    // 监听 tabs
    "$store.state.storeTabs.tbasList"(val){
      this.updataWindow();
    },
  },   
  created(){
    this.$router.push({name:'home',params:{}});

    var that=this;

    window.onresize = function(){ 
      that.updataWindow();
    };

  },
  mounted(){

  },  
  methods:{
    /**
     * 刷新
     */
    updataWindow: function(){
      this.documentHeight=document.documentElement.clientHeight-(this.tabsArray?116:68);  // 窗口高度
    },
    /**
     * add 菜单
     */
    addMenuHandle: function(option){
      let that=this;
      this.$store.dispatch("addTabs",{
        _this:that,
        label:option["name"],
        name:option["pathName"],
        icon:option["icon"]
      });
    },
  },
}
</script>

<style lang="scss">
  .wis-content-container{
    width: 100%;
    position: relative;
    
    .wis-tabs-container{
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px; 
      height: 46px;
    }
  }
</style>
