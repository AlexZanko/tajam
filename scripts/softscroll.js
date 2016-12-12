//Плагин для плавного скролла якорей
$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 2000);
return false;
});
$('.animate').scrolla();
});
