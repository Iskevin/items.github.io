$(function(){
    // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // first-column 
        "0":"images/shounong_01.jpg",  
        "1":"images/s_04.png",  

        "2":"images/s_08.png",  
        "3":"images/s_10.png",  
        "4":"images/s_12.png",  

        "5":"images/s_17.png",  
        "6":"images/s_19.png",  
        "7":"images/s_22.png",

        "8":"images/s_25.png",  
        "9":"images/s_27.png",  
        "10":"images/s_29.png",   
    },function(val){
            sl += 100/11;
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




        // first-column.html
        $(obj[0]).prependTo($(".fc-banner"));
        $(obj[1]).prependTo($(".fc-intro-contents"));
        
        for (var i = 0; i < 3; i++) {
            $('<li/>').append(obj[i+2]).prependTo($(".fc-cert-wrap"));
        }

        $('<li/>').append(obj[5]).prependTo($(".fc-sc-bag"));
        $('<li/>').append(obj[6]).append(obj[7]).appendTo($(".fc-sc-bag"));
        
        // for (var i = 0; i < obj.length; i++) {
        //     console.log(obj[i]);
        // }

        for (var i = 0; i < 3; i++) {
            $(obj[i+8]).prependTo($(".fc-rk-bag>li").eq(i))
        }

    }
});