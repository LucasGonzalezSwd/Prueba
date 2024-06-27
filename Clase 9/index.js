let Nombre1 = "Lucasssssss";
const Nombre2 = "Lucas2";
var Nombre3 = "Lucas3";

if (Nombre1.length > Nombre2.length) {
  console.log("nombre 1 es mayor a nombre");
} else {
  console.log("nombre 2 es mayor a nombre1");
}

let dayNumber = 3; // Cambia este número para ver diferentes resultados

switch (dayNumber) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Número de día inválido");
}

const array = ["lunes", "martes", true, 1, "2"];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
