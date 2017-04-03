"use strict";

function $calculate() {
    if (!isFloat($("#StocksNextAnnualDividend")[0].value) ||
        !isFloat($("#RequiredReturn")[0].value) ||
        !isFloat($("#DividendGrowth")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var stocksNextAnnualDividend = parseFloat($("#StocksNextAnnualDividend")[0].value);
    var requiredReturn = parseFloat($("#RequiredReturn")[0].value);
    var dividendGrowth = parseFloat($("#DividendGrowth")[0].value);

    var priceOfACommonStockToday = stocksNextAnnualDividend / (requiredReturn - dividendGrowth);
    $("#result").html(priceOfACommonStockToday);

    recordUsage("PriceOfACommonStockTodayCalculator");
}