// Definición y Conceptos Básicos:

// El Document Object Model (DOM):
// Es una interfaz de programación para documentos HTML y XML.
// Representa la estructura del documento como un árbol de nodos, donde cada nodo representa una parte del documento (etiquetas, atributos, texto).
// Estructura Jerárquica del DOM:
// La raíz del árbol es el objeto document.
// Los nodos hijos incluyen elementos HTML, atributos, texto, comentarios, etc.
// Ejemplo de estructura:
// html
// Copiar código
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Ejemplo</title>
//   </head>
//   <body>
//     <h1>Hola, Mundo!</h1>
//     <p>Esto es un párrafo.</p>
//   </body>
// </html>
// Importancia del DOM:

// Interactividad en Páginas Web:
// Permite la creación de aplicaciones web dinámicas e interactivas.
// Facilita la actualización de contenido en tiempo real sin necesidad de recargar la página completa.
// Manipulación y Acceso a Contenido:
// Permite acceder y modificar el contenido, estructura y estilo del documento mediante scripts (JavaScript).
// 2. Selección de Elementos del DOM
// Métodos de Selección:

getElementById(id);

// Selecciona un elemento por su ID único.

let element = document.getElementById("myId");
getElementsByClassName(className);

// Selecciona todos los elementos con una clase específica.
// Devuelve una colección de nodos (HTMLCollection).
// Ejemplo:

let elements = document.getElementsByClassName("myClass");
getElementsByTagName(tagName);

// Selecciona todos los elementos con un nombre de etiqueta específico.
// Devuelve una colección de nodos (HTMLCollection).
// Ejemplo:

let elements2 = document.getElementsByTagName("p");
querySelector(selector);

// Selecciona el primer elemento que coincide con el selector CSS.
// Ejemplo:

let element3 = document.querySelector(".myClass");
querySelectorAll(selector);

// Selecciona todos los elementos que coinciden con el selector CSS.
// Devuelve una colección estática de nodos (NodeList).

let elements4 = document.querySelectorAll("div p.myClass");

// 4. Eventos y Manipulación del DOM
// Introducción a los Eventos:

// Definición de Eventos:

// Son acciones que ocurren en el navegador (p.ej., clics, movimientos de ratón, envíos de formularios).
// Los eventos pueden ser manejados para ejecutar código JavaScript en respuesta.
// Manejo de Eventos:

// addEventListener(event, function)
// Añade un manejador de eventos a un elemento.

// element.addEventListener("click", function() {
//   alert("Elemento clickeado!");
// });

// Crear una página web interactiva donde los usuarios puedan agregar, modificar y eliminar elementos de una lista de tareas.
// Implementación del Proyecto:

// Paso 1: Crear la estructura HTML básica.
// Paso 2: Seleccionar los elementos del DOM necesarios.
// Paso 3: Añadir funcionalidad para agregar nuevas tareas.
// Paso 4: Añadir funcionalidad para eliminar tareas.
// Paso 5: Añadir funcionalidad para marcar tareas como completadas.
