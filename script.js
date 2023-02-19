function generateRandomNumber() {
	var randomNumber = Math.floor(Math.random()*20)+(-20);
	document.getElementById("num").textContent = randomNumber;
	var inputValue = document.getElementById("guess").value;
	var diff = Math.abs(Number(inputValue)-randomNumber);
	if(diff<=5){
		document.getElementById("respond").textContent = "Hot";
	}
	else{
		document.getElementById("respond").textContent = "Cold";
	}
}

document.getElementById("btn").addEventListener("click",generateRandomNumber);