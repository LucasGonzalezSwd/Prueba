// Crear una clase Persona

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  presentarse() {
    console.log(
      `Hola, me llamo ${this.nombre} y tengo ${this.edad} años y mi genero es ${this.genero}.`
    );
  }
}

// Crear varias instancias de Persona
const persona1 = new Persona("Juan", 25, "Masculino");
const persona2 = new Persona("María", 30, "Femenino");

// Llamar al método presentarse
persona1.presentarse(); // "Hola, me llamo Juan y tengo 25 años y mi genero es masculino."
persona2.presentarse(); // "Hola, me llamo María y tengo 30 años."

//Herencia con una subclase Estudiante

class Estudiante extends Persona {
  constructor(nombre, edad, genero, grado) {
    super(nombre, edad, genero); // Llama al constructor de Persona
    this.grado = grado;
  }

  // Sobrescribe el método presentarse para incluir el grado
  presentarse() {
    console.log(
      `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y estoy en el grado ${this.grado}.`
    );
  }
}

class Abodago extends Persona {
  constructor(nombre, edad, genero, traje) {
    super(nombre, edad, genero); // Llama al constructor de Persona
    this.traje = traje;
  }

  // Sobrescribe el método presentarse para incluir el grado
  presentarse() {
    console.log(
      `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y estoy de ${this.traje}.`
    );
  }
}

// Crear una instancia de Estudiante
const estudiante1 = new Estudiante("Carlos", 20, "Masculino", "Segundo año");
estudiante1.presentarse(); // "Hola, me llamo Carlos, tengo 20 años y estoy en el grado Segundo año."
// Métodos y propiedades estáticas

class Persona {
  static contador = 0;

  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    Persona.contador++; // Incrementa el contador de instancias
  }

  presentarse() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }

  static totalPersonas() {
    return Persona.contador;
  }
}

// Crear instancias
const persona3 = new Persona("Ana", 22, "Femenino");
const persona4 = new Persona("Luis", 28, "Masculino");

// Llamar al método estático
console.log(`Total de personas creadas: ${Persona.totalPersonas()}`); // "Total de personas creadas: 2"
// Encapsulamiento con getters y setters

class Persona {
  static contador = 0;

  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this._edad = edad; // Usamos _ para indicar que es una propiedad privada
    this.genero = genero;
    Persona.contador++;
  }

  // Getter para la edad
  get edad() {
    return this._edad;
  }

  // Setter para la edad, asegurando que sea siempre positiva
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this._edad = nuevaEdad;
    } else {
      console.log("La edad debe ser un número positivo.");
    }
  }

  presentarse() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia
const persona5 = new Persona("Pedro", 35, "Masculino");
persona5.presentarse(); // "Hola, me llamo Pedro y tengo 35 años."

// Intentar asignar una edad negativa
persona5.edad = 10; // "La edad debe ser un número positivo."
console.log(persona5.edad); // 10 (no se cambia porque era un valor negativo)
