/**
 * @name edoc
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *  注释↓
 */

var console = new Object();
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

function page_change_hook(index) {
    console.send("update_page_index", [EDoc.index, EDoc.sum]);
}

var EDoc = {
   get_comment:function(){
        if (typeof(comment) == 'undefined' ){ comment = ''};
        return comment;
    },
    get_reference:function(){
        if (typeof(reference) == 'undefined' ){ reference = ''};
        return reference;
    },
    index:0,
    sum:0
};