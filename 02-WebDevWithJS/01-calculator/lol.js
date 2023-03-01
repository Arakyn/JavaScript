function calculator(){
    var num1 = parseFloat(document.getElementById("number1").value);
var num2 = parseFloat(document.getElementById("number2").value);
var operator = document.getElementById("operator").value;

if (operator=="+"){
 
    var result = num1 + num2


} else if (operator=="-"){
    var result = num1-num2;
} else if (operator=="*"){
    var result = num1*num2;
} else if (operator=="/"){
    var result = num1 / num2;
}  

document.getElementById("res").value = result;
}