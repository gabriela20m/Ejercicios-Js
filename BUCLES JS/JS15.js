//function obtenerDiaSemana(numero) {
    // La función recibe un "numero" entre 1 y 7 por argumento.
    // Devuelve el día de la semana correspondiente a este número,
    // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
    // El día devuelto debe tener mayúscula inicial y no llevar tilde.
    // Si el número no corresponde a un día de la semana, retorna
    // el string "No es un dia de la semana"
    // Tu código:
  //}
  
 // module.exports = obtenerDiaSemana;

 function obtenerDiaSemana(numero) {
    // Define los días de la semana en un array
    const dias = [
      "No es un dia de la semana", // índice 0 no se utiliza
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo"
    ];
    
    // Recorre el array para verificar si el número está dentro del rango válido
    for (let i = 1; i < dias.length; i++) {
      if (numero === i) {
        return dias[i]; // Retorna el día correspondiente si el número es válido
      }
    }
    
    // Si el número no corresponde a un día de la semana, retorna el mensaje de error
    return dias[0];
  }
  
  module.exports = obtenerDiaSemana;
  