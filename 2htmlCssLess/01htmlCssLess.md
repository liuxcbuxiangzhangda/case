
#知识积累#

1、css命名规则
> [https://www.douban.com/note/499976405/?type=like](https://www.douban.com/note/499976405/?type=like)

2、css选择器的优先级
>
a.  在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式。
b.  作为style属性写在元素内的样式
c. id选择器
d. 类选择器
e. 标签选择器
f. 通配符选择器
g. 浏览器自定义或继承
h. 同一级别的后写的会覆盖先写的

3、行内元素的一些特性

4、图片的自适应宽度

> [http://mp.weixin.qq.com/s/OMens6u_ePd0oDSQh-tnLA](http://mp.weixin.qq.com/s/OMens6u_ePd0oDSQh-tnLA)

5、rem、em、px、百分数
 
> [http://www.uml.org.cn/html/201207311.asp](http://www.uml.org.cn/html/201207311.asp)
> 
>rem： [http://www.w3cplus.com/css3/define-font-size-with-css3-rem](http://www.w3cplus.com/css3/define-font-size-with-css3-rem)

> 自适应：[http://mp.weixin.qq.com/s/vLuc3CIX_bx0HPLo9wZReA](http://mp.weixin.qq.com/s/vLuc3CIX_bx0HPLo9wZReA)

6.pointer-events   穿透

7.兼容性判断
[https://github.com/liuxcbuxiangzhangda/2my-html/blob/master/Compatibility.html](https://github.com/liuxcbuxiangzhangda/2my-html/blob/master/Compatibility.html)

8.图片和文字在同一行高度显示
> [http://www.cnblogs.com/yisheng/archive/2012/12/18/2823089.html](http://www.cnblogs.com/yisheng/archive/2012/12/18/2823089.html)
> 
    <a>文字<span></span></a>
  span是背景图片，将span设置`vertical-align:middle`
 
9.word-break、word-wrap、white-space
> [http://www.cnblogs.com/2050/archive/2012/08/10/2632256.html](http://www.cnblogs.com/2050/archive/2012/08/10/2632256.html)
> [http://jingyan.baidu.com/article/e75aca855b1500142edac6d0.html](http://jingyan.baidu.com/article/e75aca855b1500142edac6d0.html)
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/2htmlCssLess/word-warp.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/2htmlCssLess/word-warp.html)

10.text-decoration

11.自定义设置font-family

     @font-face {
      font-family: "fzzhengheis-el-gbregular";
      src: url("字体文字的地址");
      font-weight: normal;
      font-style: normal;
    }
    .xx{font-family:fzzhengheis-el-gbregular}

12.超出部分省略号

     overflow:hidden;
     white-space:nowrap;
     text-overflow:ellipsis

13.vertical-align
> 图片居中时要配合line-height使用

14。<img>元素的alt和title有什么异同
> img标签的alt属性是在图片因浏览器兼容、加载失败或地址出错等原因而不显示时为浏览用户所做的代替语言，其性质为该图片的代替;

> img标签的title属性，是表达该图片的一些额外信息，其性质为一种备注或者注释，鼠标过去时显示该段文字，有hover的效果，它可以用在除了base，basefont，head，html，meta，param，script和title之外的所有标签。例如a标签

15.title上有图标
> [https://zh.wikipedia.org/wiki/Favicon](https://zh.wikipedia.org/wiki/Favicon)

16.字符实体

17.清除浮动的五种方式
 
18.识别不同的浏览器兼容：Modernizr；hack
