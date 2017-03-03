$(document).ready(function() {
    // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // grass-team
        "0":"images/v_banner_01.png",

        "1":"images/v_t.png",
        "2":"images/v_s.png", 
        "3":"images/v_lj.png",  
        "4":"images/v_q.png",  
        "5":"images/v_h.png",
        "6":"images/v_ym.png",
        "7":"images/v_potatoes.png",

        "8":"images/v_pig.png",
        "9":"images/v_sy.png",

        "10":"images/v_n.png",
        "11":"images/v_jd.png",
        "12":"images/v_j.png",

        "13":"images/Vegetables_04.png",
        "14":"images/Vegetables_06.png",
        "15":"images/Vegetables_08.png",
        "16":"images/Vegetables_10.png",


    },function(val){
            sl += 100/17;
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

        // for (var i = 0; i < 6; i++) {
        //     $(obj[i+1]).prependTo($(".left-img").eq(i));
        // }

        // organic-greens.html
        $(obj[0]).prependTo($(".og-Imgs-wrapper"));

        for (var i = 0; i < 7; i++) {
           $("<li class='accordion__li'/>").append(obj[i+1]).appendTo($(".accordion__ul:eq(0)"));

        }
        for (var i = 0; i < 2; i++) {
            $("<li class='accordion__li'/>").append(obj[i+8]).appendTo($(".accordion__ul:eq(1)"));
        }
        for (var i = 0; i < 3; i++) {
            $("<li class='accordion__li'/>").append(obj[i+10]).appendTo($(".accordion__ul:eq(2)"));
        }

        for (var i = 0; i < 3; i++) {
            $(obj[i+13]).prependTo($(".og-center-space").eq(i));
        }
        $(obj[16]).insertBefore($(".og-b-infos:last"));
        



        // // jion-us.html
        // $(obj[5]).prependTo($(".js-topImgs"));
        
        // // raise-livestock.html
        // $(obj[7]).prependTo($(".rl-Imgs-wrapper"));
        

    }




    function ogslideTimer(ogObj){
        var ogslideTimer = null;
        var ogstart = 0;
        var ogend = $(".og-ci-wrap>li>a>img").width();
        var ogchange = ogend - ogstart;
        var ogstep = 0;
        var ogmaxStep = 60;
        ogslideTimer = setInterval(function(){
            ogstep++;
            if (ogstep == ogmaxStep) {
                clearInterval(ogslideTimer);
            }

            ogObj[0].style.width = ogstart + ogchange/ogmaxStep * ogstep +"px";
            ogObj[0].parent().find("li").style.width = ogstart - ogchange/ogmaxStep * ogstep + "px";
        },16)
    }




});
