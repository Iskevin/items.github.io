$(function(){
     // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // grass-team
        "0":"images/product_lc.png",

        

    },function(val){
            sl += 100/1;
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

        // news.html
        $(obj[0]).prependTo($(".preload-new1>li:eq(0)"));
        $(obj[1]).prependTo($(".news1-d-left"));
        $(obj[2]).prependTo($(".news1-d-right"));

        $(obj[3]).prependTo($(".preload-new4>li:eq(0)"));

        $(obj[4]).prependTo($(".preload-new3>li:eq(0)"));

        $(obj[5]).prependTo($(".preload-new2>li:eq(0)"));
        $(obj[6]).appendTo($(".preload-new2>li:eq(1)")).css("margin","10px auto");
        $(obj[7]).appendTo($(".preload-new2>li:eq(1)"));

    };





    if ($(window).width()>960) {
        showImgs();
    }else {
        hideImgs();
    }

    // 初始化
    $(".zoology-infos").eq(0).css("display","block");
    $(".zoology-circle a").eq(0).find("img").eq(1).css("display","none");
    $(".zoology-circle a").hover(function(){
       $(this).parent().find("a img").css("display","block");// total
       $(this).find("img").eq(1).css("display","none");

       $(".zoology-infos").css("display","none");//total
       $(".zoology-infos").eq($(this).index()-2).css("display","block");
   },function(){
   });

    function hideImgs(){
        $(".tr1").stop().animate({top:"-98px",right:"178px"}, 500);
        $(".tr2").stop().animate({right:"92px",top:"-97px"}, 600);
        $(".tr3").stop().animate({right:"-101px",top:"-201px"}, 700);
        $(".tr4").stop().animate({right:"-181px",top:"-263px"}, 600);
        $(".tr5").stop().animate({right:"-137px",top:"-164px"}, 500);
        $(".bl1").stop().animate({left:"-99px",bottom:"-146px"}, 500);
        $(".bl2").stop().animate({left:"-165px",bottom:"-247px"}, 600);
        $(".bl3").stop().animate({left:"-130px",bottom:"-210px"}, 700);
        $(".bl4").stop().animate({left:"85px",bottom:"-92px"}, 600);
        $(".bl5").stop().animate({left:"203px",bottom:"-69px"}, 500);
    }
    function showImgs(){
        $(".tr1").stop().animate({top:"0px",right:"262px"}, 500);
        $(".tr2").stop().animate({right:"192px",top:"0px"}, 600);
        $(".tr3").stop().animate({right:"76px",top:"0px"}, 700);
        $(".tr4").stop().animate({right:"40px",top:"0px"}, 600);
        $(".tr5").stop().animate({right:"0px",top:"0px"}, 500);
        $(".bl1").stop().animate({left:"0px",bottom:"0px"}, 500);
        $(".bl2").stop().animate({left:"40px",bottom:"0px"}, 600);
        $(".bl3").stop().animate({left:"76px",bottom:"0px"}, 700);
        $(".bl4").stop().animate({left:"192px",bottom:"0px"}, 600);
        $(".bl5").stop().animate({left:"262px",bottom:"0px"}, 500);
    }
    $(window).resize(function(){
        // console.log($(document.body).clientWidth);
        var w = $(document.documentElement).width() || $(window).width();
        if (w < 960) {
            hideImgs();
        }else {
            showImgs();
        }
    })
});
