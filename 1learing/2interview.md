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

rootscope的理解，闭包的理解，ng_if和ng_show的区别，angular作用域（父子），深拷贝和浅拷贝，this的理解，异步请求优点和缺点，，angular几个重要部分，跨域实现的几种方式，http的组成