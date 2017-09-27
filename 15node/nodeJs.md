###DriedFood###
关于nodejs，本质上是一个js的运行环境

官网：[nodejs.org](nodejs.org)

中文官网：[http://nodejs.cn/](http://nodejs.cn/)

nodejs社区：[https://www.npmjs.com/](https://www.npmjs.com/)

解决问题网址：[https://stackoverflow.com](https://stackoverflow.com)

学习视频网（look何）：[http://study.163.com/category/nodejs](http://study.163.com/category/nodejs)

对应代码网站（视频对应）：[http://yuankuwang.com/web/index.php?r=search%2Findex&searchType=0&searchWord=+node.js&restype=0&classify=0#](http://yuankuwang.com/web/index.php?r=search%2Findex&searchType=0&searchWord=+node.js&restype=0&classify=0#)

安装node-sass失败处理方案：[http://www.mikel.cn/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/javascript/node-sass-%E5%AE%89%E8%A3%85%E5%A4%B1%E8%B4%A5%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95-%E5%BF%97%E6%96%87%E5%B7%A5%E4%BD%9C%E5%AE%A4.html](http://www.mikel.cn/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/javascript/node-sass-%E5%AE%89%E8%A3%85%E5%A4%B1%E8%B4%A5%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95-%E5%BF%97%E6%96%87%E5%B7%A5%E4%BD%9C%E5%AE%A4.html)


npm安装模块：[http://www.ruanyifeng.com/blog/2016/01/npm-install.html](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)

安装淘宝镜像：

npm config set registry https://registry.npm.taobao.org --global

npm config set disturl https://npm.taobao.org/dist --global

模块化：避免工作的重复，增加复用，争取一个功能一个模块，促进多人同时编写代码

1.定义模块:
根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性。

2.模块输出：
模块只有一个出口，module.exports对象，我们需要把模块希望输出的内容放入该对象。

    module.exports = {  
    aName: a,  
    bName: b  
    }

3.加载模块：
加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象。

工具模块：
> 文件系统：fs
> >代开文件：fs.open()
> 
> >获取文件信息：fs.stat()
> 
> >写入文件：fs.writeFile()
> 
> >读取文件：fs.read()
> 
> >关闭文件：fs.close()
> 
> >截取文件：fs.ftruncate()
> 
> >删除文件：fs.unlink（）
> 
> >创建文件目录：fs.mkdir（）
> 
> >读取文件目录：fs.readdir（）
> 
> >删除文件目录：fs.rmdir（）

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

> --save指把库的信息写入packjson.js中Devlopments生产环境 
> 
> -v指写入开发环境，packjson.js中devDevlopments开发环境，
> 
> packjson.js中scripts运行要用npm run 名字，但是自带的start和test直接名字，
> 
> 全局安装（-g）存在系统，非全局安装存在node-mudel

本地安装
1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。
全局安装
1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。

npm i和yarn命令是安装所有的包