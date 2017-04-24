"use strict";

function $calculate() {
    if (!isFloat($("#S")[0].value) ||
        !isFloat($("#O")[0].value) ||
        !isFloat($("#C")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var s = parseFloat($("#S")[0].value);
    var o = parseFloat($("#O")[0].value);
    var c = parseFloat($("#C")[0].value);

    var eoq = Math.sqrt(2 * s * o / c);
    $("#result").html(eoq);

    recordUsage("EOQCalculator");
}