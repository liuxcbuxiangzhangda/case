###简单项目的流程：###
下载node和python，设置npm镜像源，安装yarn，设置yarn镜像源，初始化项目（yarn init)生成packjson.js文件，安装webpack（yarn add webpack），packjson.js中修改scripts中的start值，在写webpack的配置文件(参照webpack的学习内容)，本地安装建立node_modules文件夹（npm全局安装和非全局安装的区别是）


下载node（菜鸟教程）【如果是nativeApp还需要下载Python 2】

设置npm镜像源

    npm config set registry https://registry.npm.taobao.org --global
    npm config set disturl https://npm.taobao.org/dist --global

安装yarn（MacOS，Linux，windows不一样）windows：npm install -g yarn 
> [http://www.jb51.net/article/95630.htm](http://www.jb51.net/article/95630.htm)

> [https://yarn.bootcss.com/docs/install.html](https://yarn.bootcss.com/docs/install.html)

设置yarn镜像源

    yarn config set registry https://registry.npm.taobao.org --global
    yarn config set disturl https://npm.taobao.org/dist --global

2.安装node模块：yarn add或者 npm install

3.yarn和npm的命令
> [http://www.jb51.net/article/95199.htm](http://www.jb51.net/article/95199.htm)

3.Package.json定义包的属性：npm init（创建模块必不可少，开发一个应用就是一个模块）
> 启动应用在package.json的script中设置（start）

