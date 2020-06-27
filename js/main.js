$(".nav-item").on("click", function (e) {
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});

// $(function(){
//     $('.nav-item a').click(function () {
//         $('.nav-item a').css('text-decoration', 'none');
//         $(this).css('text-decoration', 'underline');
//     });
// });
$(function () {
    $("nav  a").click(function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
// var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
// $('.aboutAnimation').click(function () {
//     $("div .animate__animated .animate__fadeInLeft").addClass('animate__animated animate__fadeInLeft');
//     $("div .imageFade").addClass('animate__animated animate__fadeInRight');
//     $(this).one(animationEvent, function (event) {
//         $("div .animate__animated .animate__fadeInLeft").removeClass('animate__animated animate__fadeInLeft');
//         $("div .imageFade").removeClass('animate__animated animate__fadeInRight');
//     });
// });

