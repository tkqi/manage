<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <sidebar />
            </el-aside>
            <el-container>
                <el-header><topbar/></el-header>
                <el-main><router-view /></el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import topbar from '../components/topbar.vue';
export default {
    components: {
        sidebar,
        topbar
    }
}
</script>

<style lang="less" scoped>
.el-header,
.el-aside {
    padding: 0;
    margin: 0;
}
</style>