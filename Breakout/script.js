var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 3;
var dy = -3;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft =30;
var score = 0;
var lives = 3;

//Audio Sounds
var background_music = new Audio('background_music.mp3');


var bricks = [];
for(var c = 0; c < brickColumnCount; c++)
{
	bricks[c] = [];
	for(var r = 0; r < brickRowCount; r++)
	{
		bricks[c][r] = {x:0, y:0, status:1};
	}
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBricks()
{
	var brickX = 0;
	var brickY = 0;
	for(var c = 0; c < brickColumnCount; c++)
	{
		for(var r = 0; r < brickRowCount; r++)
		{
			if(bricks[c][r].status == 1)
			{
				brickX = (c *(brickWidth+brickPadding)) + brickOffsetLeft;
				brickY = (r *(brickHeight+brickPadding)) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				context.beginPath();
				context.rect(brickX,brickY, brickWidth, brickHeight);
				context.fillStyle = "#0095DD";
				context.fill();
				context.closePath();
			}
		}
	}
}

function keyDownHandler(e)
{
	if(e.keyCode == 39)
	{
		rightPressed = true;
	}
	else if(e.keyCode == 37)
	{
		leftPressed = true;
	}
}

function keyUpHandler(e)
{
	if(e.keyCode == 39)
	{
		rightPressed = false;
	}
	else if(e.keyCode == 37)
	{
		leftPressed = false;
	}
}

function drawPaddle()
{
	context.beginPath();
	context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	context.fillStyle = "#0095DD";
	context.fill();
	context.closePath();
}

function collisionDetection()
{
	for(var c = 0; c < brickColumnCount; c++)
	{
		for(var r = 0; r < brickRowCount; r++)
		{
			var b = bricks[c][r];
			if(b.status == 1)
			{
				if(x > b.x && x < b.x + brickWidth
				&& y > b.y && y < b.y + brickHeight)
				{
					dy *= -1;
					b.status = 0;
					score += 1;
					if(score == brickRowCount * brickColumnCount)
					{
						alert("WON");
						document.location.reload();
					}
				}
			}
		}
	}
}

function drawScore()
{
	context.font = "16px Arial";
	context.fillStyle ="#0095DD";
	context.fillText("Score: " + score, 8, 20);
	context.fill();
}

function drawLives()
{
	context.font = "16px Arial";
	context.fillStyle ="#0095DD";
	context.fillText("Lives: " + lives, canvas.width - 65, 20);
	context.fill();
}

function drawBall()
{
	context.beginPath();
	context.arc(x,y,ballRadius,0, Math.PI*2);
	context.fillStyle="#0095DD";
	context.fill();
	context.closePath();
}


function draw()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();


	if(y + dy < ballRadius)
	{
		dy*= -1;
	}
	else if(y + dy > canvas.height - ballRadius)
	{
		if(x > paddleX && x < paddleX + paddleWidth)
		{
			dy *= -1;
		}
		else
		{
			lives-= 1;
			if(lives == 0)
			{
				alert("GAME OVER");
				document.location.reload();
			}
			else
			{
				x = canvas.width / 2;
				y = canvas.height - 30;
				dx = 2;
				dy = -2;
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}

	if(x + dx > canvas.width - ballRadius || x + dx < ballRadius)
	{
		dx*= -1;
	}

	if(rightPressed && paddleX < canvas.width- paddleWidth)
	{
		paddleX += 7;
	}

	else if(leftPressed && paddleX > 0)
	{
		paddleX -= 7;
	}

	x += dx;
	y += dy;
	requestAnimationFrame(draw);
}

document.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(e)
{
	var relativeX = e.clientX - canvas.offsetLeft;
	if(relativeX > 0 + paddleWidth  && relativeX < canvas.width)
	{
		paddleX = relativeX - paddleWidth;
	}
}

background_music.play();
draw();