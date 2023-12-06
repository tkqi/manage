import request from "@/utils/request";
import { get } from "core-js/core/dict";

// 请求首页数据接口
export const getData = () => {
    request({
        url:'/home/getdata',
        method:get
    })
}