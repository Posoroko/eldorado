<template>
    <h1>{{ slug }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug))

useHead({ title: () => `Événement : ${slug.value}` })
</script>

<style scoped>
</style>
