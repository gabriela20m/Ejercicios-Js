//function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    // En ese caso, retorna true. Caso contrario, false.
    // Tu código:
  //}
  
 // module.exports = verificarPassword;


  function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    return objetoUsuario.password === password;
}

module.exports = verificarPassword;


const usuario = {
    password: 'securePassword123'
};

console.log(verificarPassword(usuario, 'securePassword123')); // true
console.log(verificarPassword(usuario, 'wrongPassword'));     // false
