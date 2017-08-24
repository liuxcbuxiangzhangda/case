###DriedFood###
关于nodejs，本质上是一个js的运行环境

官网：[nodejs.org](nodejs.org)

中文官网：[http://nodejs.cn/](http://nodejs.cn/)

nodejs社区：[https://www.npmjs.com/](https://www.npmjs.com/)

解决问题网址：[https://stackoverflow.com](https://stackoverflow.com)

学习视频网（look何）：[http://study.163.com/category/nodejs](http://study.163.com/category/nodejs)

对应代码网站（视频对应）：[http://yuankuwang.com/web/index.php?r=search%2Findex&searchType=0&searchWord=+node.js&restype=0&classify=0#](http://yuankuwang.com/web/index.php?r=search%2Findex&searchType=0&searchWord=+node.js&restype=0&classify=0#)


模块化：避免工作的重复，增加复用，争取一个功能一个模块，促进多人同时编写代码

一，定义模块:
根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性。

二，模块输出：
模块只有一个出口，module.exports对象，我们需要把模块希望输出的内容放入该对象。

    module.exports = {  
    aName: a,  
    bName: b  
    }

三，加载模块：
加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象。

node API
> url
> >url.parse（）:把url地址解析成对象；如果要把query解析成对象，则传入第二个参数true，如果不知道协议的话传入第三个参数trueurl.parse（'地址',true,true）
> >
> >url.format:把对象连接成合法的url地址
> >
> >url.resolve：链接字符串成为合法的url的地址
> 
> querystring:[https://nodejs.org/docs/latest-v0.10.x/api/querystring.html](https://nodejs.org/docs/latest-v0.10.x/api/querystring.html)
> >querystring.stringify();
> >querystring.parse();
> >querstring.escape();
> >querstring.unescape();

1、express
> [http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)

npm install 

npm命令
[http://blog.csdn.net/haidaochen/article/details/8546796](http://blog.csdn.net/haidaochen/article/details/8546796)

> --save指把库的信息写入packjson 
> 
> -v指写入开发环境，packjson.js中devDevlopments开发环境，
> 
> packjson.js中scripts运行要用npm run 名字，但是自带的start和test直接名字，
> 
> 全局安装存在系统，非全局安装存在node-mudel

本地安装
1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。
全局安装
1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。

npm i和yarn命令是安装所有的包