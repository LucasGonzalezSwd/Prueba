///
let productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teléfono", precio: 600 },
  { nombre: "Tablet", precio: 301 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Teclado", precio: 50 },
];

// Obtener productos con precio mayor a 300, ordenarlos y obtener sus nombres en mayúsculas.

let products = productos
  .filter((product) => product.precio > 300)
  .sort((a, b) => b.precio - a.precio)
  .map((product) => product.nombre.toUpperCase());

console.log(products);

//Crear un array de objetos representando personas con nombre y edad.Calcular la edad promedio, la edad mínima y la edad máxima.

let personas111 = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "María", edad: 28 },
];

let edades = personas111.map((persona) => persona.edad);

let promedio = edades.reduce((acc, edad) => acc + edad, 0) / edades.length;

let minimaEdad = Math.min(...edades);
let maximaEdad = Math.max(...edades);

console.log(
  `Promedio: ${promedio} , Minima: ${minimaEdad}, Maxima: ${maximaEdad}`
);

//Crear un array de números.Elevar cada número al cuadrado y luego filtrar los números pares.

let numeross = [1, 2, 3, 4, 5, 6, 7, 8, 9, 40];

let cuadradoss = numeross
  .map((num) => num * num)
  .filter((num) => num % 2 === 0);

console.log(cuadradoss);

//Crea un array de números y utiliza reduce para encontrar la suma de todos los números.

let numeross2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 40];

let suma3 = numeross2.reduce((acc, num) => acc + num, 0);

console.log(suma3);

//Crea un array de números y utiliza reduce para encontrar el producto de todos los números.
let numeross3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let suma = numeross3.reduce((acc, num) => acc * num, 1);

console.log(suma);

//Crea un array de strings y utiliza map para crear un nuevo array donde todos los strings están en mayúsculas.

let frutas = ["naranaja", "banana", "frutilla", "kiwi", "durazno"];

let frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasEnMayusculas);
//Crea un array de números y utiliza filter para crear un nuevo array con solo los números pares.
let numerosRandom = [1, 5, 6, 7, 5, 2, 3, 4, 1, 2, 3, 6, 7, 9, 4, 2];

let numerosPares2 = numerosRandom.filter((num) => num % 2 === 0);

console.log(numerosPares2);

//Crea un array de números y utiliza find para encontrar el primer número mayor que 3.
let numerosRandom2 = [
  1, 1, 2, 1, 3, 2, 1, 5, 6, 7, 5, 2, 3, 4, 1, 2, 3, 6, 7, 9, 4, 2,
];

let mayorQueTres = numerosRandom2.find((num) => num > 3);
let posicionMayorQueTres = numerosRandom2.findIndex((num) => num > 3);
console.log(mayorQueTres);
console.log(posicionMayorQueTres);
//Crea un array de números y utiliza every para verificar si todos los números son positivos.

let numerosRandom3 = [
  1, 1, 2, 1, 3, 2, 1, 5, 6, 7, 5, 2, 3, 4, 1, 2, 3, 6, 7, 9, 4, 2,
];

let todosPositivos = numerosRandom3.every((num) => num > 0);
let algunosPositivos = numerosRandom3.some((num) => num > 0);
console.log(todosPositivos);
console.log(algunosPositivos);

//Crea un array de números y utiliza some para verificar si al menos un número es mayor que 4.
let numerosRandom4 = [
  1, 1, 2, 1, 3, 2, 1, 5, 6, 7, 5, 2, 3, 4, 1, 2, 3, 6, 7, 9, 4, 2,
];

let algunoMayorQueCuatro = numerosRandom4.some((num) => num > 4);

console.log(algunoMayorQueCuatro);

//Crea un array de números desordenados y utiliza sort para ordenarlos en orden ascendente.
let numerosRandom5 = [
  1, 1, 2, 1, 3, 2, 1, 5, 6, 7, 5, 2, 3, 4, 1, 2, 3, 6, 7, 9, 4, 2,
];

let menorAMayor = numerosRandom5.sort((a, b) => a - b);
console.log(menorAMayor);

// console.log(mayorAMenor);

// let mayorAMenor = numerosRandom5.sort((a, b) => b - a);

//Crea un array de strings y utiliza sort para ordenarlos alfabéticamente.

let frutas2 = ["durazno", "manzana", "banana"];

let frutasOrdenadas = frutas2.sort();

console.log(frutasOrdenadas);

//Dado un array de objetos personas y una letra específica, calcula la suma total de las edades de las personas cuyos nombres comienzan con esa letra.

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "Alfredo", edad: 28 },
];

let letra = "A";

let edadTotal = personas
  .filter((persona) => persona.nombre.startsWith(letra))
  .reduce((acc, persona) => acc + persona.edad, 0);

console.log(
  `Edad total de personas que comienzan con la "${letra}" : ${edadTotal}`
);

// let letra = "u";

// let edadTotal = personas
//   .filter((persona) => persona.nombre[1] === letra)
//   .reduce((acc, persona) => acc + persona.edad, 0);

// console.log(
//   `Edad total de personas que contienen en su segunda letra la "${letra}" : ${edadTotal}`
// );

//Dado un array de objetos personas, crea un nuevo array que contenga solo los nombres únicos.

let personas2 = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "Alfredo", edad: 28 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "Alfredo", edad: 28 },
];

let nombreUnicos = [...new Set(personas2.map((persona) => persona.nombre))];

console.log(`nombre unicos: ${nombreUnicos.join(", ")}`);

//Dado un array de objetos personas, encuentra la persona cuyo nombre tenga más caracteres.

let personas3 = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "Alfredo", edad: 28 },
];

let nombreNombreMasCorto = personas3.reduce((acc, persona) =>
  acc.nombre.length < persona.nombre.length ? acc : persona
);

let nombreMasLargo = personas3.reduce((acc, persona) =>
  acc.nombre.length > persona.nombre.length ? acc : persona
);

console.log(`El nombre mas largo es: ${nombreMasLargo.nombre}`);
console.log(`El nombre mas corto es: ${nombreNombreMasCorto.nombre}`);

//Dado el mismo array de personas del ejercicio anterior, calcula el promedio de edad para cada uno de los grupos de edad definidos.

let personas4 = [
  { nombre: "Juan", edad: 19 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "Alfredo", edad: 48 },
];

let menoresDe20 = personas4
  .filter((personas) => personas.edad <= 20)
  .map((personas) => personas.nombre);

let mayoresDe30 = personas4
  .filter((personas) => personas.edad >= 30 && personas.edad < 40)
  .map((personas) => personas.nombre);

let mayoreDe40 = personas4
  .filter((personas) => personas.edad >= 40)
  .map((personas) => personas.nombre);

console.log(`Menores a 20 años ${menoresDe20}`);
console.log(`Mayores a 30 años ${mayoresDe30}`);
console.log(`Mayores a 40 años ${mayoreDe40}`);
