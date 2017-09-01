
/*
* 1.模块的调用
* 2.js类和实例化对象
* 3.类的继承
* */
var http=require("http");
var ts=require("./models/ts");
http.createServer(function (resquest,response) {
    response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    if(resquest.url!="/favicon.ico"){
        var teacher=new ts.Teachers(1,"ZHANGSAN",29);
        teacher.teaching();
        teacher.enter();
        var student=new ts.Students(1,"lisi",18);
        student.studing();
        student.enter();
        response.end('');
    }
}).listen(8000);