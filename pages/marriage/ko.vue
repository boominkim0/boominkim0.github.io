<template>
	<MarriageContent
		@load="load"
	/>
</template>

<script lang="ts" setup>
useHead({
	title: '4월 20일 김부민 ❤️ 박리평 결혼합니다.',
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
	ogTitle: '4월 20일 김부민 ❤️ 박리평 결혼합니다.',
	ogDescription: '벛꽃 만개한 4월 봄날에 믿음과 사랑 안에서 새로운 시작을 준비합니다. 모든 날, 모든 순간을 아름답게 만들어가고 이끌어주고, 응원해 주는 서로가 되겠습니다.',
});

function load() {
	// pc: 360, mobile: 240
	const mapWidth = window.innerWidth > 768 ? '360' : '240';
	const mapHeight = window.innerWidth > 768 ? '240' : '160';

	new daum.roughmap.Lander({
		timestamp: '1732973548552',
		key: '2mdri',
		mapWidth: mapWidth,
		mapHeight: mapHeight,
	}).render();
}
</script>
