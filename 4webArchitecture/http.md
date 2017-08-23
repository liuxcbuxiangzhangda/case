HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）

HTTP默认端口号为80，但是你也可以改为8080或者其他端口

请求状态码：200 - 请求成功；301 - 资源（网页等）被永久转移到其它URL；404 - 请求的资源（网页等）不存在；500 - 内部服务器错误


URL组成格式：在node环境下，用url.parse("")可以把url地址解析成对象，例如解析https://stackoverflow.com：8080/cours/list.html?mmm==nnn#flson
> href:https://stackoverflow.com：8080/cours/list.html?mmm==nnn#flson (完整的URL地址)
> 
> protocol:'https:' (协议)
> 
> slashes:true (双斜线)
> 
> auth:null 
> 
> hostname:'stackoverflow.com' (主机名)
> 
> port:'8080' 端口
> 
> host:'stackoverflow.com:8080' (主机，IP地址)
> 
> pathname:'/cours/list.html' (文件名)
> 
> query:'mmm==nnn'查询
> 
> search:'?mmm==nnn'
> 
> path:'/cours/list.html?mmm==nnn' (文件地址)
> 
> hash:'#flson' 锚点

url一定是uri uri不一定是url