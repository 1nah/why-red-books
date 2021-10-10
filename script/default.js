$(function(){

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

});