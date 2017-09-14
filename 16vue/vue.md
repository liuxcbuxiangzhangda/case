
慕课网：注重项目搭建

[https://github.com/liuxcbuxiangzhangda/vue-demo-muke](https://github.com/liuxcbuxiangzhangda/vue-demo-muke)

技术胖[http://jspang.com/](http://jspang.com/)：注重基础


官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)

git上面的：

[https://github.com/vuejs](https://github.com/vuejs)

[https://vuejs-templates.github.io/webpack/](https://vuejs-templates.github.io/webpack/)



###vue特点###
自带热更新，

mvm框架

继承react的组件化概念，继承angularjs灵活的指令和页面操作方法

使用命名行安装搭建vue工程，省去很多麻烦

###新建项目和搭建环境：###
下载node和git，设置npm镜像（参照nativeApp的教程），全局安装vue-cli（才能使用vue命令）,创建新项目（vue init webpack 项目名称）webpack是项目类型，cd 项目名称，安装所有依赖（npm install），npm run dev，开始项目（只需修改src文件夹中的内容）

去掉配置的严格模式，不然少了空格都报报错
![](https://i.imgur.com/X42rTW1.png)

修改main.js的设置false改为true，方便报错查错

![](https://i.imgur.com/zFuVrAQ.png)

###安装vue的调试工具：vue-devtools###
[http://www.cnblogs.com/mmzuo-798/p/6928532.html](http://www.cnblogs.com/mmzuo-798/p/6928532.html)

###组件###
一个组件就是一个.vue文件（html：展现层，js：model层，css），这个vue文件在webpack打包的时候会被打包成浏览器能识别的html

###vue对象选项##
new Vue（{各字段}）

data:数据

computed：计算属性

methods：方法

watch：监听数据变化

components：注册组件

props：组件之间调用的时候，子组件可以设置属性名

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

v-model：随表单控件类型的不同而不同，只在input select textarea里面用

###组件分类及组件之间的调用，父向子，子向父###
按功能，按结构

父向子传值：在父组件中引用子组件文件，注册子组件components，在子组件中传入props选项，在父组件中使用属性传值，在子组件中就可以使用传入的值;

子向父传递值：$emit,$dispatch...

###全局API###

###注意###
index.html是项目的入口

import(es6的语法)等价于require

组件注册了就可以在html中当标签使用

    new Vue({字段})等价于export default{字段}
    data(){return{}}等价于data:function(){return{}}



webstrom添加模板支持，写代码的时候可以提示
[http://www.jianshu.com/p/142dae4f8b51](http://www.jianshu.com/p/142dae4f8b51)

web储存
![](https://i.imgur.com/kDhsOZQ.png)

![](https://i.imgur.com/pr1hY4w.png)


