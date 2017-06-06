/**
 * Created by Administrator on 2017/5/2.
 */
angular.module("helloWorld",['ui.router'])
    .config(function($stateProvider){
        var helloState={
            /*name：The state is named hello.
             url：When the state is active, the browser’s url will be /hello.
             template：The template: string defines the state’s view. When the state is active, this view will be loaded into a viewport.*/
            name:'hello',
            url:'/hello',
            template:'<h3>hello 页面</h3>'

        };
        var aboutState={
            name:'about',
            url:'/about',
            template:'<h3>about 页面</h3>'

        }
        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);

});