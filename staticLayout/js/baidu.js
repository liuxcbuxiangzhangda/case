/**
 * Created by Administrator on 2017/7/6.
 */

window.onload=function () {
    /*导航*/
    function choseShow() {
        var nav=document.getElementsByClassName("nav");
        var navLi=nav[0].getElementsByTagName("li");
        var navContentLi=document.getElementsByClassName("navContent")[0].getElementsByTagName("li");
       for(var i=0;i<navLi.length;i++){
          navLi[i].index=i;
           navLi[i].onclick=function () {
               /*还原未被选中导航的样式及给其绑定类似hover效果*/
               for(var k=0;k<navLi.length;k++){
                   navLi[k].style.cssText="background-color: #fff;color: #333;font-weight:normal";
                   navLi[k].onmouseover=null;//去除绑定的事件，即将重新绑定
                   navLi[k].onmouseout=null;
                   navLi[k].index=k;
                   //this是指点击事件指向的
                   if(this.index!=k){
                       navLi[k].onmouseover=function () {
                           //this是指onmouseover事件指向的
                           navLi[this.index].style.cssText="background-color: #B3B6BB;color: #fff;";
                       };
                       navLi[k].onmouseout=function () {
                           //this是指onmouseout事件指向的
                           navLi[this.index].style.cssText="background-color: #fff;color: #333";
                       }
                   }
               }
               /*改变选中导航的样式*/
               this.style.cssText="background-color: #9A9DA2;color: #fff;font-weight:bolder"  ;
               /*下面内容的展示和隐藏*/
               for(var j=0;j<navContentLi.length;j++){
                   navContentLi[j].style.display="none";
               }
               navContentLi[this.index].style.display="block";
           }
       }
    };
    choseShow();

};
