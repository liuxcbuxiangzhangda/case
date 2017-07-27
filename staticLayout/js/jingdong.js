/**
 * Created by Administrator on 2017/7/18.
 */

window.onload=function(){
     circle=document.getElementsByClassName("js-slider-circle")[0].getElementsByTagName('span');
    var sliderWarp=document.getElementsByClassName("js-slider")[0];
     remember=0;
    circleChange();
    sliderImg();
    /*自动轮播*/
    var timer=setInterval("autoSlider()",1000);
    sliderWarp.onmouseover=function () {
        clearInterval(timer)
    };
    sliderWarp.onmouseout=function () {
        timer=setInterval("autoSlider()",1000)
    }
};
/*点击小圆圈变化*/
function circleChange() {
    for(var i=0;i<circle.length;i++){
        circle[i].index=i;       /*设置一个index属性*/
        circle[i].onmouseover=function () {
            change(remember,this.index);
            remember=this.index;
        };
    }
}

/*点击左右变化*/
function sliderImg() {
    var turnLeft=document.getElementsByClassName("js-slider-turn")[0];
    var turnRight=document.getElementsByClassName("js-slider-turn")[1];
    turnLeft.onclick = function () {
        var rem = remember;
        remember--;
        if (remember < 0) {
            remember = circle.length - 1;
        }
        change(rem, remember);
    };
    turnRight.onclick = function () {
        autoSlider();
    }
}
 /*右移动*/
 function autoSlider() {
     var rem=remember;
     remember++;
     if(remember>circle.length-1){
         remember=0;
     }
     change(rem,remember);
 }
 /*圆圈和图片样式变化*/
 function change(end,now) {
     var image=document.getElementsByClassName("js-slider")[0].getElementsByTagName("li");
     circle[end].style.backgroundColor="#fff";
     image[end].style.display="none";
     circle[now].style.backgroundColor="#DB192A";
     image[now].style.display="block";
 }
