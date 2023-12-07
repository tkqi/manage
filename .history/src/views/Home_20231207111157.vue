<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<template>
    <el-row>
        <el-col :span="8" class="left-col">
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
                        <el-table-column prop="name" label="品牌" :min-width="30" width="auto" align="center">
                        </el-table-column>
                        <el-table-column prop="todayBuy" label="今日购买" :min-width="30" width="auto">
                        </el-table-column>
                        <el-table-column prop="monthBuy" label="本月购买" :min-width="30" width="auto">
                        </el-table-column>
                        <el-table-column prop="totalBuy" label="总购买" :min-width="30" width="auto">
                        </el-table-column>
                    </el-table>
                </el-card>
            </div>
        </el-col>
        <el-col :span="16" class="right-col">
            <div class="buy">
                <el-card v-for="(item, index) in countData" :key="index" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="buy-content">
                        <p class="value">{{ '￥' + item.value }}</p>
                        <p class="label">{{ item.label }}</p>
                    </div>
                </el-card>
            </div>
            <div>
                <el-card style="height: 280px;">
                    <div ref="echarts1" style="height: auto;width:auto;"></div>
                </el-card>
            </div>
            <div class="bottom-map">
                <el-card></el-card>
                <el-card></el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>

import { getData } from '@/api/index';
import * as echarts from "echarts";
export default {
    data() {
        return {
            tableData: [],
            countData: [
                {
                    label: '今日支付订单',
                    value: 1234,
                    color: '#2ec7c9',
                    icon: 'success'
                },
                {
                    label: '今日收藏订单',
                    value: 120,
                    color: '#ffb980',
                    icon: 'star-on'
                },
                {
                    label: '今日未支付订单',
                    value: 180,
                    color: '#5ab1ef',
                    icon: 's-goods'
                },
                {
                    label: '本月支付订单',
                    value: 1234,
                    color: '#2ec7c9',
                    icon: 'success'
                },
                {
                    label: '本月收藏订单',
                    value: 120,
                    color: '#ffb980',
                    icon: 'star-on'
                },
                {
                    label: '本月未支付订单',
                    value: 180,
                    color: '#5ab1ef',
                    icon: 's-goods'
                }
            ],
            myChart: undefined
        }
    },
    mounted() {
        getData().then(res => {
            console.log(res);
            const data1 = res.data.data;
            this.tableData = data1.tableData;
            console.log(data1);

            const echarts1 = echarts.init(this.$refs.echarts1)

            var datax1 = Object.values(data1.orderData.date[0])
            var dataLegend = Object.keys(data1.orderData.data[0])
            console.log(datax1);
            console.log(dataLegend);
            var option1 = {
                xAxis: {
                    type: 'category',
                    data: data1.orderData.date
                },
                yAxis: {
                    type: 'value'
                },
                legend: {
                    data: dataLegend
                },
                series: [
                ]
            };
            dataLegend.forEach(key => {
                option1.series.push({
                    name: key,
                    type: 'line',
                    data: data1.orderData.data.map(item => {
                        item[key]
                    })
                })
            })
            console.log(option1.series);
            echarts1.setOption(option1);
        });
    },
    created() {
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.box-card {
    height: 30vh;

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
    height: 470px;

    el-table {
        height: 100%;
    }
}

.buy {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        line-height: 80px;
    }

    .buy-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;

        .value {
            font-size: 30px;
            line-height: 30px;
            margin-bottom: 10px;
            height: 30px;
        }

        .label {
            font-size: 15px;
            text-align: center;
            color: rgb(245, 212, 170);
        }
    }

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}

.right-col {
    padding-left: 10px;
}

.left-col {
    padding-right: 10px;
}

.bottom-map {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-card {
        height: 260px;
        width: 48%;
    }
}
</style>