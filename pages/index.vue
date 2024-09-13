<script setup lang="ts">
const links = [{
	label: 'Home',
	icon: 'i-heroicons-home',
	to: '/',
}, {
	label: 'Navigation',
	icon: 'i-heroicons-square-3-stack-3d',
}, {
	label: 'Breadcrumb',
	icon: 'i-heroicons-link',
}];
</script>

<template>
	<main>
		<UBreadcrumb :links="links" />
		<ContentDoc path="/test/2" />
	</main>
</template>
