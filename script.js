function compute()
{
    var principal = document.getElementById("principal").value; //retrieve the value from the form for the inputs to the formula
    var rate = document.getElementById("rate").value; //get the rate
    var years = document.getElementById("Years").value; //get the years
    var futureyear = new Date().getFullYear()+parseInt(years);
    var amount = principal*years*rate/100; //take the values retrieved and execute the simple interest calculation
    var result = document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br>\at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+amount+"$ in the year "+futureyear+"."
    return result;
}


///space to define functions
function retrieveInputs(){
    var rate = document.getElementById("rate").value; //get the users interest rate
    var years = document.getElementById("Years").value; //hold the years
    var principal = document.getElementById("principal").value; //hold the value from the form for the inputs to the formula
    return [rate, years, principal]
}

function compute(){
    retrieveInputs();
    var amount = principal*years*rate/100; //take the values retrieved and execute the simple interest calculation
    var futureyear = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result").innerHTML = "If you deposit "+principal+", at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+amount+"$ in the year "+futureyear+"."
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

