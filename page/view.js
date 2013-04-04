/**
 * @name view.js
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *	注释↓
 */
var SupportsTouches = ("createTouch" in document),//判断是否支持触摸
    StartEvent = SupportsTouches ? "touchstart" : "mousedown",//支持触摸式使用相应的事件替代
    MoveEvent = SupportsTouches ? "touchmove" : "mousemove",
    EndEvent = SupportsTouches ? "touchend" : "mouseup";
var  createView = (function($){

                var  createTextarea = {
                    init : function(defult){
                       var param = this.param(defult);
                       this.params =  param;
                       return param;
                    },
                    param : function(defult){
                     (defult == null) && (defult = {});
                     defult.textarea = document.createElement('textarea');
                     defult.textarea.style.cssText = 'height:100%; width:100%; border:1px sold #912425; color:#3e3e3e; line-height:1em;'
                     return param = defult;
                     },
                    params : '',
                    delete :function(param){
                        //this.params.textarea.removeListener('', listener);
                        if(this.params!='')
                            this.params.textarea.parentNode.removeChild(this.params.textarea);
                    }
                }
                var createView = {
                    init : function(defult){
                       var param = this.param(defult);
                       this.confirmFun  = param.confirmFun;
                       var str = '\n\
    <a href="javascript:void(0);" class="ele close"></a>\n\
    <a href="javascript:void(0);" class="ele confirm"></a>\n\
    <a href="javascript:void(0);" class="ele drage"></a>\n\
    <a href="javascript:void(0);" class="ele size"></a>\n\
    <a href="javascript:void(0);" class="ele background">\n\
         <!--span><em class="ico_one"></em>图片上传</span-->\n\
           <form  id="pic_upload" method="POST" action="">\n\
            <input id="input_f" class="input_f" name="pic1" type="file">\n\
           </form>\n\
    </a>\n\
    <input type=color class="ele bac_color">\n\
    '					
    					var addoperate = [];
                        if(param.hasText){
                          str += '<span class="text"></span>\n<div class="ele operateText">\n\
    <a href="javascript:void(0);" class="ele plus"></a>\n\
    <a href="javascript:void(0);" class="ele minus"></a>\n\
    <a href="javascript:void(0);" class="ele lineheight"></a>\n\
    <div id="HMF-1" style="display: none " class="bm"> <span class="cur">1</span> <span class="cur">1.2</span> <span class="cur">1.5</span> <span class="cur">2</span> </div>\n\
    <a href="javascript:void(0);" class="ele color" ></a>\n\
    <input type="color" width="28px" height:28px; id="fontc" style="visibility: hidden"></input>\n\
    <a href="javascript:void(0);" class="ele weight"></a>\n\
    <a href="javascript:void(0);" class="ele fright"></a>\n\
    <a href="javascript:void(0);" class="ele centre"></a>\n\
    <a href="javascript:void(0);" class="ele fleft"></a>\n\
    </div>'
                         addoperate = [{eventType:'click',listener:plusFun,element:'plus'},
                            {eventType:'click',listener:minusFun,element:'minus'},
                            {eventType:'click',listener:lineheightFun,element:'lineheight'},
                            {eventType:'click',listener:colorFun,element:'color'},
                            {eventType:'click',listener:weightFun,element:'weight'},
                            {eventType:'click',listener:addTextarea,element:'text'},
                            {eventType:'click',listener:centreFun,element:'centre'},
                            {eventType:'click',listener:frightFun,element:'fright'},
                            {eventType:'click',listener:fleftFun,element:'fleft'}
                            ];

                        }
                        param.view.innerHTML =str;
                        var $this = this;
                        var operate = [{eventType:'click',listener:closeFun,element:'close'},
                            {eventType:'click',listener:$this.confirmFun,element:'confirm'},
                            {eventType:'mousedown',listener:drageFun,element:'drage'},
                            {eventType:'mousedown',listener:sizeFun,element:'size'},
                            {eventType:'click',listener:backgroundFun,element:'background'},
                            {eventType:'change',listener:baccolorFun,element:'bac_color'}
                            ];
                        operate = operate.concat(addoperate);
                        for (var i = 0; i < operate.length; i++) {
                        	operate[i].element =  param.view.getElementsByClassName(operate[i].element)[0];
                        	createFunc(operate[i]);
                        };
                        // createFunc({eventType:'mousedown',listener:sizeFun,element:param.view.getElementsByClassName('size')[0]});
                        // createFunc({eventType:'mousedown',listener:drageFun,element:param.view.getElementsByClassName('drage')[0]});
                        // createFunc({eventType:'click',listener:addTextarea,element:param.view.getElementsByClassName('text')[0]});
                        // createFunc({eventType:'click',listener:colorFun,element:param.view.getElementsByClassName('color')[0]});
                        function createFunc(ele){
                            ele.element.addEventListener(ele.eventType,ele.listener);
                        }
                        param.operate = operate;
                        this.params  =  param;
                        this.view = this.params.view;
                        return this.params;
                    },
                    confirmFun:'',                   
                    param : function(defult){
                     (defult == null) && (defult = {});
                     defult.view = document.createElement('div');
                     defult.view.className = 'view';
                     (defult.height == null) && (defult.height = '200px');
                     (defult.width == null) && (defult.width = '400px');
                     (defult.border == null) && (defult.border = '3px gray dashed');
                     (defult.cssText == null) && (defult.cssText = '');
                     (defult.toMode == null) && (defult.toMode = '');
                     defult.view.style.cssText = 'height:'+ defult.height+'; width:'+defult.width+'; top:0; left:0; color:#3f3f3f;' + defult.cssText;
                     (defult.confirmFun == null) && (defult.confirmFun = confirmFun);
                     return param = defult;
                     },
                    params : '',
                    view : '',
                    delete :function(param){
                        if(this.params!=''){
                        	for(ele in this.params.operate){
                        	 	var val = this.params.operate[ele];
                        		//val.element =  this.params.view.getElementsByClassName(val.element)[0];
                        		removeFunc(val);
                       		 };
                            this.params.view.parentNode.removeChild(this.params.view);
                        }
                        function removeFunc(ele){
                            ele.element.removeEventListener(ele.eventType,ele.listener);
                        }

                    }
                }
                function closeFun(){
                	createView.delete();
                }
                function confirmFun(){


                }
                var text = ''
                function addTextarea(){
                	var span = this;
                	var textArea = createTextarea.init();
                	var view = this.parentNode;
                	view.appendChild(textArea.textarea);
                	span.removeEventListener('click',addTextarea);
                	textArea.textarea.value = span.innerHTML;
                	span.innerHTML = '';
                	textArea.textarea.onblur = function(){
                		// 添加文字
                		var str = this.value;
                		//删除textarea
                		createTextarea.delete(textArea);
                		span.innerHTML = str; 
                		span.addEventListener('click',addTextarea);
                	}
                }
                function drageFun(){
                	var view = this.parentNode;
                	var drag = this;
                	var top = view.style.top.replace('px',''),
                	 left = view.style.left.replace('px',''),
                	 y1 = $.event.clientY,
                	 x1 = $.event.clientX;
                	 this.addEventListener(MoveEvent,onmove);
                	 //this.addEventListener('blur',onmove);
                	 function onmove(){
                	 	var y2 = $.event.clientY,
                	 	x2 = $.event.clientX;
                	 	top = Number(top) + (y2 - y1);
                	 	view.style.top = top+'px';
                	 	left = Number(left) + (x2 - x1);
                	 	view.style.left  = left +'px';
                	 	x1 = x2;
                	 	y1 = y2;
                	 }
                	 drag.addEventListener(EndEvent,onend);
                	 function onend(){
                	   this.removeEventListener(MoveEvent,onmove,false);
                	   //this.removeEventListener('blur',onmove,false);
                	   this.removeEventListener(EndEvent,onend,false);
                	 }
                }
                function baccolorFun(){
                	var view = this.parentNode;
                	view.style.backgroundColor = this.value;
                	view.style.border = 'none';
                }
                function backgroundFun(){
                	var view = this.parentNode;
                	var str = this.value;
                	view.style.backgroundImage = 'url("screen/'+str.substring(str.lastIndexOf('/'),str.length)+'")';
                	view.style.webkitBackgroundSize = 'cover';
                	view.style.backgroundSize = 'cover';
                	view.style.border = 'none';
                }

                function sizeFun(){
                	var view = this.parentNode;
                	var drag = this;
                	var  height = view.style.height.replace('px',''),
                	 width = view.style.width.replace('px',''),
                	 y1 = $.event.clientY,
                	 x1 = $.event.clientX;
                	 this.addEventListener(MoveEvent,onmove);
                	 //this.addEventListener('blur',onmove);
                	 function onmove(){
                	 	var y2 = $.event.clientY,
                	 	x2 = $.event.clientX;
                	 	height = Number(height) + (y2 - y1)<1 ? height : Number(height) + (y2 - y1);
                	 	view.style.height = height+'px';
                	 	width = Number(width) + (x2 - x1)<1 ? width : Number(width) + (x2 - x1);
                	 	view.style.width  = width +'px';
                	 	x1 = x2;
                	 	y1 = y2;
                	 }
                	 this.addEventListener(EndEvent,onend);
                	 function onend(){
                	   this.removeEventListener(MoveEvent,onmove,false);
                	   //this.removeEventListener('blur',onmove,false);
                	   this.removeEventListener(EndEvent,onend,false);
                	 }
                }
                
                function plusFun(){
                	var view = this.parentNode.parentNode,
                		fontsize = window.getComputedStyle(view, null).fontSize.replace('px','');
                		view.style.fontSize = ++fontsize + 'px';

                }
                function minusFun(){
                	var view = this.parentNode.parentNode,
                		fontsize = window.getComputedStyle(view, null).fontSize.replace('px','');
                		if(fontsize > 12)
                			view.style.fontSize = --fontsize + 'px'
                }
                function backgroundFun(){

                }
                function colorFun(){
                	var view = this.parentNode.parentNode,
                		//fontsize = window.getComputedStyle(view, null).lineHeight.replace('px',''),
                		hmf = document.getElementById('fontc');
                		hmf.style.top = Number(this.style.top.replace('px','')) + 28 + 'px';
                		hmf.style.left = this.style.left;
	                	hide(hmf);
	                	function hide(ele){
	                		ele.style.visibility = ele.style.visibility == "hidden" ? "visible" : "hidden";
	                	}
	                	hmf.onchange = function(){
	                		view.style.color = hmf.value;
	                		hide(hmf);
	                	}
                }
                function centreFun(){var view = this.parentNode.parentNode; view.style.textAlign = 'center'}
                function frightFun(){var view = this.parentNode.parentNode; view.style.textAlign = 'right'}
                function fleftFun(){var view = this.parentNode.parentNode; view.style.textAlign = 'left'}
                function lineheightFun(){
                	var view = this.parentNode.parentNode,
                		fontsize = window.getComputedStyle(view, null).lineHeight.replace('px',''),
                		hmf = document.getElementById('HMF-1');
                		
                	hide(hmf);
                	for(ele in hmf.getElementsByClassName('cur')){
                		val = hmf.getElementsByClassName('cur')[ele];
                		val.onclick = function(){
                			pick(this)
                		};
                		val.onmouseover = function(){bgcolor(this)};
                		val.onmouseout = function(){nocolor(this)};
                	}
                	function hide(ele){
                		ele.style.display = ele.style.display == "none" ? "" : "none";
                	}
					function pick(ele){
						view.style.lineHeight  = ele.innerText +'em';
						hide(hmf);
					}
					function bgcolor(ele){
					 ele.style.background="#912425";
					 ele.style.color="#788F72";
					}
					function nocolor(ele){
					 ele.style.background="";
					 ele.style.color="#912425";
					}
                	//view.style.lineHeight = ++lineHeight + 'px';
                }
                
                function weightFun(){
                	var view = this.parentNode.parentNode;
                	view.style.fontWeight == 'bold' ? view.style.fontWeight ='' : view.style.fontWeight = 'bold';
                }
                return createView;
})(window)
            