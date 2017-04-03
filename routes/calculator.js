
/*
 * GET calculator listing.
 */

exports.futureValueCalculator = function (req, res) {
    res.render('Calculators/FutureValueCalculator', { title: 'ejs' });
};

exports.presentValueCalculator = function (req, res) {
    res.render('Calculators/PresentValueCalculator', { title: 'ejs' });
};

exports.PERatioCalculator = function (req, res) {
    res.render('Calculators/PERatioCalculator', { title: 'ejs' });
};

exports.DOLCalculator = function (req, res) {
    res.render('Calculators/DOLCalculator', { title: 'ejs' });
};

exports.DFLCalculator = function (req, res) {
    res.render('Calculators/DFLCalculator', { title: 'ejs' });
};

exports.DCLCalculator = function (req, res) {
    res.render('Calculators/DCLCalculator', { title: 'ejs' });
};

exports.operatingIncomeCalculator = function (req, res) {
    res.render('Calculators/OperatingIncomeCalculator', { title: 'ejs' });
};

exports.ROECalculator = function (req, res) {
    res.render('Calculators/ROECalculator', { title: 'ejs' });
};

exports.futureValueOfAnnuityCalculator = function (req, res) {
    res.render('Calculators/FutureValueOfAnnuityCalculator', { title: 'ejs' });
};

exports.presentValueOfAnnuityCalculator = function (req, res) {
    res.render('Calculators/PresentValueOfAnnuityCalculator', { title: 'ejs' });
};

exports.priceOfACommonStockTodayCalculator = function (req, res) {
    res.render('Calculators/PriceOfACommonStockTodayCalculator', { title: 'ejs' });
};

exports.breakEvenPoint = function (req, res) {
    res.render('Calculators/BreakEvenPointCalculator', { title: 'ejs' });
};

exports.contributionMargin = function (req, res) {
    res.render('Calculators/ContributionMarginCalculator', { title: 'ejs' });
};

exports.dilutedEarningsPerShare = function (req, res) {
    res.render('Calculators/DilutedEarningsPerShareCalculator', { title: 'ejs' });
};

exports.duPontMethod = function (req, res) {
    res.render('Calculators/DuPontMethodCalculator', { title: 'ejs' });
};