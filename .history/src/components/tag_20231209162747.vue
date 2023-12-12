<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="tag-group">
        <span class="tag-group__title">Dark</span>
        <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
export default {
    name: 'headTag',
    data() {
        return {

        }
    }
}
</script>