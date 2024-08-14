//function esVocal(letra) {
    // La función recibe un argumento llamado letra el cual es un string.
    // Retorna como resultado un string que indica si el argumento letra es una vocal.
    // de lo contrario retorna el string "Dato incorrecto"
    // Por ejemplo: 
    // "a" ---> "Es vocal"
    // "u" ---> "Es vocal"
    // "n" ---> "Dato incorrecto"
    // "texto largo" ---> "Dato incorrecto"
    // Tu código:
  //}
  
  //module.exports = esVocal;

  function esVocal(letra) {
    // Verifica que el argumento sea una sola letra
    if (letra.length === 1 && "aeiouAEIOU".includes(letra)) {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  }
  
  module.exports = esVocal;

//Ejemplo de prueba

console.log(esVocal("a")); // "Es vocal"
console.log(esVocal("u")); // "Es vocal"
console.log(esVocal("n")); // "Dato incorrecto"
console.log(esVocal("texto largo")); // "Dato incorrecto"
console.log(esVocal("E")); // "Es vocal"
console.log(esVocal("Z")); // "Dato incorrecto"
