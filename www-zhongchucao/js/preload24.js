$(function(){
	// 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // grass-team
        "0":"images/communipy_01.png",

        "1":"images/communipy_04.png",

        "2":"images/communipy_07.png", 
        "3":"images/communipy_09.png",  
        "4":"images/communipy_11.png",  
        "5":"images/communipy_16.png",
        "6":"images/communipy_18.png",
        "7":"images/communipy_19.png",

    },function(val){
            sl += 100/8;
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

        for (var i = 0; i < 6; i++) {
            $(obj[i+1]).prependTo($(".left-img").eq(i));
        }

        // communipy.html
        $(obj[0]).prependTo($(".cs-Imgs-wrapper"));

        $(obj[1]).prependTo($(".cs-c-wrap1"));

        for (var i = 0; i < 6; i++) {
        	$(obj[i+2]).appendTo($(".cs-c-wrap2"));
        }

        // // jion-us.html
        // $(obj[5]).prependTo($(".js-topImgs"));
        // // organic-greens.html
        // $(obj[8]).prependTo($(".og-Imgs-wrapper"));
        // // raise-livestock.html
        // $(obj[7]).prependTo($(".rl-Imgs-wrapper"));
        

    }
});