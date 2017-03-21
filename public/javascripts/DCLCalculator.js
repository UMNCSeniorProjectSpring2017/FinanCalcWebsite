"use strict";

function $calculate() {
    var epsValue = $("#PercentChangeInEps")[0].value;
    var salesValue = $("#PercentChangeInSales")[0].value;

    if (!isFloat(epsValue) || parseFloat(epsValue) > 1 || parseFloat(epsValue) < 0 ||
        !isFloat(salesValue) || parseFloat(salesValue) > 1 || parseFloat(salesValue) < 0) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var percentChangeInEps = parseFloat(epsValue);
    var percentChangeInSales = parseFloat(salesValue);

    var dcl = percentChangeInEps / percentChangeInSales;
    $("#result").html(dcl);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "DCLCalculator" });
}