export default [
    // 主路由
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        // 子路由
        children: [
            {
                path: '/',
                // 路由组件懒加载
                component: () => import('../views/Home.vue')
            },
            {
                path: '/user',
                component: () => import('../views/User.vue')
            },
            {
                path: '/mall',
                component: () => import('../views/Mall.vue')
            },
            {
                path: '/page1',
                component: () => import('../views/Page1.vue')
            },
            {
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