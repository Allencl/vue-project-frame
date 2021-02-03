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
                <Layout :style="{padding: '0 24px 24px'}">
                    <WisTabs />
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
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
  data() {
    return {
      documentHeight:document.documentElement.clientHeight-270,  // 窗口高度

    }
  },
  mounted(){
      var that=this;
      window.onresize = function(){ 
          that.documentHeight=document.documentElement.clientHeight-270;  // 窗口高度
      };
  },  
  methods:{
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
    }
  }
}
</script>

<style lang="scss">

</style>
