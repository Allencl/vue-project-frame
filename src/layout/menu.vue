<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <menu-sun :menus="menuList" />
        </el-menu>
    </div>
</template>
<script>
import MenuSun from "@src/layout/menuList.vue";
export default {
  components: {
    MenuSun
  },
  data() {
    return {
      menuList: [
        {
            name: "一级菜单",
            id: "1",
            children: [
                {
                    id:"1-1",
                    name: "页面示例1", 
                    icon:"el-icon-bell"            
                },
                {
                    name: "二级菜单",
                    id: "1-2",
                    children: [
                        {
                            name: "示例页面2", 
                            id: "1-2-1",
                            icon:"el-icon-star-off"            
                        }
                    ]
                },
            ]
        }
      ]
    };
  }
};
</script>