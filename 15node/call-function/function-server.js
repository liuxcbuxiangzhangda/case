/**
 * Created by Administrator on 2017/8/23.
 */
var http=require("http");
var otherfun=require("./functions/fun1.js");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
   /* if(request.url!="/favicon.ico"){
        //res.write("nihao");
        hello1(request,response);//调用普通函数

    }*/

    if(request.url!="/favicon.ico"){
        otherfun.call();
        otherfun.controller_nice(response);
        response.end('');
    }



}).listen(8000);

/*普通函数*/
function hello1(req,res){
    res.write("nihao")
}
