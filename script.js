function compute()
{
    var p = document.getElementById("principal").value; //retrieve the value from the form for the inputs to the formula
    var r = document.getElementById("range").value;
    var t = document.getElementById("Years").value;
    
    var amt = p*r*t/100; //take the values retrieved and execute the simple interest calculation
    return amt;  //return the output of the simple interest calculation
}

var futureyear = new Date().getFullYear()+parseInt(t);

function updateRate(){
    var rateval = document.getElementById("range").value;
    document.getElementById("rate_val").innerText=rateval;
}