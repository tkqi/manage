// 菜单相关数据
export default {
    state: {
        // 侧边栏是否折叠
        isCollapse: false,
        // 面包屑
        tabList: [
            {
                path: '/',
                name: 'home',
                label: "首页",
                icon: 's-home',
                url: 'Home/Home'
            },
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
        EDITTabList(state, path) {
            if (path.path!= state.tabList[state.tabList.length].path)
                state.tabList.push(path);
        }
    }
}