import { MatrixCanvas } from './index';

export default class Char {
	char: string;
	x: number;
	y: number;
	alpha: number;
	fontSize: number;
	context: CanvasRenderingContext2D;

	isFadingOut = false;

	constructor(
		char: string,
		x: number,
		y: number,
		alpha: number,
		fontSize: number,
		context: CanvasRenderingContext2D,
	) {
		this.char = char;
		this.x = x;
		this.y = y;
		this.alpha = alpha;
		this.fontSize = fontSize;
		this.context = context;
	}

	draw() {
		this.context.fillStyle = `rgba(0, 255, 0, ${this.alpha})`;
		this.context.font = `${this.fontSize}px Arial`;
		this.context.fillText(this.char, this.x, this.y);
		this.context.textAlign = 'center';
	}

	update() {
		if (this.isFadingOut) {
			this.fadeout();

			if (this.alpha === 0) {
				this.isFadingOut = false;
				this.alpha = 1;
				this.char = MatrixCanvas.getRandomCharacter();
			}
		}
	}

	private fadeout() {
		this.alpha = Math.max(0, this.alpha - 0.01);
	}
}
