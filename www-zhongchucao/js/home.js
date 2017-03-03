// HOME JS
$(function(){
    // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // home banner
        "0":"images/honme_banner3.jpg",
        "1":"images/99_banner.jpg",
        "2":"images/home_banner2.jpg",
        // company logo
        "3":"images/home_compay_05.png",
        // 涉及业务
        "4":"images/home_15.png",
        "5":"images/home_16.png",
        "6":"images/home_17.png",
        "7":"images/home_19.png",
        "8":"images/home_20.png",
        "9":"images/home_21.png",    
    },function(val){
            sl += 100/10;
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
        // home.html
        for (var i = 0; i < 3; i++) {
            $(".slide").eq(i).append(obj[i]);
        }

        $(obj[3]).prependTo($(".hc-right")).attr("alt","logo");
        
        for (var i = 0; i < 6; i++) {
            $(".areas-info").eq(i).children().prepend(obj[i+4]);
        }




        // first-column.html
        // $(obj[3]).prependTo($(".fc-banner"));
        
        for (var i = 0; i < obj.length; i++) {
            console.log(obj[i]);
        }



        // grass-grow.html
        // $(obj[6]).prependTo($(".gg-Imgs-wrapper"));
        // // grass-team.html
        // $(obj[4]).prependTo($(".gt-topImgs"));
        // // jion-us.html
        // $(obj[5]).prependTo($(".js-topImgs"));
        // // organic-greens.html
        // $(obj[8]).prependTo($(".og-Imgs-wrapper"));
        // // raise-livestock.html
        // $(obj[7]).prependTo($(".rl-Imgs-wrapper"));
        // // communipy.html
        // $(obj[9]).prependTo($(".cs-Imgs-wrapper"));

    }




    // HEAD JS
    //滚动 head
    $(window).scroll(function(){
        var scroll_top = $(document.documentElement) && $(document.body);
        // scroll_top.scrollTop()>0 ? $("#linav h3 a").css("color","#f39800"):$("#linav h3 a").css("color","#f39800");
        if (scroll_top.scrollTop() > $("#touchMain").height()) {

            // 相对位置
            $(".h-head").css({
                position : "fixed",
                transform: "translateZ(0)",
                backgroundColor:"#fff",
            });

            // 背景颜色设置
            $(".h-black-shadow").css("display","none");
            $(".h-navBar").css({
                backgroundColor: "#fff"
            });
            $(".y-text").css("color","#23ac38");
            // 图片
            $(".h-logo-a").find("img").attr("src","images/iconlogo_l.png");
            // 字体颜色
            $(".h-navBar").find(".m h3 a").css({
                color:"#23ac38"
            });
            $(".h-navBar").find("#linav h3 a").css("color","#f39800");
            // 轮子颜色
            $(".block").css("background-color","#f39800");

            $(".sub").css("opacity","1");
        }else {
            // 相对位置
            $(".h-head").css({
                position : "absolute",
                backgroundColor:""
            });

            // 背景颜色设置
            $(".h-black-shadow").css("display","block");
            $(".h-navBar").css({
                backgroundColor: "",
                color:"#fff"
            });
            $(".y-text").css("color","#fff");
            // 图片
            $(".h-logo-a").find("img").attr("src","images/iconlogo_b.png");
            // 字体颜色
            $(".h-navBar").find(".m h3 a").css({
                color:"#fff"
            });
            // 轮子颜色
            $(".block").css("background-color","#f39800");

            $("#linav h3 a").css("color","#f39800");
            $(".m .sub").css("opacity","0.9");
        };

        // 滑过事件
        $(".m").hover(function(){},function(){
            if ($(this).attr("status") == 0) {
                    if (scroll_top.scrollTop() > 545) {
                        $(this).find("h3 a").css("color","#23ac38");
                    }else {
                        $(this).find("h3 a").css("color","#fff");
                    }
            }else {
                $(this).find("h3 a").css("color","#f39800");
            }
        });

    });


    // 我们的公司 涉及业务  新闻动态
        $(".hci-title-a").mouseover(function(){
            $(this).css("color","#23ac38");
            $(this).find("span").stop().animate({
                width:"100%"
            },1000);
            $(this).find("span").css({
                borderColor:"#f39800"
            })
        });
        $(".hci-title-a").mouseout(function(){
            $(this).css("color","#333");
            $(this).find("span").stop().animate({
                width:"39%"
            },1000);
            $(this).find("span").css({
                borderColor:"#dfdfdf"
            })
        });

        // 涉及业务
        // 滑过
        $(".areas-info").mouseover(function(){
            // 上边
            // 侧边
            $(this).find(".bus-left-aside").stop().animate({
                left:"-60px"
            }, 1000);
            // 阴影效果
            $(this).find(".bus-shadow").stop().animate({
                opacity:0.4
            }, 1000);
            // 文字
            $(this).find(".bus-info-wrapper").stop().animate({
                opacity:1
            },1000)
            // 下边
            $(this).find(".bus-right-aside").stop().animate({
                right:"-60px"
            }, 1000);
            // 阴影效果
            $(this).find(".bus-shadow").stop().animate({
                opacity:0.4
            }, 1000);
            // 文字
            $(this).find(".bus-info-wrapper").stop().animate({
                opacity:1
            },1000)
        });
        // 滑出
        $(".areas-info").mouseout(function(){
            // 上边
            // 侧边
            $(this).find(".bus-left-aside").stop().animate({
                left:"0px"
            }, 1000);
            // 阴影效果
            $(this).find(".bus-shadow").stop().animate({
                opacity:0
            }, 1000);
            // 文字
            $(this).find(".bus-info-wrapper").stop().animate({
                opacity:0
            },1000)
            // 下边
            // 侧边
            $(this).find(".bus-right-aside").stop().animate({
                right:"0px"
            }, 1000);
            // 阴影效果
            $(this).find(".bus-shadow").stop().animate({
                opacity:0
            }, 1000);
            // 文字
            $(this).find(".bus-info-wrapper").stop().animate({
                opacity:0
            },1000)
        })




})
