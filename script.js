function compute() {
    a = validateInput(); //validate that the input is a number greater than 0
    if (a == true){ //if the number is greater than zero, execute the calculation
        var principal = document.getElementById("principal").value; //retrieve the value from the form for the inputs to the formula
        var rate = document.getElementById("rate").value; //get the rate
        var years = document.getElementById("Years").value; //get the years
        var futureyear = new Date().getFullYear()+parseInt(years);
        var amount = principal*years*rate/100; //take the values retrieved and execute the simple interest calculation
        var result = document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br>\at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"$</mark> in the year <mark>"+futureyear+"</mark>."
        return result;
    }
}

///defining function to validate input
function validateInput(){
    var input = document.getElementById("principal").value;
    var isvalid = true
    if (isNaN(input) || input < 1){
        window.alert("Enter a positive number");
        isvalid = false;
    }
        return isvalid ///isvalid would be false if the validation did not pass
    };

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}