"use strict";

function $calculate() {
    if (!isFloat($("#NetIncome")[0].value) ||
        !isFloat($("#PreferredDividends")[0].value) ||
        !isFloat($("#WANSO")[0].value) ||
        !isFloat($("#ICS")[0].value) ||
        !isFloat($("#IODS")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var netIncome = parseFloat($("#NetIncome")[0].value);
    var preferredDividends = parseFloat($("#PreferredDividends")[0].value);
    var WANSO = parseFloat($("#WANSO")[0].value);
    var ICS = parseFloat($("#ICS")[0].value);
    var IODS = parseFloat($("#IODS")[0].value);

    var dilutionPerShare = (netIncome - preferredDividends) / (WANSO + ICS - IODS)
    $("#result").html(dilutionPerShare);

    recordUsage("DilutionPerShareCalculator");
}