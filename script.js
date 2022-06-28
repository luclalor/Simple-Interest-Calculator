var futureyear = new Date().getFullYear()+parseInt();

function compute()
{
    var principal = document.getElementById("principal").value; //retrieve the value from the form for the inputs to the formula
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("Years").value;
    
    var amount = principal*years*rate/100; //take the values retrieved and execute the simple interest calculation
    return amount;
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

var result = document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br>\at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+compute()+"in the year "+futureyear+"."