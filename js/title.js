$(document).ready(function(){
  $(window).scroll(function(){
    var title = $('div[class*=pj-title-bg]');
    var scroll = $(window).scrollTop();
    var scrollBottom = scroll + $(window).height();
    $(title).each(function(index){

      var titleHeight = $('div[class*=pj-title]').height();
      if (scrollBottom > $(this).offset().top && scrollBottom <= $(this).offset().top + titleHeight/4) {
        $(title).eq(index).animate({'opacity':'1'}, 'slow');
      }
    });

    var titLine = $('.design-title::after');
    $(titLine).each(function(index){

    });
  });
});
