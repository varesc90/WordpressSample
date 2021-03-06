


jQuery(document).ready(function($) {

    $('body').fadeIn('slow');

        homepageAnimate();

    $('.homepage-post').hover(function() {
            if (!$(this).hasClass('main-post')) {
                $(this).find('img').toggleClass('hovered');
                $(this).find('.post_title').fadeIn('fast');
            }
        },function() {
            if ($(this).find('img').hasClass('hovered')) {
                $(this).find('.post_title').fadeOut('fast');
                $(this).find('img').toggleClass('hovered');
            }
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
            $(this).addClass('hover');
            $('#category_list a').css('opacity','0.5');
            $('#category_list a.hover').css('opacity','1');
            $('.category_preview[data-id="'+id+'"]').animate({width:'toggle'},500);

        },function(){
            var id = $(this).data('id');
            $(this).removeClass('hover');
            $('#category_list a').css('opacity','1');
            $('.category_preview[data-id="'+id+'"]').animate({width:'toggle'},0);
        });


    $(".post_link").on('click',function(e){
        $('body').fadeOut('slow');
        $(this).scrollTop();
        $(this).addClass('selected');
        $(this).find('.homepage-post').addClass('main-post');
        var currentPostId = $('.contain_post').data('postid');
        $('.post_link').each(function(){
            if(!$(this).hasClass('selected'))
            {
                $(this).find('div').animate({opacity:0},500);
                $(this).animate({height:0},1000);
            }else{
                $(this).next().fadeIn('slow');
            }
        });
    });




    function homepageAnimate()
    {
        $('.site-main').animate({'padding-top':'0em','opacity':'1'},1000);
    }
});