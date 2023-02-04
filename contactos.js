let listaContactos = ["Diego Florez", "Eskarleth Florez", "Alana Florez"];

function agregarContacto(contacto){
    listaContactos.unshift(contacto);
}

function borrarContacto(contacto){
    listaContactos = listaContactos.filter((persona) => persona !== contacto);
}

function mostrarContacto(){
    listaContactos.sort();
    listaContactos.forEach((contacto) => console.log(contacto));
}
