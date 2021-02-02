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
          <Tabs :tabsList="tabsList" />
          <div :style="`height:${documentHeight}px;`">
            <router-view></router-view>
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
      
      // 标签页
      tabsList:[],
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
      this.tabsList=this.tabsList.concat([{
        label:option["name"],
        name:option["pathName"]
      }]);
    }
  }
}
</script>

<style lang="scss">

</style>
