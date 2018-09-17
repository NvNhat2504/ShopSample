'use strict';

angular.module('app')
    .controller('AppCtrl', [
        '$rootScope', '$localStorage', '$state',
        function($rootScope, $localStorage, $state) {
            $rootScope.settings = {
                skin: '',
                color: {
                    themeprimary: '#2dc3e8',
                    themesecondary: '#fb6e52',
                    themethirdcolor: '#ffce55',
                    themefourthcolor: '#a0d468',
                    themefifthcolor: '#e75b8d'
                },
                rtl: false,
                fixed: {
                    navbar: false,
                    sidebar: false,
                    breadcrumbs: false,
                    header: false
                }
            };
            if (angular.isDefined($localStorage.settings))
                $rootScope.settings = $localStorage.settings;
            else
                $localStorage.settings = $rootScope.settings;

            $rootScope.$on('$viewContentLoaded',
                function (event, toState, toParams, fromState, fromParams) {
                    var hovered = $(".sidebar-menu").find("li:hover");
                    //hovered.hide();
                    hovered.trigger('mouseover');
                    //setTimeout(function () { hovered.show(); }, 0);
                    if ($state.current.name == 'error404') {
                        $('body').addClass('body-404');
                    }
                    if ($state.current.name == 'error500') {
                        $('body').addClass('body-500');
                    }
                });
        }
    ]);