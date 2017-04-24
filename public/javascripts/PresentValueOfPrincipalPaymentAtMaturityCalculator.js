"use strict";

function $calculate() {
    if (!isFloat($("#ContractualInterestRate")[0].value) ||
        !isFloat($("#MarketInterestRate")[0].value) ||
        !isFloat($("#MarketPriceOfBond")[0].value) ||
        !isFloat($("#NumberOfPayments")[0].value)) {

        $("#result").html("Bad argument(s)");
        return;
    }

    var contractualInterestRate = parseFloat($("#ContractualInterestRate")[0].value);
    var marketInterestRate = parseFloat($("#MarketInterestRate")[0].value);
    var marketPriceOfBond = parseFloat($("#MarketPriceOfBond")[0].value);
    var numberOfPayments = parseFloat($("#NumberOfPayments")[0].value);

    var presentValueOfPrincipalPaymentAtMaturity = contractualInterestRate * (1 - Math.pow((1 + marketInterestRate)), (-1) * numberOfPayments) + (marketPriceOfBond * (Math.pow((1 + marketInterestRate)) , (-1) * numberOfPayments)) ;
    $("#result").html(presentValueOfPrincipalPaymentAtMaturity);
     

    recordUsage("PresentValueOfPrincipalPaymentAtMaturityCalculator");
}