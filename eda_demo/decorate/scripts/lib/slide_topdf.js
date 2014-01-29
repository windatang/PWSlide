/**
 * @name slide pad滑动
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *	注释↓
 */


function toPDF(param){
    //param.liLists[param.currentLi].getElementsByClassName('getPDF')
    var pdfs = document.body.getElementsByClassName('getPDF');
    pdfs.forEach(function(ele){
        constants.addEventListen(ele,function(){
            //添加文档被点击事件
            var title = this.getAttribute('data-title'),
                ref = this.getAttribute('data-ref');
        })
    })
}



//var newBack = key.callBack.prototype.constructor;

    // EDoc.get_meta_info_on_all_pages();
    // key.callBack = (function(){
    //  return function(){
    //     newBack(key);
    //     console.update((body.getAttribute('data-num') *1 + key.currentLi ), body.getAttribute('data-sum'))
    //  }
    