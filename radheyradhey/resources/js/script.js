
$(window).scroll(function(){
    parallax();
});

function parallax(){
    var wScroll = $(window).scrollTop();
    $(".parallax-bg").css("background-position","center "+(wScroll*0.5)+"px");
}

$(document).ready(function(){
    $("h1").addClass("tada");

    /*Scroll On Buttons */
    
    $('.js--scroll-to-restaurant').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-restaurant').offset().top},1000);
    });
    
    $('.js--scroll-to-features').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},600);
    });
    
    /*Navigation scroll */
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
         }
        });
    

});




/*SCROLL ON BUTTONS */

