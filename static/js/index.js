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