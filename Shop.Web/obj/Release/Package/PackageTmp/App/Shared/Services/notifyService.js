﻿/// <reference path="../../../assets/admin/libs/angular/angular.js" />
(function (app) {
    app.service('notifyService', notifyService);

    function notifyService() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        return {
            displaySuccess: displaySuccess,
            displayError: displayError,
            displayWarning: displayWarning,
            displayInfo: displayInfo
        }

        function displaySuccess(message)
        {
            toastr.success(message);
        }
        function displayError(error) {
            if (Array.isArray(error)) {
                error.earch(function (err) {
                    toastr.error(err);
                })
            }
            else toastr.error(error);
        }
        function displayWarning(message) {
            toastr.warning(message);
        }
        function displayInfo(message) {
            toastr.info(message);
        }



    }

})(angular.module('Shop.Common'));