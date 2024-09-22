<template>
	<canvas
		id="canvas"
		width="1200"
		height="800"
	/>
</template>

<script setup lang="ts">
import { MatrixCanvas } from './MatrixCanvas/index';

let matrixCanvas: MatrixCanvas;
onMounted(() => {
	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;

	// pixel ratio
	const dpr = 1;
	canvas.width = canvas.clientWidth * dpr;
	canvas.height = canvas.clientHeight * dpr;
	canvas.style.backgroundColor = 'black';
	context.scale(dpr, dpr);

	matrixCanvas = new MatrixCanvas(context);
	draw();
});

function draw() {
	matrixCanvas.draw();
	requestAnimationFrame(draw);
}
</script>

<style>

</style>
