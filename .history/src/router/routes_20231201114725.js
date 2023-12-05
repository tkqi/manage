export default [
    // 主路由
    {
        path:'/',
        component:()=>import('../views/Main.vue')
    },
    {
        path: '/home',
        // 路由组件懒加载
        component: () => import('../views/Home.vue')
    },
    {
        path: '/user',
        component: () => import('../views/User.vue')
    }
]