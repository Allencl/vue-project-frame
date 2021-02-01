<template>
  <div>
    <el-menu
      default-active
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <template v-for="(item) in menuList">

        <el-menu-item 
            v-if="(item.children) && (item.children.length>0)" 
            :key="item.id" 
            :index="item.id"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <menu-sun :menuList="item.children"/>
        </el-menu-item>


        <el-submenu v-else :key="item.id">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
        </el-submenu>


      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuSun from "@src/layout/menuList.vue";
export default {
  name: "MenuSun",
  components: {
    MenuSun
  },
  props: {
    menuList: {}
  }
};
</script>