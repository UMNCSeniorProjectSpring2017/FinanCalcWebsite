"use strict";

function $calculate() {
    if (!isFloat($("#CostOfEquity")[0].value) ||
        !isPercent($("#WeightOfEquity")[0].value) ||
        !isFloat($("#CostOfDebt")[0].value) ||
        !isPercent($("#TaxRate")[0].value) ||
        !isPercent($("#WeightOfDebt")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var costOfEquity = parseFloat($("#CostOfEquity")[0].value);
    var weightOfEquity = parseFloat($("#WeightOfEquity")[0].value);
    var costOfDebt = parseFloat($("#CostOfDebt")[0].value);
    var taxRate = parseFloat($("#TaxRate")[0].value);
    var weightOfDebt = parseFloat($("#WeightOfDebt")[0].value);

    var wacc = (costOfEquity * weightOfEquity) + (costOfDebt * (1 - taxRate) * weightOfDebt);
    $("#result").html(wacc);

    recordUsage("WeightedAverageCostOfCapitalCalculator");
}