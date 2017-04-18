"use strict";

function $calculate() {
    if (!isFloat($("#NetIncome")[0].value) ||
        !isFloat($("#PreferedDividends")[0].value) ||
        !isFloat($("#CommonSharesOutstanding")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netIncome = parseFloat($("#NetIncome")[0].value);
    var preferedDividends = parseFloat($("#PreferedDividends")[0].value);
    var commonSharesOutstanding = parseFloat($("#CommonSharesOutstanding")[0].value);

    var earningsPerShare = (netIncome - preferedDividends) / commonSharesOutstanding;
    $("#result").html(earningsPerShare);

    recordUsage("EarningsPerShareCalculator");
}

