let nombre = "Juan";
let edad = 30;
let esEstudiante = true;
let habilidades = ["JavaScript", "HTML", "CSS"];
let direccion = {
  calle: "Av. Siempre Viva",
  numero: 742,
  ciudad: "Springfield",
};

console.log(nombre, edad, esEstudiante, habilidades, direccion);

function mayorDeDos(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Son iguales";
  }
}

console.log(mayorDeDos(5, 10)); // 10
console.log(mayorDeDos(20, 10)); // 20
console.log(mayorDeDos(15, 15)); // Son iguales

let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}
console.log(suma); // 55

let numeros2 = [1, 2, 3, 4, 5];

function multiplicarPorDos(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2);
  }
  return resultado;
}

let libros = [
  { titulo: "Libro 1", autor: "Autor 1", año: 1999 },
  { titulo: "Libro 2", autor: "Autor 2", año: 2005 },
  { titulo: "Libro 3", autor: "Autor 3", año: 2010 },
];

for (let i = 0; i < libros.length; i++) {
  if (libros[i].año > 2000) {
    console.log(libros[i].titulo);
  }
}

let numeros = [1, 2, 3, 4, 5];
console.log(multiplicarPorDos(numeros)); // [2, 4, 6, 8, 10]

let estudiantes = [
  { nombre: "Ana", edad: 20, nota: 9 },
  { nombre: "Luis", edad: 22, nota: 6 },
  { nombre: "Carlos", edad: 21, nota: 7 },
  { nombre: "Sofía", edad: 19, nota: 8 },
  { nombre: "Miguel", edad: 23, nota: 10 },
];

estudiantes.sort((a, b) => b.edad - a.edad);
console.log(estudiantes);

estudiantes.find((est) => est.nombre === "Carlos").nota = 9;
console.log(estudiantes);

let estudiantesConAltaNota = estudiantes.filter((est) => est.nota > 8);
console.log(estudiantesConAltaNota);

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function obtenerPrimos(hasta) {
  let primos = [];
  for (let i = 2; i <= hasta; i++) {
    if (esPrimo(i)) primos.push(i);
  }
  return primos;
}
