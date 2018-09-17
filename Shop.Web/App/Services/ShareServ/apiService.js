'use strict';
app.service('apiService', ['$http', 'toaster', function ($http, toaster) {
    function _post(url, data, success, failure) {
        $http.post(url, data).then(function (result) {
            success(result);
        }, function (error) {
            if (failure != null) {
                failure(error);
            }
            else if (error.status === 401) {
                toaster.error('Authenticate is required.');
            }
        });
    }
    function _put(url, data, success, failure) {
        $http.put(url, data).then(function (result) {
            success(result);
        }, function (error) {
            if (failure != null) {
                failure(error);
            }
            else if (error.status === 401) {
                toaster.error('Authenticate is required.');
            }
        });
    }

    function _delete(url, data, success, failure) {
        $http.delete(url, data).then(function (result) {
            success(result);
        }, function (error) {
            if (failure != null) {
                failure(error);
            }
            else if (error.status === 401) {
                toaster.error('Authenticate is required.');
            }
        });
    }

    function _get(url, params, success, failure) {
        $http.get(url, params).then(function (result) {
            success(result);
        }, function (error) {
            failure(error);
        });
    }
    return {
        Post: _post,
        Put: _put,
        Get: _get,
        Delete: _delete
    }
}])