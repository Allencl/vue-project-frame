<template>
    <el-tabs 
        v-model="activeName"
        closable
        :tab-position="tabPosition" 
        @tab-click="handleClick"
    >
        <el-tab-pane 
            v-for="(o,i) in tabsList"
            :key="i"
            :label="o['label']" 
            :name="o['name']"
        >
        </el-tab-pane>

    </el-tabs>
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
    methods: {
      handleClick: function(tabs){
        this.$router.push({name:tabs["name"],params:{}});
      }
    },
    props:{
        tabsList:{
            type:Array,
            default:()=>[]	      
        }
    }
  };
</script>