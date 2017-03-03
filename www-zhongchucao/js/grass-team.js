// GRASS TRAM JS 行为
// 团队记录
$(function(){
     // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // grass-team
        "0":"images/team_01.jpg",

        "1":"images/team_04.png",  
        "2":"images/t_07.png",  
        "3":"images/team_08.png",  
        "4":"images/team_11.png",  
        "5":"images/team_13.png",  
        "6":"images/team_15.png",  
    },function(val){
            sl += 100/7;
            console.log(sl);
            $(".yy>p").css({
                width:sl+"%"
            });
            if (Math.round(sl)==100) {
                var ele = document.documentElement.body || document.body;
                $(ele).css("overflow","visible");
                $(".yy").css("display","none");
            }
    },function(val){
            // val   //一个对象
            for (var key in val) {
                // console.log(val[key]);
                arrImgs.push(val[key]);
            }
            callback(arrImgs);
    });
    //loading : 加载中执行的函数 , 每加载完成一张图片  会执行一次loading
    //loaded : 所有图片加载完成后执行的函数
    function loadImg(imgObj,loading,loaded){
        if (typeof imgObj == "object") {
            var num = 0;
            var lNum = 0;
            var rObj = {};
            for (var key in imgObj) {
                num++;//用于遍历imgObj  计算图片预加载图片个数
                var src = imgObj[key];
                var img = new Image();
                img.src = src;
                rObj[key] = img;
                img.onload = function(){
                    lNum++;//用于计算  已经加载的个数
                    if(typeof loading == 'function'){
                            loading(this);
                    }
                    if (num == lNum) {
                        if (typeof loaded == "function") {
                            loaded(rObj);
                        }
                    }
                }
            }
        }
    };
    // 图片回调
    function callback(obj){
        // grass-team.html
        $(obj[0]).prependTo($(".gt-topImgs"));

        for (var i = 0; i < 6; i++) {
            $(obj[i+1]).prependTo($(".left-img").eq(i));
        }

    }

    $(".team-li").hover(function(){
        if ($(this).index() != $(this).parents(".team-ul").children().length-1) {
            $(this).css({
                borderBottom: "1px dashed #999"
            })
        }

    },function(){
        $(this).find(".team-bag").css({
            boxShadow: ""
        });
        $(this).css({
            paddingBottom: "",
            marginBottom: ""
        });
        if ($(this).index() != $(this).parents(".team-ul").children().length-1) {
            $(this).css({
                borderBottom: ""
            })
        }
    });
});
