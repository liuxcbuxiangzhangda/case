/**
 * Created by Administrator on 2017/8/31.
 */
var http=require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    if(request.url!="/favicon.ico"){
        //console.log(request.url);
        var url=request.url;
        url = url.slice(1,url.length);

        var router = url.split('/');
        /*console.log(router[0]);
        console.log(router[1]);*/
        var controller = require('./models/'+router[0]+".js");
        var funname = router[1];
        controller[funname](response);
        response.end('');
    }

}).listen(8000);