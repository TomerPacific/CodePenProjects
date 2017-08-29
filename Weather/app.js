var Geo={};
var key ="5e8c9b467f0c80b9a4c47f15980d1849";
var temperature = 0;
var typeOfDegree = true;
var endOfDegree = "C";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}

function success(position)
{
    var URL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=" + key;
   $.getJSON(URL).done(worked).fail(error);
}

function worked(res)
{
   temperature = res.main.temp;
   var windSpeed = res.wind.speed;
   var windDegree = res.wind.deg;
   var clouds = res.clouds.all;
   var country = res.sys.country;
   var description = res.weather[0].description;
   var weatherCond = res.weather[0].icon;
   console.log("Clouds " + clouds);
   document.getElementById("location").innerHTML = country;
   document.getElementById("description").innerHTML = description;
   document.getElementById("temp").innerHTML = temperature + '9\xB0' + endOfDegree;
   document.getElementById("wind").innerHTML = windSpeed + " At a degree of " + windDegree;
   document.getElementById("weatherIcon").src = 'http://openweathermap.org/img/w/' + weatherCond + '.png';
}

function error()
{
  alert("Couldn't find you");
}

function convertDegrees()
{
  //true means degress is in Celsius
  if(typeOfDegree)
  {
    temperature = (temperature * 9/5)  + 32;
    endOfDegree = "F";
    typeOfDegree = false;
  }
  else
  {
    temperature = (temperature - 32)  * (5/9);
    endOfDegree = "C";
    typeOfDegree = true;
  }

  temperature = temperature.toFixed(2);
  document.getElementById("temp").innerHTML = temperature + '9\xB0' + endOfDegree;
}

window.onload = function(){
  getLocation();
};

