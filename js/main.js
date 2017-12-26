// nav dropshadow 
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}


// resize nav on scroll
if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}


// nav collapse in after selection
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


