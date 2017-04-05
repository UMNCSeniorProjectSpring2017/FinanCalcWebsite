"use strict";

function $calculate() {
    if (!isFloat($("#D")[0].value) ||
        !isFloat($("#F")[0].value) ||
        !isFloat($("#L")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var d = parseFloat($("#D")[0].value);
    var f = parseFloat($("#F")[0].value);
    var l = parseFloat($("#L")[0].value);

    var costOfMissingDiscount = (d / (100 - d)) * (365 / (f - l));
    $("#result").html(costOfMissingDiscount);

    recordUsage("CostOfMissingDiscountCalculator");
}