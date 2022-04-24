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

// mapa
// Initialize and add the map
function initMap() {
    // [START maps_add_map_instantiate_map]
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // [END maps_add_map_instantiate_map]
    // [START maps_add_map_instantiate_marker]
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    // [END maps_add_map_instantiate_marker]
  }
  
  window.initMap = initMap;