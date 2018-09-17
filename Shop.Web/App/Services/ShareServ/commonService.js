'use strict';
app.service('commonService', [function () {
    function _getSeoTitle(input) {
        if (input == undefined || input == '')
            return '';
        input = input.toLowerCase();
        input = input.toString().replace(/đ/g, 'd');
        input = input.toString().normalize('NFKD').replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");
        return input;
    }
    return {
        GetSeoTitle : _getSeoTitle
    }
}]);