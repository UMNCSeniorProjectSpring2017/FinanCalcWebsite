"use strict";

function $calculate() {
    if (!isFloat($("#StockPrice")[0].value) ||
        !isFloat($("#RightsPricePerShare")[0].value) ||
        !isFloat($("#NumberOfRightsToBuyShare")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var stockPrice = parseFloat($("#StockPrice")[0].value);
    var rightsPricePerShare = parseFloat($("#RightsPricePerShare")[0].value);
    var numberOfRightsToBuyShare = parseFloat($("#NumberOfRightsToBuyShare")[0].value);

    var valueOfARight = (stockPrice - rightsPricePerShare) / (numberOfRightsToBuyShare + 1);
    $("#result").html(valueOfARight);

    recordUsage("ValueOfARightCalculator");
}