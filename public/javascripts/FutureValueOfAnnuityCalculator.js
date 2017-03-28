"use strict";

function $calculate() {
    if (!isFloat($("#PeriodicPayment")[0].value) ||
        !isFloat($("#RateOfReturn")[0].value) ||
        !isFloat($("#Periods")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var periodicPayment = parseFloat($("#PeriodicPayment")[0].value);
    var rateOfReturn = parseFloat($("#RateOfReturn")[0].value);
    var periods = parseFloat($("#Periods")[0].value);

    var futureValueOfAnnuity = periodicPayment * ((Math.pow(1 + rateOfReturn, periods) - 1) / rateOfReturn);
    $("#result").html(futureValueOfAnnuity);

    recordUsage("FutureValueOfAnnuityCalculator");
}