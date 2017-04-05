"use strict";

function $calculate() {
    if (!isFloat($("#UnitPrice")[0].value) ||
        !isFloat($("#VariableCosts")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var unitPrice = parseFloat($("#UnitPrice")[0].value);
    var variableCosts = parseFloat($("#VariableCosts")[0].value);

    var contributionMargin = unitPrice - variableCosts;
    $("#result").html(contributionMargin);

    recordUsage("ContributionMarginCalculator");
}