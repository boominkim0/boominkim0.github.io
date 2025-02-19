<template>
	<div class="w-full max-w-96 mx-auto text-center my-5">
		<!-- 3열로 나열 -->
		<div
			class="grid grid-cols-3 gap-2"
		>
			<button
				v-for="(picture, index) in props.pictures"
				:key="index"
				class="hover:opacity-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
				@click="selectPicture(index)"
			>
				<img
					:src="picture"
					class="w-full h-full object-cover"
					draggable="false"
				>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MarriageGallaryModal } from '#components';

const props = defineProps<{
	pictures: string[];
}>();

const modal = useModal();
function selectPicture(index: number) {
	modal.open(MarriageGallaryModal, {
		pictures: props.pictures,
		index,
		onClose: () => {
			modal.close();
		},
	});
}
</script>
