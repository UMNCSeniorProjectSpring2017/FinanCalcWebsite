"use strict";

function $calculate() {
    if (!isPercent($("#DiscountRate")[0].value) ||
        !isFloat($("#NumberOfYears")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var discountRate = parseFloat($("#DiscountRate")[0].value);
    var numberOfYears = parseFloat($("#NumberOfYears")[0].value);

    var discountRate = 1 / Math.pow (1 + discountRate, numberOfYears)
    $("#result").html(discountRate);

    recordUsage("DiscountRateCalculator");
}