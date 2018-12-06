(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    var filterizd = $('.filtr-container').filterizr({
         //options object
      });
    $(document).ready(function(){
      $('select').formSelect();
    });

    $(document).ready(function() {
      M.updateTextFields();
    });

    $(document).on('scroll', function(){
      var menu = $('#menu');
      if ($(this).scrollTop() > 50){
        menu.addClass('nav--small');
      }
      else if ($(this).scrollTop() <= 50) {
        menu.removeClass('nav--small');
      }
    });

    $(document).on('click', '.navigation', function (event) {
      event.preventDefault();
      stop();
      var href = $(this).attr('href');
      var href70 = $(href).offset().top - 70;
      $('html, body').animate({
          scrollTop: href70
      }, 800);
});

  $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
  $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
  $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
  $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
  $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
  $('.scrollpoint.sp-effect6').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated zoomIn');},{offset:'100%'});


    

  }); // end of document ready
})(jQuery); // end of jQuery name space
