// manejador de evento DOM cargado
window.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById("paralax");
    const nav = document.querySelector("nav");

    navbarHideEffect(nav,"nav--hidden");
    createParallax(image);

});


// funcion encargada de aplicar estilos para esconder el navbar cuando se hace scrollY (nav--hidden)
function navbarHideEffect(nav,clase) {
    let lastScrollY = window.scrollY; // te da un numero de 0 a n que simboliza el nro de pixels que se desplaza desde el origen
    window.addEventListener("scroll",()=>{
        if (lastScrollY < window.scrollY){ nav.classList.add(clase); }
        else { nav.classList.remove(clase);}
        lastScrollY = window.scrollY;
    });    
}

// funcion encargada de recibir una imagen y crear una instancia de parallax
function createParallax(item) {
    new simpleParallax(item, { orientation: 'up', scale:'1.25' });    
}

function toggleCard(id,cClas) {
    document.getElementById(id).classList.toggle(cClas);
}