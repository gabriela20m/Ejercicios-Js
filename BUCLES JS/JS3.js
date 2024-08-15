//function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retorna el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
  //}
  
  //module.exports = obtenerMayor;

  function obtenerMayor(x, y) {
    // Almacena los números en un array
    const numeros = [x, y];
    
    // Inicializa una variable para almacenar el mayor número
    let mayor = numeros[0];
    
    // Recorre el array para encontrar el número mayor
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    
    // Retorna el número mayor encontrado
    return mayor;
  }
  
  module.exports = obtenerMayor;
  