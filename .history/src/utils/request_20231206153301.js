import axios from 'axios'

const request = axios.create({
    // 通用请求地址，前缀
   baseURL:'/api',
   // 超时时间
   timeout:10000,
})

export default request