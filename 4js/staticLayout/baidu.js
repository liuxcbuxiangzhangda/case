/**
 * Created by Administrator on 2017/7/6.
 */

window.onload=function () {
    function choseShow() {
        var nav=document.getElementsByClassName("nav");
        var navLi=nav[0].getElementsByTagName("li");
        var navContentLi=document.getElementsByClassName("navContent")[0].getElementsByTagName("li");
       for(var i=0;i<navLi.length;i++){
          navLi[i].index=i;
           navLi[i].onclick=function () {
               for(var j=0;j<navContentLi.length;j++){
                   navContentLi[j].style.display="none";
               }
               navContentLi[this.index].style.display="block";
           }
       }
    };
    choseShow();

};
