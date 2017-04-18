"use strict";

function $calculate() {
    if (!isFloat($("#NetRevenue")[0].value) ||
        !isFloat($("#CostOfGoodsSold")[0].value) ||
		!isFloat($("#Labor")[0].value) ||
        !isFloat($("#AdministrationExpenses")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netRevenue = parseFloat($("#NetRevenue")[0].value);
    var costOfGoodsSold = parseFloat($("#CostOfGoodsSold")[0].value);
	var labor = parseFloat($("#Labor")[0].value);
    var administrationExpenses = parseFloat($("#AdministrationExpenses")[0].value);

	var operatingProfit = netRevenue - costOfGoodsSold - administrationExpenses - labor;
    var operatingProfitMargin = (operatingProfit / netRevenue) * 100;
    $("#result").html(operatingProfitMargin);

    recordUsage("OperatingProfitMarginCalculator");
}

