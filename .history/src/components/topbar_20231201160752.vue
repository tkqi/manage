<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="head-container">
        <div class="l-content">
            <el-button icon="el-icon-s-grid" size="mini"/>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content"></div>
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

.text{
    color: white;
    font-size: 14px;
    padding-left: 10px;
}
</style>