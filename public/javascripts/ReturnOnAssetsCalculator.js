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
        !isFloat($("#TotalAssets")[0].value) ) {
        

        $("#result").html("Bad argument(s)");
        return;
    }

    var NetIncome = parseFloat($("#NetIncome")[0].value);
    var TotalAssets = parseFloat($("#TotalAssets")[0].value);
    

    var earningsPerShare = (NetIncome / TotalAssets) * 100 ;
    $("#result").html(earningsPerShare);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "ReturnOnAssetsCalculator" });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}