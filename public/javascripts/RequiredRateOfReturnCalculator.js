"use strict";

function $calculate() {
    if (!isFloat($("#Priceofthestocktoday")[0].value) ||
        !isFloat($("#Dividend")[0].value) ||
        !isFloat($("#GrowthRate")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var priceOfTheStockToday = parseFloat($("#Priceofthestocktoday")[0].value);
    var dividend = parseFloat($("#Dividend")[0].value);
    var growthRate = parseFloat($("#GrowthRate")[0].value);

    var requiredRateOfReturnCalculator = 100 * ((dividend / priceOfTheStockToday) + (growthRate / 100));
    $("#result").html(requiredRateOfReturnCalculator);

    recordUsage("RequiredRateOfReturnCalculator");
}