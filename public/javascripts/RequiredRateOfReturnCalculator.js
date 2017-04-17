"use strict";

function $calculate() {
    if (!isFloat($("#Priceofthestocktoday")[0].value) ||
        !isFloat($("#Dividend")[0].value) ||
        !isFloat($("#GrowthRate")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var Priceofthestocktoday = parseFloat($("#Priceofthestocktoday")[0].value);
    var Dividend = parseFloat($("#Dividend")[0].value);
    var GrowthRate = parseFloat($("#GrowthRate")[0].value);

    var requiredRateOfReturnCalculator = 100 * ((Dividend / Priceofthestocktoday) + (GrowthRate / 100));
    $("#result").html(requiredRateOfReturnCalculator);

    recordUsage("RequiredRateOfReturnCalculator");
}