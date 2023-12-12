<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="tag-group">
        <el-tag v-for="item in tags" :key="item.name" :closable="item.name != 'home'"
            :effect="item.path == $route.path ? 'dark' : 'plain'" @close="handlerClose(item)" class="tag">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'headTag',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    },
    methods: {
        handlerClose(item) {
            this.$store.commit('DELTabList', item)
        }
    }
}
</script>