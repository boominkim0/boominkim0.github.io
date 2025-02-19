<template>
	<!-- 남은시간 -->
	<div class="flex justify-center gap-2">
		<p v-if="isOverTime">
			결혼식이 {{ overDays }}일 지났습니다.
		</p>
		<template v-else>
			<div
				v-for="(value, index) in [
					[days, '일'],
					[hours, '시간'],
					[minutes, '분'],
					[seconds, '초'],
				]"
				:key="index"
				class="flex flex-col items-center"
			>
				<span class="text-2xl">{{
					value[0] < 10 ? '0' + value[0] : value[0]
				}}</span>
				<span class="text-sm">
					{{ value[1] }}
				</span>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const props = defineProps<{
	date: string; // '2025-04-20T12:30:00';
}>();

// 남은 시간
const isOverTime = ref(false);
const overDays = ref(0);
const weddingDate = new Date(props.date);

let timer = null;

onMounted(() => {
	timer = setInterval(() => {
		const now = new Date();
		const diff = weddingDate - now;

		if (diff < 0) {
			isOverTime.value = true;

			// 날짜가 지났을 때 지난 일수 표시
			const overDiff = now - weddingDate;
			overDays.value = Math.floor(overDiff / (1000 * 60 * 60 * 24));
			console.log({ overDays: overDays.value });
			clearInterval(timer);
			return;
		}

		days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
	}, 1000);
});

onUnmounted(() => {
	clearInterval(timer);
});
</script>
