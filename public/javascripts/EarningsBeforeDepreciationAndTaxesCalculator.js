"use strict";

function $calculate() {
    if (!isFloat($("#salesRevenue")[0].value) ||
        !isFloat($("#rentAndUtil")[0].value) ||
        !isFloat($("#otherEx")[0].value) ||
        !isFloat($("#interestEx")[0].value) ||
        !isFloat($("#salaries")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var salesRevenue = parseFloat($("#salesRevenue")[0].value);
    var rentAndUtil = parseFloat($("#rentAndUtil")[0].value);
    var otherEx = parseFloat($("#otherEx")[0].value);
    var salaries = parseFloat($("#salaries")[0].value);
    var interestEx = parseFloat($("#interestEx")[0].value);
  
    var returnOnEquity = salesRevenue - salaries - rentAndUtil - otherEx - interestEx;
    $("#result").html(returnOnEquity);
    
    recordUsage("EarningsBeforeDepreciationAndTaxesCalculator")
}
