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
    if (!isFloat($("#NetIncome")[0].value) ||
        !isFloat($("#PreferedDividends")[0].value) ||
        !isFloat($("#CommonSharesOutstanding")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var NetIncome = parseFloat($("#NetIncome")[0].value);
    var PreferedDividends = parseFloat($("#PreferedDividends")[0].value);
    var CommonSharesOutstanding = parseFloat($("#CommonSharesOutstanding")[0].value);

    var earningsPerShare = (NetIncome - PreferedDividends) / CommonSharesOutstanding;
    $("#result").html(earningsPerShare);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "EarningsPerShareCalculator" });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}