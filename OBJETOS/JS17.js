function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
    // La nueva contraseña la recibes por parámetro.
    // Retornar el objeto.
    // Tu código:
  }
  
  module.exports = actualizarPassword;

  function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contraseña en la propiedad "password" con la nueva contraseña.
    objetoUsuario.password = nuevaPassword;
    
    // Retornar el objeto actualizado.
    return objetoUsuario;
}

module.exports = actualizarPassword;


const usuario = {
    password: 'oldPassword123'
};

const usuarioActualizado = actualizarPassword(usuario, 'newPassword456');

console.log(usuarioActualizado); // { password: 'newPassword456' }
