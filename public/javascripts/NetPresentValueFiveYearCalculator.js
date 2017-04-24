"use strict";

function $calculate() {
    if (!isFloat($("#initialIvestment")[0].value) ||
        !isFloat($("#discountRate")[0].value) ||
        !isFloat($("#firstYear")[0].value) ||
        !isFloat($("#secondYear")[0].value) ||
        !isFloat($("#thirdYear")[0].value) ||
        !isFloat($("#fourthYear")[0].value) ||
        !isFloat($("#fifthYear")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }
	
    var initialIvestment = parseFloat($("#initialIvestment")[0].value);
    var discountRate = parseFloat($("#discountRate")[0].value);
    var adjDiscountRate = (discountRate * .01) +1;
	   
    var firstYear = parseFloat($("#firstYear")[0].value);
    var firstYearValue = firstYear / adjDiscountRate;
	
    var secondYear = parseFloat($("#secondYear")[0].value);
    var secondYearValue = (secondYear / Math.pow(adjDiscountRate, 2));
	                
    var thirdYear = parseFloat($("#thirdYear")[0].value);
    var thirdYearValue = (thirdYear / Math.pow(adjDiscountRate, 3));
	
    var fourthYear = parseFloat($("#fourthYear")[0].value);
    var fourthYearValue = (fourthYear / Math.pow(adjDiscountRate, 4));
	
    var fifthYear = parseFloat($("#fifthYear")[0].value);
    var fifthYearValue = (fifthYear / Math.pow(adjDiscountRate, 5));

    var netPresentValue = firstYearValue + secondYearValue + thirdYearValue +  fourthYearValue + fifthYearValue - initialIvestment;
    $("#result").html(netPresentValue);
 
    recordUsage("NetPresentValueFievYearCalculator");
}
