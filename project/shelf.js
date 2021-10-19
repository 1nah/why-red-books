$(function(){

    // 책장부분 

    let shelf_w = $("#shelf_bg").width();
    let items = $("#shelf_inner>ul");
    let inner = ($(window).width()-shelf_w)/2;
    let flow=$("#flow_inner2");

    setTimeout(function(){
        items.css({width:shelf_w});
        items.css({transform:"translateX(-50%) scale("+(shelf_w/1612)+")"});
        flow.css({width:inner});
    },1);
    

    $(window).resize(function(){

        shelf_w=$("#shelf_bg").width();
        inner= ($(window).width()-shelf_w)/2;

        items.css({width:shelf_w});
        items.css({transform:"translateX(-50%) scale("+(shelf_w/1612)+")"});
        
        flow.css({width:inner});

    });
    
});