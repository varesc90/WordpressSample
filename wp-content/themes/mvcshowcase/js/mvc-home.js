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
                $('#dropdown').fadeIn('slow',function(){

                });
            });
        }else{
            $('#dropdown').fadeOut('slow',function(){
                $('#content').fadeIn('slow',function(){});
                hamburger.html('<i class="fa fa-th-list" aria-hidden="true"></i>');
                hamburger.removeClass('active');
            });

        }
    });

    $('#category_list a').hover(
        function(){
                var id = $(this).data('id');
                $('.category_preview[data-id="'+id+'"]').animate({width:'toggle'},350);
        },function(){
            var id = $(this).data('id');
            $('.category_preview[data-id="'+id+'"]').animate({width:'toggle'},0);
        });




function homepageAnimate()
{
    $('.site-main').animate({'padding-top':'0em','opacity':'1'});
}
});