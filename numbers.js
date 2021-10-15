const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

var sum = 0;

function getNumber(num) {
	
	if(num === "stop") {
		console.log("The sum is: ", sum);
		readline.close();
	} 
	else {
		if(isNaN(Number(num))) {
			console.log("Enter a valid number please!");
		}
		else {
			sum += Number(num);
		}
	}
};

readline.setPrompt('Enter numbers and type stop to stop: ');
readline.prompt();
readline.on("line", getNumber);