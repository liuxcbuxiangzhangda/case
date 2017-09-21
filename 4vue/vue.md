
慕课网：注重项目搭建

[https://github.com/liuxcbuxiangzhangda/vue-demo-muke](https://github.com/liuxcbuxiangzhangda/vue-demo-muke)

技术胖[http://jspang.com/](http://jspang.com/)：注重基础

纯金：[http://www.chungold.com/](http://www.chungold.com/)


官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)

git上面的：

[https://github.com/vuejs](https://github.com/vuejs)

[https://vuejs-templates.github.io/webpack/](https://vuejs-templates.github.io/webpack/)


###学习教程###
es6 webpack

vue基础 vue-cli（vue脚手架） vue-router vuex（状态管理） element（vue的组件库）

vue+vuex+weex+axios（vue与后台结合）

安装：
vue-cli（全局安装 npm install vue-cli -g）

vue-router：搭建脚手架时安装

vuex，element安装在生产环境（npm install vuex和element-ui --save）
###vue特点###
自带热更新，

mvm框架

继承react的组件化概念，继承angularjs灵活的指令和页面操作方法

使用命名行安装搭建vue工程，省去很多麻烦

###新建项目和搭建环境：###
下载node和git——设置npm镜像（参照nativeApp的教程）——全局安装vue-cli（才能使用vue命令）——创建新项目（vue init webpack 项目名称）项目名称不能有大写，webpack是项目类型——cd 项目名称，安装所有依赖（npm install）安装vuex（npm install vuex --save）——npm run dev，开始项目（只需修改src文件夹中的内容）

jspang的项目搭建（详细分析）：[http://jspang.com/2017/04/10/vue-cli/](http://jspang.com/2017/04/10/vue-cli/)

1.在webpack找到入口文件，<style scoped></style> scoped限制只在本模板中css起作用

2.开发完成后，修改build-index.js的路径然后（./）npm run build打包 然后上传到服务器

去掉配置的严格模式，不然少了空格都报报错
![](https://i.imgur.com/X42rTW1.png)

修改main.js的设置false改为true，方便报错查错

![](https://i.imgur.com/zFuVrAQ.png)

###安装vue的调试工具：vue-devtools###
[http://www.cnblogs.com/mmzuo-798/p/6928532.html](http://www.cnblogs.com/mmzuo-798/p/6928532.html)


###vue对象选项##
###模版指令###
###全局API###

###组件###
一个组件就是一个.vue文件（html：展现层，js：model层，css），这个vue文件在webpack打包的时候会被打包成浏览器能识别的html

###组件分类及组件之间的调用，父向子，子向父###
按功能，按结构

父向子传值：在父组件中引用子组件文件，注册子组件components，在子组件中传入props选项，在父组件中使用属性传值，在子组件中就可以使用传入的值;

子向父传递值：$emit,$dispatch...

###vue-router（技术胖教程）###
1.导航：<router-link to=""></router-link>

2.子路由配置

3.参数传递（两种方式，常用router-link ：to）
> 当有子路由时，主路由在index.js中不能设置name属性

4.单页面多路由：一个页面多个<router-view>
> 坑：配置路由是compnents而不是之前的component

5.url传递参数（可以正则，以括号形式传递）

6.重定向redirect，还可以带参数的重定向
> 坑：别名请不要用在path为’/’中，如下代码的别名是不起作用的。
> 
> redirect：redirect是直接改变了url的值
alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。

7.路由过度动画<transition name="">

> in-out:新元素先进入过渡，完成之后当前元素过渡离开。
> 
> out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入

8.mode和404

9.路由中的钩子函数

> mode的两个值：histroy(去掉锚点) hash


10.编程式导航
> this.$router.go(-1) 和 this.$router.go(1)
> 
> this.$router.push(‘/xxx ‘) 指定跳转

###vuex：不要过度使用，能传递参数就传递参数，公用的才使用vuex###
1.状态对象赋值给内部对象（把stroe.js中的值赋给模板里data），三种方法
> 通过computed的计算属性直接赋值
> 
> 通过mapState的对象来赋值
> 
> 通过mapState的数组来赋值
> 
> 坑：import {mapState}而不是mapState

2.mutations 改变状态对象
> 传值
> 
> 简化模板的使用：
> 
    import { mapState,mapMutations } from 'vuex
	methods:mapMutations([
	        'add','reduce'
	]),'

3.getters

4.actions(与mutations作用差不多但是actions支持异步)

5.模块组
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


