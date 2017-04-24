"use strict";

function $calculate() {
    if (!isFloat($("#CouponInterestPayment")[0].value) ||
        !isFloat($("#FaceValue")[0].value) ||
        !isFloat($("#Price")[0].value) ||
        !isFloat($("#YearsToMaturity")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var couponInterestPayment = parseFloat($("#CouponInterestPayment")[0].value);
    var faceValue = parseFloat($("#FaceValue")[0].value);
    var price = parseFloat($("#Price")[0].value);
    var yearsToMaturity = parseFloat($("#YearsToMaturity")[0].value);

    var yieldToMaturity = (couponInterestPayment + ((faceValue - price) / yearsToMaturity)) / ((faceValue + price) / 2);
    $("#result").html(yieldToMaturity);

    recordUsage("YieldToMaturityCalculator");
}