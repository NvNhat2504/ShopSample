
'use strict';
angular.module('app')
    .run(
    [
        '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
    )
    .config(
    [
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider
                .otherwise('/home');
            $stateProvider

                //--> Trang chủ
                .state('home', {
                    url: '/home',
                    templateUrl: '../../App/Views/homeView.html',
                    ncyBreadcrumb: {
                        label: 'Trang chủ',
                        description: ''
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/charts/sparkline/jquery.sparkline.js',
                                        '../../Assets/Admin/lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.resize.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.pie.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                        '../../App/Controllers/ShareCtrl/dashboard.js',
                                        '../../App/Directives/ShareDirec/realtimechart.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                //--> Danh mục sản phẩm
                .state('productCategories', {
                    url: '/productcategories/?page&pageSize',
                    params: {
                        page: 1,
                        pageSize: 10
                    },
                    templateUrl: '../../App/Views/Products/productCategoriesView.html',
                    ncyBreadcrumb: {
                        label: 'Sản phẩm',
                        description: 'Danh mục sản phẩm'
                    },
                    resolve: {
                        deps:
                        [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('toaster').then(
                                    function () {
                                        return $ocLazyLoad.load({
                                            serie: true,
                                            files: [
                                                '../../Assets/Admin/lib/jquery/datatable/dataTables.bootstrap.css',
                                                '../../Assets/Admin/lib/jquery/datatable/jquery.dataTables.min.js',
                                                '../../Assets/Admin/lib/jquery/datatable/ZeroClipboard.js',
                                                '../../Assets/Admin/lib/jquery/datatable/dataTables.tableTools.min.js',
                                                '../../Assets/Admin/lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                '../../App/Services/ShareServ/apiService.js',
                                                '../../App/Services/productCategoriesServ.js',
                                                '../../App/Controllers/ProductCategoriesCtrl.js'
                                            ]
                                        });
                                    }
                                );
                            }
                        ]
                    }
                })

                .state('productCategory', {
                    url: '/productcategory/?id',
                    params: {
                        id: 0
                    },
                    templateUrl: '../../App/Views/Products/productCategory.html',
                    ncyBreadcrumb: {
                        label: 'Sản phẩm',
                        description: 'Thao tác danh mục sản phẩm'
                    },
                    resolve: {
                        deps:
                        [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('toaster').then(
                                    function () {
                                        return $ocLazyLoad.load({
                                            serie: true,
                                            files: [
                                                '../../App/Services/ShareServ/apiService.js',
                                                '../../App/Services/ShareServ/commonService.js',
                                                '../../App/Services/productCategoriesServ.js',
                                                '../../App/Controllers/ProductCategoriesCtrl.js'
                                            ]
                                        });
                                    }
                                );
                            }
                        ]
                    }
                })
                //--> Danh sách sản phẩm
                .state('products', {
                    url: '/products',
                    templateUrl: '../../App/Views/productsView.html',
                    ncyBreadcrumb: {
                        label: 'Sản phẩm',
                        description: 'Danh sách sản phẩm'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Controllers/ShareCtrl/nggrid.js',
                                        '../../Assets/Admin/lib/jquery/datatable/dataTables.bootstrap.css',
                                        '../../Assets/Admin/lib/jquery/datatable/jquery.dataTables.min.js',
                                        '../../Assets/Admin/lib/jquery/datatable/ZeroClipboard.js',
                                        '../../Assets/Admin/lib/jquery/datatable/dataTables.tableTools.min.js',
                                        '../../Assets/Admin/lib/jquery/datatable/dataTables.bootstrap.min.js',
                                        '../../App/Controllers/ShareCtrl/datatable.js'
                                    ]
                                });
                            }
                        ]
                    }
                })





                .state('databoxes', {
                    url: '/databoxes',
                    templateUrl: '../../App/Views/ShareView/databoxes.html',
                    ncyBreadcrumb: {
                        label: 'Databoxes',
                        description: 'beyond containers'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Directives/ShareDirec/realtimechart.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.resize.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.selection.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.stack.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.time.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.pie.js',
                                        '../../Assets/Admin/lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                        '../../Assets/Admin/lib/jquery/charts/chartjs/chart.js',
                                        '../../Assets/Admin/lib/jquery/charts/morris/morris.js',
                                        '../../Assets/Admin/lib/jquery/charts/sparkline/jquery.sparkline.js',
                                        '../../Assets/Admin/lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                        '../../App/Controllers/ShareCtrl/databoxes.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('widgets', {
                    url: '/widgets',
                    templateUrl: '../../App/Views/ShareView/widgets.html',
                    ncyBreadcrumb: {
                        label: 'Widgets',
                        description: 'flexible containers'
                    }
                })
                .state('elements', {
                    url: '/elements',
                    templateUrl: '../../App/Views/ShareView/elements.html',
                    ncyBreadcrumb: {
                        label: 'UI Elements',
                        description: 'Basics'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Controllers/ShareCtrl/pagination.js',
                                        '../../App/Controllers/ShareCtrl/progressbar.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('fontawesome', {
                    url: '/fontawesome',
                    templateUrl: '../../App/Views/ShareView/font-awesome.html',
                    ncyBreadcrumb: {
                        label: 'FontAwesome',
                        description: 'Iconic Fonts'
                    }
                })
                .state('glyphicons', {
                    url: '/glyphicons',
                    templateUrl: '../../App/Views/ShareView/glyph-icons.html',
                    ncyBreadcrumb: {
                        label: 'GlyphIcons',
                        description: 'Sharp and clean symbols'
                    }
                })
                .state('typicons', {
                    url: '/typicons',
                    templateUrl: '../../App/Views/ShareView/typicons.html',
                    ncyBreadcrumb: {
                        label: 'Typicons',
                        description: 'Vector icons'
                    }
                })
                .state('weathericons', {
                    url: '/weathericons',
                    templateUrl: '../../App/Views/ShareView/weather-icons.html',
                    ncyBreadcrumb: {
                        label: 'Weather Icons',
                        description: 'Beautiful forcasting icons'
                    }
                })
                .state('tabs', {
                    url: '/tabs',
                    templateUrl: '../../App/Views/ShareView/tabs.html',
                    ncyBreadcrumb: {
                        label: 'Tabs',
                        description: 'Tabs and Accordions'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Controllers/ShareCtrl/accordion.js',
                                        '../../App/Controllers/ShareCtrl/tab.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('alerts', {
                    url: '/alerts',
                    templateUrl: '../../App/Views/ShareView/alerts.html',
                    ncyBreadcrumb: {
                        label: 'Alerts',
                        description: 'Tooltips and Notifications'
                    },
                    resolve: {
                        deps:
                        [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('toaster').then(
                                    function () {
                                        return $ocLazyLoad.load({
                                            serie: true,
                                            files: [
                                                '../../App/Controllers/ShareCtrl/alert.js',
                                                '../../App/Controllers/ShareCtrl/toaster.js'
                                            ]
                                        }
                                        );
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('modals', {
                    url: '/modals',
                    templateUrl: '../../App/Views/ShareView/modals.html',
                    ncyBreadcrumb: {
                        label: 'Modals',
                        description: 'Modals and Wells'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Controllers/ShareCtrl/modal.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('buttons', {
                    url: '/buttons',
                    templateUrl: '../../App/Views/ShareView/buttons.html',
                    ncyBreadcrumb: {
                        label: 'Buttons'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Controllers/ShareCtrl/button.js',
                                        '../../App/Controllers/ShareCtrl/dropdown.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('nestablelist', {
                    url: '/nestablelist',
                    templateUrl: '../../App/Views/ShareView/nestable-list.html',
                    ncyBreadcrumb: {
                        label: 'Nestable Lists',
                        description: 'Dragable list items'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['ng-nestable']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/nestable.js'
                                                ]
                                            });
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('treeview', {
                    url: '/treeview',
                    templateUrl: '../../App/Views/ShareView/treeview.html',
                    ncyBreadcrumb: {
                        label: 'Treeview',
                        description: "Fuel UX's tree"
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['angularBootstrapNavTree']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/treeview.js'
                                                ]
                                            });
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('simpletables', {
                    url: '/simpletables',
                    templateUrl: '../../App/Views/ShareView/tables-simple.html',
                    ncyBreadcrumb: {
                        label: 'Tables',
                        description: 'simple and responsive tables'
                    }
                })
                .state('datatables', {
                    url: '/datatables',
                    templateUrl: '../../App/Views/ShareView/tables-data.html',
                    ncyBreadcrumb: {
                        label: 'Datatables',
                        description: 'jquery plugin for data management'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['ngGrid']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/nggrid.js',
                                                    '../../Assets/Admin/lib/jquery/datatable/dataTables.bootstrap.css',
                                                    '../../Assets/Admin/lib/jquery/datatable/jquery.dataTables.min.js',
                                                    '../../Assets/Admin/lib/jquery/datatable/ZeroClipboard.js',
                                                    '../../Assets/Admin/lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    '../../Assets/Admin/lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    '../../App/Controllers/ShareCtrl/datatable.js'
                                                ]
                                            });
                                    }
                                );

                            }
                        ]
                    }

                })
                .state('formlayout', {
                    url: '/formlayout',
                    templateUrl: '../../App/Views/ShareView/form-layout.html',
                    ncyBreadcrumb: {
                        label: 'Form Layouts'
                    }
                })
                .state('forminputs', {
                    url: '/forminputs',
                    templateUrl: '../../App/Views/ShareView/form-inputs.html',
                    ncyBreadcrumb: {
                        label: 'Form Inputs'
                    }
                })
                .state('formpickers', {
                    url: '/formpickers',
                    templateUrl: '../../App/Views/ShareView/form-pickers.html',
                    ncyBreadcrumb: {
                        label: 'Form Pickers',
                        description: 'Data Pickers '
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['ui.select', 'ngTagsInput', 'daterangepicker', 'vr.Directives.slider', 'minicolors']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/select2.js',
                                                    '../../App/Controllers/ShareCtrl/tagsinput.js',
                                                    '../../App/Controllers/ShareCtrl/datepicker.js',
                                                    '../../App/Controllers/ShareCtrl/timepicker.js',
                                                    '../../App/Controllers/ShareCtrl/daterangepicker.js',
                                                    '../../Assets/Admin/lib/jquery/fuelux/spinbox/fuelux.spinbox.js',
                                                    '../../Assets/Admin/lib/jquery/knob/jquery.knob.js',
                                                    '../../Assets/Admin/lib/jquery/textarea/jquery.autosize.js',
                                                    '../../App/Controllers/ShareCtrl/slider.js',
                                                    '../../App/Controllers/ShareCtrl/minicolors.js'
                                                ]
                                            });
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('formwizard', {
                    url: '/formwizard',
                    templateUrl: '../../App/Views/ShareView/form-wizard.html',
                    ncyBreadcrumb: {
                        label: 'Form Wizard'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/fuelux/wizard/wizard-custom.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('formvalidation', {
                    url: '/formvalidation',
                    templateUrl: '../../App/Views/ShareView/form-validation.html',
                    ncyBreadcrumb: {
                        label: 'Form Validation',
                        description: 'Bootstrap Validator'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Controllers/ShareCtrl/validation.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('formeditors', {
                    url: '/formeditors',
                    templateUrl: '../../App/Views/ShareView/form-editors.html',
                    ncyBreadcrumb: {
                        label: 'Form Editors'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['textAngular']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/textangular.js'
                                                ]
                                            });
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('flot', {
                    url: '/flot',
                    templateUrl: '../../App/Views/ShareView/flot.html',
                    ncyBreadcrumb: {
                        label: 'Flot Charts',
                        description: 'attractive plotting'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../App/Directives/ShareDirec/realtimechart.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.resize.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.selection.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.stack.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.time.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.pie.js',
                                        '../../App/Controllers/ShareCtrl/flot.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('morris', {
                    url: '/morris',
                    templateUrl: '../../App/Views/ShareView/morris.html',
                    ncyBreadcrumb: {
                        label: 'Morris Charts',
                        description: 'simple & flat charts'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                        '../../Assets/Admin/lib/jquery/charts/morris/morris.js',
                                        '../../App/Controllers/ShareCtrl/morris.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('sparkline', {
                    url: '/sparkline',
                    templateUrl: '../../App/Views/ShareView/sparkline.html',
                    ncyBreadcrumb: {
                        label: 'Sparkline',
                        description: 'inline charts'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/charts/sparkline/jquery.sparkline.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('easypiechart', {
                    url: '/easypiechart',
                    templateUrl: '../../App/Views/ShareView/easypiechart.html',
                    ncyBreadcrumb: {
                        label: 'Easy Pie Charts',
                        description: 'lightweight charts'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/charts/easypiechart/jquery.easypiechart.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('chartjs', {
                    url: '/chartjs',
                    templateUrl: '../../App/Views/ShareView/chartjs.html',
                    ncyBreadcrumb: {
                        label: 'ChartJS',
                        description: 'Cool HTML5 Charts'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/charts/chartjs/chart.js',
                                        '../../App/Controllers/ShareCtrl/chartjs.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('profile', {
                    url: '/profile',
                    templateUrl: '../../App/Views/ShareView/profile.html',
                    ncyBreadcrumb: {
                        label: 'User Profile'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.js',
                                        '../../Assets/Admin/lib/jquery/charts/flot/jquery.flot.resize.js',
                                        '../../App/Controllers/ShareCtrl/profile.js'
                                    ]
                                });
                            }
                        ]
                    }
                })
                .state('inbox', {
                    url: '/inbox',
                    templateUrl: '../../App/Views/ShareView/inbox.html',
                    ncyBreadcrumb: {
                        label: 'Beyond Mail'
                    }
                })
                .state('messageview', {
                    url: '/viewmessage',
                    templateUrl: '../../App/Views/ShareView/message-view.html',
                    ncyBreadcrumb: {
                        label: 'Veiw Message'
                    }
                })
                .state('messagecompose', {
                    url: '/composemessage',
                    templateUrl: '../../App/Views/ShareView/message-compose.html',
                    ncyBreadcrumb: {
                        label: 'Compose Message'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['textAngular']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/textangular.js'
                                                ]
                                            });
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('calendar', {
                    url: '/calendar',
                    templateUrl: '../../App/Views/ShareView/calendar.html',
                    ncyBreadcrumb: {
                        label: 'Full Calendar'
                    },
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['ui.calendar']).then(
                                    function () {
                                        return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    '../../App/Controllers/ShareCtrl/fullcalendar.js'
                                                ]
                                            });
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('timeline', {
                    url: '/timeline',
                    templateUrl: '../../App/Views/ShareView/timeline.html',
                    ncyBreadcrumb: {
                        label: 'Responsive Timeline'
                    }
                })
                .state('pricing', {
                    url: '/pricing',
                    templateUrl: '../../App/Views/ShareView/pricing.html',
                    ncyBreadcrumb: {
                        label: 'Pricing Tables'
                    }
                })
                .state('invoice', {
                    url: '/invoice',
                    templateUrl: '../../App/Views/ShareView/invoice.html',
                    ncyBreadcrumb: {
                        label: 'Invoice Page'
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: '../../App/Views/ShareView/login.html',
                    ncyBreadcrumb: {
                        label: 'Login'
                    }
                })
                .state('register', {
                    url: '/register',
                    templateUrl: '../../App/Views/ShareView/register.html',
                    ncyBreadcrumb: {
                        label: 'Register'
                    }
                })
                .state('lock', {
                    url: '/lock',
                    templateUrl: '../../App/Views/ShareView/lock.html',
                    ncyBreadcrumb: {
                        label: 'Lock Screen'
                    }
                })
                .state('typography', {
                    url: '/typography',
                    templateUrl: '../../App/Views/ShareView/typography.html',
                    ncyBreadcrumb: {
                        label: 'Typography'
                    }
                })
                .state('error404', {
                    url: '/error404',
                    templateUrl: '../../App/Views/ShareView/error-404.html',
                    ncyBreadcrumb: {
                        label: 'Error 404 - The page not found'
                    }
                })
                .state('error500', {
                    url: '/error500',
                    templateUrl: '../../App/Views/ShareView/error-500.html',
                    ncyBreadcrumb: {
                        label: 'Error 500 - something went wrong'
                    }
                })
                .state('blank', {
                    url: '/blank',
                    templateUrl: '../../App/Views/ShareView/blank.html',
                    ncyBreadcrumb: {
                        label: 'Blank Page'
                    }
                })
                .state('grid', {
                    url: '/grid',
                    templateUrl: '../../App/Views/ShareView/grid.html',
                    ncyBreadcrumb: {
                        label: 'Bootstrap Grid'
                    }
                })
                .state('versions', {
                    url: '/versions',
                    templateUrl: '../../App/Views/ShareView/versions.html',
                    ncyBreadcrumb: {
                        label: 'BeyondAdmin Versions'
                    }
                })
                .state('mvc', {
                    url: '/mvc',
                    templateUrl: '../../App/Views/ShareView/mvc.html',
                    ncyBreadcrumb: {
                        label: 'BeyondAdmin Asp.Net MVC Version'
                    }
                });
        }
    ]
    );