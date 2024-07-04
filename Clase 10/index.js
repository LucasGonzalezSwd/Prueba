let nombre = "Ana"; // Declaración de una variable de tipo string
let edad = 25; // Declaración de una variable de tipo number
let esEstudiante = true; // Declaración de una variable de tipo boolean
let saldo = null; // Declaración de una variable de tipo null
let indefinido; // Declaración de una variable de tipo undefined
let simbolo = Symbol("simbolo"); // Declaración de una variable de tipo symbol
let bigInt = 9007199254740991n; // Declaración de una variable de tipo bigint

console.log(nombre, edad, esEstudiante, saldo, indefinido, simbolo, bigInt); // Imprime los valores de las variables

//////////////////////////////

let numeroComoTexto = "100"; // String que representa un número
let numero = Number(numeroComoTexto); // Convierte el string a número
console.log(numero); // Imprime 100

let booleanoComoTexto = "false"; // String que representa un booleano
let booleano = Boolean(booleanoComoTexto); // Convierte el string a booleano
console.log(booleano); // Imprime true (Cualquier string no vacío se convierte en true)

//////////////////////////////

let saludo = "Hola, "; // Declaración de un string
let saludo2 = "Mundo"; // Declaración de otro string
let fraseCompleta = saludo + nombre; // Concatenación de strings
console.log(fraseCompleta); // Imprime "Hola, Mundo"

let numero1 = 10; // Declaración de un número
let numero2 = 20; // Declaración de otro número
let suma = numero1 + numero2; // Suma de los dos números
console.log(suma); // Imprime 30

//////////////////////////////

let resultado = "Hola" / 2; // Intento de dividir un string por un número
console.log(resultado); // Imprime NaN

//////////////////////////////

console.log(0 == "0"); // true (son iguales en valor)
console.log(0 === "0"); // false (no son iguales en tipo)

//////////////////////////////

console.log(0 == ""); // true (0 se convierte a string y "" se convierte a número)
console.log(0 === ""); // false (no son del mismo tipo)
console.log(false == "0"); // true (false se convierte a 0 y "0" se convierte a número)
console.log(false === "0"); // false (no son del mismo tipo)

/////////////////////////////////////////////////////////

/* Escribe una función que reciba un número como parámetro y devuelva un array con todos los números pares desde 0 hasta ese número (inclusive). */

const numerosPares2 = (numero) => {
  const pares = [];

  for (let index = 0; index <= numero; index++) {
    if (index % 2 === 0) {
      pares.push(index);
    }
  }

  return pares;
};
console.log(numerosPares2(50));

function numerosPares(numero) {
  const pares = [];

  for (let index = 0; index <= numero; index++) {
    if (index % 2 === 0) {
      pares.push(index);
    }
  }

  return pares;
}

console.log(numerosPares(50));

/* Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.*/

function sumarElementos(array) {
  let sumaDeElementos = 0;

  for (let index = 0; index < array.length; index++) {
    sumaDeElementos = sumaDeElementos + array[index];
  }

  return sumaDeElementos;
}

console.log(sumarElementos([1, 2, 3, 4, 48, 56, 21, 48, 986, 47]));

/*Escribe una función que reciba un array de números y devuelva el mayor número de ese array.*/

function numeroMayor(array) {
  let numeroMayorPosible = array[0];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > numeroMayorPosible) {
      numeroMayorPosible = array[index];
    }
  }

  return numeroMayorPosible;
}

console.log(numeroMayor([1, 2, 3, 4, 48, 56, 21, 48, 986, 47]));

/*
Escribe una función que reciba una cadena de texto y devuelva el número de vocales que contiene.*/

function contarVocales(textoLargo) {
  const vocales = "aeiouAEIOU";

  let contadorDeVocales = 0;

  for (let index = 0; index < textoLargo.length; index++) {
    if (vocales.includes(textoLargo[index])) {
      contadorDeVocales = contadorDeVocales + 1;
    }
  }

  return contadorDeVocales;
}
console.log(
  contarVocales(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias quaerat fugiat, asperiores reprehenderit, esse consectetur quae, quod odio et soluta? Earum soluta magnam consectetur consequuntur architecto dolorem. Nisi, accusamus.Sobre mi"
  )
);

/* 
Escribe una función llamada numerosImpares que reciba un número como parámetro y devuelva un array con todos los números impares desde 0 hasta ese número (inclusive).
*/
function numerosImpares(numero) {
  const impares = [];

  for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }

  return impares;
}

console.log(numerosImpares(50));

/*
Escribe una función que reciba un array de números y devuelva el producto de todos sus elementos.
*/

function multiplicarElementos(array) {
  let productoDeElementos = 1;

  for (let i = 0; i < array.length; i++) {
    // productoDeElementos = productoDeElementos * array[i];

    productoDeElementos *= array[i];
  }

  return productoDeElementos;
}

console.log(multiplicarElementos([2, 3, 5, 10, 20]));

/*
Escribe una función que reciba un array de números y devuelva el menor número de ese array.
*/

function buscandoNumeroMenor(array) {
  let numeroMenor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMenor) {
      numeroMenor = array[i];
    }
  }

  return numeroMenor;
}

console.log(buscandoNumeroMenor([3, 2, 5, 8, 1]));

/*
Escribe una función que reciba una cadena de texto y devuelva el número de consonantes que contiene.
*/

function contarConsonantes(texto) {
  const vocales = "aeiouAEIOU ";

  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (!vocales.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}

console.log(
  contarConsonantes(
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores impedit necessitatibus nam explicabo non labore aperiam a. Praesentium sequi eligendi magnam nisi fugit amet perferendis voluptas dignissimos neque facilis."
  )
);

/*
Escribe una función llamada numerosMultiplosDeTres que reciba un número como parámetro y devuelva un array con todos los números múltiplos de tres desde 0 hasta ese número (inclusive).
*/

function multiplosDeTres(num) {
  const multiplos = [];

  for (let index = 0; index < num; index++) {
    if (index % 3 === 0) {
      multiplos.push(index);
    }
  }
  return multiplos;
}

console.log(multiplosDeTres(66));

/*
Escribe una función que reciba un array de números y devuelva el promedio de todos sus elementos.
*/

function promedio(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  let resultado = suma / array.length;
  return resultado;
}

console.log(promedio([2, 5, 4, 3, 5, 5, 6, 1, 47, 55, 1]));

/*
Escribe una función que reciba una cadena de texto y devuelva el número total de letras (ignorando espacios, números y caracteres especiales) que contiene.
*/

function contarLetras(palabraysigno) {
  let contador = 0;

  for (let i = 0; i < palabraysigno.length; i++) {
    let letraDePalabra = palabraysigno[i];

    if (letraDePalabra.match(/[a-zA-Z]/)) {
      contador++;
    }
  }

  return contador;
}

let textorandom =
  "!!!????¿¿****asdnhasdasdasdasdasdasdasdasdadsasddasfdasfssd 31321346544968749864656132";

console.log(contarLetras(textorandom));

/*
Escribe una función que reciba un array de números y un número específico, y devuelva el número del array que sea más cercano a ese número específico.
*/

function masCercano(array, numero) {
  let numeroMasCercano = array[0];
  let diferenciaMinima = Math.abs(array[0] - numero);

  for (let i = 1; i < array.length; i++) {
    let diferencia = Math.abs(array[i] - numero);

    if (diferencia < diferenciaMinima) {
      numeroMasCercano = array[i];
      diferenciaMinima = diferencia;
    }
  }
  return numeroMasCercano;
}

let numerosArray = [2, 6, 10, 8, 15, 20];
let numeroRandom = 9;

console.log(masCercano(numerosArray, numeroRandom));
