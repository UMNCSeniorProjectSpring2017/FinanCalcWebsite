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
    if (!isFloat($("#NetRevenue")[0].value) ||
        !isFloat($("#CostOfGoodsSold")[0].value) ||
		!isFloat($("#Labor")[0].value) ||
        !isFloat($("#AdministrationExpenses")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var NetRevenue = parseFloat($("#NetRevenue")[0].value);
    var CostOfGoodsSold = parseFloat($("#CostOfGoodsSold")[0].value);
	var Labor = parseFloat($("#Labor")[0].value);
    var AdministrationExpenses = parseFloat($("#AdministrationExpenses")[0].value);

	var OperatingProfit = NetRevenue - CostOfGoodsSold - AdministrationExpenses - Labor;
    var OperatingProfitMargin = (OperatingProfit / NetRevenue) * 100;
    $("#result").html(OperatingProfitMargin);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "OperatingProfitMarginCalculator" });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}