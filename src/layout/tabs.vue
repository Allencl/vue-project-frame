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
            <router-view></router-view>
        </el-tab-pane>

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
    },
    props:{
        tabsList:{
            type:Array,
            default:()=>[]	      
        }
    }
  };
</script>