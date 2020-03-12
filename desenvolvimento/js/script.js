$(function (){
    //abre e fecha menu
    $('.nav-toggle, .nav-close').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
    
    //FIXAR HEADER
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });
});


