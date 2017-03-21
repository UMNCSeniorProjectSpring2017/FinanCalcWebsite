
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