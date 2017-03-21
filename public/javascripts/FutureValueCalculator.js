"use strict";

function $calculate() {
    if (!isFloat($("#CashFlow")[0].value) ||
        !isFloat($("#RateOfReturn")[0].value) ||
        !isFloat($("#Periods")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var cashFlow = parseFloat($("#CashFlow")[0].value);
    var rateOfReturn = parseFloat($("#RateOfReturn")[0].value);
    var periods = parseFloat($("#Periods")[0].value);

    var futureValue = cashFlow * Math.pow(1 + rateOfReturn, periods);
    $("#result").html(futureValue);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "FutureValueCalculator" });
}