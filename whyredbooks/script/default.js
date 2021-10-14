$(function(){
       
    // 새로고침 바로 위로가게 어케함~~?!
    setTimeout(function(){
        $("body, html").css({scrollTop:"0px"})
    },0);

    // menu
    $("#menu_btn").hover(
        function(){
            $("#menu_btn").addClass("on");
        },
        function(){
            $("#menu_btn").removeClass("on");
        }
    );

    $("#menu_btn").click(function(){
        $("#main_menu").addClass("open");
    });

    $("#main_menu li").hover(
        function(){
            $("#main_menu li").removeClass("on");
            $(this).addClass("on");
        },
        function(){
        }
    );

    $("#main_menu>img").click(function(){
        $("#main_menu").removeClass("open");
    });


});