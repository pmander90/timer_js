var start= document.getElementById("start");
var reset= document.getElementById("reset");
var pause= document.getElementById("pause");
var timer= document.getElementById("timer");

var time = 0;
var currentTime;

start.addEventListener('click', function() {
	event.preventDefault();
	currentTime= setInterval(function(){
		timer.innerHTML= 'Time Elapsed: ' + time++;
	}, 1000)
});

pause.addEventListener('click', function(){
	clearInterval(currentTime);
});

reset.addEventListener('click', function(){
	timer.innerHTML= "Stop Watch";
	time= 0;
	clearInterval(currentTime);
});