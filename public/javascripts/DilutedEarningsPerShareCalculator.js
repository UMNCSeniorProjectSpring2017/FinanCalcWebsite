"use strict";

function $calculate() {
    if (!isFloat($("#NetIncome")[0].value) ||
        !isFloat($("#SharesOutstanding")[0].value) ||
        !isFloat($("#ConvertableSecurities")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netIncome = parseFloat($("#NetIncome")[0].value);
    var sharesOutstanding = parseFloat($("#SharesOutstanding")[0].value);
    var convertableSecurities = parseFloat($("#ConvertableSecurities")[0].value);

    var dilutedEPS = netIncome / (sharesOutstanding + convertableSecurities);
    $("#result").html(dilutedEPS);

    recordUsage("DilutedEarningsPerShareCalculator");
}