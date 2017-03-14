'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/FutureValueCalculator', function (req, res) {
    res.sendFile('FutureValueCalculator.html', {
        root: 'views/Calculators'
    });
});

module.exports = router;