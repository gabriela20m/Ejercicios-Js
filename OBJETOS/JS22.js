//function esAnagrama(str1, str2) {
    // La función recibe dos argumentos "str1" y "str2" que son strings.
    // Determina si los dos strings son anagramas.
    // Devuelve true de ser así, sino retorna false.
    // IMPORTANTE: Un anagrama es una palabra que se forma
    // con las mismas letras que otra, pero en orden diferente.
    // Tu código:
 //}
 
 module.exports = esAnagrama;

 function esAnagrama(str1, str2) {
    // Si las longitudes no son iguales, no pueden ser anagramas.
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Ordena los caracteres de ambas cadenas.
    const ordenarString = str => str.split('').sort().join('');
    
    // Compara las cadenas ordenadas.
    return ordenarString(str1) === ordenarString(str2);
}

module.exports = esAnagrama;


console.log(esAnagrama('listen', 'silent')); // true
console.log(esAnagrama('triangle', 'integral')); // true
console.log(esAnagrama('apple', 'pale')); // false
