export default [
    // 主路由
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        redirect: '/home',// 重定向
        // 子路由
        children: [
            {
                // 首页
                path: '/home',
                // 路由组件懒加载
                component: () => import('../views/Home.vue')
            },
            {
                // 用户管理
                path: '/user',
                component: () => import('../views/User.vue')
            },
            {
                // 商品管理
                path: '/mall',
                component: () => import('../views/Mall.vue')
            },
            {
                // 其他/页面1
                path: '/page1',
                component: () => import('../views/Page1.vue')
            },
            {
                // 其他/页面2
                path: '/page2',
                component: () => import('../views/Page2.vue')
            },
        ]
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