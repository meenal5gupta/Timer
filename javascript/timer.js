var time =(function() {
	var tsecond= 0, tminute = 0, thour = 0;
	var intervalId;
	var hourId, minuteId, secondId;
	


	function init(){

	hourId = document.getElementById('hour');
	secondId = document.getElementById('second');
	minuteId = document.getElementById('minute');

	 
	
		document.getElementById('start').addEventListener('click', onStartClicked);
		document.getElementById('reset').addEventListener('click', onResetClicked);
		document.getElementById('pause').addEventListener('click', onPauseClicked);
		document.getElementById('resume').addEventListener('click', onResumeClicked);

	
	}


	function timer()
	{
		tsecond = tsecond+1;
		if(tsecond==60)
		{
			tsecond = 00;
			tminute = tminute+1;
			minuteId.innerHTML = tminute;
			if(tminute===60)
			{
				tminute=00;
				thour +=1;
				hourId.innerHTML = thour;
			}
		}
		secondId.innerHTML= tsecond;


	}
	function onStartClicked()
	{
		intervalId=setInterval(timer, 1000);
	}
	function onPauseClicked()
	{
		clearInterval(intervalId);
	}
	function onResumeClicked(){
		intervalId = setInterval(timer, 1000);
	}
	function onResetClicked() {
		tsecond =0;
		thour = 0;
		tminute = 0;
			secondId.innerHTML = tsecond;
			minuteId.innerHTML = tminute;
			hourId.innerHTML = thour;
			clearInterval(intervalId);

	}

return {
		init: init
	};
})();