import mockjs from "mockjs";
import home from '@/api/MockServerData/home'


// 定义mock请求拦截
mockjs.mock('/api/home/getdata', 'get', home.getStatisticalData)