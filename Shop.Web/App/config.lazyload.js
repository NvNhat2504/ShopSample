angular.module('app')
    .config([
        '$ocLazyLoadProvider', function($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true,
                events: true,
                modules: [
                    {
                        name: 'toaster',
                        files: [
                            '../../Assets/Admin/lib/modules/angularjs-toaster/toaster.css',
                            '../../Assets/Admin/lib/modules/angularjs-toaster/toaster.js'
                        ]
                    },
                    {
                        name: 'ui.select',
                        files: [
                            '../../Assets/Admin/lib/modules/angular-ui-select/select.css',
                            '../../Assets/Admin/lib/modules/angular-ui-select/select.js'
                        ]
                    },
                    {
                        name: 'ngTagsInput',
                        files: [
                            '../../Assets/Admin/lib/modules/ng-tags-input/ng-tags-input.js'
                        ]
                    },
                    {
                        name: 'daterangepicker',
                        files: [
                            '../../Assets/Admin/lib/modules/angular-daterangepicker/moment.js',
                            '../../Assets/Admin/lib/modules/angular-daterangepicker/daterangepicker.js',
                            '../../Assets/Admin/lib/modules/angular-daterangepicker/angular-daterangepicker.js'
                        ]
                    },
                    {
                        name: 'vr.directives.slider',
                        files: [
                            '../../Assets/Admin/lib/modules/angular-slider/angular-slider.min.js'
                        ]
                    },
                    {
                        name: 'minicolors',
                        files: [
                            '../../Assets/Admin/lib/modules/angular-minicolors/jquery.minicolors.js',
                            '../../Assets/Admin/lib/modules/angular-minicolors/angular-minicolors.js'
                        ]
                    },
                    {
                        name: 'textAngular',
                        files: [
                            '../../Assets/Admin/lib/modules/text-angular/textAngular-sanitize.min.js',
                            '../../Assets/Admin/lib/modules/text-angular/textAngular-rangy.min.js',
                            '../../Assets/Admin/lib/modules/text-angular/textAngular.min.js'
                        ]
                    },
                    {
                        name: 'ng-nestable',
                        files: [
                            '../../Assets/Admin/lib/modules/angular-nestable/jquery.nestable.js',
                            '../../Assets/Admin/lib/modules/angular-nestable/angular-nestable.js'
                        ]
                    },
                    {
                        name: 'angularBootstrapNavTree',
                        files: [
                            '../../Assets/Admin/lib/modules/angular-bootstrap-nav-tree/abn_tree_directive.js'
                        ]
                    },
                    {
                        name: 'ui.calendar',
                        files: [
                            '../../Assets/Admin/lib/jquery/jquery-ui-1.10.4.custom.js',
                            '../../Assets/Admin/lib/modules/angular-daterangepicker/moment.js',
                            '../../Assets/Admin/lib/jquery/fullcalendar/fullcalendar.js',
                            '../../Assets/Admin/lib/modules/angular-ui-calendar/calendar.js'
                        ]
                    },
                    {
                        name: 'ngGrid',
                        files: [
                            '../../Assets/Admin/lib/modules/ng-grid/ng-grid.min.js',
                            '../../Assets/Admin/lib/modules/ng-grid/ng-grid.css'
                        ]
                    }
                ]
            });
        }
    ]);