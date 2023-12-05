<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <el-container >
            <el-aside width="200px"><sidebar/></el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main><router-view /></el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
export default {
    components:{
        sidebar
    }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>