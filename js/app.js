
function cambiarTitulo(){
    console.log(`Desde la funcion cambiar titulo`); 

    //traer h1 desde el maquetado

    let tituloPrincipal = document.querySelector('#titulo');
    console.log(tituloPrincipal);
    tituloPrincipal.innerHTML= 'Qliada de RE mierda';
    tituloPrincipal.className = 'colorN display-4'
}

function verMas(){
    let botonVerMas = document.getElementById('btnVerMas');
    let sectionPadre = document.getElementsByClassName('container');

    if(botonVerMas.innerHTML === 'Ver mas...'){

        let parrafoNuevo = document.createElement('p');
        parrafoNuevo.innerHTML = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam dolorum eum earum suscipit, voluptas recusandae voluptatem dolorem nisi doloribus, rerum sunt eius maxime error officiis doloremque dolore provident voluptates incidunt saepe dolor asperiores exercitationem sequi. Ullam numquam ab unde facere enim consequuntur aliquid, magnam labore! Magnam omnis accusantium accusamus.orem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam dolorum eum earum suscipit, voluptas recusandae voluptatem dolorem nisi doloribus, rerum sunt eius maxime error officiis doloremque dolore provident voluptates incidunt saepe dolor asperiores exercitationem sequi. Ullam numquam ab unde facere enim consequuntur aliquid, magnam labore! Magnam omnis accusantium accusamus.';
    
        parrafoNuevo.className = 'lead';
    
        console.log(parrafoNuevo)
    
        console.log(sectionPadre[1]);
        // sectionPadre[1].appendChild(parrafoNuevo); // agrega hijo al ultimo
        // sectionPadre[1].prepend(parrafoNuevo); // agrega hijo al principio
        sectionPadre[1].insertBefore(parrafoNuevo, botonVerMas);
        
        //cambiar texto del boton


        botonVerMas.className = 'btn btn-outline-danger'
        botonVerMas.innerHTML = 'Ocultar'
    
        
        //para acceder a lo que escribo dentro de un imput NO USAR INNER.HTML usar VALUE
    
        console.log(document.getElementById('buscador').value);
    }
    else{
        // eliminar el parrafor creado

        sectionPadre[1].removeChild(sectionPadre[1].children[2]);
        console.log(sectionPadre[1].children[2]);

        botonVerMas.innerHTML = 'Ver mas...'
        botonVerMas.className = 'btn btn-outline-primary'
    }




}