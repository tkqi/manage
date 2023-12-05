<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-menu default-active="1-4-1" class="menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item v-for="item in noChildren" :key="item.name" index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.name" index="item.name">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="item in item.children" :key="item.name" index="item.name">
                <i :class="`el-icon-${item.icon}`"></i>
                <el-menu-item index="2-1">{{ item.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
  
<script>
export default {
    computed: {
        // 无子菜单
        noChildren() {
            return this.menuData.filter(o => !o.children);
        },
        // 有子菜单
        hasChildren() {
            return this.menuData.filter(o => o.children);
        }
    },
    data() {
        return {
            isCollapse: false,
            menuData: [
                {
                    path: '/',
                    name: 'home',
                    label: "首页",
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: "商品管理",
                    icon: 's-shop',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: "用户管理",
                    icon: 's-custom',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 's-other',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: "页面1",
                            icon: 's-claim',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: "页面2",
                            icon: 's-claim',
                            url: 'Other/PageTwo'
                        },
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less">
.menu {
    width: auto;
    height: 100%;
}
</style>