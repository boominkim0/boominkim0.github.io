<template>
	<UModal>
		<UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
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
