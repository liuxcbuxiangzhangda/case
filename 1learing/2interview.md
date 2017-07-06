###1、<img>元素的alt和title有什么异同###


> img标签的alt属性是在图片因浏览器兼容、加载失败或地址出错等原因而不显示时为浏览用户所做的代替语言，其性质为该图片的代替;

> img标签的title属性，是表达该图片的一些额外信息，其性质为一种备注或者注释，鼠标过去时显示该段文字，有hover的效果，它可以用在除了base，basefont，head，html，meta，param，script和title之外的所有标签。例如a标签
> 
###2、匿名函数使用场景###
一个函数之所以要有名字，是为了可以在后续重复使用。但是，如果一个函数只用一次，那么就没有必要给它名字了。并且，多一个名字就会多声明一个无用的变量，对命名空间造成不必要的浪费。简洁，一向是编程的一个重要原则
如
`var location = getLocation(a, b);var x = location.getX();print(x);`

改为`print(location.getX());`

匿名函数使用最多的场景是回调函数

###gulp使用4个api和插件和能完成的任务###

> 4个API(gulp.task,gulp.src,gulp.dest,gulp.watch)

> 插件：gulp-load-plugins,gulp-rename,gulp-uglify,gulp-minify-css,gulp-minify-html,gulp-jshint,gulp-concat,gulp-less,gulp-sass,gulp-imagemin,gulp-livereload，先要用npm或者yarn安装在package.js

> gulp可以完成的任务：编译less和sass，压缩css，html,js，图片等，文件合并，js代码检查，自动刷新

> [http://www.cnblogs.com/2050/p/4198792.html](http://www.cnblogs.com/2050/p/4198792.html)
> [http://www.cnblogs.com/lovelyun/p/5372251.html](http://www.cnblogs.com/lovelyun/p/5372251.html)
###工厂模式和构造函数模式的诞生###
> 虽然object构造函数和字面量（var mm={}）可以创建单个对象，但是代码重复量很多

> [http://blog.csdn.net/flyingpig2016/article/details/52939679](http://blog.csdn.net/flyingpig2016/article/details/52939679)
###工厂模式的优缺点###
> 可以创建多个对象，但是不知道对象的类型（这是与构造函数模式最大的不同，构造函数模式创建的对象都有一个constructor属性，这个属性指向构造函数，所以创建的对象自己是谁产生的，而工厂模式创建的对象不知道）
> [http://www.cnblogs.com/lwl8/p/3614586.html](http://www.cnblogs.com/lwl8/p/3614586.html)
###构造函数的优缺点###
> 不能实现对象相同属性和方法的共享
> [http://blog.csdn.net/flyingpig2016/article/details/52939679](http://blog.csdn.net/flyingpig2016/article/details/52939679)
###通过构造函数，创建对象，new操作符要经历的过程（4个）###
> 1.创建一个空对象
> 2.将构造函数的作用域赋给新对象（因为this指向了这个新对象）
> 3.执行构造函数中的代码（为新对象添加属性）
> 4.返回新对象
###构造函数与普通函数的不同###
> 唯一的不同就是调用方式不同，凡是可以通过new创建对象的都是构造函数，不能的就是普通函数
###类，对象，实例的区别###
> 类是对象的细分，对象是类的具体实物（h2o是类，农夫山泉是对象）
###使用require.js的好处###
> [http://www.ruanyifeng.com/blog/2012/11/require_js.html](http://www.ruanyifeng.com/blog/2012/11/require_js.html)




rootscope的理解，闭包的理解，ng_if和ng_show的区别，angular作用域（父子），深拷贝和浅拷贝，this的理解，异步请求优点和缺点，，angular几个重要部分，跨域实现的几种方式，http的组成，js创建对象的几种方式，