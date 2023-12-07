// 菜单相关数据
export default {
    state: {
        isCollapse: false,
        tabList: [
            {
                // 首页
                path: '/home',
                // 路由组件懒加载
                component: () => import('../views/Home.vue'),
                meta: { title: '首页' }
            }
        ]
    },
    getters: {
        getisCollapse: (state) => state.isCollapse,
        getTabList: (state) => state.tabList
    },
    mutations: {
        EDITIsCollapse(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}