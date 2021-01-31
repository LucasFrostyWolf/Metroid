// TODO: Fechar menu-mobile quando clicar fora

// Pré-load
$(function() {
    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 4000;
        function hidePreloader() {
            var preloader = $('#section__loader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

    $('nav a').click(function() {
        let href = $(this).attr('href'),
            offSetTop = $(href).offset().top;

            $('html,body').animate({'scrollTop':offSetTop});
            return false;

    })
});

// Efeito menu fixo no scroll apenas pro desktop
if(window.screen.width > 768){
    window.addEventListener("scroll", function() {
        let header = document.querySelector('header');
        let nav = document.querySelector('nav#header__menu');
        header.classList.toggle('sticky', window.scrollY > 0);
        
        if(header.classList.contains('sticky')) {
            nav.style.height = '75px';
        } else {
            nav.style.height = 'initial';
        }
    })
}

// Indicador do menu quando clicar no link
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav ul li a');

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
});

let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

// Close mobile menu
var links = document.querySelectorAll(".main-nav a"),
    nav_close = document.querySelector('.main-nav'),
    buger = document.querySelector('.open-main-nav');
for (i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
            e.preventDefault();
            nav_close.classList.remove('is-open');
            buger.classList.remove('is-open');
    }
}

// Sistema de slide
var curSlide = 0,
    maxSlide = $('.slides').length - 1,
    delay = 4,
    slider = $('.slides');
initSlider();
changeSlide();

function initSlider() {
    slider.css('opacity', '0');
    slider.eq(0).css('opacity', '1');

    for(var i = 0; i < maxSlide + 1; i++) {
        var content = $('.bullets').html();
        if(i == 0)
            content+= '<span class="active"></span>';
        else 
            content+= '<span></span>';
        $('.bullets').html(content);
    }
}

function changeSlide() {
    setInterval(() => {
        slider.eq(curSlide).animate({'opacity': '0'}, 3000);

        curSlide++;
        if(curSlide > maxSlide) 
            curSlide = 0;
        slider.eq(curSlide).animate({'opacity': '1'}, 3000);

        $('.bullets span').removeClass('active');
        $('.bullets span').eq(curSlide).addClass('active');
    }, delay * 1000);
}

$('body').on('click','.bullets span', function() {
    var currentBullet = $(this);

    slider.eq(curSlide).animate({'opacity': '0'}, 3000);
    curSlide = currentBullet.index();
    slider.eq(curSlide).animate({'opacity': '1'}, 3000);

    $('.bullets span').removeClass('active');
    currentBullet.addClass('active');
})