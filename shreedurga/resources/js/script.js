


$(window).scroll(function(){
    parallax();
  });
  
  function parallax(){
      var wScroll = $(window).scrollTop();
      $(".parallax-bg").css("background-position","center "+(wScroll*0.5)+"px");
  }



$(document).ready(function(){
    
   wow = new WOW(
  {
      offset: 220
    }
)
wow.init(); 
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
    
    $(".menu-card").hover(function(){
      $(".menu-card").toggleClass("animated swing");  
    });
    
    $('.review-div').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2500,
  });
    
    
});

