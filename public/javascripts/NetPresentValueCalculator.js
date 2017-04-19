"use strict";

function $calculate() {
    if (!isFloat($("#NetPresentValueInflows")[0].value) ||
        !isFloat($("#NetPresentValueOutflows")[0].value) || 
        !parseFloat($("#NetPresentValueOutflows")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netPresentValueInflows = parseFloat($("#NetPresentValueInflows")[0].value);
    var netPresentValueOutflows = parseFloat($("#NetPresentValueOutflows")[0].value);
  
    var netPresentValue = netPresentValueInflows/netPresentValueOutflows;
    $("#result").html(netPresentValue);
    
    recordUsage("netPresentValueCalculator")
}