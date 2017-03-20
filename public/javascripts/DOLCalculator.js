"use strict";

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr)) && chr !== '.') {
            return false;
        }
    }

    return true;
}

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

function $isValidPercent(id) {
    var value = $(id)[0].value
    if (!isFloat(value) || parseFloat(value) > 1 || parseFloat(value) < 0) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}