/**
 * @name  弹出窗口
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *	注释↓
 */

function win(param){
  var btn_win_list = param.liLists[param.currentLi].getElementsByClassName('btn_win');
  btn_win_list = [].slice.call(btn_win_list);
  btn_win_list.forEach(function(ele){
    constant.addEventListen(ele,function(){
      //添加文档被点击事件
      var win = document.getElementById('common_win');
      var winId = ele.getAttribute('data-win')
      if( winId && winId!=null ){
          win = document.getElementById(winId);
      }
      var wininfo = ele.parentElement.getElementsByClassName('wininfo')[0];
      win.getElementsByClassName('cont')[0].innerHTML = wininfo.innerHTML;
      onBtn_win(win);
    })
      
  })
  function onBtn_win(win) {
    constant.win(win);
  }
}

       