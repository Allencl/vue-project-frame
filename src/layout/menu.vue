<template>
    <div>
        <Menu
            width="auto"
            @on-select="selectHandle"
        >
            <menu-sun :menus="menuList"/>
        </Menu>
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
            // 菜单 数据
            menuList: [
                {
                    name: "一级菜单",
                    id: "1",
                    children: [
                        {
                            id:"1-1",
                            name: "页面示例1", 
                            icon:"logo-buffer",
                            pathName:"page1"            
                        },
                        {
                            name: "二级菜单",
                            id: "1-2",
                            children: [
                                {
                                    name: "示例页面2", 
                                    id: "1-2-1",
                                    icon:"ios-analytics",
                                    pathName:"page2"            
                                }
                            ]
                        },
                        {
                            id:"1-3",
                            name: "页面示例3", 
                            icon:"logo-buffer",
                            pathName:"page3"            
                        },

                    ]
                }
            ]
        };
    },
    methods:{
        /**
         * 菜单 点击
         */
        selectHandle: function(option){
            this.$emit("addMenuHandle",option);
        }
    }
};
</script>