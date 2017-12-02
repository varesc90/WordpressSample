$( document ).ready(function() {


    $('.homepage-post').hover(function(){
            $(this).find('img').toggleClass('hovered');
            $(this).find('.post_title').fadeIn(300);
        },function(){
        $(this).find('.post_title').fadeOut(300);
            $(this).find('img').toggleClass('hovered');
        }
    );
});