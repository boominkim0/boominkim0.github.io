<template>
	<div class="wrapper">
		<div class="container">
			<slot />
			<footer>
				<p class="mb-1">
					© 2024 Boomin Kim
				</p>
				<p>bm33728090@gmail.com</p>
			</footer>
		</div>
	</div>
</template>

<script lang="ts" setup>
onMounted(() => {
	document.body.style.backgroundColor = '#333';
});
</script>

<style>
@font-face {
    font-family: 'KyoboHand';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>

<style scoped>
.wrapper {
	background-color: rgb(51, 51, 51);

    ::v-deep * {
        font-family: KyoboHand, serif;
    }
}
.container {
	max-width: 410px;
	margin: 0 auto;
	background-color: #fff;
}
footer {
	margin-top: 1rem;
	text-align: center;
	color: #333;
	background-color: #c8c8c8;
	padding: 1rem 0;
}
</style>
