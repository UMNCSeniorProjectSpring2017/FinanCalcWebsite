"use strict";

function $calculate() {
    if (!isFloat($("#GrossProfit")[0].value) ||
        !isFloat($("#NetSales")[0].value) ) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var grossProfit = parseFloat($("#GrossProfit")[0].value);
    var netSales = parseFloat($("#NetSales")[0].value);
    

    var earningsPerShare = (grossProfit / netSales) * 100 ;
    $("#result").html(earningsPerShare);

    recordUsage("GrossProfitMarginCalculator");
}

