(function(){
  $.fn.menuBar = function(){
    this.each(function(index){
      var $menuBar = null,
          $menuList = null,
          $menuSelect = null;

      function init(el){
        $menuBar = $(el);
        $menuList = $menuBar.find('li');
      }
      function event(){
        $menuList.on('click', function(){
          if($menuSelect)
            $(this).removeClass('active');
            $(this).siblings().removeClass('active');
          $menuSelect = $(this);
          $menuSelect.addClass('active');
          $menuSelect.parent('ul').next().children('div').eq($(this).index()).show().siblings().hide();
        });
      }
      init($(this));
      event();
    });
    return this;
  }
})(jQuery);
