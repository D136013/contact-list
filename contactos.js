let listaContactos = [];

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    let contacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: {
            ciudad: ciudad,
            direccion: direccion
        } 
    }
    listaContactos.push(contacto);
}

function actualizarContacto(id, nuevoNombre, nuevoApellido, nuevoTelefono, nuevaCiudad, nuevaDireccion){
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].id === id) {
            listaContactos[i] = {
                id,
                nombres: nuevoNombre,
                apellidos: nuevoApellido,
                telefono: nuevoTelefono,
                ubicaciones: {
                    ciudad: nuevaCiudad,
                    direccion: nuevaDireccion
                }
            }
        }
    }
}


function borrarContacto(id){
    listaContactos = listaContactos.filter((persona) => persona.id !== id);
}

function mostrarContacto(){
    listaContactos.forEach((contacto) => console.log(contacto));
}


agregarContacto(1, "diego jose", "Florez Gelves", "963", "zipaquira", "villa maria");
agregarContacto(2, "carlos julian", "lara mora", "258", "zipaquira", "villa maria");
console.log(listaContactos)
actualizarContacto(1, "diego", "Florez", "963", "bogota", "villas")
console.log(listaContactos)
