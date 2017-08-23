/*var  http  =  require('http'); //导入自带的http对象
http.createServer(function  (request,  response)  {  //request浏览器请求的对象，response服务器返回的对象
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    if(request.url!=="/favicon.ico"){  //清除第2此访问,否则后台会输出两次访问
        console.log('访问');  
        response.write('hello,world');  
        response.end('hell,世界');//不写则没有http协议尾,页面会一直加载，但写了会产生两次访问
    }  
}).listen(8000);  
console.log('Server  running  at  http://127.0.0.1:8000/');  */
/*
启动服务  
cmd下执行：  
node  n1_hello.js  
浏览器访问：http://localhost:8000  
*/
/*
var http=require("http");
var fs = require("fs");
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    console.log("开始访问，console.log是在dos输出");
    response.write("<a href='#'>你好</a>");
    /!*测试访问两次*!/
    var data=request.url+"\r\n";
    fs.writeFile('./wfile.txt',data,{flag:'a+',encoding:'utf-8',mode:'0777'},function(err)   {
        if (err) {
            console.log("文件写入失败")
        } else {
            console.log("文件写入成功");

        }
    });

    response.end("");
}).listen(8000);*/

var http=require("http");
http.createServer(function (request,response) {
    if(request.url!="/favicon.ico"){
        response.writeHead(200,{"Content-Type":"text/html;chart=utf-8"});
        console.log("fangwen")
        response.write("nihao");
        response.end("")
    }



}).listen(8000)