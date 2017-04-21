"use strict";

function isPercent(str) {
    return isFloat(str) && parseFloat(str) >= 0 && parseFloat(str) <= 1;
}

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr)) && chr !== '.') {
            return false;
        }
    }

    return true;
}

function isInteger(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr))) {
            return false;
        }
    }

    return true;
}

function recordUsage(name) {
    $.post("/LogUsage", { calculator: name });
}

function $isValidPercent(id) {
    var value = $(id)[0].value
    if (!isFloat(value) || parseFloat(value) > 1 || parseFloat(value) < 0) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}

function $isValidInteger(id) {
    if (!isInteger($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}