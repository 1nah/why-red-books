$(function(){

    $("#slide>li").click(function(){

        if($(this).hasClass("on")){

            $(this).find(".front").toggleClass("on")

            console.log("뒤집어!");

        }

    });

    
    // slide

    var num = 5;
    var pos;

    $("#arrow img").click(function(){

        if($(this).hasClass("prev")){
            if(num==5){
                $("#slide").animate({marginLeft:-4160},0);
                num=13;
            }
            num--;
            
        }else if($(this).hasClass("next")){
            if(num==12){
                $("#slide").animate({marginLeft:-1280},0);
                num=4;
            }
            num++;
            
        }
        
        pos=num*(-320)+"px";
        $("#slide").animate({marginLeft:pos},500);
        
        $("#slide li").removeClass("on");
        $("#slide li").eq(num).addClass("on");

        $("#disc li").removeClass("on");
        $("#disc li").eq(num-5).addClass("on");

        $(".front").removeClass("on");

    });


    $("#disc li").click(function(){

        $("#disc li").removeClass("on");
        $(this).addClass("on");
        num=$(this).index()+5;

        $("#slide li").removeClass("on");
        $("#slide li").eq(num).addClass("on");

        pos=num*(-320)+"px";
        $("#slide").animate({marginLeft:pos},500);

        $(".front").removeClass("on");

    });

    
});