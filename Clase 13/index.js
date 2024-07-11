// arrays de ejemplo

let numeros = [1, 2, 3, 4, 5];

let strings = ["hola", "mundo"];

let objetos = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
];

//Constructor de arrays

let numeros2 = new Array(1, 2, 3, 4, 5);
let vacio = new Array(10); // Array con 10 elementos vacíos

//Acceder a un array

let numeros3 = [1, "segunda posicion", 3, 4, 5];
console.log(numeros3[0]); // 1
console.log(numeros3[2]); // 3
numeros3[1] = "segunda posicion"; // Modificar el segundo elemento
console.log(numeros); // [1,  "segunda posicion", 3, 4, 5]

//Metodos Basicos
// let numeros = [1, 2, 3, 4, 5]
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// let numeros = [1, 2, 3, 4, 5, 6]

numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]

// shift(): Elimina el primer elemento del array.

numeros.shift();
console.log(numeros); // [2, 3, 4, 5]

//unshift
// let numeros = [ 2, 3, 4, 5]
numeros.unshift(6);
console.log(numeros); // [6 ,2, 3, 4, 5]

// Concat , Splice , Slice

let numeros4 = [1, 2, 3];

let masNumeros = numeros4.concat([4, 5]); // [1, 2, 3, 4, 5]

let parte = numeros4.slice(1, 2); // [2]

numeros4.splice(1, 1, 10); // [1, 10, 3]

//Filter , Map, Reduce, ForEach

let numeros5 = [1, 2, 3];

numeros5.forEach((num) => console.log(num)); //1 , 2 , 3

let dobles = numeros5.map((num) => num * 2); // [2, 4, 6]

let mayoresQueUno = numeros5.filter((num) => num > 1); // [2, 3]

let suma = numeros5.reduce((acc, num) => acc + num, 0); // 6

// find(), findIndex(), includes()
let numeros6 = [1, 2, 3];

let encontrado = numeros6.find((num) => num === 2); // 2

let indice = numeros6.findIndex((num) => num === 2); // 1

let existe = numeros6.includes(2); // true

// modificar un valor del array

let numeros7 = [1, 2, 3];
numeros7[1] = 10; // [1, 10, 3]

// Ejemplos

let frutas = ["manzana", "banana", "cereza"];
frutas.push("durazno"); // ["manzana", "banana", "cereza", "durazno"]

let primeraFruta = frutas.shift();
// frutas = ["banana", "cereza", "durazno"]

let numeros8 = [1, 2, 3, 4, 5];
let suma2 = numeros.reduce((acc, num) => acc + num, 0); // 15
let cuadrados = numeros.map((num) => num * num); // [1, 4, 9, 16, 25]

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
];

personas.push({ nombre: "Pedro", edad: 20 }); // Agrega un nuevo objeto
let mayoresDe25 = personas.filter((persona) => persona.edad > 25);
//  Filtra personas mayores de 25 años
//{ nombre: "Ana", edad: 30 }

let nombres = personas.map((persona) => persona.nombre);
// ["Juan", "Ana", "Pedro"]

let numeros10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usar filter para obtener solo los números pares.
let numerosPares = numeros10.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [2, 4, 6, 8, 10]

// Usar map para obtener el cuadrado de cada número.
let cuadrados2 = numeros10.map((numero) => numero * numero);
console.log(cuadrados2);
// Usar forEach para imprimir cada número del array original.

numeros10.forEach((num) => console.log(num));

let frutas2 = ["manzana", "banana", "cereza", "durazno", "kiwi"];

//Usar filter para obtener solo las frutas que tienen más de 5 letras.

let frutasLargas = frutas2.filter((fruta) => fruta.length > 5);

console.log(frutasLargas);

//Usar map para convertir cada fruta en mayúsculas.

let frutasMayusculas = frutasLargas.map((fruta) => fruta.toUpperCase());

console.log(frutasMayusculas);
//Usar forEach para imprimir cada fruta del array original.
frutas2.forEach((fruta) => console.log(fruta));

let personas11 = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luisa", edad: 35 },
  { nombre: "María", edad: 28 },
];

//Usar filter para obtener solo las personas mayores de 25 años.
let MayoresDe25 = personas11.filter((persona) => persona.edad > 25);

let nombres23 = MayoresDe25.map((persona) => persona.nombre);

console.log(nombres23);

//Usar map para obtener un array de strings con solo los nombres de las personas.
let nombres24 = personas11.map((persona) => persona.nombre);
console.log(nombres24);
//Usar forEach para imprimir el nombre y la edad de cada persona del array original.
MayoresDe25.forEach((persona) => {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

let frutas22 = ["MANGO", "papaya", "PIÑA", "manzana", "UVA"];
//Usar map para convertir cada fruta a minúsculas.

let frutasMinuscula = frutas22.map((fruta) => fruta.toLowerCase());
console.log(frutasMinuscula);

//Usar filter para obtener las frutas que empiezan con 'p'.

let frutasConP = frutasMinuscula.filter((fruta) => fruta.startsWith("p"));

console.log(frutasConP);

//Usar forEach para imprimir cada fruta del array original.
frutas22.forEach((fruta) => console.log(fruta));

let productos22 = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teléfono", precio: 600 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Teclado", precio: 50 },
];

//Usar filter para obtener solo los productos que cuestan más de 300.

let productosCaros = productos22.filter((producto) => producto.precio > 300);

let nombreProduct = productosCaros.map((producto) => producto.nombre);

console.log(nombreProduct);

//Usar map para obtener un array de strings con los nombres de los productos.

let todosLosProductos = productos22.map((producto) => producto.nombre);
console.log(todosLosProductos);
//Usar forEach para imprimir el nombre y el precio de cada producto.
productos22.forEach((producto) =>
  console.log(`Nombre: ${producto.nombre}, Edad: ${producto.precio}`)
);

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

//Crea un array de números y utiliza reduce para encontrar el producto de todos los números.

//Crea un array de strings y utiliza map para crear un nuevo array donde todos los strings están en mayúsculas.

//Crea un array de números y utiliza filter para crear un nuevo array con solo los números pares.

//Crea un array de números y utiliza find para encontrar el primer número mayor que 3.

//Crea un array de números y utiliza every para verificar si todos los números son positivos.

//Crea un array de números y utiliza some para verificar si al menos un número es mayor que 4.

//Crea un array de números desordenados y utiliza sort para ordenarlos en orden ascendente.

//Crea un array de strings y utiliza sort para ordenarlos alfabéticamente.

//Crea un array de objetos que representen personas y utiliza map y reduce para calcular la edad promedio.
