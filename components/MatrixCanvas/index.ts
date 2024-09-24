import Char from './char';

export class MatrixCanvas {
	context: CanvasRenderingContext2D;
	charList: Char[] = [];
	textColour: string = 'black';
	backgroundColour: string = 'transparent';
	isBoom: boolean = false;

	constructor(context: CanvasRenderingContext2D, darkMode: boolean) {
		this.context = context;

		if (darkMode) {
			this.darkMode();
		}
		else {
			this.lightMode();
		}

		const column = Math.floor(this.context.canvas.width / 20);
		const row = Math.floor(this.context.canvas.height / 20);

		for (let i = 0; i < column; i++) {
			for (let j = 0; j < row; j++) {
				const char = new Char(
					MatrixCanvas.getRandomCharacter(),
					i * 20 + 9,
					j * 20 + 15,
					1,
					20,
					this.textColour,
					this.context,
				);

				this.charList.push(char);
			}
		}

		// click event
		// this.context.canvas.addEventListener('click', this.boom.bind(this));
		// mousedowmn, touchstart event
		this.context.canvas.addEventListener('mousedown', this.mousedown.bind(this));
		this.context.canvas.addEventListener('touchstart', this.mousedown.bind(this));

		// mousemove, touchmove event
		this.context.canvas.addEventListener('mousemove', this.boom.bind(this));
		this.context.canvas.addEventListener('touchmove', this.boom.bind(this));

		// mouseup, touchend event
		this.context.canvas.addEventListener('mouseup', this.mouseup.bind(this));
		this.context.canvas.addEventListener('touchend', this.mouseup.bind(this));
	}

	public static getRandomCharacter() {
		const characters = '0123456789BoominKim';
		const randomIndex = Math.floor(Math.random() * characters.length);
		return characters[randomIndex];
	}

	private getXY(event: MouseEvent | TouchEvent) {
		let x = 0;
		let y = 0;

		const canvasRect = this.context.canvas.getBoundingClientRect();

		if (event instanceof MouseEvent) {
			x = event.clientX - canvasRect.left;
			y = event.clientY - canvasRect.top;
		}
		else if (event instanceof TouchEvent) {
			x = event.touches[0].clientX - canvasRect.left;
			y = event.touches[0].clientY - canvasRect.top;
		}

		return { x, y };
	}

	public darkMode() {
		// this.backgroundColour = 'black';
		this.textColour = 'rgb(156, 163, 175)';
	}

	public lightMode() {
		// this.backgroundColour = 'white';
		this.textColour = 'rgb(107, 114, 128)';
	}

	private mousedown() {
		this.isBoom = true;
	}

	private mouseup() {
		this.isBoom = false;
		this.backPosition();
	}

	private backPosition() {
		this.charList.forEach((char) => {
			char.startBackPosition();
		});
	}

	private boom(event: MouseEvent | TouchEvent) {
		if (!this.isBoom) return;

		const { x, y } = this.getXY(event);

		this.charList.forEach((char) => {
			const dx = x - char.x;
			const dy = y - char.y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < 50) {
				char.anmationType = 'throw';
				char.startThrow(Math.random() * 360, Math.random() * 5);
			}
		});
	}

	public draw() {
		// clear
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

		this.charList.forEach((char) => {
			char.draw();
			char.update();

			if (
				char.anmationType === 'none'
				&& Math.random() > 0.995
			) {
				char.anmationType = 'fadeout';
			}
		});
	}

	public clear() {
		this.context.fillStyle = this.backgroundColour;
		this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
		this.charList = [];
	}

	public resize() {
		const column = Math.floor(this.context.canvas.width / 20);
		const row = Math.floor(this.context.canvas.height / 20);

		this.charList = [];

		for (let i = 0; i < column; i++) {
			for (let j = 0; j < row; j++) {
				const char = new Char(
					MatrixCanvas.getRandomCharacter(),
					i * 20 + 9,
					j * 20 + 15,
					1,
					20,
					this.textColour,
					this.context,
				);

				this.charList.push(char);
			}
		}
	}
}
