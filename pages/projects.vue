<template>
	<NuxtLayout>
		<div class="my-5">
			<UVerticalNavigation
				:links="links"
			>
				<!-- <template #badge="{ link }">
					<div class="flex-1 flex justify-between relative truncate">
						<div>{{ link.badge }}</div>
						<div>{{ link.time }}</div>
					</div>
				</template> -->
			</UVerticalNavigation>
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
		label: '🏋🏻‍♂️ 힘캐 - 운동일지 앱',
		badge: '2024.07',
		to: '/project/himke',
	},
	{
		label: '🎊 회사 체육대회 웹앱',
		badge: '2023.11',
		to: '/project/company-festival',
	},
];

defineOgImageComponent('Default', {
	title: 'Boomin Kim',
	description: `제가 만든 프로젝트들을 소개합니다. 🚀(${links.length}개)`,
});
</script>
