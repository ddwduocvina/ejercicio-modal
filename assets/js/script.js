// Carrusel modificado

const miCarrusel = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(miCarrusel, {
    ride: true,
    interval : 3000,
    pause: false
})

// agregar un observador al evento del carrusel

miCarrusel.addEventListener('slide.bs.carousel', function(){
    console.log('Se muestra un slide');
    //document.getElementById('veces').innerHTML = (event.relatedTarget).length
    //document.getElementById('ingresarAlgo').innerHTML += '<p>Ha pasado el slide.</p>'
});

// Función Modal para manipular los eventos

const miVentanaEmergente = document.getElementById('ventanaEmergente')

// agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function(event){
    console.log('se está abriendo el modal');

    // reconocer el elemento que habilita el evento modal
    let boton = event.relatedTarget // etiquetado relacionado

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerHTML = contenido

})
miVentanaEmergente.addEventListener('shown.bs.modal', function(){
    console.log('está abierto el modal');
})
miVentanaEmergente.addEventListener('hide.bs.modal', function(){
    console.log('se está cerrando el modal');
})
miVentanaEmergente.addEventListener('hidden.bs.modal', function(){
    console.log('está cerrado el modal');
})

