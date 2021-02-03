<template>
  <div id="app">

    <el-container>
      <el-header style="height: inherit;padding:0px">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu 
            @addMenuHandle="addMenuHandle"
          />
        </el-aside>
        <el-main>
          <Tabs />
          <div :style="`height:${documentHeight}px;`">

            <keep-alive>
              <router-view v-if='$route.meta.keepAlive'></router-view>
            </keep-alive>
            <router-view v-if='!$route.meta.keepAlive'></router-view>

          </div>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Header from '@src/layout/header.vue';  // 头
import Menu from '@src/layout/menu.vue';  // 菜单
import Tabs from '@src/layout/tabs.vue';  // tabs



export default {
  name: 'App',
  components: { 
    Header, 
    Menu,
    Tabs
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
