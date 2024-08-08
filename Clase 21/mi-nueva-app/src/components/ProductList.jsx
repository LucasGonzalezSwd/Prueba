import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = ({productos}) => {
  return (
    
    <div className='product-list'>

       {productos.map((producto) => (

         <ProductCard key={producto.id} producto={producto}/>

       ))}

    </div>
  )
}
