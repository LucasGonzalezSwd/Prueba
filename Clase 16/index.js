// Crear un objeto "universidad" con las siguientes propiedades y métodos:
// Propiedades:
// nombre
// ubicacion
// facultades (un array de objetos facultad, cada facultad tiene nombre y carreras)
// Métodos:
// agregarFacultad: añade una nueva facultad a la universidad.
// eliminarFacultad: elimina una facultad por su nombre.
// listarCarreras: lista todas las carreras de todas las facultades.
//extra
// Añade un método para calcular la cantidad total de carreras en todas las facultades.
// Implementa un sistema para registrar profesores en cada facultad, con propiedades como nombre y departamento.

let universidad = {
  nombre: "Universidad de Ejemplo",
  ubicacion: "Ciudad Ejemplo",
  facultades: [
    {
      nombre: "Facultad de Ciencias",
      carreras: ["Biología", "Química", "Física"],
    },
    {
      nombre: "Facultad de Ingenierías",
      carreras: ["Ingeniería Civil", "Ingeniería Mecánica"],
    },
  ],

  agregarFacultad: function (facultad) {
    this.facultades.push(facultad);
  },
  eliminarFacultad: function (nombre) {
    this.facultades = this.facultades.filter((fac) => fac.nombre !== nombre);
  },
  listarCarreras: function () {
    this.facultades.forEach((facultad) => {
      facultad.carreras.forEach((carrera) =>
        console.log(`Facultad: ${facultad.nombre} Carrera ${carrera}`)
      );
    });
  },
  buscarFacultadPorNombre: function (nombre) {
    let facultad = this.facultades.find((fac) => fac.nombre === nombre);

    if (facultad) {
      console.log(`Facultad encontrada : ${facultad.nombre}`);
    } else {
      console.log("Facultad no encontrada");
    }
  },
  listarFacultades: function () {
    this.facultades.forEach((facultad) => {
      console.log(`${facultad.nombre}`);
    });
  },
};

universidad.agregarFacultad({
  nombre: "Facultad de Artes",
  carreras: ["Música", "Teatro"],
});
universidad.listarCarreras();
universidad.buscarFacultadPorNombre("Facultad de Ciencias");
universidad.buscarFacultadPorNombre("Facultad de Ciencias politicas");
universidad.listarFacultades();

// Crear un objeto "biblioteca" con las siguientes propiedades y métodos:
// Propiedades:
// nombre
// direccion
// libros (un array de objetos libro, cada libro tiene título, autor y género)
// Métodos:
// agregarLibro: añade un nuevo libro a la biblioteca.
// eliminarLibro: elimina un libro por su título.
// listarLibrosPorGenero: lista todos los libros de un género específico.
//extra
//Añade un sistema de préstamos que permita prestar libros a usuarios. Incluye métodos para registrar usuarios, prestar libros y devolver libros.

// Crear un objeto "supermercado" con las siguientes propiedades y métodos:
// Propiedades:
// nombre
// ubicacion
// productos (un array de objetos producto, cada producto tiene nombre, precio, y stock)
// Métodos:
// agregarProducto: añade un nuevo producto al supermercado.
// actualizarStock: actualiza el stock de un producto por su nombre.
// calcularValorInventario: calcula el valor total del inventario del supermercado.
// listarProductosBajoStock: lista todos los productos con un stock por debajo de un valor dado.
//extra
//Implementa un sistema de ofertas que permita aplicar descuentos a ciertos productos y calcular el valor del inventario con los descuentos aplicados.
// Añade un método para listar productos por rango de precios.
