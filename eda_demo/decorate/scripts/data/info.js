var sum = 12;
var pageList = [];

var menu = [ {
    'name': 'meau1',
    'start_page_number': 0
}, {
    'name': '-meau2',
    'start_page_number': 1
}, {
    'name': '-meau3',
    'start_page_number': 2
}, {
    'name': 'meau4',
    'start_page_number': 3
}, {
    'name': 'meau5',
    'start_page_number': 7
}]





pageList[0] = {
    index:0,
    meau_title:'meau1',
    title:'第一张ppt标题',
    isAction:false,
    actionFunction:function(){},
    InnerHTML:'',
    subhead:{
        className:'',
        title:'一个副标题'
    },
    reference:[{
          left:'20',
          top:'20',
          url:'',
          title:''
        },{
          left:'',
          top:'',
          url:'',
          title:''
        }
    ],
    windows:[
      {
        btnClassName:'',
        left:'100',
        top:'200',
        width:'40',
        height:'40',
        winId:null,
        winContent:{
          width:'100',
          height:'200',
          tag:'video',
          url:'videos/1a.mp4',
          content:''
        }
      },
      {
        btnClassName:'',
        left:'',
        top:'',
        width:'',
        height:'',
        winId:'',
        winContent:{
          width:'',
          height:'',
          tag:'',
          url:'',
          content:''
        }
      }
    ],
    comment:'一条评论',
    thumbnail:function(){
      return "media/thumbnail/" + this.index +".png"
    },
    getMeta:function(){
        var reference = [];
            this.reference.forEach(function(ele,index){
                reference[index] = {};
                reference[index][ele.title] = ele.url;
            })
        return {
            'menu':menu,
            "title": this.title,
            "comment": this.comment,
            "thumbnail": this.thumbnail,
            "reference": reference,
            "menu": menu,
            "menu_title": this.meau_title
        }
    }
}



pageList[1] = {
    index:1,
    meau_title:'meau2',
    title:'第2张ppt标题',
    isAction:false,
    actionFunction:function(){},
    InnerHTML:'',
    subhead:{
        className:'',
        title:'第二个副标题'
    },
    reference:[{
          left:'20',
          top:'20',
          url:'',
          title:''
        },{
          left:'',
          top:'',
          url:'',
          title:''
        }
    ],
    windows:[
      {
        btnClassName:'',
        left:'100',
        top:'200',
        width:'40',
        height:'40',
        winId:null,
        winContent:{
          width:'100',
          height:'200',
          tag:'video',
          url:'videos/1a.mp4',
          content:''
        }
      },
      {
        btnClassName:'',
        left:'',
        top:'',
        width:'',
        height:'',
        winId:'',
        winContent:{
          width:'',
          height:'',
          tag:'',
          url:'',
          content:''
        }
      }
    ],
    comment:'一条评论',
    thumbnail:function(){
      return "media/thumbnail/" + this.index +".png"
    },
    getMeta:function(){
        var reference = [];
            this.reference.forEach(function(ele,index){
                reference[index] = {};
                reference[index][ele.title] = ele.url;
            })
        return {
            'menu':menu,
            "title": this.title,
            "comment": this.comment,
            "thumbnail": this.thumbnail,
            "reference": reference,
            "menu": menu,
            "menu_title": this.meau_title
        }
    }
}


pageList[2] = {
    index:2,
    meau_title:'meau2',
    title:'有动画标题',
    isAction:true,
    actionFunction:anim_3,
    InnerHTML:'\n\
        <div class="ppt-page-3">\n\
          <div class="num-left"></div>\n\
          <div class="num-right" ></div>\n\
          <div class="and-or" ></div>\n\
          <div class="mask subtitle-mask"></div>\n\
          <div class="mask left-num-mask"></div>\n\
          <div class="mask right-num-mask"></div>\n\
          <div class="mask text-mask"></div>\n\
        </div>\n\
          ',
    subhead:{
        className:'',
        title:'有动画标题'
    },
    reference:[{
          left:'20',
          top:'20',
          url:'',
          title:''
        },{
          left:'',
          top:'',
          url:'',
          title:''
        }
    ],
    windows:[
      {
        btnClassName:'',
        left:'100',
        top:'200',
        width:'40',
        height:'40',
        winId:null,
        winContent:{
          width:'100',
          height:'200',
          tag:'video',
          url:'videos/1a.mp4',
          content:''
        }
      },
      {
        btnClassName:'',
        left:'',
        top:'',
        width:'',
        height:'',
        winId:'',
        winContent:{
          width:'',
          height:'',
          tag:'',
          url:'',
          content:''
        }
      }
    ],
    comment:'一条评论',
    thumbnail:function(){
      return "media/thumbnail/" + this.index +".png"
    },
    getMeta:function(){
        var reference = [];
            this.reference.forEach(function(ele,index){
                reference[index] = {};
                reference[index][ele.title] = ele.url;
            })
        return {
            'menu':menu,
            "title": this.title,
            "comment": this.comment,
            "thumbnail": this.thumbnail,
            "reference": reference,
            "menu": menu,
            "menu_title": this.meau_title
        }
    }
}