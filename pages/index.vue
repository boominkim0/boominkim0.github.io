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
						max-sm:text-xl
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
						max-sm:text-lg
					"
				>
					만드는걸 좋아하는 개발자 입니다.
				</h2>
			</div>
		</div>

		<div
			class="
				fixed
				right-0
				bottom-0
				text-center
				text-gray-200
				dark:text-gray-700
				p-3
			"
		>
			v{{ version }}
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
import packageInfo from '../package.json';

const { isMobile } = useDevice();
const height = isMobile ? 'calc(100vh - 100px)' : '100vh';
const version = packageInfo.version;

defineOgImageComponent('Default', {
	title: 'Boomin Kim',
	description: '💻 만드는걸 좋아하는 개발자 입니다.',
});

useHead({
	title: 'Boomin Kim',
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'stylesheet', href: '/lib/github-markdown.css' },
	],
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
