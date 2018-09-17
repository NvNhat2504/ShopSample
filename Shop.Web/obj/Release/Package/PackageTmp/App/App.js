/// <reference path="../assets/admin/libs/angular/angular.js" />
(function () {

    angular.module('Shop', ['Shop.Products', 'Shop.Common'
        ,'Shop.Product_Categories'
    ]).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];


    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('home',
            {
            url: "/Admin",
            templateUrl: "/App/Components/Home/homeView.html",
            controller: "homeController"
            },
        );
        $urlRouterProvider.otherwise('/Admin');

        //$locationProvider.html5Mode(true);
    }
})();

