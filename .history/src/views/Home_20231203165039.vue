<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row>
        <el-col :span="8">
            <div>
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
                <el-card class="table">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="course" label="课程" min-width="30" :width="auto" align="center">
                        </el-table-column>
                        <el-table-column prop="buytoday" label="今日购买" min-width="30" :width="auto">
                        </el-table-column>
                        <el-table-column prop="buythemonth" label="本月购买" min-width="30" :width="auto">
                        </el-table-column>
                        <el-table-column prop="buyall" label="总购买" min-width="30" :width="auto">
                        </el-table-column>
                    </el-table>
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
            tableData: [
                {
                    course: 'C#',
                    buytoday: 20,
                    buythemonth: 300,
                    buyall: 3000
                },
                {
                    course: 'javaScript',
                    buytoday: 40,
                    buythemonth: 1000,
                    buyall: 5000
                },
                {
                    course: 'vue',
                    buytoday: 10,
                    buythemonth: 200,
                    buyall: 3000
                },
                {
                    course: 'sql',
                    buytoday: 8,
                    buythemonth: 150,
                    buyall: 1400
                },
                {
                    course: 'go',
                    buytoday: 20,
                    buythemonth: 1000,
                    buyall: 6000
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;
    padding-right: 0px;

    .user-info {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #fff000;
        }
    }

    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }
}

.login-info {
    line-height: 25px;

    p {
        font-size: 12px;

        span {
            font-size: 12px;
            margin-left: 50px;
        }
    }
}

.table {
    margin-top: 20px;
}
</style>