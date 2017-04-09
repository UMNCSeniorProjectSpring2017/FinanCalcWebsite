"use strict";

function $calculate() {
    if (!isFloat($("#AnnualizedIntrest")[0].value) ||
        !isFloat($("#ParValue")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var annualizedIntrest = parseFloat($("#AnnualizedIntrest")[0].value);
    var parValue = parseFloat($("#ParValue")[0].value);

    var couponRate = annualizedIntrest / parValue;
    $("#result").html(couponRate);

    recordUsage("CouponRateCalculator");
}