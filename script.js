var rate = updateRate();
var a = validateInput(); //stores the return of the validateInput function. Is an array of both "isvalid" and "errormessage".
const a1 = a[0]; //selects the "isvalid" boolean result from the validateInput array
const a2 = a[1]; //selects the "errormessage" result from the validateInput array
var b = compute(); //stores the return of the compute function
var c = retrieveInputs();
const c1 = c[0]; //stores the value for the rate
const c2 = c[1]; //stores the value for the years
const c3 = c[2]; //stores the value for the principal

///function to orchestrate and output correct result
function controloutput(a1, a2, b){
    retrieveInputs(); //first action is the retrieve the inputs of the user
    validateInput(); //then call the validation of the input data
    if (a1 == true){ //if the validation of the input passes
        compute(); //call the compute function to do the calculations
        return b //return the results of the "compute" function
    } else {
        return a2 //if the return from the "validateinput" function is false, return the error message to the user.
    }
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

