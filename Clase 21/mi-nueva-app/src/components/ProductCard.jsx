import React from 'react'

export const ProductCard = ({producto}) => {
  return (

    <div className='product-card'>

     <img src={producto.imagen} alt="" />
     <h2>{producto.nombre}</h2>
     <p>{producto.descripcion}</p>
     <p>Precio: ${producto.precio}</p>

    </div>
  )
}
