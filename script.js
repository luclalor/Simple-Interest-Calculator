function compute()
{
    var principal = document.getElementById("principal").value; //retrieve the value from the form for the inputs to the formula
    var rate = document.getElementById("rate").value; //get the rate
    var years = document.getElementById("Years").value; //get the years
    var futureyear = new Date().getFullYear()+parseInt(years);
    var amount = principal*years*rate/100; //take the values retrieved and execute the simple interest calculation
    var result = document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br>\at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"$</mark> in the year <mark>"+futureyear+"</mark>."
    return result;
}

function validateInput(){
    var input = document.getElementById("principal").value;
    var isvalid = true;
    if (isNaN(input) || input < 1){
        var isvalid = false;
        var errormessage = document.getElementById("result").innerHTML = "Enter a positive number.";
    }
    return [isvalid, errormessage];
    }

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}