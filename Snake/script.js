const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

let context;

let snake = [
	{x: 150, y: 150},
	{x: 140, y: 150},
	{x: 130, y: 150},
	{x: 120, y: 150},
	{x: 110, y: 150}
];

let dx = 0;
let dy = 0;



function init() {
	var canvas = document.querySelector('#game');
	context = canvas.getContext('2d');

	context.fillStyle = CANVAS_BACKGROUND_COLOR;
	context.strokeStyle = CANVAS_BORDER_COLOR;

	context.fillRect(0, 0, canvas.width, canvas.height);
	context.strokeRect(0, 0, canvas.width, canvas.height);
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

/* Main Flow */
init();
