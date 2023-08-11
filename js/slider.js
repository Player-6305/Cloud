let prevArrow_3 = document.getElementById('prevArrow_3')
let nextArrow_3 = document.getElementById('nextArrow_3')

$('.section3_items').slick({
    autoplay: 5000,
    prevArrow: prevArrow_3,
    nextArrow: nextArrow_3
});


let prevArrow_10 = document.getElementById('prevArrow_10')
let nextArrow_10 = document.getElementById('nextArrow_10')

$('.staff_items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: 5000,
    prevArrow: prevArrow_10,
    nextArrow: nextArrow_10
});


let prevArrow_7 = document.getElementById('prevArrow_7')
let nextArrow_7 = document.getElementById('nextArrow_7')

$('.gradient-border2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: prevArrow_7,
    nextArrow: nextArrow_7,
    autoplay: 5000
});