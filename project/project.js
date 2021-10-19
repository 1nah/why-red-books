$(function(){

    // 책장 호버
    $("#shelf li a").hover(
        function(){
            var src=$(this).find("img").attr("src");
            src=src.replace(".png","_on.png");
            $(this).find("img").attr("src",src);
        },
        function(){
            var src=$(this).find("img").attr("src");
            src=src.replace("_on.png",".png");
            $(this).find("img").attr("src",src);
        }
    );


    // 횡스크롤
    var magazine=$("#magazine .project_list ul");
    var book=$("#book .project_list ul");
    var pos;

    $(window).scroll(function(){

        var h=$(window).scrollTop();

        if( h < $("#earth").offset().top ){
            $("#menu_btn").addClass("white");

        }else{
            $("#menu_btn").removeClass("white");
        }
        
        if( h >= $("#magazine").offset().top && h < $("#book").offset().top ){
            
            pos=$("#magazine").offset().top-h;

            magazine.css({marginLeft:pos});

        }else if( h >= $("#book").offset().top && h < $("footer").offset().top ){

            pos=$("#book").offset().top-h;

            book.css({marginLeft:pos});

        }

    });

    // 하위네비 스크롤
    $(".project_nav li a").click(function(){

        var d = $(".project_list").width()
        var n = $(this).parent("li").index();
        var p = $(this).parent().parent().parent().parent("li").offset().top;
        var dis=p+(n*d);

        $(window).scrollTop(dis);

    });

    // 팝업

    $(".project_list button").click(function(){

        $("#popup_info ul").animate({scrollTop:0},100);

        $("#popup_info").show();
        var cls=$(this).attr("class");
        $("#popup_info li").removeClass("on");
        $("#popup_info li."+cls).addClass("on");

    });

    $("#popup_close").click(function(){

        $("#popup_info").hide();
        $("#popup_info li").removeClass("on");

    });

});