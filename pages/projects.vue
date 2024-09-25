<template>
	<NuxtLayout>
		<div class="my-5">
			<UVerticalNavigation
				:links="links"
			/>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
// head.title
useHead({
	title: 'Projects',
});

const links = [
	{
		label: '🏋🏻‍♂️ 힘캐',
		to: '/project/himke',
	},
	{
		label: '🎉 로지페스티벌',
		to: '/project/logifestival',
	},
];

defineOgImageComponent('Default', {
	title: 'Boomin Kim',
	description: `제가 만든 프로젝트들을 소개합니다. 🚀(${links.length}개)`,
});
</script>
