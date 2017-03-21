"use strict";

function $calculate() {
    if (!isFloat($("#CurrentStockPrice")[0].value) ||
        !isFloat($("#EarningsPerShare")[0].value) || 
        !parseFloat($("#EarningsPerShare")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var currentStockPrice = parseFloat($("#CurrentStockPrice")[0].value);
    var earningsPerShare = parseFloat($("#EarningsPerShare")[0].value);
  
    var PERatio = currentStockPrice/earningsPerShare;
    console.log(PERatio);
    $("#result").html(PERatio);
    
    recordUsage()
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "PERatioCalculator" });
}