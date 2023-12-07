<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="head-container">
        <div class="l-content">
            <el-button icon="el-icon-s-grid" size="mini" @click="changeCollapse()" />
            <!-- 面包屑 -->
            <span class="text">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="item in tags" :key="item.name" :to="{ path: item.path }">{{ item.label
                    }}</el-breadcrumb-item>
                </el-breadcrumb>
            </span>
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
import { mapState } from 'vuex';
export default {
    data() {
        return {

        }
    },
    methods: {
        changeCollapse() {
            console.log(this.tags);
            this.$store.commit('EDITIsCollapse');
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
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

    .text {
        color: white;
        font-size: 14px;
        padding-left: 10px;

    }

    .l-content {
        display: flex;
        align-items: center;
        // 样式穿刺 
        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;

                &.is-link {
                    color: #666;
                }
            }
        }
    }
}

// .l-content {
//     padding-left: 15px;
// }

// .r-content {}



.img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}</style>