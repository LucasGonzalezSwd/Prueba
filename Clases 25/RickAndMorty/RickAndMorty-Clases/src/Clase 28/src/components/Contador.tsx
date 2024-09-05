import { useState } from 'react'

export const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(0) // Tipado del estado

  const incrementar = (): void => { setContador(contador + 1) }

  return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
  )
}
