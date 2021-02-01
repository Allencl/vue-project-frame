<template>
  <div>
    <div class="menuList">
      <menu-sun :menuList="menuList" />
    </div>
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
          name: "一级菜单2",
          id: "2",
          children: [
            { name: "二级菜单2-1", id: "2-1" },
            {
              name: "二级菜单2-2",
              id: "2-2",
              children: [{ name: "三级菜单1", id: "2-2-1" }]
            },
            {
              name: "二级菜单2-3",
              id: "2-3",
              children: [{ name: "三级菜单1", id: "2-3-1" }]
            }
          ]
        },
        {
          name: "一级菜单3",
          id: "3",
          children: [{ name: "二级菜单3-1", id: "3-1" }]
        },
        {
          name: "一级菜单4",
          id: "4",
          children: [
            {
              name: "二级菜单4-1",
              id: "4-1",
              children: [
                {
                  name: "三级菜单",
                  id: "4-1-1",
                  children: [{ name: "四级菜单", id: "4-1-1-1" }]
                },
                { name: "三级菜单", id: "4-1-2" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>