"use strict";

function $calculate() {
    if (!isFloat($("#NetEarnings")[0].value) ||
        !isFloat($("#StockholdersEquity")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netEarnings = parseFloat($("#NetEarnings")[0].value);
    var stockholdersEquity = parseFloat($("#StockholdersEquity")[0].value);
  
    var returnOnEquity = netEarnings / stockholdersEquity;
    $("#result").html(returnOnEquity);
    
    recordUsage("ROECalculator")
}
