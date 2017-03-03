$(function(){
     // 预加载
    var sl = 0;
    var count = 0;
    var arrImgs = [];
    loadImg({
        // grass-team
        "0":"images/about_01.png",

        "1":"images/about_04.png",
        "2":"images/about_07.png",
        "3":"images/about_10.png",

    },function(val){
            sl += 100/4;
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

        // company-infos.html
        $(obj[0]).prependTo($(".ci-banner"));
        for (var i = 0; i < 3; i++) {
             $(obj[i+1]).prependTo($(".padding-tb-li-imgs").eq(i));
        }
        

    };
});