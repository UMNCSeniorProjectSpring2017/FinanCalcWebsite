"use strict";

function $calculate() {
    if (!isFloat($("#CostOfDebt")[0].value) ||
        !isPercent($("#TaxRate")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var costOfDebt = parseFloat($("#CostOfDebt")[0].value);
    var taxRate = parseFloat($("#TaxRate")[0].value);

    var afterTaxCostOfDebt = costOfDebt * (1 - taxRate);
    $("#result").html(afterTaxCostOfDebt);

    recordUsage("AfterTaxCostOfDebtCalculator");
}