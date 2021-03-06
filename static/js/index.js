// manejador de evento DOM cargado
window.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById("paralax");
    const nav = document.querySelector("nav");
    navbarHideEffect(nav,"nav--hidden");
    createParallax(image);
    
    const sedes=[ 
        {"id":'kukkiwonmap',"latitud":-34.9355428,"longitud":-57.9627384, "nombre":"Academia kukkiwon"},
        {"id":'cit-map',"latitud":-34.9308441,"longitud":-57.932613,"nombre":"Cit-centro-integral de tae kwon do"},
        {"id":'astilleros-map',"latitud":-34.869152,"longitud":-57.9110822,"nombre":"Club astilleros"},
        {"id":'comedor-map',"latitud":51.505,"longitud":-0.09,"nombre":"Comedor: El encuentro"},
        {"id":'retiro-map',"latitud":-34.9667871,"longitud":-58.0076182,"nombre":"Corazones del retiro"},
        {"id":'beriso-map',"latitud":51.505,"longitud":-0.09,"nombre":"Beriso/Hogar social"} ]
        // cit-map, astilleros-map, comedor-map, retiro-map, beriso-map, "
    for (let index = 0; index < 6; index++) {
        console.log(sedes[index].id)
        initMap(sedes[index].id, sedes[index].latitud, sedes[index].longitud,sedes[index].nombre);
        
    }

  
});
// funcion encargada de inicializar el mapa
function initMap(id, latitud, longitud,nombre) {
    
    if( document.getElementById(id) != null){
        console.log("lo encontre");
        var map = L.map(id).setView([latitud, longitud], 17);

        var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);

        L.marker([latitud, longitud]).addTo(map)
            .bindPopup(nombre)
            .openPopup();
    }
}
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


