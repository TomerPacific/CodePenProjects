/* Constants */

const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';
const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;


/*  Main Game Global Variables */

let context;
let canvas;

let snake = [
	{x: 150, y: 150},
	{x: 140, y: 150},
	{x: 130, y: 150},
	{x: 120, y: 150},
	{x: 110, y: 150}
];

let dx = 10;
let dy = 0;

function init() {
	canvas = document.querySelector('#game');
	context = canvas.getContext('2d');

	context.fillStyle = CANVAS_BACKGROUND_COLOR;
	context.strokeStyle = CANVAS_BORDER_COLOR;

	context.fillRect(0, 0, canvas.width, canvas.height);
	context.strokeRect(0, 0, canvas.width, canvas.height);

	drawWholeSnake();
}

function drawWholeSnake() {
	snake.forEach(drawSnake);
}

function drawSnake(snakeChain) {
	context.fillStyle = 'lightgreen';
	context.strokeStyle = 'darkgreen';

	context.fillRect(snakeChain.x, snakeChain.y, 10, 10);
	context.strokeRect(snakeChain.x, snakeChain.y, 10, 10);
}


function advanceSnake() {
	const snakeHead = {x: snake[0].x + dx, y: snake[0].y + dy};

	snake.unshift(snakeHead);

	snake.pop();
}

function resetSnake() {
	snake = [
		{x: 150, y: 150},
		{x: 140, y: 150},
		{x: 130, y: 150},
		{x: 120, y: 150},
		{x: 110, y: 150}
	];

	let dx = 10;
	let dy = 0;
}

function clearCanvas() {
	context.fillStyle = CANVAS_BACKGROUND_COLOR;
	context.strokeStyle = CANVAS_BORDER_COLOR;

	context.fillRect(0, 0, canvas.width, canvas.height);
	context.strokeRect(0, 0, canvas.width, canvas.height);
}

function checkBoundries() {
	if (snake[0].x + 5 >= canvas.width || snake[0].x - 5 <= 0) {
		resetSnake();
	} else if (snake[0].y + 5 >= canvas.height || snake[0].y - 5 <= 0) {
		resetSnake();
	}
}

function mainSnakeMovement() {
	setTimeout(function onTick() {
		checkBoundries();
		clearCanvas();
		advanceSnake();
		drawWholeSnake();

		mainSnakeMovement();
	}, 100);
}

function directionalKeyPressed(event) {
	console.log(event.keyCode);

	switch(event.keyCode) {
		case LEFT_KEY: 
		{
			if (dx !== 10) {
				dx = -10;
				dy = 0;
			}
			break;
		}
		case RIGHT_KEY: 
		{
			if (dx !== -10) {
				dx = 10;
				dy = 0;
			}
			break;
		}
		case UP_KEY: 
			if (dy !== 10) {
				dx = 0;
				dy = -10;
			}
			break;
		case DOWN_KEY:
		{
			if (dy !== -10) {
				dx = 0;
				dy = 10;
			}
			break;
		}
	}
}

/* Main Flow */
init();
mainSnakeMovement();
document.addEventListener('keydown', directionalKeyPressed);

