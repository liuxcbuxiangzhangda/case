/**
 * Created by Administrator on 2017/8/23.
 */
/*function controller(request,response){
    //res.write("nihao");
    //res.end("");
    //call("hello",req,res);
    console.log(123);

}*/


function  controller(res){
    res.write("发送");
}
function  call(){
    console.log('fangwen');
}
module.exports={
    controller_nice:controller,
    call:call
}