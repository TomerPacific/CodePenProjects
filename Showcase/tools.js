function countUp(id, start, end, duration) {

    end = end.replace(/,/g, '');

    var elem = document.getElementById(id);
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));

    stepTime = Math.max(stepTime, minTimer);

    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        elem.innerHTML = value;
        if (value.toString() === end.toString()) {
            clearInterval(timer);
            addCommas(value.toString(), elem);
        }  
    }
    var timer = setInterval(run, stepTime);
    run();
}

function addCommas(value, elem){
	while (/(\d+)(\d{3})/.test(value.toString())) {
            value = value.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
	elem.innerHTML = value;
}

function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
}