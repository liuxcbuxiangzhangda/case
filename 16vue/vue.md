[http://jspang.com/](http://jspang.com/)

慕课网

官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)

git上面的：[https://vuejs-templates.github.io/webpack/](https://vuejs-templates.github.io/webpack/)


###vue特点###
自带热更新，

mvm框架

继承react的组件化概念，继承angularjs灵活的指令和页面操作方法

使用命名行安装搭建vue工程，省去很多麻烦

###搭建环境：###
下载node和git，设置npm镜像（参照nativeApp的教程），全局安装vue-cli（才能使用vue命令）,创建新项目（vue init webpack 项目名称）webpack是项目类型，安装所有依赖（npm install）

###组件###
一个组件就是一个.vue文件（html：展现层，js：model层，css），这个vue文件在webpack打包的时候会被打包成浏览器能识别的html

###vue对象重要字段##
new Vue（{各字段}）

data:数据

methods：方法

watch：监听数据变化

###模版指令###
写在html中的。vue对象中的设置通过指令进行关联的

v-text：

v-html：

{{}}：

v-if：直接不渲染

v-show：渲染了，只不过通过display：none隐藏

v-for：列表循环渲染

注：visibility和diaplay:none,ng-if和ng-show,v-if和v-show,v-for和ng-reapeat区别

注：{{}}是v-text的简写，v-html可以识别html标签

v-on：事件绑定 简写@

v-bind：属性绑定 ：class和：src简写

###注意###
index.html是项目的入口

import(es6的语法)等价于require

组件注册了就可以在html中当标签使用

    new Vue({字段})等价于export default{字段}
    data(){return{}}等价于data:function(){return{}}