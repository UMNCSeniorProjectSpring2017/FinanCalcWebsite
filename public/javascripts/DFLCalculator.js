"use strict";

function $calculate() {
    var epsValue = $("#PercentChangeInEps")[0].value;
    var ebitValue = $("#PercentChangeInEbit")[0].value;

    if (!isFloat(epsValue) || parseFloat(epsValue) > 1 || parseFloat(epsValue) < 0 ||
        !isFloat(ebitValue) || parseFloat(ebitValue) > 1 || parseFloat(ebitValue) < 0) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var percentChangeInEps = parseFloat(epsValue);
    var percentChangeInEbit = parseFloat(ebitValue);

    var dfl = percentChangeInEps / percentChangeInEbit;
    $("#result").html(dfl);

    recordUsage("DFLCalculator");
}