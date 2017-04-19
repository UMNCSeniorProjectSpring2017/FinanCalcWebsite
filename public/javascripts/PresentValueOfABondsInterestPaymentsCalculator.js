"use strict";

function $calculate() {
    if (!isFloat($("#CurrentValue")[0].value) ||
        !isFloat($("#FaceValue")[0].value) ||
        !isFloat($("#CurrentMarketRate")[0].value) ||
        !isFloat($("#NumberOfPeriods")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var currentValue = parseFloat($("#CurrentValue")[0].value);
    var faceValue = parseFloat($("#FaceValue")[0].value);
    var currentMarketRate = parseFloat($("#CurrentMarketRate")[0].value);
    var numberOfPeriods = parseFloat($("#NumberOfPeriods")[0].value);

  var presentValueOfABondsInterestPayments = currentValue - (faceValue) / ( Math.pow(1 + currentMarketRate, numberOfPeriods)) ;
    $("#result").html(presentValueOfABondsInterestPayments);
     

    recordUsage("PresentValueOfABondsInterestPaymentsCalculator");
}