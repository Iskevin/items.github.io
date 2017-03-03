$(document).ready(function() {
    $(".shrink-header").click(function(){
        console.log($(".shrink-nav").attr("dbclicked"));
        if ($(".shrink-nav").attr("dbclicked") == "true") {
            $(".shrink-nav").css("display","block");
            $(".shrink-nav").attr("dbclicked","false");
        }else {
            $(".shrink-nav").css("display","none");
            $(".shrink-nav").attr("dbclicked","true");
        }

    });
    $(window).resize(function(){
        if ($(this).width()>960) {
            $(".shrink-nav").css("display","none");
        }

    });

    $(".sn").hover(function(){
        $(this).find("h3 span").css("background-color","#f39800");
        $("#shrink-child").find("h3 span").css("background-color","#f39800");
        $(this).find(".sn-sub").css("display","block");
    },function(){
        $(this).find("span").css("background-color","#999");
        $("#shrink-child").find("h3 span").css("background-color","#f39800");
        $(this).find(".sn-sub").css("display","none");
    });
    $(".sn-sub").hover(function(){
        $(this).css("display","block");
    },function(){
        $(this).css("display","none");
    });
    $(".sn-sub li").hover(function(){
        $(this).find("a").css("color","#f39800");
    },function(){
        $(this).find("a").css("color","#fff");
    });

    // shrink close
    $(".shrink-img-wrapper2").click(function(){
        $(".shrink-nav").css("display","none");
    });


});
