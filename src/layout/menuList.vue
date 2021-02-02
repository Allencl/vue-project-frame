<template>
    <span>
        <template v-for="(o) in menus">
            <el-submenu v-if="(o.children) && (o.children.length)" :index="o.id" :key="o.id">
                <template slot="title">
                    <i v-show="o.icon" :class="o.icon"></i>
                    <span>{{o.name}}</span>
                </template>
                <menu-list :menus="o.children"></menu-list>
            </el-submenu>

            <el-menu-item 
                v-else 
                :index="o.id" 
                :key="o.id"
                :route="o"
            >
                <i v-show="o.icon" :class="o.icon"></i>
                <span>{{o.name}}</span>
            </el-menu-item>
        </template>
    </span>
</template>

<script>
import MenuList from "@src/layout/menuList.vue";
export default {
    name: "MenuList",
    components: {
        MenuList
    },
    props: {
        menus:{}
    },
    methods:{

    }
};
</script>