
Webpack就是学习配置文件，配置文件相当于一个说明书。webpack相当于一个机器，入口文件相当于原料，按说明书（配置文件）操作，然后输出产品（出口文件）。配置文件里面配置要做的事情，webpack根据需要调用第三方软件去解决要做的事情，webpack实现自动化，让编程更快速，修改很容易（相比自己写的代码很好具有可读性），把很多事情整合起来做。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等

webpack可以做的事情：
> 压缩js文件——让我们可以编写模块化的javascript代码

> 使用npm包管理前端代码——NPM最大的开源代码生态系统

> 转译ES6和ES7——es6和es7为js增加了很多新特性

> 缩小和优化代码

> 编译LESS和SASS

> 使用HMR（Hot Module Replacement/实时的模块监听改变）——每次保存代码的时候，只要他是被引入到该页面那么不需要完整的页面刷新。这在我们编辑代码时候是非常方便的。

> 把任何类型的文件包含到javascript——减少其他构建工具的需要，并允许我们用代码的方式修改和使用这些文件。

webpack的组成部分：入口，出口，加载器（规定webpack要做的任务），插件

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

github
> [https://github.com/liuxcbuxiangzhangda/webpack](https://github.com/liuxcbuxiangzhangda/webpack)



webpack-dev-server打包速度加快和实现热替换
>webpack3： [http://www.cnblogs.com/caideyipi/articles/7080010.html](http://www.cnblogs.com/caideyipi/articles/7080010.html)






Loaders（babel）：通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理



3、webpack与gulp，grunt,require区别
> [http://www.cnblogs.com/-walker/p/6056529.html](http://www.cnblogs.com/-walker/p/6056529.html)

4、webpack的英文官方文档