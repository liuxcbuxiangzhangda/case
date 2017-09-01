/**
 * Created by Administrator on 2017/9/1.
 */
var common=require("./common");
function Teachers(id,name,age) {
    //类的属性继承
    common.Commonattr.apply(this,[id,name,age]);
    this.teaching=function () {
        console.log(this.name+"讲课")
    }
}
function Students(id,name,age) {
    //类的属性继承
    common.Commonattr.apply(this,[id,name,age]);
    this.studing=function () {
        console.log(this.name+"学习")
    }
}
module.exports={
    Teachers:Teachers,
    Students:Students
};