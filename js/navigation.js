$(document).ready(function(){
  $(window).scroll(function(){
    var current = $(this).scrollTop();
    var screenHeight = $(window).height();
    if (current > screenHeight) {
      $('#main #gnb').fadeIn(500);
    } else {
      $('#main #gnb').fadeOut(100);
    }
    //main-gnb-style
    if (current > screenHeight && current < screenHeight * 2 - 60) {
      $('#main #gnb').removeClass().addClass('home-bg');
      $('#main #gnb a').css('color','#fff');
      $('#main #gnb li>a').removeClass('menu-active')
      $('#main #gnb li:first-child>a').addClass('menu-active').css('color','#f09');
      $('#main h1').attr('style','background: url("images/logo/logo-f09.svg")');
    } else if (current >= screenHeight * 2 - 60 && current < screenHeight * 3 - 60) {
      $('#main #gnb').removeClass().addClass('works-bg');
      $('#main #gnb a').css('color','#000');
      $('#main #gnb li>a').removeClass('menu-active');
      $('#main #gnb li:nth-child(2)>a').addClass('menu-active').css('color','#90f');
      $('#main h1').attr('style','background: url("images/logo/logo-90f.svg")');
    } else if (current >= screenHeight * 3 - 60 && current < screenHeight * 5 - 60) {
      $('#main #gnb').removeClass().addClass('about-bg');
      $('#main #gnb a').css('color','#fff');
      $('#main #gnb li>a').removeClass('menu-active');
      $('#main #gnb li:nth-child(3)>a').addClass('menu-active').css('color','#0f9');
      $('#main h1').attr('style','background: url("images/logo/logo-0f9.svg")');
    } else if (current >= screenHeight * 5 - 60 && current < screenHeight * 6) {
      $('#main #gnb').removeClass().addClass('about-bg');
      $('#main #gnb a').css('color','#fff');
      $('#main #gnb li>a').removeClass('menu-active');
      $('#main #gnb li:last-child>a').addClass('menu-active').css('color','#0f9');
      $('#main h1').attr('style','background: url("images/logo/logo-0f9.svg")');
    }

    //works-web-gnb-style
    var myObj = $('section[id*="project"]');
    if(myObj.length){
      var pj1 = $('#project1').offset().top;
      var pj2 = $('#project2').offset().top;
      //menu-color&background
      if (current < screenHeight * 3 - 60) {
        $('#works-web #gnb a').css('color','#fff');
        $('#works-web #gnb').removeClass('bg-white').addClass('bg-black');
      } else if (current > pj2 - 60 && current < pj2 + (screenHeight * 2) - 60) {
        $('#works-web #gnb a').css('color','#fff');
        $('#works-web #gnb').removeClass('bg-white').addClass('bg-black');
      } else {
        $('#works-web #gnb a').css('color','#000');
        $('#works-web #gnb').removeClass('bg-black').addClass('bg-white');
      }
      //menu-active
      if (current <= screenHeight - 60) {
        $('#works-web #gnb a').removeClass('menu-active');
      } else if (current >= pj1 - 60 && current < pj2 - 60) {
        $('#works-web #gnb a').removeClass('menu-active');
        $('#works-web #gnb li:first-child>a').addClass('menu-active').css('color','#90f');
      } else if (current >= pj2 - 60) {
        $('#works-web #gnb a').removeClass('menu-active');
        $('#works-web #gnb li:nth-child(2)>a').addClass('menu-active').css('color','#90f');
      }
    }

    //works-design-gnb-style
    if (current < screenHeight - 60) {
      $('#works-design #gnb a').css('color','#fff');
      $('#works-design #gnb').removeClass('bg-white').addClass('bg-black');
    } else {
      $('#works-design #gnb a').css('color','#000');
      $('#works-design #gnb').removeClass('bg-black').addClass('bg-white');
    }
  });

  $("a[href^='#']").click(function(e) {
  	e.preventDefault();
  	var pos = $($(this).attr("href"));
    if (pos.length) {
      var position = pos.offset().top;
      $("body, html").stop().animate({
    		scrollTop: position
      }, 200);
    }
  });
});
