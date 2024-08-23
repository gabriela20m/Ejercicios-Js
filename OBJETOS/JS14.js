//function tieneEmail(objetoUsuario) {
    // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
    // En ese caso, retorna true. Caso contrario, false.
    // Tu código:
 // }
  
  //module.exports = tieneEmail;

  function tieneEmail(objetoUsuario) {
    // Verifica si la propiedad "email" del objeto tiene un valor definido y no es una cadena vacía.
    return objetoUsuario.email !== undefined && objetoUsuario.email !== null && objetoUsuario.email !== '';
}

module.exports = tieneEmail;

const usuario1 = { email: 'david@example.com' };
const usuario2 = { email: '' };
const usuario3 = { email: null };
const usuario4 = {};

console.log(tieneEmail(usuario1)); // true
console.log(tieneEmail(usuario2)); // false
console.log(tieneEmail(usuario3)); // false
console.log(tieneEmail(usuario4)); // false
