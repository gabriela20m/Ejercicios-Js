//function combinarNombres(nombre, apellido) {
    // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
    // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
    // Por ejemplo: 
    // "Soy", "Henry" ---> "Soy Henry"
    // Tu código:
  //}
  
  //module.exports = combinarNombres
  function combinarNombres(nombre, apellido) {
    return nombre + ' ' + apellido;
  }
  
  module.exports = combinarNombres;

//Ejemplo de prueba

console.log(combinarNombres("Soy", "Henry")); // "Soy Henry"
console.log(combinarNombres("Juan", "Pérez")); // "Juan Pérez"
console.log(combinarNombres("Ana", "García")); // "Ana García"
