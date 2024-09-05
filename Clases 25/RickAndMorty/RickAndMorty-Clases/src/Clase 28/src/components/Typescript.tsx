/* eslint-disable @typescript-eslint/no-unused-vars */
let nombre: string = "Ana";
let edad: number = 30;
let esEmpleado: boolean = true;

function saludar(persona: string): string {
    return `Hola, ${persona}!`;
}

console.log(saludar(nombre));


function multiplicar(a: number, b: number, c?: number): number {
    return c ? a * b * c : a * b;
}

console.log(multiplicar(2, 3)); // 6
console.log(multiplicar(2, 3, 4)); // 24


interface Persona {
    nombre: string;
    edad: number;
    saludar(): string;
}

let persona: Persona = {
    nombre: "Carlos",
    edad: 40,
    saludar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona.saludar());


class Animal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log("Ladrido");
    }
}

let perro = new Perro("Rex");
perro.hacerSonido(); // Ladrido


// // Definir las props con `interface`
// interface SaludoProps {
//     nombre: string;
//     edad: number;
// }

// const Saludo: React.FC<SaludoProps> = ({ nombre, edad }) => {
//     return (
//         <div>
//             <h1>Hola, {nombre}!</h1>
//             <p>Tienes {edad} años.</p>
//         </div>
//     );
// };



// const Contador: React.FC = () => {
//     const [contador, setContador] = useState<number>(0);  // Tipado del estado

//     const incrementar = () => setContador(contador + 1);

//     return (
//         <div>
//             <h1>Contador: {contador}</h1>
//             <button onClick={incrementar}>Incrementar</button>
//         </div>
//     );
// };



// type BotonProps = {
//     label?: string;  // `label` es opcional
// };

// const Boton: React.FC<BotonProps> = ({ label = "Click me" }) => {
//     return <button>{label}</button>;
// };

// export default Boton;





