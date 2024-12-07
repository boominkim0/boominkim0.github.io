<template>
	<NuxtLayout name="marriage-layout">
		<UContainer class="p-5">
			<div class="text-center my-5">
				<p class="text-lg">
					🇰🇷 Seoul
				</p>
				<h1 class="text-2xl mb-1">
					2025.04.20
				</h1>
				<p class="text-lg">
					일요일
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
					김부민 · 박리평
				</p>

				<p class="mb-2">
					2025년 4월 20일(일요일) 점심 12시 30분
				</p>

				<p class="">
					서울시 동대문구 망우로61 <br>
					벨라루체웨딩홀 서울점 7층 플로체홀
				</p>
			</div>

			<div class="h-32" />

			<div class="w-full max-w-96 mx-auto text-center flex gap-16 flex-col">
				<img
					src="/wedding/wedding-day.png"
					class="w-full"
					draggable="false"
				>

				<p class="leading-loose">
					벛꽃 만개한 4월 봄날에 <br>
					믿음과 사랑 안에서 새로운 시작을 준비합니다. <br>
					모든 날, 모든 순간을 아름답게 만들어가고 <br>
					이끌어주고, 응원해 주는 서로가 되겠습니다.
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
					<b>김현묵 · 이지영</b>의 장남 <b>김부민</b>
				</p>
				<p class="mb-5">
					<b>박홍권 · 홍정희</b>의 장녀 <b>박리평</b>
				</p>
			</div>

			<div class="h-32" />

			<UDivider label="사진" />

			<MarriageGallary
				:pictures="weddingPictures"
			/>

			<div class="h-32" />

			<UDivider label="날짜" />

			<div class="w-full max-w-96 mx-auto text-center my-5">
				<h1 class="text-2xl mb-3">
					2025.04.20
				</h1>
				<p class="mb-5">
					일요일 낮(오후) 12시 30분
				</p>
				<img
					src="/wedding/calender.png"
					class="w-full mb-5"
					draggable="false"
				>

				<!-- 남은시간 -->
				<MarriageDDay
					date="2025-04-20T12:30:00"
				/>
			</div>

			<div class="h-32" />

			<UDivider label="오시는 길" />

			<div class="w-full max-w-96 mx-auto text-center my-5">
				<p class="mb-1">
					벨라루체웨딩홀 서울점 7층 플로체홀
				</p>
				<p class="mb-3">
					서울 동대문구 망우로 61
				</p>
				<p class="">
					TEL. 02-2242-6312
				</p>
			</div>
			<div
				id="daumRoughmapContainer1732973548552"
				class="root_daum_roughmap root_daum_roughmap_landing"
				:style="
					{
						margin: 'auto !important',
					}"
			/>

			<div class="h-16" />

			<div class="w-full max-w-96 mx-auto mb-5 flex flex-col gap-5">
				<UFormGroup
					label="지하철 이용시"
					description="회기역 2번 출구 바로 앞"
				>
					<ul class="list-disc px-5 text-sm">
						<li>1호선</li>
						<li>경의중앙선</li>
					</ul>
				</UFormGroup>
				<UFormGroup
					label="버스 이용시"
					description="삼육서울병원 하차 "
				>
					<ul class="list-disc px-5 text-sm">
						<li>간선버스<br> 105, 201, 202, 241, 260, 270, 271, 272</li>
						<li>지선버스<br> 1213, 1224, 1227, 2115, 2211</li>
						<li>일반버스<br> 30, 51, 65, 88, 165, 166, 166-1, 170, 202, 707</li>
						<li>직행버스<br> 1330-2, 1330-3, 1330-4, 1330-44, 3200, 8005</li>
						<li>좌석버스<br> 330-1</li>
					</ul>
				</UFormGroup>

				<UFormGroup
					label="자가용 이용시"
				>
					<ul class="list-disc px-5 text-sm">
						<li>네비게이션 : "벨라루체 서울" 또는 "벨라루체웨딩홀 서울점" 입력</li>
						<li>주소 검색 : "서울 망우로 61" 또는 "서울 휘경동 267-9" 검색</li>
						<li>
							건물 지하 주차 또는 옆 건물 주차장 안내 후 이용 <br>
							(하객 주차 2시간 무료)
						</li>
					</ul>
				</UFormGroup>
			</div>

			<div class="h-32" />

			<UDivider label="마음 전하실 곳" />

			<div class="w-full max-w-96 mx-auto my-5">
				<p class="text-center mb-5">
					참석이 어려우신 분들을 위해 송구스럽게도<br>계좌번호를 기재한점 널리 이해부탁드립니다.<br>축의금이 아닌 마음만으로도<br>충분히 감사드립니다.
				</p>

				<UAccordion
					color="gray"
					variant="outline"
					multiple
					size="lg"
					:items="[
						{
							label: '신랑측 계좌번호',
							slot: 'bank',
							list: [
								{ name: '김부민', account: '토스뱅크 1000-0205-2459' },
							],
						},
						{
							label: '신부측 계좌번호',
							slot: 'bank',
							list: [
								{ name: '박리평', account: '토스뱅크 1000-5354-7251' },
							],
						},
					]"
				>
					<template #bank="{ item }">
						<UFormGroup
							v-for="(bank, index) in item.list"
							:key="index"
							:label="bank.name"
							class="mb-3"
						>
							<div class="flex justify-between items-center">
								<p class="flex-1">
									{{ bank.account }}
								</p>
								<UButton
									label="복사"
									color="gray"
									variant="outline"
									icon="i-heroicons-clipboard"
									class="w-20"
									@click="copyToClipboard(bank.account)"
								/>
							</div>
						</UFormGroup>
					</template>
				</UAccordion>
			</div>
			<div class="h-32" />
		</UContainer>
	</NuxtLayout>
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
	ogImage: '/wedding/snap-12.JPG',
	ogTitle: '4월 20일 김부민 ❤️ 박리평 결혼합니다.',
	ogDescription: '벛꽃 만개한 4월 봄날에 믿음과 사랑 안에서 새로운 시작을 준비합니다. 모든 날, 모든 순간을 아름답게 만들어가고 이끌어주고, 응원해 주는 서로가 되겠습니다.',
});

const toast = useToast();
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
	load();
});

function load() {
	document.documentElement.classList.remove('dark');
	// pc: 360, mobile: 240
	const mapWidth = window.innerWidth > 768 ? '360' : '240';
	const mapHeight = window.innerWidth > 768 ? '240' : '160';

	if (window.daum) {
		new window.daum.roughmap.Lander({
			timestamp: '1732973548552',
			key: '2mdri',
			mapWidth: mapWidth,
			mapHeight: mapHeight,
		}).render();
	}
}
function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
	toast.add({
		icon: 'i-heroicons-check',
		title: '계좌번호가 복사되었습니다.',
		description: text,
	});
}
</script>
