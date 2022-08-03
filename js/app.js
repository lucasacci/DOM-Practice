
function cambiarTitulo(){
    console.log(`Desde la funcion cambiar titulo`); 

    //traer h1 desde el maquetado

    let tituloPrincipal = document.querySelector('#titulo');
    console.log(tituloPrincipal);
    tituloPrincipal.innerHTML= 'Qliada de RE mierda';
    tituloPrincipal.className = 'colorN display-4'
}

function verMas(){
    console.log(`prueba ver mas`);

    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam dolorum eum earum suscipit, voluptas recusandae voluptatem dolorem nisi doloribus, rerum sunt eius maxime error officiis doloremque dolore provident voluptates incidunt saepe dolor asperiores exercitationem sequi. Ullam numquam ab unde facere enim consequuntur aliquid, magnam labore! Magnam omnis accusantium accusamus.orem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam dolorum eum earum suscipit, voluptas recusandae voluptatem dolorem nisi doloribus, rerum sunt eius maxime error officiis doloremque dolore provident voluptates incidunt saepe dolor asperiores exercitationem sequi. Ullam numquam ab unde facere enim consequuntur aliquid, magnam labore! Magnam omnis accusantium accusamus.';

    parrafoNuevo.className = 'lead';

    console.log(parrafoNuevo)

    let sectionPadre = document.getElementsByClassName('container');
    console.log(sectionPadre[1]);
    // sectionPadre[1].appendChild(parrafoNuevo);
    // sectionPadre[1].prepend(parrafoNuevo);
    sectionPadre[1].insertBefore(parrafoNuevo, document.getElementById('btnVerMas'));

    //para acceder a lo que escribo dentro de un imput NO USAR INNER.HTML usar VALUE

    console.log(document.getElementById('buscador').value);



}