export default [
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