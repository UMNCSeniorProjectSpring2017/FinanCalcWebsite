"use strict";

function $calculate() {
    if (!isFloat($("#AnnualDividendPayment")[0].value) ||
        !isFloat($("#PreferredStockPrice")[0].value) || 
        !parseFloat($("#PreferredStockPrice")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var annualDividendPayment = parseFloat($("#AnnualDividendPayment")[0].value);
    var preferredStockPrice = parseFloat($("#PreferredStockPrice")[0].value);
  
    var costOfPreferredStock = annualDividendPayment/preferredStockPrice;
    $("#result").html(costOfPreferredStock);
    
    recordUsage("CostOfPreferredStockCalculator")
}
