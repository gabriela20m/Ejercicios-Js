//function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
 //}
 //
// module.exports = filter;

function filter(arrayOfStrings) {
    // Filtra los elementos que comienzan con la letra "a".
    const resultado = arrayOfStrings.filter(str => str.startsWith('a'));
    
    // Retorna el nuevo arreglo con los elementos filtrados.
    return resultado;
  }
  
  // Ejemplo de uso:
  const cadenas = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];
  const resultado = filter(cadenas);
  console.log(resultado); // Imprime ["apple", "avocado", "apricot"]
  