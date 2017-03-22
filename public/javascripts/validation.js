"use strict";

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr)) && chr !== '.') {
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