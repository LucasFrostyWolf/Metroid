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
    nav_close = document.querySelector('.main-nav');
    buger = document.querySelector('.open-main-nav');
for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        nav_close.classList.remove('is-open');
        buger.classList.remove('is-open');
    }
}