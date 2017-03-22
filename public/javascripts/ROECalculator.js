"use strict";

function $calculate() {
    if (!isFloat($("#NetEarnings")[0].value) ||
        !isFloat($("#StockHoldersEquity")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netearnings = parseFloat($("#NetEarnings")[0].value);
    var stockholdersequity = parseFloat($("#StockHoldersEquity")[0].value);
  
    var ReturnOnEquity = NetEarnings/StockholdersEquity;
    $("#result").html(ReturnOnEquity);
    
    recordUsage("ROECalculator")
}
