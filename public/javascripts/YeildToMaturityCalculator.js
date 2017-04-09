"use strict";

function $calculate() {
    if (!isFloat($("#CouponIntrestPayment")[0].value) ||
        !isFloat($("#FaceValue")[0].value) ||
        !isFloat($("#Price")[0].value) ||
        !isFloat($("#YearsToMaturity")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var couponIntrestPayment = parseFloat($("#CouponIntrestPayment")[0].value);
    var faceValue = parseFloat($("#FaceValue")[0].value);
    var price = parseFloat($("#Price")[0].value);
    var yearsToMaturity = parseFloat($("#YearsToMaturity")[0].value);

    var yeildToMaturity = (couponIntrestPayment + ((faceValue - price) / yearsToMaturity)) / ((faceValue + price) / 2);
    $("#result").html(yeildToMaturity);

    recordUsage("YeildToMaturityCalculator");
}