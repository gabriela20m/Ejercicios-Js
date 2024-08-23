//function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // NOTA: no necesitas retornar nada.
    // Tu código:
 // }
  
  //module.exports = invocarMetodo;

  function invocarMetodo(objeto, metodo) {
    // Invocar el método del objeto utilizando la notación de corchetes.
    objeto[metodo]();
}

module.exports = invocarMetodo;


const objeto = {
    saludar: function() {
        console.log("¡Hola!");
    }
};

invocarMetodo(objeto, 'saludar'); // Imprime "¡Hola!" en la consola

