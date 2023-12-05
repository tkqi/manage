<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="head-container">
        <div class="l-content">
            <el-button icon="el-icon-s-grid" size="mini" @click="changeCollapse()"/>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="img" src="../assets/img/user-default.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        changeCollapse(){
            this.$store.commit('EDITIsCollapse');
        }
    }
}
</script>

<style lang="less" scoped>
.head-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 20px;
}

// .l-content {
//     padding-left: 15px;
// }

.r-content {}

.text {
    color: white;
    font-size: 14px;
    padding-left: 10px;
}

.img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
</style>