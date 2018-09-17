/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller('productCategoryAddController', productCategoryAddController);
    productCategoryAddController.$inject = ['$scope', 'apiService', 'notifyService', 'commonService', '$state']


    function productCategoryAddController($scope, apiService, notifyService, commonService, $state) {
        $scope.productCategory = {
            CreatedDate: new Date(),
            Status: true
            //Alias: Name.toString().normalize('NFKD').replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "-")
        }

        $scope.GetSeoTitle = GetSeoTitle;
        function GetSeoTitle()
        {
            $scope.productCategory.Alias = commonService.getSeoTitle($scope.productCategory.Name);
        }

        $scope.parentCategories = [];
        $scope.AddProductCategory = AddProductCategory;
    
        function AddProductCategory()
        {
            apiService.post('/api/productcategory/add', $scope.productCategory, function (result) {
                notifyService.displaySuccess('Thao tác thành công!');
                $state.go('product_categories');
            },
                function () {
                    notifyService.displayError('Thao tác không thành công!');
                }
            );
        }

        function loadParentCategories() {
            apiService.get('/api/productcategory/getallparent', null, function (result) {
                $scope.parentCategories = result.data;
            },
                function () {
                    console.log('Không thể lấy danh sách danh mục cha!');
                }
            );

        }

        loadParentCategories();
       
    }

})(angular.module('Shop.Product_Categories'));