<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row>
        <el-col :span="8">
            <div >
                <el-card class="box-card">
                    <div class="user">
                        <img class="img" src="../assets/img/user-default.png" alt="">
                        <div class="user-info">
                            <P class="name">Admin</P>
                            <p class="access">管理员</p>
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <div class="login-info">
                        <p>上次登录时间: <span>2023-12-03</span></p>
                        <p>上次登录地点: <span>绍兴</span></p>
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
    align-items: center;
    padding-right: 0px;
    .user-info{
        .name{
            font-size: 32px;
            margin-bottom: 10px;
        }
        .access{
            color: #fff000;
        }
    }
    img{
        height: 150px;
        width:150px;
        border-radius: 50%;
        margin-right: 40px;
    }
    .login-info{
        p{
            font-size: 10px;
            span{
                font-size: 10px;
            }
        }
    }
}
</style>