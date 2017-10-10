###es6环境搭建（jspang的es6教程）###
1.es6目前只有chrome支持，所以需要环境来转换成es5。gulp,webpack,babel都可以转换，下面的环境是babel转换

2.src文件里面写es6的文件，dist文件里面装转换后的es5文件

3.index.html应该引用dist里面的文件

4.npm init -y初始化项目，得到package.json文件

5.安装依赖
> npm install -g babel-cli
> 
> npm install --save-dev babel-preset-es2015 babel-cli

6.根目录新建.babelrc文件

7.输入命令转换（可以在package.json中简化）
> babel src/index.js -o dist/index.js


###干货常识###

1.变量：let const与var的区别

2.解构赋值（左右形式要一致才能成功赋值）：数组的解构赋值，字符串的解构赋值，对象的解构赋值
> 数组解构默认值：注意null和undefined的区别
> 
> 对象解构和数组解构不同的是：数组是按次序解构，对象是按对象的key值来解构的
> 如果先申明了变量，再解构需要用到圆括号

函数：可以为参数指定默认值，