<template>
    <span>
        <template v-for="(o) in menus">
            <Submenu  
                v-if="(o.children) && (o.children.length)" 
                :name="o.id" 
                :key="o.id"
            >
                <template slot="title">
                    <i v-show="o.icon" :class="o.icon"></i>
                    <span>{{o.name}}</span>
                </template>
                <menu-list :menus="o.children"></menu-list>
            </Submenu>

            <MenuItem  
                v-else 
                :name="o" 
                :key="o.id"
            >
                <Icon v-show="o.icon" :type="o.icon" />
                <span>{{o.name}}</span>
            </MenuItem >
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