//function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:
 // }
  
 // module.exports = conection;

 function conection(status) {
    // Almacena los posibles estados y sus mensajes correspondientes en un array
    const estados = [
      { codigo: 1, mensaje: "Online" },
      { codigo: 2, mensaje: "Away" }
    ];
    
    // Recorre el array para encontrar el estado correspondiente
    for (let i = 0; i < estados.length; i++) {
      if (status === estados[i].codigo) {
        return estados[i].mensaje; // Retorna el mensaje correspondiente al estado
      }
    }
    
    // Si no se encuentra el estado, se presume que está "Offline"
    return "Offline";
  }
  
  module.exports = conection;
  