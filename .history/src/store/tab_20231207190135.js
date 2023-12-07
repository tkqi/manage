// 菜单相关数据
export default {
    state: {
        isCollapse: false,
        tabList: undefined
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