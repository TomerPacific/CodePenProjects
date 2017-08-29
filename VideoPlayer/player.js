window.addEventListener('load', function()
{

	video = document.getElementById("video");
	pauseScreen = document.getElementById("screen");
	playButton = document.getElementById("play-button");
	pbar = document.getElementById("pbar");
	pbarContainer = document.getElementById("pbar-container");
	timeField = document.getElementById("time-field");
	soundButton = document.getElementById("sound-button");
	soundBarContainer = document.getElementById("soundbar-container");
	soundBar = document.getElementById("soundbar");
	fullScreenButton = document.getElementById("fullscreen-button");
	screenButton = document.getElementById("screen-button");
	video.load();
	video.addEventListener('canplay', function()
	{
		playButton.addEventListener('click', playOrPause, false);
		pbarContainer.addEventListener('click', skip , false);
		soundButton.addEventListener('click', muteOrUnmute, false);
		soundBarContainer.addEventListener('click', updateVolume,false);
		fullScreenButton.addEventListener('click', goToFullScreen, false);
		screenButton.addEventListener('click', playOrPause, false);
		updatePlayer();
	}, false);
}, false);


function playOrPause()
{
	if(video.paused)
	{
		video.play();
		playButton.src = "images/pause.png";
		update = setInterval(updatePlayer, 30);
		pauseScreen.style.display = "none";
		screenButton.src = "images/play.png";
	}
	else
	{
		video.pause();
		playButton.src = "images/play.png";
		window.clearInterval(update);
		pauseScreen.style.display = "block";
		screenButton.src = "images/play.png";
	}
}

function updatePlayer()
{
	var percentage = (video.currentTime / video.duration) * 100;
	pbar.style.width = percentage + "%";
	timeField.innerHTML = getFormattedTime();
	if(video.ended)
	{
		window.clearInterval(update);
		playButton.src = "images/replay.png";
		pauseScreen.style.display = "block";
		screenButton.src = "images/replay.png";
	} else if(video.paused)
	{
		playButton.src = "images/play.png";
		screenButton.src = "images/play.png";
	}
}

function skip(event)
{
	var mouseX = event.pageX - pbarContainer.offsetLeft;
	var barWidth = window.getComputedStyle(pbarContainer).getPropertyValue("width");
	barWidth = parseFloat(barWidth.substr(0, barWidth.length - 2));
	video.currentTime = (mouseX / barWidth) * video.duration;
	updatePlayer();
}

function getFormattedTime()
{
	var seconds = Math.round(video.currentTime);
	var minutes = Math.floor(seconds / 60);

	if(minutes > 0)
	{
		seconds -= minutes * 60;
	}

	if(seconds.toString().length == 1)
	{
		seconds = "0" + seconds;
	}

	var totalSeconds = Math.round(video.duration);
	var totalMinutes = Math.floor(totalSeconds / 60);
	if(totalMinutes > 0)
	{
		totalSeconds -= totalMinutes * 60;
	}

	if(totalSeconds.toString().length == 1)
	{
		totalSeconds = "0" + totalSeconds;
	}

	return minutes + ":" + seconds + "/" + totalMinutes + ":" + totalSeconds; 
}

function muteOrUnmute()
{
	if(!video.muted)
	{
		video.muted = true;
		soundButton.src = "images/mute.png";
		soundBar.style.display = "none";
	}
	else
	{
		video.muted = false;
		soundButton.src = "images/sound.png";
		soundBar.style.display = "block";
	}
}

function updateVolume(event)
{
	var mouseX = event.pageX - soundBarContainer.offsetLeft;
	var barWidth = window.getComputedStyle(soundBarContainer).getPropertyValue("width");
	barWidth = parseFloat(barWidth.substr(0, barWidth.length - 2));
	video.volume = (mouseX / barWidth);
	soundBar.style.width = (mouseX / barWidth) * 100 + "%";
	video.muted = false;
	soundButton.src = "images/sound.png";
	soundBar.style.display = "block";
}

function goToFullScreen()
{
	if(video.requestFullscreen)
	{
		video.requestFullscreen();
	}
	else if(video.webkitRequestFullscreen)
	{
		video.webkitRequestFullscreen();
	}
	else if(video.mozRequestFullscreen)
	{
		video.mozRequestFullscreen();
	}
	else if(video.msRequestFullscreen)
	{
		video.msRequestFullscreen();
	}
}