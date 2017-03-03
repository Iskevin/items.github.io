$(function(){
    // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // grass-team
        "0":"images/jionus_01.jpg",

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

        // // jion-us.html
        $(obj[0]).prependTo($(".js-topImgs"));
        // // organic-greens.html
        // $(obj[8]).prependTo($(".og-Imgs-wrapper"));
        // // raise-livestock.html
        // $(obj[7]).prependTo($(".rl-Imgs-wrapper"));
        

    };

    // JION　US
// 邮箱图标
    var emailTimer = null;
    if (emailTimer) {
        clearInterval(emailTimer);
    }
    emailTimer = setInterval(emailCallback,1000);
    function emailCallback(){
        if ($(".j-email img").attr("class")) {
            $(".j-email img").attr("class","");
        };
        setTimeout(function(){
            $(".j-email img").attr("class","animated swing");
        },1000)

    };
    // 邮箱鼠标滑过
    var _src = $(".j-email").find("img").attr("_src");
    var src = $(".j-email").find("img").attr("src");
    $(".j-email").hover(function(){
        clearInterval(emailTimer);
        $(this).find("img").attr({
            src:_src
        });

    },function(){
        $(this).find("img").attr({
            src:src
        });
        emailTimer = setInterval(emailCallback,1000);
    });
    // 分栏
    // 初始化
    // $(".j a").eq(0).css("color","#20ab35");
    // $("#j-s").eq(0).css("height","4px");

    // 当前页 点击动画
    $(".j").click(function(){
        for (var i = 0; i < $(".j").length; i++) {
            $(".j").eq(i).find("a").css("color","#000");
            $(".j-s").eq(i).css("height","0px");
            $(".j").attr("_status","0");
        }
        $(this).attr("_status","1");
        $(this).find("a").css("color","#20ab35");
        $(this).find(".j-s").css("height","4px");
        
        $(".staff-detailInfos").css("display","none");
        $(".staff-detailInfos").eq($(this).index()/2).css("display","block");
    });
    // 滑过动画
    $(".j").hover(function(){
        $(this).find("a").css("color","#20ab35");
        $(this).find(".j-s").stop().animate({
                height:"4px"
        }, 500);

        // console.log($(this).index());
        // $(".staff-detailInfos").css("display","none");
        // $(".staff-detailInfos").eq(5).css("display","none");

    },function(){
        if ($(this).attr("_status") == 0) {
            $(this).find("a").css("color","#000");
            $(this).find(".j-s").stop().animate({
                    height:"0px"
            }, 500);
        }

    })

});

