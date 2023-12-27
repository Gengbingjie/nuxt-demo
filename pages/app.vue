<script setup lang="ts">
    import {ref} from 'vue'
    import {useRoute} from "vue-router"
    let count = ref(0)
    const route = useRoute()
    console.log(route)
</script>
<template>
    <div>
        <h1>welcome to app.vue</h1>
        <AppAlert>
            <div @click="count++">{{ count }}</div>
        </AppAlert>
    </div>
</template>