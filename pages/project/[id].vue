<template>
	<div class="my-5">
		<UBreadcrumb
			:links="links"
			class="mb-3"
		/>
		<ContentDoc :path="`/projects/${route.params.id}`" />
	</div>
</template>

<script setup="setup" lang="ts">
const route = useRoute();

const links = [
	{
		label: 'projects',
		to: '/projects',
	}, {
		label: route.params.id + '',
	},
];
</script>
