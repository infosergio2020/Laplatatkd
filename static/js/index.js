const nav = document.querySelector("nav");

let lastScrollY = window.scrollY; // te da un numero de 0 a n que simboliza el nro de pixels que se desplaza desde el origen

window.addEventListener("scroll",()=>{
    if (lastScrollY < window.scrollY){
        nav.classList.add("nav--hidden");
    }
    else {
        nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});


var image = document.getElementById("paralax")
new simpleParallax(image, {
	orientation: 'up',
    scale:'1.25'
});


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems, options);
// });

document.querySelector("#ver-detalle-1").addEventListener("click",()=>{
    document.querySelector("#banner-1").classList.toggle('banner--active');
});

document.querySelector("#btn-banner-1").addEventListener("click",()=>{
    document.querySelector("#banner-1").classList.toggle('banner--active');
});