<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div class="user">
                        <img class="img" src="../assets/img/user-default.png" alt="">
                        <div>
                            <P>Admin</P>
                            <p>管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <span>hello</span>
                        <span>i'm jack</span>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.user{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>