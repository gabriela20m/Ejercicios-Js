function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
  }
  
  module.exports = sumarLikesDeUsuario;


  function sumarLikesDeUsuario(objetoUsuario) {
    // Inicializar el total de likes en 0.
    let totalLikes = 0;
    
    // Iterar sobre cada post en el arreglo "posts".
    for (let i = 0; i < objetoUsuario.posts.length; i++) {
        // Sumar el valor de la propiedad "likes" de cada post al total.
        totalLikes += objetoUsuario.posts[i].likes;
    }
    
    // Retornar el total de likes.
    return totalLikes;
}

module.exports = sumarLikesDeUsuario;


const usuario = {
    posts: [
        { likes: 10 },
        { likes: 5 },
        { likes: 7 }
    ]
};

console.log(sumarLikesDeUsuario(usuario)); // 22
