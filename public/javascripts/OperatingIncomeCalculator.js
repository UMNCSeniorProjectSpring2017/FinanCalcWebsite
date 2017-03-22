"use strict";

function $calculate() {
    if (!isFloat($("#Revenue")[0].value) ||
        !isFloat($("#Cogs")[0].value) ||
        !isFloat($("#Labor")[0].value) ||
        !isFloat($("#Expenses")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var revenue = parseFloat($("#Revenue")[0].value);
    var cogs = parseFloat($("#Cogs")[0].value);
    var labor = parseFloat($("#Labor")[0].value);
    var expenses = parseFloat($("#Expenses")[0].value);

    var operatingIncome = revenue - cogs - labor - expenses;
    $("#result").html(operatingIncome);

    recordUsage("OperatingIncomeCalculator");
}