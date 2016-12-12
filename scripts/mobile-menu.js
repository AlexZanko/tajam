$(document).ready(function(){
    var mobileButton = $('.mobile-menu__button'),
        mobileMenu = $('.main-menu'),
        menuItems = $('.menu-items'),
        active
        menuItem = $('.menu-items__item');

   
    mobileButton.click(function(){
        mobileMenu.addClass('main-menu--active');
        menuItem.addClass('menu-items__item--active');
        $(this).toggleClass('mobile-menu__button--close');
        if(!$(this).hasClass('mobile-menu__button--close')){
            menuItem.removeClass('menu-items__item--active');
           menuItem.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
            mobileMenu.removeClass('main-menu--active');
          });
        }
      });
});