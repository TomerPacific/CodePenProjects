var Geo={};
const key ="5e8c9b467f0c80b9a4c47f15980d1849";
var temperature = 0;
var isCelsius = true;
const CELSUIS = '&#8451';
const FAHRENHEIT = '&#8457';
var endOfDegree = CELSUIS;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoLocationSuccess, error);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}

function geoLocationSuccess(position)
{
    var URL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=" + key;
   $.getJSON(URL).done(success).fail(error);
}

function success(res)
{
   temperature = res.main.temp;
   console.log(res.wind);
   var windSpeed = res.wind.speed;
   var windDegree = res.wind.deg;
   var clouds = res.clouds.all;
   var country = res.sys.country;
   var description = res.weather[0].description;
   var weatherCond = res.weather[0].icon;
    
    var windSpeedMsg = windSpeed ? windSpeed : "";
    windSpeedMsg += windDegree ? " At a degree of " + windDegree : ""; 
    
   document.getElementById("location").innerHTML = country ? country : "Unknown Country";
   document.getElementById("description").innerHTML = description ? description : "No Description";
   document.getElementById("temp").innerHTML = temperature + '&#8451';
   document.getElementById("wind").innerHTML = windSpeedMsg;
   document.getElementById("weatherIcon").src = 'http://openweathermap.org/img/w/' + weatherCond + '.png';
}

function error()
{
  alert("Couldn't find you. Please allow us to access your location.");
}

function convertDegrees()
{
  if(isCelsius)
  {
    temperature = (temperature * 9/5)  + 32;
    endOfDegree = FAHRENHEIT;
    isCelsius = false;
  }
  else
  {
    temperature = (temperature - 32)  * (5/9);
    endOfDegree = CELSUIS;
    isCelsius = true;
  }

  temperature = Math.trunc(temperature);
  document.getElementById("temp").innerHTML = temperature + endOfDegree;
}

window.onload = function(){
  getLocation();
};

