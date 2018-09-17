angular.module('app')
    .directive('danhSachChucVuDirective', DanhSachChucVu);

function DanhSachChucVu() {
    var directive = {
        restrict: 'EACM',
        scope: {
            dsDuocChonXuLy: '=',
            loadDuLieu: '&'
        },
        link: link,
        controller: ['$scope', 'ChucVuService', 'toaster', '$state', '$sce', '$stateParams', '$modal', '$location', 'authService', setDirective],
        templateUrl: '/app/directives/Secure/DanhSachChucVuDirective.html'
    };

    function setDirective($scope, ChucVuService, toaster, $state, $sce, $stateParams, $modal, $location, authService) {
        $scope.formAPI = {
            // Property -----------------------------------------------------------------------------------
            _pagingInfo: {
                filter: $stateParams.filter,
                sort: "CreatedOn DESC",
                page: $stateParams.page,
                pageSize: $stateParams.pageSize,
                reverse: false,
                search: $stateParams.search,
                totalItems: 0,
                maxSize: 3
            },

            _authentication: authService.authentication,

            _xulyCheck: {
                _trangHienTai: null
            },
            // --------------------------------------------------------------------------------------------



            // Method -------------------------------------------------------------------------------------
            //_getFilterValue: function (key) {
            //    var result = null;
            //    if ($stateParams.filter != null) {
            //        var parts = $stateParams.filter.split(" ");
            //        $.each(parts, function (index, value) {
            //            var idx = value.indexOf(key);
            //            if (idx != -1) {
            //                result = value.substring(value.indexOf('=') + 1);
            //                return result;
            //            }
            //        })
            //    }
            //    return result;
            //},

            _reloadPage: function () {
                $scope.formAPI._pagingInfo.page = $stateParams.page;
                $scope.formAPI._pagingInfo.pageSize = $stateParams.pageSize;
                $scope.formAPI._pagingInfo.filter = $stateParams.filter;
                $scope.formAPI._pagingInfo.search = $stateParams.search;
                $scope.formAPI._pageChanged();
            },

            _pageChanged: function () {
                if ($scope.formAPI._authentication.roleName.indexOf('AdminDonVi') > -1)
                    $scope.formAPI._donViIsChoosen = $scope.formAPI._authentication.donViId;

                $state.go('.', {
                    page: $scope.formAPI._pagingInfo.page,
                    pageSize: $scope.formAPI._pagingInfo.pageSize
                },
                    {
                        notify: false
                    });
                this._loadDuLieu();
            },

            _loadDuLieu: function () {
                var searchText = '';
                if (typeof this._pagingInfo.search !== "undefined" && this._pagingInfo.search !== null && this._pagingInfo.search !== "")
                    searchText = "FREETEXT ((Ten), '" + this._pagingInfo.search + "')";

                var searchDonVi = '';
                //if (typeof this._donViIsChoosen !== "undefined" && this._donViIsChoosen !== null)
                //    searchDonVi = 'ThuocDonViId=' + this._donViIsChoosen;

                var qh = '';
                if (searchText != '' && searchDonVi != '')
                    if ($scope.formAPI._authentication.roleName.indexOf('AdminDonVi') > -1)
                        qh = ' and ';
                    else
                        qh = ' and ';
                //qh = ' or ';

                this._pagingInfo.filter = searchText + qh + searchDonVi;


                ChucVuService.Get(this._pagingInfo).then(
                    function (success) {
                        $scope.formAPI._danhSachChucVu = success.data["ApiChucVus"];
                        $scope.formAPI._danhSachDonVi = success.data["ApiDonVis"];
                        $scope.formAPI._pagingInfo.totalItems = success.data["TotalRow"];

                        console.log('success', success);
                        console.log('$scope.formAPI', $scope.formAPI);
                    },
                    function (error) {
                        toaster.pop('error', "Lỗi", "Không lấy được danh sách chức vụ", 3000);
                    });
            },

            _checkPage: function () {
                var ckAll = true;
                if (jQuery.type($scope.formAPI._danhSachChucVu) !== 'undefined' && $scope.formAPI._danhSachChucVu.length != 0)
                    jQuery.each($scope.formAPI._danhSachChucVu, function (index, item) {
                        var idx = $scope.dsDuocChonXuLy.findIndex(i => i.Id == item.Id);
                        if (idx == -1) {
                            ckAll = false;
                        }
                    });
                else
                    ckAll = false;

                if (ckAll)
                    $scope.formAPI._xulyCheck._trangHienTai = true;
                else
                    $scope.formAPI._xulyCheck._trangHienTai = false;
            },

            _checkAll: function () {
                if (!$scope.formAPI._xulyCheck._trangHienTai) {
                    $scope.formAPI._xulyCheck._trangHienTai = true;
                    $scope.formAPI._checkAllItem(true);
                }
                else {
                    $scope.formAPI._xulyCheck._trangHienTai = false;
                    $scope.formAPI._checkAllItem(false);
                }

                console.log('dsDuocChonXuLy', $scope.dsDuocChonXuLy);
            },

            _checkAllItem: function (ischoose) {
                jQuery.each($scope.formAPI._danhSachChucVu, function (index, item) {
                    var idx = $scope.dsDuocChonXuLy.findIndex(i => i.Id == item.Id);
                    if (ischoose) {
                        if (idx == -1)
                            $scope.dsDuocChonXuLy.push(item);
                    } else {
                        if (idx != -1)
                            $scope.dsDuocChonXuLy.splice(idx, 1);
                    }
                });
            },

            _checkChecked: function (id) {
                var idx = $scope.dsDuocChonXuLy.findIndex(i => i.Id == id);
                if (idx == -1)
                    return false;
                else
                    return true;
            },

            _showHideBoxAdvanceSearch: function () {
                $scope.formAPI._showBoxAdvanceSearch = $scope.formAPI._showBoxAdvanceSearch ? false : true;
            },

            //_selectChangeDonVi: function () {
            //    this._loadDuLieu();
            //},
            // --------------------------------------------------------------------------------------------



            // Event --------------------------------------------------------------------------------------
            _onClickBtnCheck: function (item) {
                var idx = $scope.dsDuocChonXuLy.findIndex(i => i.Id == item.Id);
                if (idx == -1)
                    $scope.dsDuocChonXuLy.push(item);
                else
                    $scope.dsDuocChonXuLy.splice(idx, 1);

                $scope.formAPI._checkPage();
            },

            _inputSearchingEnter: function () {
                this._btnSearchClick();
            },

            _btnSearchClick: function () {
                $state.go('.', {
                    page: this._pagingInfo.page,
                    pageSize: this._pagingInfo.pageSize,
                    search: this._pagingInfo.search
                },
                    {
                        notify: false
                    });
                //console.log("search: ", this._pagingInfo.search);
                this._loadDuLieu();
            },

            _btnAdvanceSearchClick: function () {
                $state.go('.', {
                    page: this._pagingInfo.page,
                    pageSize: this._pagingInfo.pageSize,
                    search: this._pagingInfo.search
                },
                    {
                        notify: false
                    });

                $scope.formAPI._showBoxAdvanceSearch = false;
                $scope.formAPI._loadDuLieu();
            },
            // --------------------------------------------------------------------------------------------
        };

        $scope.formAPI._pageChanged();
    };

    function link(scope, element, attrs) {
        scope.loadDuLieu({
            reload: function () {
                scope.formAPI._reloadPage();
                scope.dsDuocChonXuLy = [];
            }
        });
    }

    return directive;
};