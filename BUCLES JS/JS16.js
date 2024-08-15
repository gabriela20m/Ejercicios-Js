//function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
    // Tu código:
  //}
  
  //module.exports = saludo;

  function saludo(idioma) {
    // Define los saludos en diferentes idiomas
    const saludos = {
      aleman: "Guten Tag!",
      mandarin: "Ni Hao!",
      ingles: "Hello!"
    };
    
    // Recorre el objeto para verificar el idioma
    for (let key in saludos) {
      if (idioma === key) {
        return saludos[key]; // Retorna el saludo correspondiente si el idioma es válido
      }
    }
    
    // Si el idioma no coincide con ninguno de los casos anteriores, retorna "Hola!"
    return "Hola!";
  }
  
  module.exports = saludo;
  