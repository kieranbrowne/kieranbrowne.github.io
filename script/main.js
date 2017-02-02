$(document).ready(function () {
    $(document).on('keyup',function(e) {
        console.log('this');
        if (e.keyCode == 71) {
            $('body').toggleClass('show-grid');
        } else if (e.keyCode == 66) {
            $('body').toggleClass('show-baseline');
        }
    });

    $('body.post h2').click(function(e) {
        console.log(e.target.id);
        window.location.hash = '#'+e.target.id;
        $('html, body').animate({scrollTop:$('#'+e.target.id).offset().top - 66},00);
    });
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        console.log($(this).attr('href'));
        window.location.hash = $(this).attr('href');
        $('html, body').animate({scrollTop:$($(this).attr('href')).offset().top - 66},00);
    });
});
