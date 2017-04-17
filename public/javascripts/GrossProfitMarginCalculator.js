"use strict";

function $calculate() {
    if (!isFloat($("#GrossProfit")[0].value) ||
        !isFloat($("#NetSales")[0].value) ) {
        

        $("#result").html("Bad argument(s)");
        return;
    }

    var GrossProfit = parseFloat($("#GrossProfit")[0].value);
    var NetSales = parseFloat($("#NetSales")[0].value);
    

    var earningsPerShare = (GrossProfit / NetSales) * 100 ;
    $("#result").html(earningsPerShare);

    recordUsage("GrossProfitMarginCalculator");
}

