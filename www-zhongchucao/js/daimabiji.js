$(function(){
    // var ind = 100;
    var nav = $(".nav");
    var init = $(".nav .m").eq(ind);
    var block = $(".nav .block");
    block.css({
        "left": init.position().left
        // "left": "100px"
    });
    nav.hover(function() {},
    function() {
        block.stop().animate({
            "left": init.position().left
        },
        300);
    });
    $(".nav").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function(i, c, s, tit) {
            block.stop().animate({
                "left": tit.eq(i).position().left
            },
            300);
        }
    });

    // head
        $(".nav .m").hover(function(){
            $(this).find("h3 a").css({
                "color":"#f38900"
            });
            $("#linav h3 a").css("color","#f38900");

            if (Math.floor($(this).index()) === 4 || Math.floor($(this).index()) === 1){
                // $(this).children(".sub").slideToggle();
            }

        },function(){
            $("#linav h3 a").css("color","#f38900");

            if ($(this).attr("status") == 0) {
                if ($(this).parent().attr("nowpos") == "52") {
                    $(this).find("h3 a").css("color","#23ac38");
                }else {
                    $(this).find("h3 a").css("color","#fff");
                }

            }else {
                $(this).find("h3 a").css("color","#f39800");
            }
        });



});
var ind = $("#linav").index();
// console.log($("#linav").index());
//����
// myFocus.set({
// 	id:'myFocus',//ID
// 	pattern:'mF_quwan'//����
// });
