$(document).ready(function(){

var pixelOffset = $(".carousel-wrapper").css("width"),
leftArrow = $(".arrow-left"),
rightControl = $(".arrow-right"),
ElementsList = $(".carousel-list"),
elementsCount = ElementsList.find('.carousel-item__img').length,
activeItem = $('.carousel-item--active'),
startValue = 0;
counter = activeItem.index(); // Вычисляем значение для старта
leftCounter = counter-2 // при 5 видимых эл-ах;
if($(window).width()<480){
 leftCounter = counter-1; // при 3;
}
//Mobile 
  ElementsList.css('left',-74*leftCounter)
   rightControl.click(function(){
   startValue -= 70;
   counter +=1;
   ElementsList.find('li').removeClass('active');
   if(counter>=0&&counter<=elementsCount-1){ 
   ElementsList.animate({left:startValue + "px"}, 300)
   $('.carousel-item').eq(counter).addClass('carousel-item--active');
   $('.carousel-item').eq(counter-1).removeClass('carousel-item--active');
   console.log(counter);
 }
   });
    leftArrow.click(function(){
      if(counter>0){ 
        startValue += 70;
        --counter; 
        $('.carousel-item').eq(counter).addClass('carousel-item--active');
        $('.carousel-item').eq(counter+1).removeClass('carousel-item--active');
            ElementsList.animate({left:startValue + "px"}, 300);
            console.log(counter);
          }      
    });
  });
