<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="head-container">
        <div class="l-content">
            <el-button icon="el-icon-s-grid" size="mini" />
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="img" src="../assets/img/user-default.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.head-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.l-content {
    padding-left: 15px;
}

.r-content {}

.text {
    color: white;
    font-size: 14px;
    padding-left: 10px;
}

.img{
    height: 40px;
    width: 40px;
    border-radius: 10px;
}
</style>