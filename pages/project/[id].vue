<template>
	<ContentDoc :path="`/projects/${route.params.id}`" />
</template>

<script setup="setup" lang="ts">
const route = useRoute();
</script>
