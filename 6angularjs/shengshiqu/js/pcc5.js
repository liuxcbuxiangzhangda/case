/**
 * Created by Administrator on 2017/5/19.
 */
ttsApp.directive('pcc', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: false,
        controller: ["$scope", "$http", function($scope, $http) {
            /*设置默认展示的省，市，区*/
            init();

            function init() {
                /*省对应的市，市对应的区县数组*/
                $scope.cis = [];
                $scope.Dis = [];

                /*默认input框内显示的内容*/
                if ($scope.areaCode != null) {
                    var ids = $scope.areaCode.split(',');
                    $scope.showProId = ids[0];
                    $scope.showCiId = ids[1];
                    $scope.showDiId = ids[2];
                } else {
                    $scope.showPro = "北京市";
                    $scope.showProId = "11";
                    $scope.showCi = "市辖区";
                    $scope.showCiId = "01";
                    $scope.showDi = "东城区";
                    $scope.showDiId = "01";
                    $scope.areaCode = [$scope.showProId, $scope.showCiId, $scope.showDiId].join(',');
                }

                $scope.showAllArray = [];
                /*获取省的数据*/
                $http({
                    method: 'GET',
                    url: '../../mocks/ProJson.json'
                }).then(function successCallback(response) {
                    $scope.pro = response.data.province;
                    angular.forEach(response.data.province, function(data) {
                        if (data.province == $scope.showProId) {
                            $scope.showPro = data.name;
                        }
                    });

                }, function errorCallback(response) {
                    alert("获取省份数据失败")
                });
                /*获取市数据*/
                $http({
                    method: 'GET',
                    url: '../../mocks/CityJson.json'
                }).then(function successCallback(response) {
                    $scope.ci = response.data.city;
                    /*默认北京市对应的市*/
                    angular.forEach($scope.ci, function(data) {
                        if (data.province == $scope.showProId) {
                            $scope.cis.push(data);
                        }
                        if (data.province == $scope.showProId && data.city == $scope.showCiId) {
                            $scope.showCi = data.name;
                        }
                    });
                }, function errorCallback(response) {
                    alert("获取市级数据失败")
                });

                /*获取区县的数据*/
                $http({
                    method: 'GET',
                    url: '../../mocks/DistrictJson.json'
                }).then(function successCallback(response) {
                    $scope.Di = response.data.District;
                    /*默认北京市市辖区对应的区县*/
                    angular.forEach($scope.Di, function(data) {
                        if (data.province == $scope.showProId && data.city == $scope.showCiId) {
                            $scope.Dis.push(data);
                        }
                        if (data.province == $scope.showProId && data.city == $scope.showCiId && data.country == $scope.showDiId) {
                            $scope.showDi = data.name;
                        }
                    });
                    $scope.showAll = $scope.showPro + $scope.showCi + $scope.showDi;
                }, function errorCallback(response) {
                    alert("获取市级数据失败")
                });
            }
            $scope.initPcc = init;

            /*点击选择省*/
            $scope.chosePro = function($event) {
                $scope.showPro = angular.element($event.target).html(); /*展示选择的省*/
                $scope.showProId = $event.target.getAttribute('value'); /*获取所选择省的id*/
                $scope.cis = []; /*清空数组*/
                /*  $event.stopPropagation();/!*阻止冒泡*!/*/
                /*选择省对应的市*/
                angular.forEach($scope.ci, function(data) {
                    if (data.province == $scope.showProId) {
                        $scope.cis.push(data);
                    }
                });
                $scope.showCi = "请选择";
                $scope.restChange(1);
            };

            /*点击选择市*/
            $scope.choseCity = function($event) {
                $scope.showCi = angular.element($event.target).html() /*展示所选择市*/
                $scope.showCiId = $event.target.getAttribute('value'); /*获取所选择市的id*/
                $scope.Dis = []; /*清空数组*/
                /*选择省对应的区县*/
                angular.forEach($scope.Di, function(data) {
                    if (data.province == $scope.showProId && data.city == $scope.showCiId) {
                        $scope.Dis.push(data);
                        $scope.showCiId = data.city;
                    }
                });
                $scope.showDi = "请选择";
                $scope.restChange(2);
            };
            /*点击选择区县*/
            $scope.choseDistrict = function($event) {
                $scope.showDi = angular.element($event.target).html(); /*展示所选择区县*/
                $scope.showDiId = $event.target.getAttribute('value'); /*获取所选择区县的id*/
                $scope.showAll = $scope.showPro + $scope.showCi + $scope.showDi;
                $scope.areaCode = [$scope.showProId, $scope.showCiId, $scope.showDiId].join(',');
                $scope.tabbableStyleDis();
                angular.element($event.target).parent().parent().parent().parent().hide();
            };

            /*tabbable隐藏与显示*/
            $scope.tabbableStyleShow = function() {
                $scope.tabbableStyle = {
                    "display": "block"
                };
            };
            $scope.tabbableStyleDis = function() {
                $scope.tabbableStyle = {
                    "display": "none"
                };
            };
            /*active的消失和出现*/
            $scope.ppcSelected = 1; /*默认出现状态*/
            $scope.changeActive = function(n) {
                $scope.ppcSelected = n;
            };
            /*点击选择具体项时展示不同的nav和内容*/
            $scope.restChange = function(n) {
                $scope.changeActive(n + 1);
                angular.element(".nav-tabs li").eq(n).css("display", "block");
                angular.element(".nav-tabs li").eq(n + 1).css("display", "none");
            };
            /*阻止冒泡*/
            $scope.bubbleUp = function($event) {
                $event.stopPropagation();
            }

        }],
        link: function($scope, element, attrs) {
            $(element).prev('.gui-input').on('click', function() {
                $(element).show();
            });
            $(window).on('click', function() {
                $(element).hide();
                // $scope.tabbableStyleDis();
                // $(element).css('display', 'none');
            });
        },
        template: '<div class="tabbable" ng-style="tabbableStyle" >' +
        '<ul class="nav nav-tabs" >' +
        '<li ng-class="{active: ppcSelected==1}"  ng-click="changeActive(1)">' +
        '<a href="" >{{showPro}}</a>' +
        '</li>' +
        '<li ng-class="{active: ppcSelected==2}"  ng-click="changeActive(2)">' +
        '<a href="" >{{showCi}}</a>' +
        '</li>' +
        '<li ng-class="{active: ppcSelected==3}"  ng-click="changeActive(3)">' +
        '<a href="" >{{showDi}}</a>' +
        '</li>' +
        '</ul >' +
        '<div class="tab-content " >' +
        '<div class="tab-pane" ng-class="{active: ppcSelected==1}" >' +
        '<ul style="width: 100%">' +
        '<li ng-repeat="P in pro" value="{{P.province}}" ng-click="chosePro($event)">{{P.name}}</li>' +
        '</ul>' +
        '</div>' +
        '<div class="tab-pane" ng-class="{active: ppcSelected==2}" >' +
        '<ul>' +
        '<li ng-repeat="C in cis" value="{{C.city}}" ng-click="choseCity($event)">{{C.name}}</li>' +
        '</ul>' +
        '</div>' +
        '<div class="tab-pane" ng-class="{active: ppcSelected==3}" >' +
        '<ul>' +
        '<li ng-repeat="D in Dis" value="{{D.country}}" ng-click="choseDistrict($event)">{{D.name}}</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>',
        replace: true
    }

});