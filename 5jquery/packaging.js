/**
 * Created by Administrator on 2017/7/7.
 */
/*
$("#mm .nn ul").click(function () {
     console.log("mm");//do something
})
*/
/*类*/
/*function $(str) {
    var ar=[];
    ar=str.split(" ");/!*去除前后的空格，然后按空格拆分字符串*!/
    function weizhi(bb) {
        if(ar[bb].charAt(0)=="#"){
            return ".getElementById('"+ar[bb].replace(ar[bb].charAt(0),"")+"')"
        }else if(ar[bb].charAt(0)=="."){
            return ".getElementsByClassName('"+ar[bb].replace(ar[bb].charAt(0),"")+"')"
        }else {
            return ".getElementsByTagName('"+ar[bb]+"')"
        }
    }
    function xunhuan(c) {
        if(c==0){
            return weizhi(0)
        } else {
            return xunhuan(c-1)+weizhi(c);
        }
    }
    var gg="document"+xunhuan(nn.length-1);

    var rr=gg;
  this.click=function (Func) {
      for(var i=0;i<rr.length;i++){
          rr[i].onclick=Func();
      }

  }
}*/




/*类*/
function Person(name,age,nn) {
    this.name=name;
    this.age=age;
    this.nn=function () {
        console.log(nn)

    };
/*this.nn=new Function("alert(nn)")与上个等价*/
}
/*对象实例化*/
var person1=new Person("xiaohong","23","yigexiaoren");
console.log(person1.nn(),person1.name);

var mm="#mm .nn ul";
var nn=[];
nn=mm.split(" ");
function weizhi(bb) {
    if(nn[bb].charAt(0)=="#"){
        return "getElementById('"+nn[bb].replace(nn[bb].charAt(0),"")+"')"
    }else if(nn[bb].charAt(0)=="."){
        return "getElementsByClassName('"+nn[bb].replace(nn[bb].charAt(0),"")+"')"
    }else {
        return "getElementsByTagName('"+nn[bb]+"')"
    }
}
var seltorArr=[];
for(var tt=0;tt<nn.length;tt++){
    weizhi(tt);
    seltorArr.push( weizhi(tt));
}
console.log( seltorArr)
/*function xunhuan(c) {
    if(c==0){
        return weizhi(0)
    } else {
        return xunhuan(c-1)+weizhi(c);
    }
}
var gg="document"+xunhuan(nn.length-1);
console.log(gg)*/
