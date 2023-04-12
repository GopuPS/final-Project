$(document).ready(function(){
    //lets star by calling in our header.html, meta.html & our footer.html
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    //change color of the header
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 75){
                $(".menu-row").addClass("scrolled-menu");
            }else{
                $(".menu-row").removeClass("scrolled-menu");
            }
        })
    });
});    