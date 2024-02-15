$(function(){
    //gnb all메뉴열기
    $('.btnlist').click(function(){
        $('#gnb').show();
    });
    $('.closebox').click(function(){
        $('#gnb').hide();
    });


//main-nav
$('.main-nav').hover(function(){
    $('.header-background').stop(100).slideToggle;
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, ri-search-lin').toggleClass("black-font");
    $('.searchform,.btn-h-line').toggleClass("black-border");
  
 });
}); //jquery