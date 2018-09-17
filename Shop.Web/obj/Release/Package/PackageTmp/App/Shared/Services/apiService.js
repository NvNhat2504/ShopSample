/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.service('apiService', apiService);

    apiService.$inject = ['$http','notifyService'];

    function apiService($http)
    {
        return {
            get: get,
            post:post
        }
        function post(url, data, success, failure)
        {
            $http.post(url, data).then(function (result) {
                success(result);
            }, function (error) {
                if (failure != null) {
                    failure(error);
                }
                else if (error.status === 401) {
                    notifyService.displayError('Authenticate is required.');
                }
            });
        }
        function get(url, params, success, failure) {
            $http.get(url, params).then(function (result) {
                success(result);
            }, function (error) {
                failure(error);
            });
        }
    }
})(angular.module('Shop.Common'));