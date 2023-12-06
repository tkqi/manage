import axios from 'axios'

axios.create({
    // 通用请求地址，前缀
   baseURL:'/api',
   timeout:1000
})