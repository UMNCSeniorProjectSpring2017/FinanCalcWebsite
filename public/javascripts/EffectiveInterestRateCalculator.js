"use strict";

function $calculate() {
    var iText = $("#i")[0].value;
    var nText = $("#n")[0].value;

    if (!isFloat(i) || parseFloat(i) > 1 || parseFloat(i) < 0 ||
        !isFloat(n)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var i = parseFloat(iText);
    var n = parseFloat(nText);

    var effectiveInterestRate = Math.pow(1 + i / n, n) - 1;
    $("#result").html(effectiveInterestRate);

    recordUsage("EffectiveInterestRateCalculator");
}