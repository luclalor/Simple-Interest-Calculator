function compute()
{
    var principal = document.getElementById("principal").value; //retrieve the value from the form for the inputs to the formula
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("Years").value;
    
    var interest = principal*years*rate/100; //take the values retrieved and execute the simple interest calculation
    return output;
}

var futureyear = new Date().getFullYear()+parseInt();

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function output(){
    var result = document.getElementById("result").innerHTML = "If you deposit " console.log(principal) ", at an interest rate of " console.log(rate)
    "You will receive an amount of "console.log(interest) "in the year "console.log(futureyear)
    return result;
}