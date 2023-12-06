import request from "@/utils/request";

// 请求首页数据接口
export const getData = () => {
    request({
        url:'getdata/list',
        method:get,
    })
}