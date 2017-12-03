jQuery(document).ready(function($) {

    homepageAnimate();

    $('.homepage-post').hover(function(){
            $(this).find('img').toggleClass('hovered');
            $(this).find('.post_title').fadeIn(300);
        },function(){
        $(this).find('.post_title').fadeOut(300);
            $(this).find('img').toggleClass('hovered');
        }
    );

function homepageAnimate()
{
    $('.site-main').animate({'padding-top':'0em','opacity':'1'});
}
});