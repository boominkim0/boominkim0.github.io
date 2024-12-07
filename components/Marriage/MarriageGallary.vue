<template>
	<div class="w-full max-w-96 mx-auto text-center my-5">
		<!-- 3열로 나열 -->
		<div class="grid grid-cols-3 gap-2">
			<button
				v-for="(picture, index) in props.pictures"
				:key="index"
				class="hover:opacity-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
				@click="fullImage = picture; isShowFullImageModal = true"
			>
				<img
					:src="picture"
					class="w-full h-full object-cover"
					draggable="false"
				>
			</button>
		</div>
	</div>
	<UModal
		v-model="isShowFullImageModal"
	>
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
						@click="isShowFullImageModal = false"
					/>
				</div>
			</template>
			<img
				:src="fullImage"
				class="w-full"
				draggable="false"
			>

			<template #footer>
				<!-- 3열로 나열 -->
				<div class="grid grid-cols-6 gap-2">
					<button
						v-for="(picture, index) in props.pictures"
						:key="`picture-${index}`"
						class="hover:opacity-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
						@click="changeFullImage(picture)"
					>
						<img
							:src="picture"
							class="w-full h-full object-cover"
							:class="{ 'border-5 border-gray-500': picture === fullImage }"
							draggable="false"
						>
						<!-- 선택된 아이콘 표시 -->
						<UIcon
							v-if="picture === fullImage"
							name="i-heroicons-check-circle-solid"
							class="w-5 h-5
								absolute top-0 right-0
								m-auto
								bg-primary-500 text-white
								"
						/>
					</button>
				</div>
			</template>
		</UCard>
	</UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
	pictures: string[];
}>();

const fullImage = ref(props.pictures[0]);
const isShowFullImageModal = ref(false);

function changeFullImage(picture: string) {
	try {
		console.log('changeFullImage', { picture });
		fullImage.value = picture;
		isShowFullImageModal.value = true;
	}
	catch (error) {
		console.error('Error changing full image:', error);
	}
}
</script>
