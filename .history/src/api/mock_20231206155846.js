import mockjs from "mockjs";

// 定义mock请求拦截
mockjs.mock('api/home/getdata', 'get', function(){
    console.log('拦截成功')
})