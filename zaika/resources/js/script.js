$(document).ready(function(){
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
    /*PARALLAX */
    
    $(window).scroll(function(){
        parallax();
    });

    function parallax(){
        var wScroll = $(window).scrollTop();
        $(".parallax-bg").css("background-position","center "+(wScroll*0.5)+"px");
    }
})


