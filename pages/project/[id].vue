<template>
	<NuxtLayout class="pb-5">
		<UBreadcrumb
			:links="links"
			class="mb-3"
		/>
		<ContentDoc
			:path="`/projects/${route.params.id}`"
			class="markdown-body bg-transparent mb-5"
		/>
	</NuxtLayout>
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
