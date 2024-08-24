//function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // NOTA: no debes retornar nada.
    // Tu código:
 //}
 
 //module.exports = invocarCallback;


 function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    cb();
  }
  
  // Ejemplo de uso:
  function miCallback() {
    console.log('El callback ha sido invocado!');
  }
  
  invocarCallback(miCallback); // Esto imprimirá: "El callback ha sido invocado!"
  