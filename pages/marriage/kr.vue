<template>
	<NuxtLayout name="marriage-layout">
		<MarriageSakura />
		<!-- BGM 재생 버튼 -->
		<div
			class="fixed top-5 right-5"
			style="z-index: 1;"
		>
			<UButton
				color="gray"
				variant="solid"
				:icon="isBgmPlaying ?'i-heroicons-speaker-wave': 'i-heroicons-speaker-x-mark' "
				@click="toggleBgm"
			/>
		</div>
		<img
			src="/wedding/intro.jpeg"
			class="first-image"
			draggable="false"
		>
		<section class="section-1">
			<p class="text-2xl mb-5">
				김부민 · 박리평
			</p>

			<p class="mb-2">
				2025년 4월 20일(일요일) 낮 12시 30분
			</p>

			<p class="mb-5">
				서울시 동대문구 망우로61 <br>
				벨라루체웨딩홀 서울점 7층 플로체홀
			</p>

			<h3 class="text-2xl font-bold">
				결혼합니다❤️
			</h3>
		</section>

		<video
			ref="videoRef"
			class="w-full bg-black mb-5 fade-in"
			src="/wedding/wedding.mp4"
			controls
			poster="/wedding/video-thumbnail.jpeg"
			@play="pauseBgm"
			@pause="resumeBgm"
		/>

		<div class="h-10" />

		<div class="w-full max-w-96 mx-auto text-center flex gap-16 flex-col fade-in">
			<img
				src="/wedding/wedding-day.png"
				class="w-full"
				draggable="false"
			>

			<p class="leading-loose">
				벚꽃 만개한 4월 봄날에 <br>
				믿음과 사랑 안에서 새로운 시작을 준비합니다. <br>
				모든 날, 모든 순간을 아름답게 만들어가고 <br>
				이끌어주고, 응원해 주는 서로 가 되겠습니다.
			</p>

			<img
				src="/wedding/deco.svg"
				class="w-full"
				draggable="false"
			>
		</div>

		<div class="h-32" />

		<div class="w-full max-w-96 mx-auto text-center fade-in">
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
			class="fade-in"
			:pictures="weddingPictures"
		/>

		<div class="h-32" />

		<UDivider label="날짜" />

		<div class="w-full max-w-96 mx-auto text-center my-5 fade-in">
			<h1 class="text-2xl mb-3">
				2025.04.20
			</h1>
			<p class="mb-5">
				일요일 낮 12시 30분
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

		<div class="w-full max-w-96 mx-auto text-center my-5 fade-in">
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
			class="root_daum_roughmap root_daum_roughmap_landing fade-in"
			:style="
				{
					margin: 'auto !important',
				}"
		/>

		<div class="h-16" />

		<section class="w-full max-w-96 mx-auto mb-5 flex flex-col gap-5 px-5 fade-in">
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
		</section>

		<div class="h-32" />

		<UDivider label="마음 전하실 곳" />

		<section class="w-full max-w-96 mx-auto my-5 px-5 fade-in">
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
							{ name: '김부민 - 신랑', account: '토스뱅크 1000-0205-2459' },
							{ name: '이지영 (복자) - 어머니', account: '농협 485048-52-024099' },
						],
					},
					{
						label: '신부측 계좌번호',
						slot: 'bank',
						list: [
							{ name: '박리평 - 신부', account: '토스뱅크 1000-5354-7251' },
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
		</section>
		<div class="h-32" />
	</NuxtLayout>
</template>

<script lang="ts" setup>
useColorMode().preference = 'light';

useHead({
	htmlAttrs: {
		lang: 'ko',
	},
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
		{
			src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js',
			type: 'text/javascript',
		},
		{
			src: 'https://cdn.jsdelivr.net/gh/timoschaefer/jQuery-Sakura/jquery-sakura.min.js',
			type: 'text/javascript',
		},
	],
});

useSeoMeta({
	ogImage: '/wedding/og-image-thumbnail.png',
	ogTitle: '김부민 ❤️ 박리평 결혼합니다.',
	ogDescription: '2025년 4월 20일(일요일) 낮 12시 30분',
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

let bgm = null;
const isBgmPlaying = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);

onMounted(() => {
	useColorMode().preference = 'light';
	load();
	bgm = new Audio('/wedding/bgm.mp3');
	bgm.play().then(() => {
		isBgmPlaying.value = true;
	}).catch(() => {
		// 자동 재생이 실패하면 사용자 상호작용을 통해 재생
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	});

	document.querySelectorAll('.fade-in').forEach((el) => {
		observer.observe(el);
	});

	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			pauseBgm();
		}
		else if (isBgmPlaying.value) {
			resumeBgm();
		}
	});
});

function load() {
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
function toggleBgm() {
	if (isBgmPlaying.value) {
		bgm.pause();
		isBgmPlaying.value = false;
	}
	else {
		bgm.play();
		isBgmPlaying.value = true;
	}
}

function pauseBgm() {
	if (isBgmPlaying.value) {
		bgm.pause();
		isBgmPlaying.value = false;
	}
}

function resumeBgm() {
	if (!isBgmPlaying.value) {
		bgm.play();
		isBgmPlaying.value = true;
	}
}
</script>

<style scoped>
.first-image {
	width: 100%;
	height: 488px;
	object-fit: cover;
}

.section-1 {
	text-align: center;
	padding: 1rem;
	margin: 3rem auto;
}
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 2s ease-out, transform 2s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
