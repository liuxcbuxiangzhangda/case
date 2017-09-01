
1.AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

2.XMLHttpRequest 是 AJAX 的基础;首先创建XMLHttpRequest对象，词对象下有很多方法和属性 var xrequest=new XMLHttpRequest（）
> xrequest.open();
> 
> xrequest.send()
> 
> xrequest.setRequestHeader
> 
> xrequest.onreadystatechange:异步请求使用回调函数
> 
> xrequest.responseText:返回的是文本
> 
> xrequest.responseXML：返回html结构
> 
> xrequest.readyState:（0: 请求未初始化；1: 服务器连接已建立；2: 请求已接收；3: 请求处理中；4: 请求已完成，且响应已就绪）
> 
>xrequest.status（菜鸟教程readyState；500服务器内部错误；200成功等）
>
>xrequest.getAllResponseHeaders返回请求头信息
>xrequest.getResponseHeader 返回指定的请求头信息

3.请求类型：get post

4.表单的提交方式：get post

2.请求状态码（部分）：200：服务器响应正常。
 304：该资源在上次请求之后没有任何修改（这通常用于浏览器的缓存机制，使用GET请求时尤其需要注意）。
 400：无法找到请求的资源。
 401：访问资源的权限不够。
 403：没有权限访问资源。
 404：需要访问的资源不存在。
 405：需要访问的资源被禁止。
 407：访问的资源需要代理身份验证。
 414：请求的URL太长。
 500：服务器内部错误。