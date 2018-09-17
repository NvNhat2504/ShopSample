/// <reference path="../assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('Shop.Product_Categories', ['Shop.Common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];


    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('product_categories', {
            url: "/Product_Categories",
            templateUrl: "/App/Components/Product_Categories/productCategoryListView.html",
            controller: "productCategoryListController"
        }).state('product_categories_add', {
            url: "/Product_Categories_Add",
            templateUrl: "/App/Components/Product_Categories/productCategoryAddView.html",
            controller: "productCategoryAddController"
        });
    }
})();