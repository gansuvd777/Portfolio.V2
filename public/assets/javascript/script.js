$(function ($) {

    'use strict';
    (function () {
        $('#preloader').delay(800).fadeOut('slow');
    }());

}); 

$(function(){
    $(".content").fadeOut(3000);
    $(".content").fadeIn(4000);

    $(".profile-img").animate({
        
    }, 2000);
})
