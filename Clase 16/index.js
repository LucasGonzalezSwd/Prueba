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
//extra
//Añade un sistema de préstamos que permita prestar libros a usuarios. Incluye métodos para registrar usuarios, prestar libros y devolver libros.

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
  usuarios: [],
  prestamos: [],

  agregarLibros: function (libro) {
    this.libros.push(libro);
  },
  marcarPrestado: function (titulo) {
    for (let libroprestado of this.libros) {
      if (libroprestado.titulo === titulo && libroprestado.disponible) {
        libroprestado.disponible = false;
        return true;
      }
    }
    return false;
  },
  eliminarLibro: function (titulo) {
    this.libros = this.libros.filter((libro) => libro.titulo !== titulo);
    console.log(`Libro ${titulo} eliminado`);
  },
  registrarUser: function (usuario) {
    this.usuarios.push(usuario);
  },
  prestarLibros: function (nombreUser, titulo) {
    if (this.marcarPrestado(titulo)) {
      this.prestamos.push({ nombreUser, titulo });
      console.log(`Libro ${titulo} prestado a ${nombreUser}`);
    }
  },

  devolverLibro: function (nombreUser, titulo) {
    let prestamoIndex = this.prestamos.findIndex(
      (prestamo) =>
        prestamo.nombreUser === nombreUser && prestamo.titulo === titulo
    );
    if (prestamoIndex !== -1) {
      this.prestamos.splice(prestamoIndex, 1);
      this.devolverLibro(titulo);
      console.log(`Libro ${titulo} devuelto por ${nombreUser}`);
    }
  },
  listarPrestamos: function () {
    this.prestamos.forEach((prestamo) =>
      console.log(`${prestamo.nombreUser} , Libro: ${prestamo.titulo}`)
    );
  },
};

biblioteca.agregarLibros({
  titulo: "El Hobbit",
  autor: "Tolkien",
  disponible: true,
});

biblioteca.registrarUser({ nombre: "Carlos" });
biblioteca.prestarLibros("Carlos", "1984");
biblioteca.prestarLibros("Carlos", "Cien Años de Soledad");
biblioteca.listarPrestamos();
biblioteca.devolverLibro("Carlos", "1984");
biblioteca.eliminarLibro("Cien Años de Soledad");

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

let supermercado = {
  nombre: "Super Chapulin",
  direccion: "Calle verdadera 123",
  productos: [
    { nombre: "Manzana", precio: 10, stock: 5, descuento: 0 },
    { nombre: "Banana", precio: 25, stock: 0, descuento: 0 },
    { nombre: "Pomelo", precio: 10, stock: 5, descuento: 0 },
  ],

  agregarProduct: function (producto) {
    this.productos.push(producto);
  },
  actualizarStock: function (nombre, stockNuevo, precioNuevo) {
    for (let producto of this.productos) {
      if (producto.nombre === nombre) {
        producto.stock = stockNuevo;
        producto.precio = precioNuevo;
        break;
      }
    }
  },
  aplicarDescuentos: function (nombre, porcentajeDescuento) {
    for (let producto of this.productos) {
      if (producto.nombre === nombre) {
        producto.descuento = porcentajeDescuento;
        break;
      }
    }
  },

  calcularValorConDescuentos: function () {
    let valorTotal = 0;
    for (let producto of this.productos) {
      let precioConDescuento = producto.precio * (1 - producto.descuento / 100);
      valorTotal = valorTotal + precioConDescuento * producto.stock;
      console.log(valorTotal); //ver de tarea
    }
    return valorTotal;
  },
  listarPorRangos: function (precioMinimo, precioMaximo) {
    let productosEnRAngo = this.productos.filter(
      (producto) =>
        producto.precio >= precioMinimo && producto.precio <= precioMaximo
    );
    for (let producto of productosEnRAngo) {
      console.log(`${producto.nombre} - Precio ${producto.precio}`);
    }
  },
};

supermercado.agregarProduct({
  nombre: "Pera",
  precio: 20,
  stock: 10,
  descuento: 0,
});
supermercado.actualizarStock("Manzana", 20, 20);
supermercado.calcularValorConDescuentos("Pera", 20);
supermercado.listarPorRangos(10, 15);
