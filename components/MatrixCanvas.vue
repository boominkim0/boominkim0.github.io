<template>
	<canvas
		id="canvas"
		class="w-full h-full"
	/>
</template>

<script setup lang="ts">
import { MatrixCanvas } from './MatrixCanvas/main';

const colorMode = useColorMode();

let resizeTimeout: number | null = null;
let matrixCanvas: MatrixCanvas | null = null;
onMounted(() => {
	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;

	// pixel ratio
	const dpr = 1;
	canvas.width = canvas.clientWidth * dpr;
	canvas.height = canvas.clientHeight * dpr;
	context.scale(dpr, dpr);

	matrixCanvas = new MatrixCanvas(context, colorMode.value === 'dark');
	draw();

	// resize
	window.addEventListener('resize', () => {
		if (resizeTimeout) {
			clearTimeout(resizeTimeout);
		}

		// canvas clear
		matrixCanvas?.clear();

		resizeTimeout = setTimeout(() => {
			canvas.width = canvas.clientWidth * dpr;
			canvas.height = canvas.clientHeight * dpr;
			context.scale(dpr, dpr);
			matrixCanvas?.resize();
		}, 1000);
	});
});

watch(() => colorMode.value, () => {
	if (colorMode.value === 'dark') {
		matrixCanvas?.darkMode();
	}
	else {
		matrixCanvas?.lightMode();
	}
	matrixCanvas?.clear();
	matrixCanvas?.resize();
});

function draw() {
	if (!matrixCanvas) return;

	matrixCanvas.draw();
	requestAnimationFrame(draw);
}
</script>

<style>
</style>
