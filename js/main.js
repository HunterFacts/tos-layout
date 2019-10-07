$(document).ready(function(){
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    (function(){
        var date = new Date();
        let days = date.getDay().toString().length == 1 ? '0'+date.getDay():  date.getDay(), 
        months = date.getMonth().toString().length == 1 ? '0'+date.getMonth():  date.getMonth(),
        seconds = date.getSeconds().toString().length == 1 ? '0'+date.getSeconds():  date.getSeconds(),
        hours = date.getHours().toString().length == 1 ? '0'+date.getHours():  date.getHours(),
        minutes = date.getMinutes().toString().length == 1 ? '0'+date.getMinutes():  date.getMinutes();
        var time = 'Дата: '+ days+':'+ months+':'+ date.getFullYear()+' Время: ' +hours+':'+minutes+':'+seconds;
        $('#actuallyTime').text(time)
        window.setTimeout(arguments.callee, 1000);
    })();
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});