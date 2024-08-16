function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
  }
  
  module.exports = multiplicarArgumentos;

  function multiplicarArgumentos() {
    // Verifica si no se pasaron argumentos y retorna 0.
    if (arguments.length === 0) return 0;
  
    // Si solo se pasa un argumento, simplemente retórnalo.
    if (arguments.length === 1) return arguments[0];
  
    // Multiplica todos los argumentos.
    let producto = 1;
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
    }
  
    // Retorna el producto de todos los argumentos.
    return producto;
  }
  
  // Ejemplo de uso:
  console.log(multiplicarArgumentos()); // Output: 0
  console.log(multiplicarArgumentos(5)); // Output: 5
  console.log(multiplicarArgumentos(2, 3, 4)); // Output: 24
  
  // Exportar la función (si estás usando Node.js)
  module.exports = multiplicarArgumentos;
  