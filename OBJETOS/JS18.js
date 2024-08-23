//function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
 // }
  
 // module.exports = agregarAmigo;

 function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // Añadir el nuevo amigo al final del arreglo "amigos".
    objetoUsuario.amigos.push(nuevoAmigo);
    
    // Retornar el objeto actualizado.
    return objetoUsuario;
}

module.exports = agregarAmigo;

const usuario = {
    amigos: ['Ana', 'Luis']
};

const usuarioActualizado = agregarAmigo(usuario, 'Pedro');

console.log(usuarioActualizado); // { amigos: ['Ana', 'Luis', 'Pedro'] }
