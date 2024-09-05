// Definir las props con `interface`
interface SaludoProps {
  nombre: string
  edad: number
}

const Saludo: React.FC<SaludoProps> = ({ nombre, edad }) => {
  return (
        <div>
            <h1>Hola, {nombre}!</h1>
            <p>Tienes {edad} años.</p>
        </div>
  )
}

export default Saludo
