'use strict';
//Quản lý danh mục sản phẩm
app.controller('ProductCategoriesCtrl', ['$scope', '$rootScope', 'toaster','$state', '$stateParams','$modal', 'productCategoriesServ', function ($scope, $rootScope, toaster,$state, $stateParams,$modal, productCategoriesServ) {
    //Variables
    $scope.data = [];
    $scope.lstCheck = [];
    $scope.isCheckAll = false;
    $scope.paging = {
        totalCount: 0,
        pageCount: 1,
        page: $stateParams.page,
        pageSize: $stateParams.pageSize,
        keyword: ''
    }
    //Function
    $scope.LoadData = function () {
        productCategoriesServ.Get($scope.paging).then(function (result) {
            $scope.data = result.data.Items;
            $scope.paging.page = result.data.Page;
            $scope.paging.pageCount = result.data.TotalPage;
            $scope.paging.totalCount = result.data.TotalCount;
        }, function () {
            toaster.error('Không thể tải dữ liệu!');
        });
    }
    $scope.PageChange = function () {
        $scope.StateGo();
        $scope.LoadData();
    };
    $scope.Search = function () {
        $scope.StateGo();
        $scope.LoadData();
    };
    $scope.Sua = function () {
        if ($scope.lstCheck.length != 0) {
            $state.go('productCategory', { id: $scope.lstCheck[$scope.lstCheck.length - 1] });
        }
        else {
            toaster.warning('Vui lòng chọn dòng muốn sửa!');
        }
    }
    $scope.StateGo = function () {
        $state.go('.', {
            page: $scope.paging.page,
            pageSize: $scope.paging.pageSize
        }, { notify: false });
    };
    $scope.OnCheck = function (item) {
        if (item == 'All')
            $scope.ResultAll();
        else
            $scope.AddorRemoveItems(item);
    };
    $scope.AddorRemoveItems = function (item) {
        var index = $scope.lstCheck.indexOf(item.ID);
        if (index == -1)
            $scope.lstCheck.push(item.ID);
        else
            $scope.lstCheck.splice(index, 1);

        if ($scope.lstCheck.length >= $scope.data.length)
            $scope.isCheckAll = true;
        else $scope.isCheckAll = false;
    };
    $scope.OnCheckSingle = function (item) {
        var idx = $scope.lstCheck.indexOf(item.ID);
        if (idx == -1)
            return false;
        else
            return true;
    };
    $scope.CheckPage = function () {
        $scope.isCheckAll = true;
        if (jQuery.type($scope.data) !== 'undefined' && $scope.data.length != 0)
            angular.forEach($scope.data, function (item, index) {
                var idx = $scope.lstCheck.indexOf(item.ID);
                if (idx == -1) {
                    $scope.isCheckAll = false;
                }
            });
        else $scope.isCheckAll = false;
    };
    $scope.ResultAll = function() {
        if (jQuery.type($scope.data) !== 'undefined' && $scope.data.length != 0)
            angular.forEach($scope.data, function (item,index) {
                var idx = $scope.lstCheck.indexOf(item.ID);
                if ($scope.isCheckAll)
                {
                    if (idx == -1)
                        $scope.lstCheck.push(item.ID);
                }
                else {
                    if (idx != -1)
                        $scope.lstCheck.splice(idx, 1);
                }
            });
    };
    $scope.Delete = function () {
        
            productCategoriesServ.Delete($scope.lstCheck).then(function (result) {
                $('#confirmdelete').modal('hide');
                $('.modal-backdrop').hide();
                toaster.success('Xóa dữ liệu thành công.');
                $scope.lstCheck = [];
                $scope.PageChange();
            }, function () {
                toaster.error('Xóa dữ liệu không thành công.');
            });
        }
    $scope.DeleteConfirm = function () {
        if ($scope.lstCheck.length != 0) {
            $('#confirmdelete').modal('show');
        }
        else {
            toaster.warning('Vui lòng chọn dòng muốn xóa!');
        }
    };
    //Show Modal
    $scope.OpenModal = function (windowClass, templateUrl, size) {
        $modal.open({
            windowClass: windowClass,
            templateUrl: templateUrl,
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {}
        });
    };
    //Call Function
    $scope.LoadData();
}]);
//Thêm mới + Sửa danh mục sản phẩm
app.controller('ProductCategoryCtrl', ['$scope', '$rootScope', 'toaster', '$state', '$stateParams', 'productCategoriesServ', 'commonService', function ($scope, $rootScope, toaster, $state, $stateParams, productCategoriesServ,commonService) {
    $scope.data = {};
    $scope.parentProductCategory = [];
    $scope.Save = function () {
        productCategoriesServ.Put($scope.data).then(function (result) {
            $state.go('productCategories');
            toaster.success('Lưu dữ liệu thành công');
        }, function () {
            toaster.error('Không thể lưu dữ liệu kiểm tra lại!');
        });
    };
    $scope.GetSeoTitle = function () {
        $scope.data.Alias = commonService.GetSeoTitle($scope.data.Name);
    }
    $scope.LoadData = function () {
        productCategoriesServ.GetParentProductCategory().then(function (result) {
            $scope.parentProductCategory = result.data;
        }, function () { toaster.error('Không thể tải dữ liệu danh mục cha!') });

        if ($stateParams.id != 0)
        {
            productCategoriesServ.GetProductCategory($stateParams.id).then(function (result) {
                $scope.data = result.data;
            },
            function () {
                toaster.error('Không thể tải dữ liệu danh mục sản phẩm');
            });
        }
        else
        {
            $scope.data = {
                CreatedDate: new Date(),
                Status: true
            };
        }
    }
    $scope.LoadData();
}]);