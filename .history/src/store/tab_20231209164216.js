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
        EDITTabList(state, val) {
            if (!state.tabList.find(item => item.name == val.name) && val.name != 'home')
                state.tabList.push(val);
        },
        DELTabList(state, val) {
            let indexToDel = state.tabList.findIndex(o => o.path == val.path);
            if (indexToDel)
                state.tabList.splice(indexToDel, 1);
        }
    }
}