<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-menu class="menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" collapse-transition="true">
        <h3>管理系统</h3>
        <el-menu-item v-for="item in noChildren" :key="item.name" index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subitem in item.children" :key="subitem.name">
                <el-menu-item index="subitem.name">{{ subitem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
  
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

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.menu {
    height: 100vh;

    h3 {
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>