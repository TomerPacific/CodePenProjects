const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

let snake = [
	{x: 150, y: 150},
	{x: 140, y: 150},
	{x: 130, y: 150},
	{x: 120, y: 150},
	{x: 110, y: 150}
];



function init() {
	var canvas = document.querySelector('#game');
	var context = canvas.getContext('2d');

	context.fillStyle = CANVAS_BACKGROUND_COLOR;
	context.strokeStyle = CANVAS_BORDER_COLOR;

	context.fillRect(0, 0, canvas.width, canvas.height);
	context.strokeRect(0, 0, canvas.width, canvas.height);
}


init();
