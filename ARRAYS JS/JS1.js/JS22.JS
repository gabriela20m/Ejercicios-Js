function tablaDelSeis() {
    // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Desde 0 al 60.
    // Tu código:
  }
  
  module.exports = tablaDelSeis;

  function tablaDelSeis() {
    // Crear un arreglo vacío para almacenar los resultados.
    let resultado = [];
  
    // Recorremos los números del 0 al 10 para multiplicar por 6.
    for (let i = 0; i <= 10; i++) {
      resultado.push(i * 6);
    }
  
    // Devolver el arreglo con los resultados de la tabla del 6.
    return resultado;
  }
  
  // Ejemplo de uso:
  console.log(tablaDelSeis()); // Output: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = tablaDelSeis;
  