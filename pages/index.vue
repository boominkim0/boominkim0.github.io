<template>
	<NuxtLayout
		class="flex flex-col overflow-hidden"
		:style="{ height }"
	>
		<div class="w-full my-5 relative flex-1">
			<MatrixCanvas />

			<div
				class="absolute blur-box w-fit"
				style="
					left: 50%; top: 50%; transform: translate(-50%, -50%);
				"
			>
				<h1
					class="
						text-4xl
						font-bold
						text-center
						text-gray-800
						dark:text-gray-200
					"
				>
					Boomin Kim
				</h1>

				<h2
					class="
						text-2xl
						text-center
						text-gray-600
						dark:text-gray-400
					"
				>
					만드는걸 좋아하는 개발자 입니다.
				</h2>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();
const height = isMobile ? 'calc(100vh - 100px)' : '100vh';

defineOgImageComponent('Default', {
	title: 'Boomin Kim',
	description: '💻 만드는걸 좋아하는 개발자 입니다.',
});

useHead({
	title: 'Boomin Kim',
});

if (isMobile) {
	onMounted(() => {
		document.body.style.overflow = 'hidden';
	});

	onUnmounted(() => {
		document.body.style.overflow = '';
	});
}
</script>

<style scoped>
.blur-box {
    backdrop-filter: blur(10px); /* 블러 효과 */
    border-radius: 15px; /* 둥근 모서리 */
    padding: 20px; /* 내부 여백 */
    background-color: rgba(255, 255, 255, 0.3); /* 반투명 배경 */
}
</style>
