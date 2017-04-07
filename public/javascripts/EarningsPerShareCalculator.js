"use strict";

function $calculate() {
    if (!isFloat($("#NetIncome")[0].value) ||
        !isFloat($("#PreferedDividends")[0].value) ||
        !isFloat($("#CommonSharesOutstanding")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var NetIncome = parseFloat($("#NetIncome")[0].value);
    var PreferedDividends = parseFloat($("#PreferedDividends")[0].value);
    var CommonSharesOutstanding = parseFloat($("#CommonSharesOutstanding")[0].value);

    var earningsPerShare = (NetIncome - PreferedDividends) / CommonSharesOutstanding;
    $("#result").html(earningsPerShare);

    recordUsage("EarningsPerShareCalculator");
}

