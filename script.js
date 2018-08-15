function armstrongNumber(){
		let flag = 0;
		let number = 0;
		let remainder = 0;
		let sum = 0;
		const reg = /^\d+$/;
		const result = document.getElementById('result');

		number = Number(document.getElementById("input").value);
		flag = number;
    // test if input is empty or its not a number
		if(!number || reg.test(number) === false){
			alert('Put in correct information');
		}
    // tests if input is three digits
		else if(number.toString().length !== 3){
			document.getElementById("button").disabled = true; // disables button if number not three digits
			document.getElementById("button").style.color = "grey";
			alert('Number is not three digits');
		}
		else{
			// adds the cube of the remainder till the condition fails
		while(number > 0){
			remainder = number % 10;
			sum += remainder * remainder * remainder;
			number = parseInt(number/10);
		}

		if(sum === flag){
			result.innerHTML = "The inputed number is Armstrong";
		}
		else{
			result.innerHTML = "The inputed number is not Armstrong";
		}
	}
	document.getElementById('input').value = "";
}
