 (function(){
  $( "#temple_li" ).tmpl( pageList ).appendTo( "#keynote" );


  var key = keynote.init({
    ul:'keynote',
    liClass : 'keynote_li',
    speed : 200,
    callBack : function(param) {
      calldo(param);
    }
  });
  EDoc.show_page = function(index){
    keynote.gotoPage(index,key);
  }

  function calldo(param){
        // //内存释放
        // var alist = param.liLists[param.preLi].getElementsByClassName('btn_win');
        // for (var i = 0; i < alist.length; i++) {
        //   constant.removeEventListen(alist[i],onBtn_win);
        // }

        // var alist = param.liLists[param.preLi].getElementsByClassName('mod_tab');
        // for (var i = 0; i < alist.length; i++) {
        //   var divlist = alist[i].getElementsByClassName('layer');
        //   var btn =  alist[i].getElementsByTagName('a');
        //   constant.removeChange(divlist,btn,onMod_tab);
        // }
        // 切换页面后还原前一页动画
        keynote.prerefersh(param);
        /********   柱状图(自动) *************/
        // 自动运行的动画请加上class 与第一个参数名称相同class 名称
        keynote.addActive('auto_active', param);
        /********   柱状图(按钮) *************/
        // 给按钮加方法 执行动画
        var alist = param.liLists[param.currentLi].getElementsByClassName('interact');
        for (var i = 0; i < alist.length; i++) {
          var btn = alist[i].getElementsByTagName('a')[0];
          constant.addEventListen(btn, onInteract);
        }
        function onInteract() {
          var ele = this.parentElement.getElementsByClassName('layer')
          for (var j = 0; j < ele.length; j++) {
            ele[j].className = ele[j].className.replace(' end', ' active');
            keynote.addActive('active', param);
          };
          constant.removeEventListen(this, onInteract);
        }

        window.meta = pageList[param.currentLi].getMeta();
        /********   弹出窗口 ********/
        win(param);
        /*******   reference ********/
        //toPDF(param)

        /***** 自定义动画 *******/
        pageList[param.currentLi].actionFunction();


        console.update(param.currentLi, param.liLists.length)
        function getId(id){
          return document.getElementById(id);
        }
        
    }


 })(window) 
      