"use strict";

function $calculate() {
    if (!isFloat($("#ProfitMargin")[0].value) ||
        !isFloat($("#AssetTurnover")[0].value) ||
        !isFloat($("#EquityMultiplier")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var profitMargin = parseFloat($("#ProfitMargin")[0].value);
    var assetTurnover = parseFloat($("#AssetTurnover")[0].value);
    var equityMultiplier = parseFloat($("#EquityMultiplier")[0].value);

    var roe = profitMargin * assetTurnover * equityMultiplier;
    $("#result").html(roe);

    recordUsage("DuPontMethodCalculator");
}