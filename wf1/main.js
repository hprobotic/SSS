new WOW().init();
$(document).ready(function() {
    var dheight = $(document).height() - 60;

    // $('.navbar-collapse').hover(
    //     function() {
    //         $('.st-content').appendTo('.st-pusher');
    //         $('body').addClass('menu-open');

    //     }
    //     ,function() {
    //         $('body').removeClass('menu-open');
    //     });
    $('.main-nav>li>a').click(
        function() {
            $('.st-content').appendTo('.st-pusher');
            $('body').addClass('menu-open');

        }
    );
    $('.overlay').click(
        function() {
            $('body').removeClass('menu-open');
        });


    var conwidth = $('.container').width();
    $('.sub-menu').width(conwidth);
    $('.sub-window').width(conwidth);
    $('.main-nav').find('a').bind('click', function() {
        var position = $('.main-nav').find('a').index(this);
        var pos = position * conwidth;
        var iconsMove = 'left';
        if (pos > position) {
            iconsMove = 'right';
        }

        $('.sub-window').animate({
            'scrollLeft': pos
        }, 500, 'easeInExpo', function() {
            var effect = 50;
            if (iconsMove == 'left') {
                effect = effect * (-1);
            }
            $('.sub-content').children('.text-block').animate({
                'margin-left': effect
            }, 100, 'easeInOutCirc').animate({
                'margin-left': 0
            }, 200, 'easeOutBounce');
        });
        var linkPos = $(this).position();
        var left = linkPos.left;
        var siz = $(this).width();
        left = left + (siz / 2) - 5;
        $('.mac-active').animate({
            'left': left
        });
        $('.main-nav').find('a').removeClass('main-nav-active');
        $(this).addClass('main-nav-active');
    })
    $('.main-nav').lavaLamp({
        fx: 'easeInExpo',
        speed: 300,
        homeTop: -1,
        homeLeft: -1,
        autoReturn: true,
        setOnClick: true
    });
})
