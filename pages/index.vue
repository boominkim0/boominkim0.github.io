<template>
	<div>
		<div class="w-full my-5 relative">
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
	</div>
</template>

<style scoped>
.blur-box {
    backdrop-filter: blur(10px); /* 블러 효과 */
    border-radius: 15px; /* 둥근 모서리 */
    padding: 20px; /* 내부 여백 */
    background-color: rgba(255, 255, 255, 0.3); /* 반투명 배경 */
}
</style>
