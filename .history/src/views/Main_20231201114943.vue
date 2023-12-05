<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Main</h1>
        <p>
            <router-link to="/home">go home</router-link>
            <router-link to="/user">go user</router-link>
        </p>
        <router-view/>
    </div>
</template>

<script>

</script>