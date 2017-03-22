"use strict";

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr)) && chr != '.') {
            return false;
        }
    }

    return true;
}

function $calculate() {
    if (!isFloat($("#NetEarnings")[0].value) ||
        !isFloat($("#StockHoldersEquity")[0].value) || 
        !parseFloat($("#StockHoldersEquity")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netearnings = parseFloat($("#NetEarnings")[0].value);
    var stockholdersequity = parseFloat($("#StockHoldersEquity")[0].value);
  
    var ReturnOnEquity = NetEarnings/StockholdersEquity;
    console.log(ReturnOnEquity);
    $("#result").html(ReturnOnEquity);
    
    recordUsage()
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "ROECalculator" });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}
