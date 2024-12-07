<template>
	<NuxtLayout name="marriage-layout">
		<UContainer class="p-5">
			<div class="text-center my-5">
				<p class="text-lg">
					🇨🇳 Yanji
				</p>
				<h1 class="text-2xl mb-1">
					2025.04.27
				</h1>
				<p class="text-lg">
					星期日
				</p>
			</div>

			<video
				class="w-full bg-black mb-5"
				src="/wedding/wedding.mp4"
				controls
				poster="/wedding/snap-12.JPG"
			/>

			<!-- <UCarousel
				v-slot="{ item }"
				:items="weddingPictures"
				:ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
				class="mb-5"
				arrows
				indicators
			>
				<img
					:src="item"
					class="w-full"
					draggable="false"
				>
			</UCarousel> -->
			<div class="w-full max-w-96 mx-auto text-center">
				<p class="text-2xl mb-5">
					金富民 · 朴丽平
				</p>

				<p class="mb-2">
					2025年4月27日
				</p>

				<!-- <p class="">
					서울시 동대문구 망우로61 <br>
					벨라루체웨딩홀 서울점 7층 플로체홀
				</p> -->
			</div>

			<div class="h-32" />

			<div class="w-full max-w-96 mx-auto text-center flex gap-16 flex-col">
				<img
					src="/wedding/wedding-day.png"
					class="w-full"
					draggable="false"
				>

				<p class="leading-loose">
					在盛开的4月春天， <br>
					我们在信任和爱中准备新的开始。 <br>
					我们将成为彼此的支持者， <br>
					创造和引导每一天的美好时刻。
				</p>

				<img
					src="/wedding/deco.svg"
					class="w-full"
					draggable="false"
				>
			</div>

			<div class="h-32" />

			<div class="w-full max-w-96 mx-auto text-center">
				<img
					src="/wedding/snap-2.JPG"
					class="w-full mb-5"
					draggable="false"
				>

				<p class="mb-1">
					<!-- <b>김현묵 · 이지영</b>의 장남 <b>김부민</b> -->
					<b>金富民 · 朴丽平</b>的长女 <b>朴丽平</b>
				</p>
				<p class="mb-5">
					<!-- <b>박홍권 · 홍정희</b>의 장녀 <b>박리평</b> -->
					<b>朴丽平</b>的父母 <b>朴丽平</b>和<b>金富民</b>
				</p>
			</div>

			<div class="h-32" />

			<UDivider label="照片" />

			<MarriageGallary
				:pictures="weddingPictures"
			/>

			<div class="h-32" />
		</UContainer>
	</NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
	title: '4月20日，金富民 ❤️ 朴丽平 结婚了。',
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon-wedding.ico',
		},
	],
	script: [
		{
			src: 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js',
			type: 'text/javascript',
		},
	],
});

useSeoMeta({
	ogImage: '/wedding/snap-2.JPG',
	ogTitle: '4月20日，金富民 ❤️ 朴丽平 结婚了。',
	ogDescription: '樱花盛开的4月春天，我们在信任和爱中准备新的开始。我们将成为彼此的支持者，创造和引导每一天的美好时刻。',
});
const weddingPictures = [
	// '/wedding/snap-1.JPG',
	'/wedding/snap-2.JPG',
	'/wedding/snap-3.JPG',
	'/wedding/snap-4.JPG',
	'/wedding/snap-5.JPG',
	'/wedding/snap-6.JPG',
	'/wedding/snap-7.JPG',
	'/wedding/snap-8.JPG',
	'/wedding/snap-9.JPG',
	'/wedding/snap-10.JPG',
	'/wedding/snap-11.JPG',
	'/wedding/snap-12.JPG',
	'/wedding/snap-13.JPG',
	'/wedding/snap-14.JPG',
	'/wedding/snap-15.JPG',
	'/wedding/snap-16.JPG',
	'/wedding/snap-17.JPG',
	'/wedding/snap-18.JPG',
	'/wedding/snap-19.JPG',
];

onMounted(() => {
});
</script>
