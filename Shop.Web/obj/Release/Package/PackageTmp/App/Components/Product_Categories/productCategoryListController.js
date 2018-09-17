/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller('productCategoryListController', productCategoryListController);
    productCategoryListController.$inject = ['$scope','apiService','notifyService']


    function productCategoryListController($scope, apiService, notifyService) {

        $scope.productCategories = [];
        $scope.page = 0;
        $scope.pageCount = 0;
        $scope.keyword = '';
        $scope.getProductCategories = getProductCategories;

        $scope.search = search;
        function search()
        {
            getProductCategories();
        }

        function getProductCategories(page)
        {
            page = page || 0;
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 2
                }
            };
            apiService.get('/api/productcategory/getall', config, function (result) {
                $scope.productCategories = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pageCount = result.data.TotalPage;
                $scope.totalCount = result.data.TotalCount;

            }, function () {
                notifyService.displayError('Không thể tải dữ liệu!');
            });
        }
        $scope.getProductCategories();
    }

})(angular.module('Shop.Product_Categories'));