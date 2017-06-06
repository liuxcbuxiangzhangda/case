/**
 * Created by Administrator on 2017/5/4.
 */
angular.module("hellosystem",["ui.router"])
    .controller("myCtrol",function ($scope) {
        $scope.people=[{name:'liuxuechun',id:1,company:'china'},
            {name:'lisiying',id:2,company:'e'},
            {name:'hediwei',id:3,company:'a'},
            {name:'zhoulijun',id:4,company:'c'}
        ]
})
    .config(function($stateProvider){
       var helloState={
           name:"hello",
           url:"/hello",
           template:"<hello-component></hello-component>"
       };
       var aboutState={
           name:"about",
           url:"/about",
           template:"<h3>Its the UI-Router Hello Solar System app!</h3>"
       };
       var peopleState={
           name:"people",
           url:"/people",
           template:"<people-component></people-component>",
       };
      /* var personState={
           name:"person",
           url:"",
           template:"<person-component></person-component>",
           resolve: {
               person: function(PeopleService, $transition$) {
                   return PeopleService.getPerson($transition$.params().personId);
               }
       }}*/
       $stateProvider.state(helloState);
       $stateProvider.state(aboutState);
       $stateProvider.state(peopleState);
      /* $stateProvider.state(personState);*/
    })
    .component("helloComponent",{
        template:"<h3>{{$ctrl.greeting}} solar system</h3>"+
                 "<button ng-click='$ctrl.toggle()'>toggle greeting</button>",
        controller:function () {
            this.greeting="hello";
            this.toggle=function () {
                this.greeting=(this.greeting=="hello")?"what":"hello"
            }
        }
    })
    .component("peopleComponent",{
        bindings:{people:"="},/*组件绑定*/
        template: '<h3>Some people:</h3>' +
                     '<ul>' +
                        '  <li ng-repeat="person in $ctrl.people">' +
                        '      {{person.name}}' +
                        '  </li>' +
                       '</ul>'
})
   /* .component("personComponent",{
        template:"<h3>a person!</h3>"+
                 "<span>"+"name:"+{{}}+"ID:"+{{}}+"Company:"+{{}}+
                 "</span>"


    })*/