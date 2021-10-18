$(function(){

    // 책장부분 

    var shelf_w=$("#shelf_bg").width();
    var items =$("#shelf_inner>ul");
    var inner= ($(window).width()-shelf_w)/2;

    function start(){
        items.css({width:shelf_w});
        items.css({transform:"translateX(-50%) scale("+(shelf_w/1612)+") "});
        $("#flow_inner2").css({width:inner});
    }
    start();

    $(window).resize(function(){

        shelf_w=$("#shelf_bg").width();

        items.css({width:shelf_w});
        items.css({transform:"translateX(-50%) scale("+(shelf_w/1612)+")"});
        
        inner= ($(window).width()-shelf_w)/2;
        
        $("#flow_inner2").css({width:inner});
   
    });


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

        console.log(dis);

    });

});