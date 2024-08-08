import React, { useEffect, useState } from 'react'
import ProductData from "../utilities/stock.json"
import {ProductList} from "./ProductList"
import "../App.css";


export const Tienda = () => {

  const [productos, setProductos] = useState([])
 console.log(productos)
  useEffect(()=>{
    setProductos(ProductData)
    
  },[productos])
  
  console.log(productos)
  return (
    <div className='App'>
       <h1>Lista de productos</h1>
       <ProductList productos={productos}/>
    </div>
  )
}
