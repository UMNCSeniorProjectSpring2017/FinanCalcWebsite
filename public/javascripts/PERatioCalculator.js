"use strict";

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseFloat(chr)) && chr != '.') {
            return false;
        }
    }

    return true;
}

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
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}
