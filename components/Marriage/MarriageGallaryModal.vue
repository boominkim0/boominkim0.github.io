<template>
	<UModal>
		<UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
			<template #header>
				<div class="flex items-center justify-between">
					<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
						이미지 크게 보기
					</h3>
					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="emits('close')"
					/>
				</div>
			</template>

			<UCarousel
				ref="carouselRef"
				v-slot="{ item }"
				:items="props.pictures"
				:ui="{ item: 'basis-full' }"
				class="w-full h-86 rounded-lg overflow-hidden"
				arrows
				indicators
			>
				<img
					:src="item"
					class="w-full"
					draggable="false"
				>
			</UCarousel>
		</UCard>
	</UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
	pictures: string[];
	index?: number;
}>();
const emits = defineEmits([
	'close',
]);
const carouselRef = ref();

onMounted(async () => {
	await nextTick();

	setTimeout(() => {
		carouselRef.value.select((props.index || 0) + 1);
	}, 500);
});
</script>
