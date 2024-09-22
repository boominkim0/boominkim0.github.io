import { MatrixCanvas } from './index';

export default class Char {
	char: string;
	initX: number;
	initY: number;
	x: number;
	y: number;
	alpha: number;
	fontSize: number;
	color: string = 'rgb(96, 165, 250)';
	context: CanvasRenderingContext2D;

	angle: number = 0;
	speed: number = 0;

	anmationType: 'fadeout'
		| 'throw'
		| 'backPosition'
		| 'none' = 'none';

	constructor(
		char: string,
		x: number,
		y: number,
		alpha: number,
		fontSize: number,
		color: string,
		context: CanvasRenderingContext2D,
	) {
		this.char = char;
		this.initX = x;
		this.initY = y;
		this.x = x;
		this.y = y;
		this.alpha = alpha;
		this.fontSize = fontSize;
		this.color = color;
		this.context = context;
	}

	draw() {
		this.context.fillStyle = this.color;
		this.context.globalAlpha = this.alpha;
		this.context.font = `${this.fontSize}px Arial`;
		this.context.fillText(this.char, this.x, this.y);
		this.context.textAlign = 'center';
	}

	update() {
		if (this.anmationType === 'fadeout') {
			this.fadeout();

			if (this.alpha === 0) {
				this.none();
				this.alpha = 1;
				this.char = MatrixCanvas.getRandomCharacter();
			}
		}
		else if (this.anmationType === 'throw') {
			this.throw(this.angle, this.speed);

			if (
				this.x < 9
				|| this.x > (this.context.canvas.width - this.fontSize)
				|| this.y < 15
				|| this.y > (this.context.canvas.height - 5)
			) {
				this.none();
			}
		}
		else if (this.anmationType === 'backPosition') {
			this.throw(this.angle, this.speed);

			// initX, initY값에 도달하면 애니메이션 종료
			if (
				Math.abs(this.initX - this.x) < 1
				&& Math.abs(this.initY - this.y) < 1
			) {
				this.none();
				this.x = this.initX;
				this.y = this.initY;
			}
		}
	}

	none() {
		this.anmationType = 'none';
	}

	startBackPosition() {
		this.anmationType = 'backPosition';
		// initX, initY값을 사용하여 angle, speed값을 계산
		const dx = this.initX - this.x;
		const dy = this.initY - this.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		const angle = Math.atan2(dy, dx) * (180 / Math.PI);
		const speed = distance * 0.1;
		this.angle = angle;
		this.speed = speed;
	}

	startThrow(angle: number, speed: number) {
		this.anmationType = 'throw';
		this.angle = angle;
		this.speed = speed;
	}

	private throw(angle: number, speed: number) {
		const radians = angle * (Math.PI / 180);
		const vx = Math.cos(radians) * speed;
		const vy = Math.sin(radians) * speed;

		this.x += vx;
		this.y += vy;
	}

	private fadeout() {
		this.alpha = Math.max(0, this.alpha - 0.001);
	}
}
