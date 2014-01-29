/**
 * @name edoc
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *  注释↓
 */
// document.write(" <scr"+"ipt lanague=\"javascript\" src=\"assets/javascripts/data/info.js\"> <\/scri"+"pt>")

var console = window.console || {};
var ARGUMENT_SEPARATOR = ":EDOC:"
console.send = function (command_word, args) {
    var iframe = document.createElement("iframe");
    var command_arr = ["command", command_word].concat(args);
    iframe.setAttribute("src", command_arr.join(ARGUMENT_SEPARATOR));
    document.body.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

console.log = function (msg) {
    console.send("log", [msg]);
}

console.update = function (index, total) {
    console.send("update_page_index", [index, total]);
}
var EDoc = (function () {

    var get_meta_info_on_current_page = function(){
        if (typeof(meta) == 'undefined' ){ meta = ''};
        return JSON.stringify(meta);
    }
    var get_meta_info_on_all_pages = function(){
        var meta_info_list = [];
        pageList.forEach(function(ele,index){
            var meta_info_string = ele.getMeta();
            try {
                meta_info_list.push(JSON.parse(meta_info_string));
            } catch (e) {
                meta_info_list.push(meta_info_string);
            }
        })
        return JSON.stringify(meta_info_list);
    }
    var get_comment = function(){
        if (typeof(meta) == 'undefined' ){ return ''};
        var commnet = meta.comment;
       return commnet;
    }
    var get_reference = function(){
        if (typeof(meta) == 'undefined' ){ return ''};
        var commnet = meta.reference;
       return JSON.stringify(reference);
    }
    var show_page = function(index){
      // keynote.gotoPage(index,key);
    }
    return {
       // main: main,
        get_comment: get_comment,
        get_reference: get_reference,
        get_meta_info_on_current_page: get_meta_info_on_current_page,
        get_meta_info_on_all_pages: get_meta_info_on_all_pages,
        show_page: show_page
    };
})();

