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
    /*
    Las expresiones regulares o regex son patrones usados para buscar combinaciones de carácters en un string.
    En este caso, el patrón [\p{P}|\s] representa los carácter de puntuación \p{P} o espacios \s de forma global en todo el texto.
    / Inicio de patrón
    [] conjunto, coincide todos los caracteres dentro de los corchetes
    \p{P} patrón Unicode coincide todos los caracteres de puntuación
    | operador OR, coincide con uno de los dos patrones
    \s coincide con cualquier carácter de espacio en blanco
    / Final de patrón
    g bandera global, busca en todo el texto
    u bandera unicode, busca en texto unicode
    */ 
    const pattern = /[\p{P}|\s]/gu;

    const newText = text.replace(pattern, "");
    return newText.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsArray = text.split(" "); 
    let sum = 0;

    for (let i = 0; i < wordsArray.length; i++) {
      sum += wordsArray[i].length;
    }
    const average = sum/wordsArray.length;

    if(!Number.isInteger(average)){
      return average.toFixed(2);
    }
    else{
      return average;
    }
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    let counter = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (Number(text[i])){
        counter++;
      }
    }
    return counter;

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numTotal = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (Number(text[i])){
        numTotal += Number(text[i]);
      }
    }
    return numTotal;
    
  },
};

export default analyzer;
