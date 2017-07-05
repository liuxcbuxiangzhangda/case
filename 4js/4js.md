
###js参考手册###
[http://www.w3school.com.cn/jsref/index.asp](http://www.w3school.com.cn/jsref/index.asp)

1.BOM对象 2.DOM对象 3.js对象 4.html对象 
###attr:属性###
###event：常用事件###


###function：常用系统函数###
1、split()
用于把一个字符串分割成字符串数组
[https://github.com/liuxcbuxiangzhangda/4my-js/blob/master/split.html](https://github.com/liuxcbuxiangzhangda/4my-js/blob/master/split.html "github.split")
[http://www.w3school.com.cn/jsref/jsref_split.asp](http://www.w3school.com.cn/jsref/jsref_split.asp)

2、join()用于把数组中的所有元素放入一个字符串,用参数符号隔开

3、toString()

4、valueOf()

5、toLocaleString()

每个对象都有3、4、5这三个函数，在Date类型中valueOf是返回的毫秒数

6、alert()

7、prompt()

8、confirm()

都会改变原数组：

9、push()在数组末尾增加项，函数返回被修改后数组的长度

10、pop()从数组末尾减去项，函数返回移除的项（栈数据结构）

11、shift（）从数组第一项减去项，函数返回移除的项（队列数据结构）

12、unshift()从数组第一项增加项，返回被修改后数组的长度

13、reverse() 数组反转

14、sort（）先调用了每一项的toString()方法，然后用得到的字符串进行比较，可能造成排序不准确，可以接受比较函数（5.2.5）

15、splice（）作用是删除，插入，替换项。共三个参数，起始位置，删除数量，增加的项。返回删除的项组成的数组

不会改变原数组（5.2.6）

15、concat()创建原数组的副本，连接数组。相对push，unshift来说concat不会改变原数组

16、slice（）参数确定起始位置剪切数组，不包括结束位置的项。当参数有负数时，用数组长度加这个参数确定位置。当开始位置大于结束位置返回空数组

17、indexOf()和LastIdexOf（）两个参数，第一个参数必须（查找的内容），第二个参数可选（查找截止地方）。都返回查找到的位置，没有查到就返回-1，一个从前查找，一个从尾部查找

18、5个迭代函数（遍历数组）5.2.8

每一个函数都有两个参数，一个是必须的function，一个是可选的作用域

every（）数组中的每一项都执行给定函数，当每一项都返回true那么every函数返回true

some（）数组中的每一项都执行给定函数，当有一项都返回true那么some函数返回true

map（）返回一个数组，该数组中的每一项是原数组执行指定函数的结果

forEach（）没有返回值，只是对数组中的每一项执行指定函数，与for循环一致

filter（）它 利用 指定 的 函数 确定 是否 在 返回 的 数组 中 包含 的 某 一项（过滤），返回满足条件的项组成的数组 

19、缩小函数

reduce（）和reduceRight（）

20、


###DiredFood###
1、table选择一列就选择整行
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/checkonetr.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/checkonetr.html)

2、时间对象手册gettime（），getday（）等
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/date.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/date.html)

3、模板引擎
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/handlebar.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/handlebar.html)
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/underscore-template.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/underscore-template.html)

4、模态框
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/model.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/model.html)

5、分割字符串，截取字符串
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/split.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/split.html)

6、可编辑的table
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/textTable.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/textTable.html)

7、screenX,clientX,pageX,offsetX,pageXoffset的区别
> [http://www.cnblogs.com/shubiao/p/4954848.html](http://www.cnblogs.com/shubiao/p/4954848.html)

8、函数的arguments属性
> [https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/arguments.html](https://github.com/liuxcbuxiangzhangda/case/blob/master/4js/arguments.html)

9、原生js实现路由
> [http://blog.csdn.net/sunxinty/article/details/52586556](http://blog.csdn.net/sunxinty/article/details/52586556)



