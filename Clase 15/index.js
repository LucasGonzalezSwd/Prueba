//Crea un objeto coche con las propiedades marca, modelo y año.
// Accede y modifica las propiedades del objeto.
// Añade un método describir que imprima una descripción del coche.

let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  describir: function () {
    console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
  },
};

// console.log(coche.modelo); // Toyota
// coche.año = 2021;
coche.describir(); // Coche: Toyota Corolla, Año: 2021

// Crea un objeto libro con las propiedades titulo, autor y editorial.
// La propiedad autor debe ser otro objeto con nombre y apellido.
// Accede y modifica las propiedades anidadas.

let libro = {
  titulo: "JavaScript: The Good Parts",
  autor: {
    nombre: "Douglas",
    apellido: "Crockford",
  },
  editorial: "O'Reilly Media",
};

console.log(libro.autor.nombre); // Douglas
libro.autor.apellido = "Smith";
console.log(libro.autor.apellido); // Smith

// Crea un objeto persona con las propiedades nombre, edad y profesion.
// Itera sobre las propiedades del objeto y muestra los valores en consola.

let persona = {
  nombre: "Ana",
  edad: 28,
  profesion: "Diseñadora",
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
// nombre: Ana
// edad: 28
// profesion: Diseñadora

// Crea un objeto curso con las propiedades nombre, duracion (en meses) y estudiantes (un array de objetos estudiante).
// Cada estudiante debe tener las propiedades nombre, edad y nota.
// Añade métodos al objeto curso para:
// Agregar un nuevo estudiante.
// Eliminar un estudiante por nombre.
// Calcular la nota promedio del curso.
// Imprimir una lista de estudiantes aprobados (nota mayor o igual a 6).

let curso = {
  nombre: "Objetos en js",
  duracion: 5,
  estudiantes: [
    { nombre: "Juan", edad: 20, nota: 8 },
    { nombre: "Roberto", edad: 21, nota: 5 },
    { nombre: "Pepe", edad: 20, nota: 10 },
    //{ nombre: "Pepa", edad: 19, nota: 7 }
  ],
  agregarEstudiante: function agregar(estudiante) {
    this.estudiantes.push(estudiante);
  },

  eliminarEstudiante: function eliminar(nombre) {
    this.estudiantes = this.estudiantes.filter((est) => est.nombre !== nombre);
  },

  calcularNotaPromedio: function () {
    let sumaNotas = 0;
    for (let estudiante of this.estudiantes) {
      sumaNotas = sumaNotas + estudiante.nota;
    }
    return sumaNotas / this.estudiantes.length;
  },

  imprimirAprobados: function () {
    let aprobados = this.estudiantes.filter((est) => est.nota >= 6);
    console.log("Estudiantes Aprobados");

    for (let estudiante of aprobados) {
      console.log(`${estudiante.nombre} - Nota: ${estudiante.nota}`);
    }
  },
};

curso.agregarEstudiante({ nombre: "Pepa", edad: 19, nota: 7 });

// curso.eliminarEstudiante("Pepe")

console.log(curso.calcularNotaPromedio());

curso.imprimirAprobados();

//   Crea un objeto tienda con las propiedades nombre, direccion y productos (un array de objetos producto).
//   Cada producto debe tener las propiedades nombre, precio y stock.
//   Añade métodos al objeto tienda para:
//   Agregar un nuevo producto.
//   Actualizar el stock de un producto.
//   Calcular el valor total del inventario.
//   Imprimir una lista de productos que están agotados (stock igual a 0).

let tienda = {
  nombre: "Super mercado",
  direccion: "Calla Falsa 321",
  productos: [
    { nombre: "Manzana", precio: 10, stock: 5 },
    { nombre: "Banana", precio: 10, stock: 0 },
    { nombre: "Pomelo", precio: 10, stock: 5 },
  ],
  agregar: function (producto) {
    this.productos.push(producto);
  },
  actualizar: function (nombre, stockNuevo, precioNuevo) {
    for (let producto of this.productos) {
      if (producto.nombre === nombre) {
        producto.precio = precioNuevo;
        producto.stock = stockNuevo;
        break;
      }
    }
  },

  calcular: function () {
    let valorTotal = 0;

    for (let producto of this.productos) {
      valorTotal = valorTotal + producto.precio * producto.stock;
    }
    return valorTotal;
  },

  imprimirAgotados: function () {
    let agotados = this.productos.filter((prod) => prod.stock === 0);

    for (let producto of agotados) {
      console.log(producto.nombre);
    }
  },
};

tienda.agregar({ nombre: "Pera", precio: 120, stock: 10 });
tienda.actualizar("Manzana", 20, 1);
console.log(`Valor total del inventario: ${tienda.calcular()}`);
tienda.imprimirAgotados();

//   Crea un objeto biblioteca con las propiedades nombre, ubicacion y libros (un array de objetos libro).
//   Cada libro debe tener las propiedades titulo, autor y disponible (booleano).
//   Añade métodos al objeto biblioteca para:
//   Agregar un nuevo libro.
//   Marcar un libro como prestado (disponible = false).
//   Marcar un libro como devuelto (disponible = true).
//   Imprimir una lista de libros disponibles.

let biblioteca = {
  nombre: "Biblioteca Central",
  ubicacion: "Zona Centro",
  libros: [
    { titulo: "El Quijote", autor: "Miguel de Cervantes", disponible: true },
    {
      titulo: "Cien Años de Soledad",
      autor: "Gabriel García Márquez",
      disponible: false,
    },
    { titulo: "1984", autor: "George Orwell", disponible: true },
  ],
  agregarLibro: function (libro) {
    this.libros.push(libro);
  },
  marcarPrestado: function (titulo) {
    for (let libro of this.libros) {
      if (libro.titulo === titulo) {
        libro.disponible = false;
        break;
      }
    }
  },
  marcarDevuelto: function (titulo) {
    for (let libro of this.libros) {
      if (libro.titulo === titulo) {
        libro.disponible = true;
        break;
      }
    }
  },
  imprimirDisponibles: function () {
    let disponibles = this.libros.filter((libro) => libro.disponible);

    for (libro of disponibles) {
      console.log(`${libro.titulo} - Autor: ${libro.autor}`);
    }
  },
};

biblioteca.agregarLibro({
  titulo: "El Hobbit",
  autor: "Tolkien",
  disponible: true,
});
biblioteca.marcarDevuelto("Cien Años de Soledad");
biblioteca.marcarPrestado("1984");
biblioteca.imprimirDisponibles();
