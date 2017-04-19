"use strict";

function $calculate() {
    if (!isFloat($("#NominalRiskFreeRate")[0].value) ||
        !isFloat($("#InflationRate")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var nominalRiskFreeRate = parseFloat($("#NominalRiskFreeRate")[0].value);
    var inflationRate = parseFloat($("#InflationRate")[0].value);
  
    var riskFreeRateofReturn = (1 +nominalRiskFreeRate) / (1 + inflationRate) -1;
    $("#result").html(riskFreeRateofReturn);
    
    recordUsage("RiskFreeRateOfReturnCalculator")
}
