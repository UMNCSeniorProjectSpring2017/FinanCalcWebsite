"use strict";

function $calculate() {
    var ebitValue = $("#PercentChangeInEbit")[0].value;
    var salesValue = $("#PercentChangeInSales")[0].value;

    if (!isFloat(ebitValue) || parseFloat(ebitValue) > 1 || parseFloat(ebitValue) < 0 ||
        !isFloat(salesValue) || parseFloat(salesValue) > 1 || parseFloat(salesValue) < 0) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var percentChangeInEbit = parseFloat(ebitValue);
    var percentChangeInSales = parseFloat(salesValue);

    var dol = percentChangeInEbit / percentChangeInSales;
    $("#result").html(dol);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "DOLCalculator" });
}