"use strict";

function $calculate() {
    if (!isFloat($("#Days")[0].value) ||
        !isFloat($("#AR")[0].value) ||
        !isFloat($("#CreditSales")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var days = parseFloat($("#Days")[0].value);
    var ar = parseFloat($("#AR")[0].value);
    var creditSales = parseFloat($("#CreditSales")[0].value);

    var averageCollectionPeriod = days * ar / creditSales;
    $("#result").html(averageCollectionPeriod);

    recordUsage("AverageCollectionPeriodCalculator");
}