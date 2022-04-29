// manejador de evento DOM cargado
window.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById("paralax");
    const nav = document.querySelector("nav");
    navbarHideEffect(nav,"nav--hidden");
    createParallax(image);
    
    initMap();
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

// funcion encargada de inicializar el mapa
function initMap() {
    
    if( document.getElementById('map') != null){
        var map = L.map('map').setView([51.505, -0.09], 13);

        var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);
    }
}
