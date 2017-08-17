官方地址：

> 中文：[http://reactnative.cn/](http://reactnative.cn/)

简单项目的流程：下载node和python，设置npm镜像源，安装yarn，设置yarn镜像源，...按照文档一步一步走 

> 记住android studio中的android SDK中的地址，在模拟器setiing-ADB 把地址填入

> 要把模拟器启动，才执行 react-native run-andioid命令


webApp和nativeApp区别
> [https://www.zhihu.com/question/19558750](https://www.zhihu.com/question/19558750)

用到的技术：webpack，es6、less，react，python



把es6转译为es5用babel
>手动：1、 yarn add bable-cli 2、写配置文件
>自动：在webpack里面写配置文件

###开发：###

自定义组件（组件名首字母大写）：props states
> props属性：父组件自定义props；Image属性：source；TextInput属性：onChangeText和onSubmitEditing，onFocus
> 
> state状态（more）
> 
> style样式（more）：当传入数组时，在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。
> Stylesheet.Creat({})
> 
> 尺寸：不需要px，flex布局
> 
> flex布局（more）：跟web的flex有一些不一样，默认是column，justifycontent设置延主轴的排列，Align Items设置延次轴的排列
> 
> TextInput有很多属性（more）
> 
> ScrollView
> 
> FlatList：两个属性 data和renderItem
> 
> SectionList
> 
> fetch api

导航React Navigation
> yarn add react-navigation