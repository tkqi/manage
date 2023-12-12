<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="tag-group">
        <el-tag v-for="item in tags" :key="item.name" effect="dark" :closable="item.name != 'home'"
            :effect="item.path == $route.path ? 'dark' : 'plain'" @close="handlerClose(Row)">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { Row } from 'element-ui';
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
    }
}
</script>