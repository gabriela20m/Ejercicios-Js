function mesesDelAño(array) {
    // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
  }
  
  module.exports = mesesDelAño;

  function mesesDelAño(array) {
    // Crear un arreglo para guardar los meses encontrados.
    let mesesEncontrados = [];
    
    // Recorrer el arreglo de entrada.
    for (let i = 0; i < array.length; i++) {
      // Verificar si el elemento es uno de los meses que buscamos.
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        mesesEncontrados.push(array[i]);
      }
    }
    
    // Verificar si encontramos todos los meses pedidos.
    if (mesesEncontrados.length === 3) {
      return mesesEncontrados;
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
  
  // Ejemplo de uso:
  let ejemploArray = ["Febrero", "Marzo", "Abril", "Enero", "Noviembre"];
  console.log(mesesDelAño(ejemploArray)); // Output: ["Enero", "Marzo", "Noviembre"]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = mesesDelAño;
  