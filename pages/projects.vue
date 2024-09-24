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
</script>
