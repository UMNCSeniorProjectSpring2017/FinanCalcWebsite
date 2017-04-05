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

    var presentValueOfAnnuity = periodicPayment * (1 - (Math.pow(1 + rateOfReturn, (-1) * periods)) / rateOfReturn);
    $("#result").html(presentValueOfAnnuity);

    recordUsage("PresentValueOfAnnuityCalculator");
}