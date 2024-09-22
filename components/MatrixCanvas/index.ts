import Char from './char';

export class MatrixCanvas {
	context: CanvasRenderingContext2D;

	charList: Char[] = [];

	constructor(context: CanvasRenderingContext2D) {
		this.context = context;

		const column = Math.floor(this.context.canvas.width / 20);
		const row = Math.floor(this.context.canvas.height / 20);

		for (let i = 0; i < column; i++) {
			for (let j = 0; j < row; j++) {
				const char = new Char(
					MatrixCanvas.getRandomCharacter(),
					i * 20 + 9,
					j * 20 + 15,
					0,
					20,
					this.context,
				);

				this.charList.push(char);
			}
		}
	}

	static getRandomCharacter() {
		const characters = '0123456789BoominKim';
		const randomIndex = Math.floor(Math.random() * characters.length);
		return characters[randomIndex];
	}

	draw() {
		// clear
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

		this.charList.forEach((char) => {
			char.draw();
			char.update();

			if (Math.random() > 0.99) {
				char.isFadingOut = true;
			}
		});
	}
}
