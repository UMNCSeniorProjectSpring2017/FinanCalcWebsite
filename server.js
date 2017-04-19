
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , calculator = require('./routes/calculator')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/FutureValueCalculator', calculator.futureValueCalculator);
app.get('/PresentValueCalculator', calculator.presentValueCalculator);
app.get('/PERatioCalculator', calculator.PERatioCalculator);
app.get('/DOLCalculator', calculator.DOLCalculator);
app.get('/DFLCalculator', calculator.DFLCalculator);
app.get('/DCLCalculator', calculator.DCLCalculator);
app.get('/OperatingIncomeCalculator', calculator.operatingIncomeCalculator);
app.get('/ReturnOnEquityCalculator', calculator.ROECalculator);
app.get('/FutureValueOfAnnuityCalculator', calculator.futureValueOfAnnuityCalculator);
app.get('/PresentValueOfAnnuityCalculator', calculator.presentValueOfAnnuityCalculator);
app.get('/PriceOfACommonStockTodayCalculator', calculator.priceOfACommonStockTodayCalculator);
app.get('/BreakEvenPointCalculator', calculator.breakEvenPointCalculator);
app.get('/ContributionMarginCalculator', calculator.contributionMarginCalculator);
app.get('/DilutedEarningsPerShareCalculator', calculator.dilutedEarningsPerShareCalculator);
app.get('/DuPontMethodCalculator', calculator.duPontMethodCalculator);
app.get('/AverageCollectionPeriodCalculator', calculator.averageCollectionPeriodCalculator);
app.get('/EffectiveInterestRateCalculator', calculator.effectiveInterestRateCalculator);
app.get('/CostOfMissingDiscountCalculator', calculator.costOfMissingDiscountCalculator);
app.get('/EconomicOrderingQuantityCalculator', calculator.EOQCalculator);
app.get('/RiskFreeRateOfReturnCalculator', calculator.riskFreeRateOfReturnCalculator);
app.get('/PresentValueOfPrincipalPaymentAtMaturityCalculator', calculator.presentValueOfPrincipalPaymentAtMaturityCalculator);
app.get('/PresentValueOfABondsInterestPaymentsCalculator', calculator.presentValueOfABondsInterestPaymentsCalculator);

app.post("/LogUsage", function (req, res) {
    var fs = require('fs');
    if (!fs.existsSync('./log')) {
        fs.mkdirSync("./log");
    }
    
    fs.appendFileSync('./log/UsageCounts.json', '');

    try {
        var data = fs.readFileSync('./log/UsageCounts.json');

        var jsonList;
        if (data.length != 0) {
            jsonList = JSON.parse(data);
        }
        else {
            jsonList = { Items: [] };
        }

        var hasCalculator = false;
        for (var i = 0; i < jsonList.Items.length; i++) {
            if (jsonList.Items[i].Name == req.body.calculator) {
                jsonList.Items[i].Count = jsonList.Items[i].Count += 1;

                hasCalculator = true;
                break;
            }
        }

        if (!hasCalculator) {
            jsonList.Items.push({ Name: req.body.calculator, Count: 1 });
        }

        fs.writeFileSync('./log/UsageCounts.json', JSON.stringify(jsonList));
    }
    catch (err) {
        fs.appendFileSync('./log/Errors.log', err.message + "\r\n");
    }

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
