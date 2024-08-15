//function esVerdaderoYFalso(booleano1, booleano2) {
    // La función recibe dos argumentos "booleano1" y "booleano2".
    // Retorna true si ambos son verdaderos, caso contrario, retorna false.
    // Tu código:
 // }
  
  //module.exports = esVerdaderoYFalso;

  function esVerdaderoYFalso(booleano1, booleano2) {
    // Almacena los booleanos en un array
    const booleanos = [booleano1, booleano2];
    
    // Recorre el array y verifica si todos los elementos son verdaderos
    for (let i = 0; i < booleanos.length; i++) {
      if (!booleanos[i]) {
        return false;
      }
    }
    
    return true;
  }
  
  module.exports = esVerdaderoYFalso;
  