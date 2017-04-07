"use strict";

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

    recordUsage("ReturnOnAssetsCalculator");
}

