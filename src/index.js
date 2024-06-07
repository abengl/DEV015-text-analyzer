import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Accedo al elemento <ul> que contiene los <li> en el DOM ****R
const ulElement = document.querySelector("ul");

// Accedo a los elementos <li> de forma global *******R
const liElements = ulElement.querySelectorAll("li")

// Asigno una variable específica a cada <li> para poder modificar su contenido
const wordCounterLi = liElements[0];
const charCounterLi = liElements[1]; //no abreviar characterCounterElement *******
const numCounterLi = liElements[2];
const charWithoutSpacesCounterLi = liElements[3];
const averageLengthCounterLi = liElements[4];
const sumCounterLi = liElements[5];

// Accedo al <textarea> que contiene el texto ingresado por la usuaria ******R
const textArea =document.querySelector("[name='user-input']");

// Asigno un Event Listener para escuchar el evento cuando se genera un "input" en el <textarea> para ejecutar la función updateMetricas
textArea.addEventListener("input", updateMetricas);

// La aplicación actualiza el atributo textContent o innerHTML de los <li> que mostrar las métricas del texto.
function updateMetricas(){

  // Obtengo el valor del texto ingresado en el textArea por la usuaria
  const textInput = textArea.value;

  // Defino variables que contienen el resultado de cada método del objeto analyzer *****R
  const wordCounter = analyzer.getWordCount(textInput);
  const charCounter = analyzer.getCharacterCount(textInput);
  const charCounterWithoutSpaces = analyzer.getCharacterCountExcludingSpaces(textInput);
  const numberCounter = analyzer.getNumberCount(textInput);
  const averageWordLength = analyzer.getAverageWordLength(textInput);
  const sumCounter = analyzer.getNumberSum(textInput);

  // Modifico el contenido de cada <li> con el resultado de las métricas almacenados en las variables previas ********R
  wordCounterLi.textContent = "Palabras: " + wordCounter;
  charCounterLi.textContent = "Caracteres: " +charCounter;
  numCounterLi.textContent = "Números: " + numberCounter;
  charWithoutSpacesCounterLi.textContent = "Caracteres sin Espacios: " + charCounterWithoutSpaces;
  averageLengthCounterLi.textContent = "Promedio de Longitud: " + averageWordLength;
  sumCounterLi.textContent = "Suma de Números: " + sumCounter;
}


// Accedo al elemento <button> en el DOM
const button = document.getElementById("reset-button");

// Asigno un Event Listener para escuchar el evento "click" en el <button> y resetear el valor del TextArea y las métricas
button.addEventListener("click", resetData);

function resetData() {
  textArea.value = "";
  // call updateMetricas() ******R
  wordCounterLi.textContent = "Palabras: 0";
  charCounterLi.textContent = "Caracteres: 0";
  numCounterLi.textContent = "Números: 0";
  charWithoutSpacesCounterLi.textContent = "Caracteres sin Espacios: 0";
  averageLengthCounterLi.textContent = "Promedio de Longitud: 0";
  sumCounterLi.textContent = "Suma de Números: 0";
}