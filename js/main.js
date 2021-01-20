window.addEventListener("scroll", function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

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
