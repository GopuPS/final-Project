$(document).ready(function(){
    // call in all the required file
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    // change header on scroll
    $(function(){
        $(window).on("scroll", function(){
            if ($(window).scrollTop() > 50){
                $(".menu-row").addClass("scrolled-menu");
            }else{
                //this will remove the scrolled-menu class when we scroll back to the top
                $(".menu-row").removeClass("scrolled-menu");
            }
        });
    });
    // slider that is in the product page
    $(".masthead-slider > div:gt(0)").hide();
    setInterval(function(){
      $(".masthead-slider > div:first-child")
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo(".masthead-slider"); 
    },3000);
    //for tabs in the product page
    $(".tab-list").on("click", ".tab", function(e){
        e.preventDefault();
        $(".tab").removeClass("active");
        $(".tab-content").removeClass("show");
        $(this).addClass("active");
        $($(this).attr("href")).addClass("show");
    });
});