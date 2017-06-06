/**
 * Created by Administrator on 2017/4/26.
 */
/**
 * Created by Administrator on 2017/4/20.
 */
/**
 * Created by Administrator on 2017/4/17.
 */
var myapp=angular.module("myapp",[]);
myapp.directive('tabs', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: [ "$scope","$http" ,function($scope,$http) {
            /*设置默认展示的省，市，区*/
            $scope.showPro="北京市";
            $scope.showProId="11";
            $scope.showCi="市辖区";
            $scope.showCiId="01";
            $scope.showDi="东城区";
            $scope.showDiId="01";
            /*省对应的市，市对应的区县数组*/
            $scope.cis=[];
            $scope.Dis=[];
            /*获取省的数据*/
            $http({
                method: 'GET',
                url: 'js/ProJson.json'
            }).then(function successCallback(response) {
                $scope.pro=response.data.province;
            }, function errorCallback(response) {
                alert("获取省份数据失败")
            });
            /*获取市数据*/
            $http({
                method: 'GET',
                url: 'js/CityJson.json'
            }).then(function successCallback(response) {
                $scope.ci=response.data.city;
                /*默认北京市对应的市*/
                angular.forEach( $scope.ci,function (data) {
                    if(data.province=="11"){
                        $scope.cis.push(data);
                    }
                });
            }, function errorCallback(response) {
                alert("获取市级数据失败")
            });
            /*获取区县的数据*/
            $http({
                method: 'GET',
                url: 'js/DistrictJson.json'
            }).then(function successCallback(response) {
                $scope.Di=response.data.District;
                /*默认北京市市辖区对应的区县*/
                angular.forEach($scope.Di,function (data) {
                    if(data.province=="11"&&data.city=="01"){
                        $scope.Dis.push(data);
                    }
                });
            }, function errorCallback(response) {
                alert("获取市级数据失败")
            });
            /*点击选择省*/
            $scope.chosePro=function ($event) {
                $scope.showPro=angular.element($event.target).html();/*展示选择的省*/
                $scope.showProId=$event.target.value;/*获取所选择省的id*/
                angular.element($event.target).addClass(".tabli");
                $scope.cis=[];/*清空数组*/
                /*选择省对应的市*/
                angular.forEach( $scope.ci,function (data) {
                    if(data.province==$scope.showProId){
                        $scope.cis.push(data);
                    }
                });
                $scope.showCi="请选择";
                $scope.restChange(0);
            };
            /*点击选择市*/
            $scope.choseCity=function ($event) {
                $scope.showCi=angular.element($event.target).html()  /*展示所选择市*/
                $scope.showCiId=$event.target.value;/*获取所选择市的id*/
                console.log($scope.showCiId);
                $scope.Dis=[];/*清空数组*/
                /*选择省对应的区县*/
                angular.forEach($scope.Di,function (data) {
                    if(data.province==$scope.showProId&&data.city==$scope.showCiId){
                        $scope.Dis.push(data);
                    }
                });
                $scope.showDi="请选择";
                $scope.restChange(1);
            }
            /*点击选择区县*/
            $scope.choseDistrict=function ($event) {
                $scope.showDi=angular.element($event.target).html();  /*展示所选择区县*/
            };
            /*点击nav时展示不同的nav和内容*/
            $scope.select = function($event,val) {
                $(".nav-tabs li").removeClass("active");
                $(".tab-content .tab-pane").removeClass("active");
                angular.element($event.target).parent().addClass("active");
                $scope.selected=val;
            };
            /*点击选择具体项时展示不同的nav和内容*/
            $scope.restChange=function (n) {
                $(".nav-tabs li").removeClass("active");
                $(".tab-content .tab-pane").removeClass("active");
                $(".nav-tabs li").eq(n+1).addClass("active");
                $(".tab-content .tab-pane").eq(n+1).addClass("active");
                $(".nav-tabs li").eq(n+1).css("display","block");
                $(".nav-tabs li").eq(n+2).css("display","none");
            };
        }],
        template:
        '<div class="tabbable">' +
        '<ul class="nav nav-tabs">' +
        '<li class="active" ng-click="select($event,1)">'+
        '<a href="" >{{showPro}}</a>' +
        '</li>' +
        '<li  ng-click="select($event,2)">'+
        '<a href="" >{{showCi}}</a>' +
        '</li>' +
        '<li  ng-click="select($event,3)">'+
        '<a href="" >{{showDi}}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-content">' +
            '<div class="tab-pane active" ng-class="{active: selected==1}" >'+
                '<ul>'+
                   '<li ng-repeat="P in pro" value="{{P.province}}" ng-click="chosePro($event)">{{P.name}}</li>'+
                '</ul>'+
            '</div>'+
            '<div class="tab-pane" ng-class="{active: selected==2}" >'+
                '<ul>'+
                    '<li ng-repeat="C in cis" value="{{C.city}}" ng-click="choseCity($event)">{{C.name}}</li>'+
                '</ul>'+
            '</div>'+
             '<div class="tab-pane" ng-class="{active: selected==3}" >'+
                '<ul>'+
                    '<li ng-repeat="D in Dis" value="{{D.country}}" ng-click="choseDistrict($event)">{{D.name}}</li>'+
                '</ul>'+
            '</div>'+
        '</div>' +
        '</div>',
        replace: true
    };
});






