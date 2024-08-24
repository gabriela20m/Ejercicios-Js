//const buscarElemento = (array, callback) => {
    // Busca un elemento en el array y retornalo.
    // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
    // La función de callback es la encargada de evaluar si el elemento fue encontrado.
    // Tu código:
  //};
  
 // module.exports = buscarElemento;


 const buscarElemento = (array, callback) => {
    // Busca un elemento en el array utilizando el callback para evaluar si el elemento fue encontrado.
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i]; // Retorna el elemento si el callback lo encuentra.
      }
    }
    
    // Si el elemento no se encuentra, devuelve el mensaje "No se encontró el elemento".
    return "No se encontró el elemento";
  };
  
  // Ejemplo de uso:
  function esNumeroPar(elemento) {
    return elemento % 2 === 0;
  }
  
  const resultado1 = buscarElemento([1, 3, 5, 6, 8], esNumeroPar); // Devuelve 6
  const resultado2 = buscarElemento([1, 3, 5, 7, 9], esNumeroPar); // Devuelve "No se encontró el elemento"
  
  console.log(resultado1); // Imprime 6
  console.log(resultado2); // Imprime "No se encontró el elemento"
  