<template>
    <el-tabs 
        v-model="activeName"
        closable
        :tab-position="tabPosition" 
        @tab-click="handleClick"
    >
        <el-tab-pane label="用户管理" name="first">
            <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
            <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'top',  
        activeName: 'second',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>