$(function(){

    // setTimeout(function reset(){

    //     status1 = true;
    //     status2 = true;

    //     i=0;
    //     n=0;

    //     txt1="";
    //     txt2="";

    //     container1.innerHTML="";
    //     container2.innerHTML="";

    // }, 500);
    

    // 타이틀 타이핑

    var txt1="";
    var text1="어째서적은,"
    var container1 = document.querySelector("#about_info_inner .title");
    var i=0;

    function typing1(){
        
        if( i < text1.length){
            txt1 = text1.charAt(i);
            container1.innerHTML += txt1;
            i++;
        }else{
            clearInterval(type_control1);
        }

    }

    var txt2="";
    var text2="어째서적에서는,";
    var container2 = document.querySelector("#about_project .title");
    var n=0;

    function typing2(){
        
        if( n < text2.length){
            txt2 = text2.charAt(n);
            container2.innerHTML += txt2;
            n++;
        }else{
            clearInterval(type_control2);
        }
        console.log(text2.length);

    }

    var h=0;

    var status1 = true;
    var status2 = true;
    // 스크롤시 최초 한번만 작동해줘

    var type_control1;
    var type_control2;
    // clearInterval을 위한 친구들...

    $(window).scroll(function(){

        h=$(window).scrollTop();

        if(h >= $("#about_info").offset().top){

            if( status1 == true ){
                type_control1 = setInterval(typing1,150);
            }
            status1 = false;
            
            if(h >= $("#about_info").offset().top+300){
                $("#about_info h4").addClass("on");
            }else{
                $("#about_info h4").removeClass("on");
            }

        }
        
        if(h >= $("#about_project").offset().top){

            if( status2 == true ){
                type_control2 = setInterval(typing2,150);
            }
            status2 = false;


            var dis = 2000+($("#about_project").offset().top)-h;
            console.log(dis);
            $("#about_project ul").css({marginLeft:dis});
            
        }
    });

    var s=$(window).width()/1920;
    var etc=$("#about_etc");

    if($(window).width()<1200){
        etc.css({transform:"scale(0.625)"});
    }else{
        etc.css({transform:"scale("+s+")"});
    }

    $(window).resize(function(){

        s=$(window).width()/1920;

        if($(window).width()>1200){
            etc.css({transform:"scale("+s+")"});
        }
        
    });


});