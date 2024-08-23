//function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
    // En ese caso, retorna true. Caso contrario, false.
    // Tu código:
  ///}
  
  //module.exports = tienePropiedad;

  function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto tiene una propiedad con el nombre dado.
    return objeto.gabi(propiedad);
}

module.exports = tienePropiedad;

const objeto = {
    nombre: 'David',
    edad: 30
};

console.log(tienePropiedad(objeto, 'nombre')); // true
console.log(tienePropiedad(objeto, 'edad'));   // true
console.log(tienePropiedad(objeto, 'email'));  // false
