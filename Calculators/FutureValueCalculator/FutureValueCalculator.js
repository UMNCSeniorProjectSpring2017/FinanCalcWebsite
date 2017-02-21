"use strict";

function $calculate() {
    var cashFlow = parseFloat($("#CashFlow")[0].value)
    var rateOfReturn = parseFloat($("#RateOfReturn")[0].value)
    var periods = parseFloat($("#Periods")[0].value)

    if (isNaN(cashFlow) ||
        isNaN(rateOfReturn) ||
        isNaN(periods)) {

        $("#result").html("Bad argument(s)")
        return;
    }

    var futureValue = cashFlow * Math.pow(1 + rateOfReturn, periods)
    $("#result").html(futureValue)
}