var $columnar = (function(){	
	var $columnar =  {
	 	init:(function(){
	 		
	 	})(),
	 	/**
	 	 * 行动方向
	 	 * name: array 
	 	 * status:continuation / step
	 	 * direct 方向 0 or up 向上 ;1 or down 向下 ;2 or left 向左 ;2 or right 向右
	 	 * ele id 
	 	 * num 第几部
	 	 * sum 总数
	 	 */
	 	direction:(function(direct,ele,num,sum){
	 		if(typeof(ele) == 'string'){
	 			ele = document.getElementById(ele)
	 		}
	 		var sty = window.getComputedStyle(ele, null),
	 			cssText = sty.cssText,
	 			height = (ele.style.height)?Number(ele.style.height.substring(0,ele.style.height.indexOf('p'))):Number(sty.height.substring(0,sty.height.indexOf('p'))),
	 			top = (ele.style.top)?Number(ele.style.top.substring(0,ele.style.top.indexOf('p'))):Number(sty.top.substring(0,sty.top.indexOf('p'))),
	 			bottom = (ele.style.bottom)?Number(ele.style.bottom.substring(0,ele.style.bottom.indexOf('p'))):Number(sty.bottom.substring(0,sty.bottom.indexOf('p'))),
	 			left =  (ele.style.left)?Number(ele.style.left.substring(0,ele.style.left.indexOf('p'))):Number(sty.left.substring(0,sty.left.indexOf('p'))),
	 			right =  (ele.style.right)?Number(ele.style.right.substring(0,ele.style.right.indexOf('p'))):Number(sty.right.substring(0,sty.right.indexOf('p'))),
	 			width =  (ele.style.width)?Number(ele.style.width.substring(0,ele.style.width.indexOf('p'))):Number(sty.width.substring(0,sty.width.indexOf('p'))),
	 			backX =  (ele.style.backX)?Number(ele.style.backgroundPositionX.substring(0,ele.style.backgroundPositionX.indexOf('p'))):Number(sty.backgroundPositionX.substring(0,sty.backgroundPositionX.indexOf('p'))),
	 			backY =  (ele.style.backY)?Number(ele.style.backgroundPositionY.substring(0,ele.style.backgroundPositionY.indexOf('p'))):Number(sty.backgroundPositionY.substring(0,sty.backgroundPositionY.indexOf('p')));
	 			//console.log(height);
	 		if(!num||!sum){return ""};
	 		var startStr = this.succeed(num,sum),
	 		end = startStr.end;
	 		startStr = startStr.startStr;
	 		if(direct == '0'||direct == '1'|| direct.toString() == 'up'||direct.toString() == 'down'){
	 			var starcss = "@-webkit-keyframes "+ele.id+ " {"+startStr+"{height:0px;";
	 			if(top&&top!=""&&top!="auto"){
		 			(direct.toString() == 'up'||direct == '0')&&(starcss += (" top:"+Number(top+height) + "px;"))
		 			if(backY.toString()!=''&&(direct.toString() == 'down'||direct  == '1'))
		 			   starcss += (" background-position:"+backX + 'px ' + Number(backY-height) + "px;");
		 			starcss+= "} "+end+"{height:"+height+"px;";
		 			(direct.toString() == 'up'||direct == '0')&& (starcss +=(" top:"+Number(top) + "px;"));
		 			if(backY.toString()!=''&&(direct.toString() == 'down'||direct  == '1'))
		 			   starcss += (" background-position:"+backX + 'px ' + backY + "px;");
		 			starcss+="}}";
	 			}
	 			if(bottom&&bottom!=""&&bottom!="auto"){
	 				(direct.toString() == 'down'||direct == '1')&&(starcss += (" bottom:"+Number(bottom+height) + "px;"))
	 				if(backY.toString()!=''&&(direct.toString() == 'down'||direct  == '1'))
	 					starcss += (" background-position:"+backX + 'px ' + Number(backY-height) + "px;")
		 			starcss+= "} "+end+"{height:"+height+"px;";
		 			(direct.toString() == 'down'||direct == '1')&& (starcss +=(" bottom:"+Number(bottom) + "px;"));
		 			if(backY.toString()!=''&&(direct.toString() == 'down'||direct  == '1'))
		 			   starcss += (" background-position:"+backX + 'px ' + backY + "px;");
		 			starcss+="}}";
	 			}
	 			return starcss;
	 		}else if(direct == '2'||direct == '3'|| direct.toString() == 'right'||direct.toString() == 'left'){
	 			var starcss = "@-webkit-keyframes "+ele.id+ " {"+startStr+"{width:0px;";
	 			if(left&&left!=""&&left!="atuo"){
	 				(direct.toString() == 'left'||direct == '2')&&(starcss += (" left:"+Number(left+width) + "px;"))
	 				if(backX.toString()!=''&&(direct.toString() == 'right'||direct  == '3'))
	 					starcss += (" background-position:"+Number(backX-width) + 'px ' + backY + "px;")
		 			starcss+= "} "+end+"{width:"+width+"px;";
		 			(direct.toString() == 'left'||direct == '2')&& (starcss +=(" left:"+Number(left) + "px;"));
		 			if(backX.toString()!=''&&(direct.toString() == 'left'||direct  == '2'))
		 			   starcss += (" background-position:"+backX + 'px ' + backY + "px;");
		 			starcss+="}}";
	 			}
	 			if(right&&right!=""&&right!="auto"){
	 				(direct.toString() == 'right'||direct == '3')&&(starcss += (" right:"+Number(right+width) + "px;"))
		 			if(backX.toString()!=''&&(direct.toString() == 'right'||direct  == '3'))
		 				starcss += (" background-position:"+Number(backX-width) + 'px ' + backY + "px;")
		 			starcss+= "} "+end+"{width:"+width+"px;";
		 			(direct.toString() == 'right'||direct == '3')&& (starcss +=(" right:"+Number(right) + "px;"));
		 			if(backX.toString()!=''&&(direct.toString() == 'right'||direct  == '3'))
		 			   starcss += (" background-position:"+backX + 'px ' + backY + "px;");
		 			starcss+="}}";
	 			}
	 		   return starcss;
	 		}
	 	}),
		succeed:function(num,sum){
			var startStr = 	"0%",
	 			end = "100%";
			if((sum)&&(num)&&(sum)>=(num)){
	 			var arnum = Math.floor(100/sum);
	 			for(var i = 1; i < num; i++){
	 				 startStr += ","+ i*arnum +"%";
	 			}
	 			for(i; i < sum; i++){
	 				 end += ","+ i*arnum +"%";
	 			}
	 		}
	 		return seq = {startStr:startStr,end:end}
	 	},
		/** 运动顺序 **/
		display:(function(ele,num,sum){

			if(typeof(ele) == 'string'){
	 			ele = document.getElementById(ele)
	 		}
			var startStr = this.succeed(num,sum),
	 		end = startStr.end;
	 		startStr = startStr.startStr;
	 		if((sum)&&(num)&&(sum)>=(num)){
	 			var arnum = Math.floor(100/sum);
	 			for(var i = 1; i < num; i++){
	 				 startStr += ","+ i*arnum +"%";
	 			}
	 		}
	 		var sty = window.getComputedStyle(ele, null), opacity = 1;
	 		(sty.opacity == 1)&&(opacity = 0)
	 		var starcss = "@-webkit-keyframes "+ele.id+ " {"+startStr+"{opacity:"+opacity+"} "+end+"{opacity:"+sty.opacity+";}}";
		})
		
	 }
	return $columnar;
})(window);

