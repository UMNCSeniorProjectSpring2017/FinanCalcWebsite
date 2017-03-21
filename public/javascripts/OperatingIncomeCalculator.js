"use strict";

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr)) && chr !== '.') {
            return false;
        }
    }

    return true;
}

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

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "OperatingIncomeCalculator" });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}