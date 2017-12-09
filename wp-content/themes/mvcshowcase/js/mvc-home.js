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



    $('#nav-hamburger').on('click',function(e){
        e.preventDefault();
        var hamburger = $(this);
        if(!hamburger.hasClass('active'))
        {
            $('#content').fadeOut('slow', function () {
                hamburger.html('<i class="fa fa-times" aria-hidden="true"></i>');
                hamburger.addClass('active');
            });
        }else{
            $('#content').fadeIn('slow',function(){});
            hamburger.html('<i class="fa fa-th-list" aria-hidden="true"></i>');
            hamburger.removeClass('active');
        }
    });




function homepageAnimate()
{
    $('.site-main').animate({'padding-top':'0em','opacity':'1'});
}
});