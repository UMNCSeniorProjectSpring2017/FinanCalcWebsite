"use strict";

function $calculate() {
    if (!isFloat($("#PreferredStockDividend")[0].value) ||
        !isFloat($("#CommonStockEarnings")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var preferredStockDividend = parseFloat($("#PreferredStockDividend")[0].value);
    var commonStockEarnings = parseFloat($("#CommonStockEarnings")[0].value);

    var residualClaimsToEarnings = preferredStockDividend + commonStockEarnings;
    $("#result").html(residualClaimsToEarnings);

    recordUsage("ResidualClaimsToEarningsCalculator");
}