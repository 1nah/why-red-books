$(function(){

    // 타이핑 에니메이션

    var txt="";
    var text="why_red_b@naver.com"
    var container = document.querySelector("#typing");
    var i=0;
    var control=true;

    function typing(){
        
        if( i < text.length && control==true){

            i++;

            if( i == text.length ){
                $("#typing~span").addClass("on");
                setTimeout(function(){
                    control=false;
                    $("#typing~span").removeClass("on");
                }, 3000);
            }

        }else if( i > 0 && control==false){
            
            i--;

            if( i == 0 ){
                $("#typing~span").addClass("on");
                setTimeout(function(){
                    control=true;
                    $("#typing~span").removeClass("on");
                }, 3000);
            }
        }
        txt = text.substr(0,i);
        container.innerHTML = txt;
        
    }

    setInterval(typing, 100);
    

    // 이메일 복사
    
    $("#copy").click(function(){

        $("textarea").select(); 
        document.execCommand('copy');

        $("#popup").addClass("on");
        setTimeout(function(){
            $("#popup").removeClass("on");
        }, 1000);

    });

    var s=$(window).width()/1920;
    var contact=$("#contact");

    if($(window).width()<1400){
        contact.css({transform:"scale(0.625)"});
    }else{
        contact.css({transform:"scale("+s+")"});
    }

    $(window).resize(function(){

        s=$(window).width()/1920;

        if($(window).width()>1400){
            contact.css({transform:"scale("+s+")"});
        }
        
    });

});