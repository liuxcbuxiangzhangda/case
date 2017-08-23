 this是不断变化的，但是一定是指调用函数的那个对象
> [https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651551779&idx=1&sn=7054a2559ee2f42bcf78210fb99b5d4d&chksm=8025afe2b75226f45e213945c5b815aa571f26b0ebc516dd88ff7c734e1e709cfd8f8a18315a&mpshare=1&scene=23&srcid=0815AAKpj7TlsX9ALNdcFgZZ#rd](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651551779&idx=1&sn=7054a2559ee2f42bcf78210fb99b5d4d&chksm=8025afe2b75226f45e213945c5b815aa571f26b0ebc516dd88ff7c734e1e709cfd8f8a18315a&mpshare=1&scene=23&srcid=0815AAKpj7TlsX9ALNdcFgZZ#rd)
> 
> [http://www.jb51.net/article/41656.htm](http://www.jb51.net/article/41656.htm)
   
    //案例一
    var obj = {
       name: "obj",
       nestedObj: {
			name:"nestedObj",
			func: function () {
			console.log(this + ":" + this.name);
			          }
		       }
		     }
		obj.nestedObj.func();
		// [object Object]:nestedObj
    //案例二
    var name = "Will";
	var obj = {
	name: "obj",
	func: function () {
	console.log(this + ":" + this.name);
	}
	};
	temp = obj.func;
	temp();
	//[object Window]:Will 因为是Window在调用temp函数
 当函数没有上下文时，默认为全局，如下执行f函数和匿名函数时候

    var context = "global";
	var obj = {
	context: "object",
	method: function () {
	console.log(this + ":" +this.context);
	function f() {
	var context = "function";
	console.log(this + ":" +this.context);
	};
	f();
	(function(){
	var context = "function";
	console.log(this + ":" +this.context);
	})();
	}
	};
	obj.method();
	// [object Object]:object
	// [object Window]:global
	// [object Window]:global
> 改变this的三个函数call，apply，bind
> 
> 当一个函数被当为event handler时候，this设置为触发事件的页面元素

    var body = document.getElementsByTagName("body")[0];
	body.addEventListener("click", function(){
	console.log(this);
	});
	// <body>…</body>