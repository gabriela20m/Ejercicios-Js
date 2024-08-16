function encontrarElemento(num, array) {
    // Busca el número pasado por argumento dentro del array.
    // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
    // Si no se encuentra, retorna -1.
    // Tu código:
 }
 
 module.exports = encontrarElemento;

 function encontrarElemento(num, array) {
    // Busca el número pasado por argumento dentro del array.
    const indice = array.indexOf(num);
    
    // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
    // Si no se encuentra, retorna -1.
    return indice !== -1 ? indice : -1;
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40];
  console.log(encontrarElemento(30, ejemploArray)); // Output: 2
  console.log(encontrarElemento(50, ejemploArray)); // Output: -1
  
  // Exportar la función (si estás usando Node.js)
  module.exports = encontrarElemento;
  