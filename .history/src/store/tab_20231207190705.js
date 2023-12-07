// 菜单相关数据
export default {
    state: {
        // 侧边栏是否折叠
        isCollapse: false,
        // 面包屑
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
        },
        EDITTabList(state, path){
            state.tabList.push(path);
        }
    }
}