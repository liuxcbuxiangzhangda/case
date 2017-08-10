webpack使用3.0版本

全局安装存放在系统，非全局安装存放在项目的node_modules,yarn的全局安装有问题，要用npm

安装的库：
> yarn add require

> npm install webpack-dev-server -g 必须全局安装，构建本地服务器，自动刷新更改的代码


webpack配置文件：
> require（webpack）

> require（path）

> 进出口文件：一个入口js（把其他的模块js依赖到这个js来），一个出口js（打包好的js），index.html引用出口文件就好了

> 配置devtool，找到出错了的地方对应的源代码的位置，使调试更容易

> 配置webpack-dev-server构建本地服务器，自动刷新更改

> 运行webpack：在packjson文件里面设置start





入门webpack（通过配置文件使用webpack）： 
>webpack3中文版：[http://www.cnblogs.com/afrog/p/7130561.html](http://www.cnblogs.com/afrog/p/7130561.html)
>webpack3英文版： [https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)


> webpack1：[http://www.jianshu.com/p/42e11515c10f](http://www.jianshu.com/p/42e11515c10f)
>[http://www.jianshu.com/p/cd123afa196a](http://www.jianshu.com/p/cd123afa196a)
>[http://www.cnblogs.com/QxQstar/p/5961387.html](http://www.cnblogs.com/QxQstar/p/5961387.html)



webpack-dev-server打包速度加快和实现热替换
>webpack3： [http://www.cnblogs.com/caideyipi/articles/7080010.html](http://www.cnblogs.com/caideyipi/articles/7080010.html)






Loaders（babel）：通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理



3、webpack与gulp，grunt,require区别
> [http://www.cnblogs.com/-walker/p/6056529.html](http://www.cnblogs.com/-walker/p/6056529.html)

4、webpack的英文官方文档