"use strict";

function $calculate() {
    if (!isFloat($("#AAA")[0].value) ||
        !isFloat($("#BBB")[0].value) ||
        !isFloat($("#CCC")[0].value)) {
        

        $("#result").html("Bad argument(s)");
        return;
    }

    var AAA = parseFloat($("#AAA")[0].value);
    var BBB = parseFloat($("#BBB")[0].value);
    var CCC = parseFloat($("#CCC")[0].value);

    var PaybackPeriod = AAA + (BBB / CCC);
    $("#result").html(PaybackPeriod);

    recordUsage("PaybackPeriodCalculator");
}

