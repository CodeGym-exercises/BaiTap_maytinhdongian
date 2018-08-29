
let input = document.getElementById("input");
let output = document.getElementById("result");
let result = "";
function showInput(btn){	
	input.innerHTML += btn.value;

	result +=btn.value;
	if(btn.value == "C"){
		result="";
		output.innerHTML="";
		input.innerHTML="";
	}
	if(input.innerHTML!=""&&output.innerHTML!=""){
		output.innerHTML="";
	}
}
function showResult(){
	output.innerHTML+=eval(result);
}
