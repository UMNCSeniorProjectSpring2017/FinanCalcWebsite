"use strict";

function $calculate() {
    if (!isFloat($("#FixedCost")[0].value) ||
        !isFloat($("#VariableCosts")[0].value) ||
        !isFloat($("#UnitPrice")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var fixedCost = parseFloat($("#FixedCost")[0].value);
    var variableCosts = parseFloat($("#VariableCosts")[0].value);
    var unitPrice = parseFloat($("#UnitPrice")[0].value);

    var breakEvenPoint = fixedCost / (unitPrice - variableCosts)
    $("#result").html(breakEvenPoint);

    recordUsage("BreakEvenPointCalculator");
}