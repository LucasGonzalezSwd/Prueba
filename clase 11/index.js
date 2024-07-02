// Declaramos un array de números del 1 al 5
let numbers = [1, 2, 3, 4, 5];

// Utilizamos un bucle for para iterar sobre cada elemento del array
for (let i = 0; i < numbers.length; i++) {
  // Imprimimos cada elemento del array
  console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
}

/////////////////////////////////////////////////////////

// Declaramos un contador inicializado en 0
let i = 0;

// Utilizamos un bucle while para iterar mientras i sea menor que 5
while (i <= 5) {
  // Imprimimos el valor de i
  console.log(i); // Output: 0, 1, 2, 3, 4

  // Incrementamos i en 1 en cada iteración
  i++;
}

/////////////////////////////////////////////////////////

// Declaramos un contador inicializado en 0
let j = 0;

// Utilizamos un bucle do...while para iterar
do {
  // Imprimimos el valor de j
  console.log(j); // Output: 0, 1, 2, 3, 4

  // Incrementamos j en 1 en cada iteración
  j++;
} while (j < 5); // La condición se evalúa después de ejecutar el bloque de código

/////////////////////////////////////////////////////////

// Declaramos un objeto con algunas propiedades
let person = { name: "John", age: 30, city: "New York" };

// Utilizamos un bucle for...in para iterar sobre las propiedades del objeto
for (let key in person) {
  // Imprimimos cada propiedad y su valor
  console.log(key + ": " + person[key]); // Output: name: John, age: 30, city: New York
}

/////////////////////////////////////////////////////////

// Declaramos un array de números
let iterable = [10, 20, 30, 40];

// Utilizamos un bucle for...of para iterar sobre los valores del array
for (let value of iterable) {
  // Imprimimos cada valor del array
  console.log(value); // Output: 10, 20, 30
}

/////////////////////////////////////////////////////////

let numbers2 = [1, 2, 3, 4, 5];
let person2 = { name: "John", age: 30, city: "New York" };

// for
for (let index = 0; index < numbers2.length; index++) {
  console.log("for loop:", numbers2[index]); // Itera sobre cada número del array
}

// while
let index = 0;
while (index < numbers2.length) {
  console.log("while loop:", numbers2[index]); // Itera sobre cada número del array mientras i < 5
  index++;
}

// do...while
let k = 0;
do {
  console.log("do...while loop:", numbers2[k]); // Itera sobre cada número del array al menos una vez
  k++;
} while (k < numbers2.length);

// for...in
for (let key in person2) {
  console.log("for...in loop:", key + ": " + person2[key]); // Itera sobre cada propiedad del objeto person
}

// for...of
for (let value of numbers2) {
  console.log("for...of loop:", value); // Itera sobre cada valor del array
}

function imprmirElementos(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

imprmirElementos([2, 4, 2, 3, 4, 8, 9, 6]);

function imprimirProps(objeto) {
  Object.keys(objeto).forEach((clave) => {
    console.log(`${clave} : ${objeto[clave]}`);
  });
}

const persona = {
  nombre: "Raul",
  apellido: "Rodriguez",
  edad: 100,
};

imprimirProps(persona);

function sumarValues(objeto) {
  let suma = 0;

  Object.values(objeto).forEach((valor) => {
    suma = suma + valor;
  });
  return suma;
}

const numeros = {
  a: 10,
  b: 11,
  c: 100,
};

console.log(sumarValues(numeros));

function contarProps(objeto) {
  let contador = 0;

  Object.keys(objeto).forEach(() => {
    contador++;
  });

  return contador;
}

const objetoRandom = {
  a: 10,
  b: 11,
  c: 100,
  d: "soy d",
  f: "soy f",
};

console.log(contarProps(objetoRandom));
