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
.el-header {
    padding: 0
}
</style>