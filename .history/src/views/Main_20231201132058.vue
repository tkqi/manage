<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main><router-view /></el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
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

.container{
    height: 100%;
}
el-container{
    height: 100%;
}
</style>