//function esNuloOIndefinido(valor) {
    // La función recibe un argumento llamado valor.
    // Si este valor es null o undefined, retorna true.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // null ---> true 
    // undefined ---> true 
    // 22 ---> false
    // "texto" ---> false
    // Tu código:
 // }
  
 // module.exports = esNuloOIndefinido;

 function esNuloOIndefinido(valor) {
    return valor === null || valor === undefined;
  }
  
  module.exports = esNuloOIndefinido;

  //Ejemplo de prueba

  console.log(esNuloOIndefinido(null)); // true
  console.log(esNuloOIndefinido(undefined)); // true
  console.log(esNuloOIndefinido(22)); // false
  console.log(esNuloOIndefinido("texto")); // false
  