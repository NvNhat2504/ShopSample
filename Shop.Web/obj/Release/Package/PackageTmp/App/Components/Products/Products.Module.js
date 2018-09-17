/// <reference path="../assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('Shop.Products', ['Shop.Common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];


    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('products', {
            url: "/Products",
            templateUrl: "/App/Components/Products/productListView.html",
            controller: "productListController"
        }).state('product_add', {
            url: "/Product_Add",
            templateUrl: "/App/Components/Products/productAddView.html",
            controller: "productAddController"
            });
    }
})();