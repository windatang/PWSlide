/**
 * @name slide pad滑动
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *	注释↓
 */

var constant =(function($){
	 	var constant ={};
	 	 constant.SupportsTouches = ("createTouch" in document),//判断是否支持触摸
	     constant.StartEvent = constant.SupportsTouches ? "touchstart" : "mousedown",//支持触摸式使用相应的事件替代
		 constant.MoveEvent = constant.SupportsTouches ? "touchmove" : "mousemove",
	     constant.EndEvent = constant.SupportsTouches ? "touchend" : "mouseup";
	     constant.win = function(id){
			var win = id;
			if(typeof(win) == 'string' ){
			 win = document.getElementById(id);
			}
			win.style.cssText='visibility:visible; opacity:1; display:-webkit-box';
			var close = win.getElementsByClassName('close');
			for(var j=0; j<close.length; j++){
				close[j].addEventListener(constant.StartEvent,function(){
				 win.style.cssText='visibility:hidden; opacity:0; display:none';
				})
			}
		}
		constant.addEventListen = function(id,funct,method){
			if(typeof(id) == 'string'){
				id = document.getElementById(id);
			}
			if(method == null) method = constant.StartEvent;
			id.addEventListener(method,funct,true)
		}
		constant.removeEventListen = function(id,funct,method){
			if(typeof(id) == 'string'){
				id = document.getElementById(id);
			}
			if(method == null) method = constant.StartEvent;
			id.removeEventListener(method,funct,true)
		}
		
		constant.change = function(divlist,alist,fun){
			for (var i = 0; i < alist.length; i++) {
				constant.addEventListen(alist[i],fun)
			}
		}
		constant.removeChange = function(divlist,alist,fun){
			for (var i = 0; i < alist.length; i++) {
				constant.removeEventListen(alist[i],fun)
			}
		}
					
	 return constant;
})(window)