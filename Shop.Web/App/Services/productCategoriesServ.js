'use strict';
app.service('productCategoriesServ', ['$q','apiService', function ($q,apiService) {
    function _get(pageInfo) {
        var config = {
            params : {
                page: pageInfo.page,
                pageSize: pageInfo.pageSize,
                keyword: pageInfo.keyword
            }
        };
        var deferred = $q.defer();
        apiService.Get('/api/productcategory/getall', config, function (result) {
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
            })
        return deferred.promise;
    }
    function _getProductCategory(id) {
        var config = {
            params: {
                id: id
            }
        };
        var deferred = $q.defer();
        apiService.Get('/api/productcategory/getbyid', config, function (result) {
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }
    function _getParentProductCategory() {
        var deferred = $q.defer();
        apiService.Get('/api/productcategory/getallparent', null, function (result) {
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }
    function _delete(lstDelete) {
        var config = {
            params: {
                lstDelete: JSON.stringify(lstDelete)
            }
        };
        var deferred = $q.defer();
        apiService.Delete('/api/productcategory/delete', config, function (result) {
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
            });
        return deferred.promise;
    }
    function _put(productCategory) {
        var deferred = $q.defer();

        apiService.Put('/api/productcategory/edit', productCategory, function (result) {
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }

    return {
        Delete:_delete,
        Get: _get,
        Put: _put,
        GetProductCategory: _getProductCategory,
        GetParentProductCategory: _getParentProductCategory
    }
}])