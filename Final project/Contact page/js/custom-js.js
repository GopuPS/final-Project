$(document).ready(function(){
    //calling our header.html, meta.html & our footer.html
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    // change the menu on scroll
    //change color of the header
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 75){
                $(".menu-row").addClass("scrolled-menu");
            }else{
                $(".menu-row").removeClass("scrolled-menu");
            }
            // for search bar in contact
            $("#myInput").on("keyup", function(){
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function(){
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                });
            });
        })
    });
});    