// Your script here.
const inputField = document.getElementById('userInput');
const remainingTimeDisplay = document.getElementById('countDown');
const entTimeDisplay = document.getElementById('endTime');

inputField.addEventListener('keydown', function (event) {
  if(event.key === 'Enter'){
	  const durationInMinutes = parseInt(inputField.value);
	  if(!isNaN(durationInMinutes) && durationInMinutes > 0){
		  startCountdown(durationInMinutes);
	  }
  }	
});

function startCountdown(duration) {
	const endTime = new Date(Date.now() + duration * 60000);
	updateDisplay(duration * 60000, endTime);

	const interValid = setInterval(() => {
		const remainingTime = endTime - Date.now();
		if(remainingTime <= 0){
			clearInterval(interValid);
			remainingTimeDisplay.textContent = "Time's up!";
		}else{
			updateDisplay(remainingTime, endTime);
		}
	}, 1000);
}

function updateDisplay(remainingTime, endTime) {
const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
	const seconds = Math.floor((remainingTime / 1000) % 60);
	remainingTimeDisplay.textContent = `${minutes} minutes ${seconds} seconds remaining`;

	const endHours = endTime.getHours();
	const endMinutes = endTime.getMinutes();
	entTimeDisplay.textContent = `Ends at: ${endHours}:${endMinutes < 10 ? '0' + endMinutes : endMinutes}`;
};