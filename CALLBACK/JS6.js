//function map(array, cb) {
    // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
  //}
  
 // module.exports = map;


 function map(array, cb) {
    // Crea un nuevo arreglo para almacenar los resultados.
    const nuevoArray = [];
    
    // Itera sobre el arreglo original.
    for (let i = 0; i < array.length; i++) {
      // Aplica el callback al elemento actual y guarda el resultado en el nuevo arreglo.
      nuevoArray.push(cb(array[i]));
    }
    
    // Retorna el nuevo arreglo con los resultados.
    return nuevoArray;
  }
  
  // Ejemplo de uso:
  function duplicar(numero) {
    return numero * 2;
  }
  
  const resultado = map([1, 2, 3, 4, 5], duplicar);
  console.log(resultado); // Imprime [2, 4, 6, 8, 10]
  