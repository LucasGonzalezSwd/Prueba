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

// Crea un objeto carniceria con las propiedades nombre, direccion y productos (un array de objetos producto).
// Cada producto debe tener las propiedades nombre, precioPorKg y stockKg.
// Añade métodos al objeto carniceria para:
// Agregar un nuevo producto.
// Actualizar el stock y precio de un producto.
// Calcular el valor total del inventario.
// Imprimir una lista de productos que están agotados (stockKg igual a 0).

let carniceria = {
  nombre: "Carniceria el petiso",
  direccion: "Centro Ciudad",
  productos: [
    { nombre: "Carne de Res", precioPorKg: 15, stockKg: 20 },
    { nombre: "Pollo", precioPorKg: 10, stockKg: 0 },
    { nombre: "Cerdo", precioPorKg: 12, stockKg: 15 },
  ],
  agregarProduct: function (product) {
    this.productos.push(product);
  },
  actualizarStockProduct: function (nombre, precioNuevo, stockNuevoKg) {
    for (let product of this.productos) {
      if (product.nombre === nombre) {
        product.precioPorKg = precioNuevo;
        product.stockKg = stockNuevoKg;
        console.log(`${product.nombre} actualizado`);
        break;
      }
    }
  },
  valorTotal: function () {
    let valorTotal = 0;
    for (let producto of this.productos) {
      valorTotal = valorTotal + producto.precioPorKg * producto.stockKg;
    }
    return valorTotal;
  },

  imprimirAgotados: function () {
    let agotado = this.productos.filter((prod) => prod.stockKg === 0);
    for (let productAgotado of agotado) {
      console.log(`Producto sin stock ${productAgotado.nombre}`);
    }
  },
};

carniceria.agregarProduct({
  nombre: "Hamburguesas",
  precioPorKg: 8,
  stockKg: 10,
});
console.log(`Valor total ${carniceria.valorTotal()}`);
carniceria.actualizarStockProduct("Carne de Res", 16, 0);
carniceria.imprimirAgotados();

// Crea un objeto concesionario con las propiedades nombre, direccion y autos (un array de objetos auto).
// Cada auto debe tener las propiedades marca, modelo, precio y disponible (booleano).
// Añade métodos al objeto concesionario para:
// Agregar un nuevo auto.
// Marcar un auto como vendido (disponible = false).
// Marcar un auto como disponible (disponible = true).
// Imprimir una lista de autos disponibles.

let concesionarioDeAutos = {
  nombre: "TuCeroKmYa",
  direccion: "Centro Ciudad",
  autos: [
    { marca: "Toyota", modelo: "Corolla", precio: 20000, disponible: true },
    { marca: "Honda", modelo: "Civic", precio: 22000, disponible: false },
    { marca: "Ford", modelo: "Focus", precio: 18000, disponible: true },
  ],
  agregarAuto: function (auto) {
    this.autos.push(auto);
  },
  autoVendido: function (marca, modelo) {
    for (let auto of this.autos) {
      if (auto.marca === marca && auto.modelo === modelo) {
        auto.disponible = false;
        break;
      }
    }
  },
  autoEnVenta: function (marca, modelo) {
    for (let auto of this.autos) {
      if (auto.marca === marca && auto.modelo === modelo) {
        auto.disponible = true;
        break;
      }
    }
  },
  imprimirAutosDisponibles: function () {
    let autosDisponibles = this.autos.filter(
      (auto) => auto.disponible === true
    );
    for (let auto of autosDisponibles) {
      console.log(
        `${auto.marca} ${auto.modelo} esta disponible a un precio de ${auto.precio}`
      );
    }
  },
};

concesionarioDeAutos.agregarAuto({
  marca: "Chevrolet",
  modelo: "Malibu",
  precio: 25000,
  disponible: true,
});
concesionarioDeAutos.autoVendido("Toyota", "Corolla");
concesionarioDeAutos.autoEnVenta("Honda", "Civic");
concesionarioDeAutos.imprimirAutosDisponibles();
// Crea un objeto hotel con las propiedades nombre, ubicacion y habitaciones (un array de objetos habitacion).
// Cada habitacion debe tener las propiedades numero, tipo (simple, doble, suite), precioPorNoche y disponible (booleano).
// Añade métodos al objeto hotel para:
// Agregar una nueva habitación.
// Marcar una habitación como reservada (disponible = false).
// Marcar una habitación como libre (disponible = true).
// Imprimir una lista de habitaciones disponibles.

let hotel = {
  nombre: "Hotel Trivago",
  direccion: "Centro Ciudad",
  habitaciones: [
    { numero: 101, tipo: "simple", precioPorNoche: 100, disponible: true },
    { numero: 102, tipo: "doble", precioPorNoche: 200, disponible: false },
    { numero: 103, tipo: "suite", precioPorNoche: 300, disponible: true },
  ],
  agregarHabitacion: function (habitacion) {
    this.habitaciones.push(habitacion);
  },
  marcarComoReservada: function (numero) {
    for (let habitacion of this.habitaciones) {
      if (habitacion.numero === numero) {
        habitacion.disponible = false;
        break;
      }
    }
  },
  marcarComoDisponible: function (numero) {
    for (let habitacion of this.habitaciones) {
      if (habitacion.numero === numero) {
        habitacion.disponible = true;
        break;
      }
    }
  },
  imprimirHabitacionesDisponibles: function () {
    let disponible = this.habitaciones.filter(
      (habitacion) => habitacion.disponible === true
    );
    for (habitacion of disponible) {
      console.log(
        `Numero ${habitacion.numero}  - Tipo ${habitacion.tipo} - Precio ${habitacion.precioPorNoche}`
      );
    }
  },
};

hotel.agregarHabitacion({
  numero: 104,
  tipo: "suitePresidencial",
  precioPorNoche: 500,
  disponible: true,
});

hotel.marcarComoReservada(104);
hotel.marcarComoDisponible(102);
hotel.imprimirHabitacionesDisponibles();
