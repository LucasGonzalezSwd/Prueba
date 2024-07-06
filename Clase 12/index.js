// sintaxis de una funcion

function nombreDeLaFuncion(parametro1, parametro2) {
  // Código a ejecutar
  console.log(`Hola, ${parametro1}  adios ${parametro2}`);
}

// Ejemplo de funcion

function saludar(nombre) {
  console.log("Hola, " + nombre);
}
saludar("pepe");

//Crear una función que sume dos números y devuelva el resultado.

function suma(a, b) {
  return a + b;
}

suma(13, 5); // output:23

// alcance de variables

let globalVar = "Soy global";

function miFuncion() {
  let localVar = "Soy local";
  console.log(globalVar); // Output: Soy global
  console.log(localVar); // Output: Soy local
}

miFuncion();
console.log(localVar); // Error: localVar is not defined

let mensaje = "Hola desde el alcance global";

function mostrarMensaje() {
  let mensaje = "Hola desde el alcance local";
  console.log(mensaje); // Output: Hola desde el alcance local
}

mostrarMensaje();
console.log(mensaje); // Output: Hola desde el alcance global

// condicional

let num = 10;
if (num > 5) {
  console.log("Mayor que 5");
} else {
  console.log("Menor o igual a 5");
}

//blucle

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " es Par");
  } else {
    console.log(i + " es Impar");
  }
}

// objeto

let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log(
      "Hola, soy " + this.nombre + "y tengo una edad de : " + this.edad
    );
  },
};
persona.saludar(); // Output: Hola, soy Juan

// arrays

let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // Output: Manzana

//Crear un objeto que represente un coche con propiedades como marca, modelo y año, y un método para mostrar su descripción.

let coche = {
  marca: "Honda",
  modelo: "Civic",
  año: 2022,
  descripcion: function () {
    return this.marca + " " + this.modelo + " del año " + this.año;
  },
};

console.log(coche.descripcion());

//Crear un array de números y mostrar la suma de todos los elementos.

let arrayDeNumeros = [5, 6, 5, 4, 5, 2, 1, 5];
let suma = 0;

for (let i = 0; i < arrayDeNumeros.length; i++) {
  suma += arrayDeNumeros[i];
}

console.log(" La suma es : " + suma);

//Crear una función que reciba un array de objetos (cada objeto representa un estudiante con propiedades como nombre y nota) y devuelva un array con los nombres de los estudiantes que aprobaron (nota mayor o igual a 6).

let estudiantes = [
  { nombre: "pepe", nota: 8 },
  { nombre: "jaimito", nota: 5 },
  { nombre: "roberto", nota: 10 },
];

function aprobadoODesaprobados(estudiantes) {
  let aprobados = [];

  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota >= 6) {
      aprobados.push(estudiantes[i].nombre);
    }
  }
  return aprobados;
}

console.log(aprobadoODesaprobados(estudiantes));

//Este ejercicio consiste en crear una función que reciba un array de objetos, donde cada objeto representa a un estudiante con propiedades nombre y nota. La función debe devolver un array de objetos con los estudiantes que aprobaron (nota mayor o igual a 6). Además, la función debe agregar una propiedad status a cada objeto, con el valor "aprobado" o "reprobado" según corresponda.

function filtrarymodificar(estudiantes) {
  let estudiantesAModificar = [];
  for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];

    if (estudiante.nota >= 6) {
      estudiante.status = "aprobado";
      estudiantesAModificar.push(estudiante);
    } else {
      estudiante.status = "repropado";
      estudiantesAModificar.push(estudiante);
    }
  }
  return estudiantesAModificar;
}
let listaEstudiantes = [
  { nombre: "pepe", nota: 8 },
  { nombre: "jaimito", nota: 5 },
  { nombre: "roberto", nota: 10 },
];

console.log(filtrarymodificar(listaEstudiantes));

// Crear una función que reciba un array de objetos (cada objeto representa un empleado con propiedades como nombre y salario) y devuelva un array con los nombres de los empleados que ganan más de $3000.

// Crear una función que reciba un array de objetos (cada objeto representa un producto con propiedades como nombre y precio) y devuelva un array con los productos que cuestan menos de $20. Además, agregar una propiedad affordable a cada objeto con el valor true si el producto cuesta menos de $20 y false si no.

//Descripción: Crear una función que reciba un array de objetos (cada objeto representa una persona con propiedades como nombre y edad) y devuelva un array con los nombres de las personas mayores de edad (edad mayor o igual a 18).
