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
    var epsValue = $("#PercentChangeInEps")[0].value;
    var ebitValue = $("#PercentChangeInEbit")[0].value;

    if (!isFloat(epsValue) || parseFloat(epsValue) > 1 || parseFloat(epsValue) < 0 ||
        !isFloat(ebitValue) || parseFloat(ebitValue) > 1 || parseFloat(ebitValue) < 0) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var percentChangeInEbit = parseFloat(ebitValue);
    var percentChangeInEps = parseFloat(epsValue);

    var dol = percentChangeInEps / percentChangeInEbit;
    $("#result").html(dol);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "DFLCalculator" });
}

function $isValidPercent(id) {
    var value = $(id)[0].value
    if (!isFloat(value) || parseFloat(value) > 1 || parseFloat(value) < 0) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}