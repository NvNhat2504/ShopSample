/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.filter('statusFilter',  function () {
            return function (input) {
                if (input == true)
                    return '<i class="fa fa-check-circle-o" style="color:green;" />';
                else return '<i class="fa fa-times-circle-o" style="color:red;" />';
            };
        });
})(angular.module('Shop.Common'));