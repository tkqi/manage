import request from "@/utils/request";

// 请求首页数据接口
export function getData() {
    return request({
        url: '/home/getdata',
        method: 'get'
    })
}