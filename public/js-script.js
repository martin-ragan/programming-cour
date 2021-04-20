$(window).on('load', function () {
    $(".loader").fadeOut("8000");
});
$(document).scroll(function() {
    let y = $(this).scrollTop();

    if (y > 0) {
        $("#floating-btn").fadeIn();
    } else {
        $("#floating-btn").fadeOut();
    }
});
$("#info-link").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#info").offset().top
    }, 800);

});
$("#teachers-link").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#teachers").offset().top
    }, 800);

});
$("#login-link").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#login-section").offset().top
    }, 800);

});
$("#floating-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 800);

});