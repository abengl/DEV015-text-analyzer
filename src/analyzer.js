const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" ");

    return wordsArray.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const charArray = text.split("");

    return charArray.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
     
    const pattern = /[\p{P}|\s]/gu; // Este patrón identifica todo carácter de puntuación (patrón unicode) o espacio en blanco

    const newText = text.replace(pattern, "");

    return newText.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" "); 
    let sum = 0;
    
    // Uso un bucle para obtener la longitud de cada palabra y sumarla
    for (let i = 0; i < wordsArray.length; i++) {
      sum += wordsArray[i].length;
    }
    // Calculo el promedio de la longitud de las palabras
    const average = sum/wordsArray.length;

    // Si el promedio no es un número entero, lo redondeo a dos decimales y lo vuelvo a convertir a número, de caso contrario, lo retorno tal cual
    if(!Number.isInteger(average)){
      return Number(average.toFixed(2));
    }
    else{
      return average;
    }
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const textArray = text.split(" ");
    const pattern = /^\d+(\.\d+\.?)?$/; // Este patrón identifica todo número entero o decimal que termine con un punto o no.
    let counter = 0;

    // Uso un bucle para recorrer cada palabra del array y verificar si contiene el patrón, de ser así incremento el contador
    for (let i = 0; i < textArray.length; i++) {
      const word = textArray[i];
      if (pattern.test(word)) {
        counter++;
      }
    }
    return counter;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    const textArray = text.split(" ");
    const pattern = /^\d+(\.\d+\.?)?$/; // Cualquier número entero (12) o decimal (1.2) que termine con un punto o no.
    let numTotal = 0;
    
    for (let i = 0; i < textArray.length; i++) {
      const word = textArray[i];
      if (pattern.test(word)){
        numTotal += parseFloat(word);
      }
    }
    return numTotal;
    
  },
};

export default analyzer;
