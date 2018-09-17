/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.service('commonService', commonService);
    
    function commonService() {
        return { getSeoTitle : getSeoTitle }

        function getSeoTitle(input)
        {
            if (input == undefined || input == '')
                return '';
            input = input.toLowerCase();
            input = input.toString().normalize('NFKD').replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");
            return input;
        }
    }
})(angular.module('Shop.Common'));