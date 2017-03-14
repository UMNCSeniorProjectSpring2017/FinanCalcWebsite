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
    if (!isFloat($("#CashFlow")[0].value) ||
        !isFloat($("#RateOfReturn")[0].value) ||
        !isFloat($("#Periods")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var cashFlow = parseFloat($("#CashFlow")[0].value);
    var rateOfReturn = parseFloat($("#RateOfReturn")[0].value);
    var periods = parseFloat($("#Periods")[0].value);

    var futureValue = cashFlow * Math.pow(1 + rateOfReturn, periods);
    $("#result").html(futureValue);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", function (data) {
        console.log(data)
    });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}