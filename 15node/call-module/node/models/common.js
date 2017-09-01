/**
 * Created by Administrator on 2017/9/1.
 */
function Commonattr(id,name,age) {
    this.id=id,
    this.name=name,
    this.age=age,
    this.enter=function () {
        console.log(this.name+"进入图书馆")
    }
}

/*function Students(id,name,age) {
    Commonattr.call(this,[id,name,age]);
    this.studing=function (res) {
        res.write(this.name+"学习")
    }
}*/
module.exports={
    Commonattr:Commonattr
}